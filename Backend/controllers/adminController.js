const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const logger = require('../utils/loggers');

exports.getPlans = async (req, res) => {
  try {
    const plans = await prisma.esimPlan.findMany();
    res.json(plans);
  } catch (err) {
    logger.error('Error fetching plans', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addPlan = async (req, res) => {
  try {
    const { plan_name, price, data_limit, validity, description,plan_type } = req.body;

    const newPlan = await prisma.esimPlan.create({
      data: {
        plan_name,
        price,
        data_limit,
        validity,
        description,
        plan_type,
      },
    });

    res.status(201).json(newPlan);
  } catch (err) {
    logger.error('Error adding plan:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.editPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { plan_name, price, data_limit, validity, description ,plan_type} = req.body;

    const updatedPlan = await prisma.esimPlan.update({
      where: { id },
      data: {
        plan_name,
        price,
        data_limit,
        validity,
        description,
        plan_type,
      },
    });

    res.status(200).json(updatedPlan);
  } catch (err) {
    logger.error('Error editing plan:', err);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.deletePlan = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting plan with ID:", id);
    await prisma.esimPlan.delete({ where: { id: String(id) } });
    res.status(204).send();
  } catch (err) {
    logger.error('Error deleting plan', err);
    res.status(500).json({ error: 'Server error' });
  }
};
