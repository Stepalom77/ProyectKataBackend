const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');


router.post('/customers', (customersController.createCustomers));
router.get('/customers', (customersController.findAllCustomers));
router.get('/customers/:idCustomers', (customersController.findOneCustomer));
router.patch('/customers/:idCustomers', (customersController.updateOneCustomer));
router.put('/customers/:idCustomers', (customersController.modifyOneCustomer));
router.delete('/customers/:idCustomers', (customersController.softDeleteOneCustomer));
router.delete('/customers/destroy/:idCustomers', (customersController.destroyOneCustomer));


module.exports = router;