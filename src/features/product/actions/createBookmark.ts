"use server"

import { authedClient } from "@/lib/safe-action"
import prisma from "@/lib/prisma"
import { bookmarkFormValuesSchema } from "../schemas"

export const createBookmark = authedClient
  .schema(bookmarkFormValuesSchema)
  .action(async ({ parsedInput: { productId }, ctx: { userId } }) => {
    try {
      const existingBookmark = await prisma.bookmark.findUnique({
        where: {
          userId_productId: {
            userId,
            productId,
          },
        },
      })

      if (existingBookmark != null) {
        return {
          success: false,
          message: "すでにブックマークしています",
        }
      }

      await prisma.bookmark.create({
        data: {
          productId,
          userId,
        },
      })
      return {
        success: true,
        message: "ブックマークしました",
      }
    } catch (err) {
      console.error(err)
      return {
        success: false,
        message: "ブックマークに失敗しました",
      }
    }
  })
