import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStatus = async (): Promise<string> => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return "Server is running and db is connected";
  } catch (error) {
    return "Server is running but db connection failed";
  }
};
