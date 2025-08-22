import { Prisma } from "@/generated/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "テストユーザー",
    email: "test@example.com",
    password: "password123",
  },
  {
    name: "テストユーザー2",
    email: "test2@example.com",
    password: "password123",
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({
      data: u,
    });
  }
}

main();
