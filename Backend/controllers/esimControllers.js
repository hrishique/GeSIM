const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
//const { activateEsim } = require('../services/mnoIntegration');

exports.getEsimStatus = async (req, res, next) => {
  try {
    const { wallet } = req.params;
    const user = await prisma.user.findUnique({
      where: { wallet },
      include: { esimDetails: true },
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user.esimDetails);
  } catch (err) {
    next(err);
  }
};

exports.buyEsim = async (req, res, next) => {
  try {
    const { wallet, planId, transactionHash } = req.body;

    const user = await prisma.user.upsert({
      where: { wallet },
      update: {},
      create: { wallet, kycStatus: "PENDING" },
    });

    const esim = await prisma.esim.create({
      data: {
        userId: user.id,
        planId,
        status: 'PURCHASED',
        transactionHash,
      },
    });

   // const mnoResponse = await activateEsim(planId);
    await prisma.esim.update({
      where: { id: esim.id },
      data: {
        status: 'ACTIVATED',
        activatedAt: new Date(),
        mnoResponse,
      },
    });

    res.status(200).json({ message: "eSIM activated", esim });
  } catch (err) {
    next(err);
  }
};
