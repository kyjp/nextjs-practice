import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

type prismaClientWithExtensions = ReturnType<typeof createPrismaClient>;

const createPrismaClient = () => {
  const prisma = new PrismaClient().$extends(withAccelerate());
  return prisma;
};

const globalForPrisma = global as unknown as {
  prisma: prismaClientWithExtensions;
};

const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV === "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
