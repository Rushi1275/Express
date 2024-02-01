const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/success', (req, res, next) => {
    res.send('<h1>Form successfully filled!</h1>');
  });
  


module.exports = router;