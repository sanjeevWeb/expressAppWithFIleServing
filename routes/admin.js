const path = require('path');

const express = require('express');

// const rootDir = require('../utils/path.js'); // not working

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

router.get('/contactus',(req,res) => {
  res.sendFile(path.join(__dirname,'../','views','contact.html'));
})

router.post('/success',(req,res) => {
  res.send('Form successfuly filled');
})

module.exports = router;
