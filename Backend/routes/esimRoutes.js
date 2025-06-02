const express = require('express');
const router = express.Router();
const esimController = require('../controllers/esimControllers');

router.get('/esim-status/:wallet', esimController.getEsimStatus);
router.post('/buy-esim', esimController.buyEsim);

module.exports = router;
