const path = require('path');

const express = require('express');
const { getProducts, postProduct, contactFunc, successFunc } = require('../controller/productCont');

// const rootDir = require('../utils/path.js'); // not working

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', getProducts);

// /admin/add-product => POST
router.post('/add-product', postProduct);

router.get('/contactus',contactFunc)

router.post('/success',successFunc)

module.exports = router;
