const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all services
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;

    let query = 'SELECT * FROM services';
    const params = [];

    if (category) {
      query += ' WHERE category = $1';
      params.push(category);
    }

    query += ' ORDER BY display_order ASC';

    const result = await db.query(query, params);

    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get services grouped by category
router.get('/grouped', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM services ORDER BY display_order ASC'
    );

    // Group by category
    const grouped = result.rows.reduce((acc, service) => {
      const category = service.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {});

    res.json({ success: true, data: grouped });
  } catch (error) {
    console.error('Error fetching grouped services:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
