const express = require('express');
const router = express.Router();
const prisma = require('@prisma/client');

router.get('/available-plans', async (req, res) => {
  try {
    const plans = await prisma.esimPlan.findMany();
    res.json(plans);
  } catch (err) {
    console.error('Error fetching plans', err);
    res.status(500).json({ error: 'Failed to fetch plans' });
  }
});

module.exports = router;
