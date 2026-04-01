const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all clients
router.get('/', async (req, res) => {
  try {
    const { type } = req.query;

    let query = 'SELECT * FROM clients';
    const params = [];

    if (type) {
      query += ' WHERE type = $1';
      params.push(type);
    }

    query += ' ORDER BY display_order ASC';

    const result = await db.query(query, params);

    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
