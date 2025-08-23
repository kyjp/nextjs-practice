"use server";

import z from "zod";
import prisma from "../../lib/prisma";

const createUserSchema = z.object({
  name: z.string().min(1).max(30),
  email: z.string().email().max(30),
  password: z.string().min(8).max(100),
});

type CreateUserData = z.infer<typeof createUserSchema>;

export const createUserAction = async (data: CreateUserData) => {
  const validation = createUserSchema.safeParse(data);
  if (!validation.success) {
    throw validation.error;
  }

  const { name, email, password } = validation.data;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return user;
};

export const createUserActionFromServerAction = async (formData: FormData) => {
  const userData = Object.fromEntries(formData);
  const validation = createUserSchema.safeParse(userData);
  if (!validation.success) {
    throw new Error("Invalid user data");
  }
  const { name, email, password } = validation.data;

  await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
};
