const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      wallet: 'YourDemoWalletAddress',
      kycStatus: 'VERIFIED',
    },
  });

  console.log('🌱 Seed data created');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
