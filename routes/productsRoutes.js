const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.post('/products', (productsController.createProducts));
router.get('/products', (productsController.findAllProducts));
router.get('/products/:idProducts', (productsController.findOneProduct));
router.patch('/products/:idProducts', (productsController.updateOneProduct));
router.put('/products/:idProducts', (productsController.modifyOneProduct));
router.delete('/products/:idProducts', (productsController.softDeleteOneProduct));
router.delete('/products/destroy/:idProducts', (productsController.destroyOneProduct));


module.exports = router;