const express = require('express');

const router = express.Router();

const shopController = require ('../controllers/product');

router.get('/', shopController.getShop);

module.exports = router;
