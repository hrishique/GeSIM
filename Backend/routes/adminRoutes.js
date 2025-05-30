const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// (Optional) Use middleware for auth
router.get('/plans', adminController.getPlans);
router.post('/plans', adminController.addPlan);
router.put('/edit-plan/:id', adminController.editPlan);
router.delete('/plans/:id', adminController.deletePlan);

module.exports = router;
