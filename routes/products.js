var express = require('express');
var router = express.Router();
const ProductController = require('../controllers/ProductControllers');

router.post('/', ProductController.insertProduct);
router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProductById);


module.exports = router;