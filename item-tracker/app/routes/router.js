import express from 'express';
import { db, initializeDatabase  } from '../../db/db.js';

const router = express.Router();

initializeDatabase();

router.get('/:keyword', (req, res) => {
  const keyword = req.params.keyword;

  db.all('SELECT * FROM items WHERE name LIKE ?', [`%${keyword}%`], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ items: rows });
  });
});

export { router };