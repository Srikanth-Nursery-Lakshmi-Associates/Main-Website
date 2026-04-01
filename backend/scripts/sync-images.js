const fs = require('fs');
const path = require('path');
const { pool } = require('../config/database');

// Character mapping for macOS narrow no-break space if needed
const NARROW_NO_BREAK_SPACE = '\u202f';

async function syncImages() {
  try {
    const imagesBasePath = path.join(__dirname, '../../frontend/public/images');
    
    // 1. Get all projects
    const { rows: projects } = await pool.query('SELECT * FROM projects');
    console.log(`Found ${projects.length} projects to sync.`);

    for (const project of projects) {
      if (!project.image_folder) {
        console.log(`Skipping project ${project.title} - no image_folder defined.`);
        continue;
      }

      const folderPath = path.join(imagesBasePath, project.image_folder);
      
      if (!fs.existsSync(folderPath)) {
        console.warn(`Warning: Folder not found for ${project.title}: ${folderPath}`);
        continue;
      }

      // 2. Scan folder for images
      const files = fs.readdirSync(folderPath).filter(file => 
        ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())
      );

      if (files.length === 0) {
        console.warn(`Warning: No images found in folder: ${folderPath}`);
        continue;
      }

      console.log(`Project: ${project.title} | Folder: ${project.image_folder} | Images found: ${files.length}`);

      // 3. Update thumbnail_url (use the first image)
      const firstImagePath = `/images/${project.image_folder}/${files[0]}`;
      await pool.query(
        'UPDATE projects SET thumbnail_url = $1 WHERE id = $2',
        [firstImagePath, project.id]
      );

      // 4. Update project_images table
      // Clear existing images for this project first (optional, but ensures sync)
      await pool.query('DELETE FROM project_images WHERE project_id = $1', [project.id]);

      for (let i = 0; i < files.length; i++) {
        const imgPath = `/images/${project.image_folder}/${files[i]}`;
        await pool.query(
          'INSERT INTO project_images (project_id, image_url, display_order) VALUES ($1, $2, $3)',
          [project.id, imgPath, i + 1]
        );
      }
    }

    // 5. Update services images as well
    const { rows: services } = await pool.query('SELECT * FROM services');
    const otherImagesPath = path.join(imagesBasePath, 'Other images');
    
    if (fs.existsSync(otherImagesPath)) {
      const otherFiles = fs.readdirSync(otherImagesPath);
      for (const service of services) {
        // Try to match service image_url if it exists or needs fixing
        if (service.image_url) {
          const filename = path.basename(service.image_url);
          // Look for a case-insensitive match or similar in Other images
          const matchedFile = otherFiles.find(f => f.toLowerCase() === filename.toLowerCase());
          if (matchedFile) {
            const newPath = `/images/Other images/${matchedFile}`;
            await pool.query('UPDATE services SET image_url = $1 WHERE id = $2', [newPath, service.id]);
          }
        }
      }
    }

    console.log('Image sync completed successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Error syncing images:', err);
    process.exit(1);
  }
}

syncImages();
