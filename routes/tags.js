const express = require('express');
const tags = require('../data/tags');

const router = express.Router();


// Get a list of comments
router.get('/', (req, res) => {
    res.json(tags);
  });

module.exports = router;