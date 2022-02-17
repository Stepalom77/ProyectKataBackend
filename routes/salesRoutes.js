const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');


router.post('/sales', (salesController.createSales));
router.get('/sales', (salesController.findAllSales));
router.get('/sales/:idSales', (salesController.findOneSale));
router.patch('/sales/:idSales', (salesController.updateOneSale));
router.put('/sales/:idSales', (salesController.modifyOneSale));
router.delete('/sales/:idSales', (salesController.softDeleteOneSale));
router.delete('/sales/destroy/:idSales', (salesController.destroyOneSale));


module.exports = router;