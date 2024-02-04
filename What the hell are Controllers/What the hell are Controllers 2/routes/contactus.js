const express = require('express');


const router = express.Router();

const contactUsController = require ('../controllers/contactus');

router.get('/contactus',contactUsController.getContact);

router.post('/contactus', contactUsController.postContact);

module.exports = router;
