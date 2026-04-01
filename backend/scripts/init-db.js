const fs = require('fs');
const path = require('path');
const { pool } = require('../config/database');

async function initializeDatabase() {
  try {
    console.log('Reading schema file...');
    const schemaPath = path.join(__dirname, '../../supabase-schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');

    console.log('Executing schema SQL...');
    await pool.query(schemaSql);
    console.log('Database schema created successfully.');

    // Optional: Seed data if you have a separate seed file
    try {
      const seedPath = path.join(__dirname, '../../supabase-seed-projects.sql');
      if (fs.existsSync(seedPath)) {
        console.log('Reading seed file...');
        const seedSql = fs.readFileSync(seedPath, 'utf8');
        console.log('Executing seed SQL...');
        await pool.query(seedSql);
        console.log('Database seeded successfully.');
      }
    } catch (seedErr) {
      console.warn('Note: Seed file execution failed or skipped:', seedErr.message);
    }

    process.exit(0);
  } catch (err) {
    console.error('Error initializing database:', err);
    process.exit(1);
  }
}

initializeDatabase();
