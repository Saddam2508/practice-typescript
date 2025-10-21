const { PrismaClient } = require("@prisma/client");
const logger = require("../controllers/loggerController");

const prisma = new PrismaClient();

const connectDatabase = async () => {
  try {
    await prisma.$connect();
    logger.log("info", "Connected to PostgreSQL!");
  } catch (error) {
    logger.log("error", "Could not connect to PostgreSQL:", error.message);
  }
};

module.exports = { prisma, connectDatabase };
