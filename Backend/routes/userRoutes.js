const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


  
  router.put('/updateKYCStatus/:id', userController.updateKYCStatus);
  router.put('/updateSIMMintStatus/:id', userController.updateMintStatus);
  router.post('/purchase-esim/:id', userController.purchaseEsim);
  router.post('/adduser', userController.adduser);


  module.exports = router;
