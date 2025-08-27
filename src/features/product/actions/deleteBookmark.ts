"use server"

import { authedClient } from "@/lib/safe-action"
import prisma from "@/lib/prisma"
import { bookmarkFormValuesSchema } from "../schemas"

export const deleteBookmark = authedClient
  .schema(bookmarkFormValuesSchema)
  .action(async ({ parsedInput: { productId }, ctx: { userId } }) => {
    try {
      const bookmark = await prisma.bookmark.findUnique({
        where: {
          userId_productId: {
            userId,
            productId,
          },
        },
      })

      if (bookmark == null) {
        return {
          success: false,
          message: "ブックマークが存在しません",
        }
      }

      await prisma.bookmark.delete({
        where: {
          id: bookmark.id,
        },
      })
      return {
        success: true,
        message: "ブックマークを解除しました",
      }
    } catch (err) {
      console.error(err)
      return {
        success: false,
        message: "ブックマークの解除に失敗しました",
      }
    }
  })
