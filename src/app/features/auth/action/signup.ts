import { actionClient } from "@/lib/safe-action";
import { UserOptionalDefaultSchema } from "../../../../../prisma/generated/zod/modelSchema/UserSchema";
import prisma from "@/lib/prisma";

export const signup = actionClient
  .schema(UserOptionalDefaultSchema)
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
      console.error("Error creating user:", error);
      return {
        success: false,
        message: "ユーザーの作成に失敗しました。",
      };
    }
    return {
      success: true,
      message: "ユーザーを作成しました。",
    };
  });
