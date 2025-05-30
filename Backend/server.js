const app = require('./app');
const { PrismaClient } = require('@prisma/client');
const startListener = require('./services/solanaListeners');

const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  startListener(); // Solana listener starts here
});

