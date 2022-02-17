const express = require('express');
const router = express.Router();
const storesController = require('../controllers/storesController');


router.post('/stores', (storesController.createStores));
router.get('/stores', (storesController.findAllStores));
router.get('/stores/:idStores', (storesController.findOneStore));
router.patch('/stores/:idStores', (storesController.updateOneStore));
router.put('/stores/:idStores', (storesController.modifyOneStore));
router.delete('/stores/:idStores', (storesController.softDeleteOneStore));
router.delete('/stores/destroy/:idStores', (storesController.destroyOneStore));


module.exports = router;