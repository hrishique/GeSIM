const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const logger = require('../utils/loggers');

exports.updateKYCStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { kycStatus} = req.body;
  
      const updatedPlan = await prisma.user.update({
        where: { id },
        data: {
            kycStatus
        },
      });
  
      res.status(200).json(updatedPlan);
    } catch (err) {
      logger.error('Error editing plan:', err);
      res.status(500).json({ error: 'Server error' });
    }
  };

  exports.updateMintStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { esimMintStatus} = req.body;
  
      const updatedPlan = await prisma.user.update({
        where: { id },
        data: {
            esimMintStatus
        },
      });
  
      res.status(200).json(updatedPlan);
    } catch (err) {
      logger.error('Error editing plan:', err);
      res.status(500).json({ error: 'Server error' });
    }
  };

  exports.userDetails = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Fetching details for user with ID:", id);
      const plans = await prisma.user.findFirst
      res.json(plans);
    } catch (err) {
      logger.error('Error fetching plans', err);
      res.status(500).json({ error: 'Server error' });
    }
  };

  exports.purchaseEsim = async (req, res) => {
    try {
      const { id } = req.params; // or req.body.id depending on your route
  
      // Fetch user by ID
      const user = await prisma.user.findUnique({
        where: { id: String(id) }
      });
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Check esimMintStatus
      if (!user.esimMintStatus) {
        return res.status(400).json({ error: "User has not minted an eSIM yet" });
      }
  
      // Check kycStatus
      if (!user.kycStatus) {
        return res.status(400).json({ error: "KYC not completed" });
      }
  
      // ✅ All checks passed — proceed to purchase logic
      // Example: update a flag, create a record, etc.
      // await prisma.purchase.create({ data: { userId: id, ... } });
  
      return res.status(200).json({ message: "eSIM purchase successful!" });
  
    } catch (error) {
      console.error("Error purchasing eSIM:", error);
      res.status(500).json({ error: "Server error" });
    }
  };

  exports.adduser = async (req, res) => {
    try {
      const { mailid,wallet} = req.body;
  
      const newUser = await prisma.user.create({
        data: {
          mailid,
          wallet,
        },
      });
  
      res.status(201).json(newUser);
    } catch (err) {
      logger.error('Error adding plan:', err);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  