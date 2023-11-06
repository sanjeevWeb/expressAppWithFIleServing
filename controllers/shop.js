const path = require('path');

const express = require('express');
const { shopFunc } = require('../controller/productCont');

// const rootDir = require('../util/path'); //not working

const router = express.Router();

router.get('/', shopFunc);

module.exports = router;
