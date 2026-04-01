const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all projects
router.get('/', async (req, res) => {
  try {
    const { type, featured, status } = req.query;

    let query = 'SELECT * FROM projects WHERE 1=1';
    const params = [];
    let paramIndex = 1;

    if (type) {
      query += ` AND type = $${paramIndex}`;
      params.push(type);
      paramIndex++;
    }

    if (featured === 'true') {
      query += ` AND is_featured = true`;
    }

    if (status) {
      query += ` AND status = $${paramIndex}`;
      params.push(status);
      paramIndex++;
    }

    query += ' ORDER BY created_at DESC';

    const result = await db.query(query, params);

    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get single project by slug with species and images
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    // Fetch project
    const projectResult = await db.query(
      'SELECT * FROM projects WHERE slug = $1',
      [slug]
    );

    if (projectResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }

    const project = projectResult.rows[0];

    // Fetch project species
    const speciesResult = await db.query(
      'SELECT * FROM project_species WHERE project_id = $1 ORDER BY category ASC',
      [project.id]
    );

    // Fetch project images
    const imagesResult = await db.query(
      'SELECT * FROM project_images WHERE project_id = $1 ORDER BY display_order ASC',
      [project.id]
    );

    // Group species by category
    const groupedSpecies = speciesResult.rows.reduce((acc, sp) => {
      const category = sp.category || 'other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(sp.species_name);
      return acc;
    }, {});

    res.json({
      success: true,
      data: {
        ...project,
        species: groupedSpecies,
        images: imagesResult.rows
      }
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
