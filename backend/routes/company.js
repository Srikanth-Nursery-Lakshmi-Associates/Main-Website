const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get company information
router.get('/info', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM company_info LIMIT 1');

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Company info not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error fetching company info:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get contact information
router.get('/contact', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM contact_info ORDER BY is_primary DESC'
    );

    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching contact info:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
