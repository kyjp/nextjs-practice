"use server";

import z from "zod";
import prisma from "../lib/prisma";
import { actionClient } from "../lib/safe-action";

export type CreateUserResult = {
  success: boolean;
  message: string;
};

const createUserSchema = z.object({
  name: z.string().min(1).max(30),
  email: z.string().email().max(30),
  password: z.string().min(8).max(100),
});

type CreateUserData = z.infer<typeof createUserSchema>;

// export const createUserAction = async (data: CreateUserData): Promise<CreateUserResult> => {
//   const validation = createUserSchema.safeParse(data);
//   if (!validation.success) {
//     console.error(validation.error);
//     return {
//       success: false,
//       message: "Invalid user data",
//     };
//   }

//   const { name, email, password } = validation.data;

//   try {
//     await prisma.user.create({
//       data: {
//         name,
//         email,
//         password,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     return {
//       success: false,
//       message: "Failed to create user",
//     };
//   }

//   return {
//     success: true,
//     message: `User ${name} created successfully`,
//   };
// };

export const createUserAction = actionClient
  .schema(createUserSchema)
  .action(async ({ parsedInput: { name, email, password } }) => {
    try {
      await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Failed to create user",
      };
    }

    return {
      success: true,
      message: `User ${name} created successfully`,
    };
  });

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
