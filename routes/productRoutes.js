const express = require('express');
const router = express.Router();
const {
  createProducts,
  getAllProducts,
} = require('../controllers/productController');
const { uploadProductImageLocal } = require('../controllers/uploadsController');

router.route('/').post(createProducts).get(getAllProducts);
router.route('/uploads').post(uploadProductImageLocal);

module.exports = router;
