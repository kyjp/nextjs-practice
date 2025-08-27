"use server"

import { authedClient } from "@/lib/safe-action"
import prisma from "@/lib/prisma"
import { productUpdateFormValuesSchema } from "../schemas"
import { uploadImageToS3 } from "@/lib/s3"
import { Prisma } from "@prisma/client"

export const updateProduct = authedClient
  .schema(productUpdateFormValuesSchema)
  .action(
    async ({
      parsedInput: { id, title, description, price, stock, image },
      ctx: { userId },
    }) => {
      try {
        const product = await prisma.product.findUnique({
          where: {
            id,
            userId,
          },
        })
        if (product == null) {
          return {
            success: false,
            message: "対象の商品が見つかりません",
          }
        }
        const data: Prisma.ProductUpdateInput = {
          title,
          description,
          price,
          stock,
        }
        if (image != null) {
          const imageUrl = await uploadImageToS3(image, "products")
          data.imageUrl = imageUrl
        }
        await prisma.product.update({
          where: {
            id,
          },
          data,
        })
        return {
          id,
          success: true,
          message: "商品を編集しました",
        }
      } catch (err) {
        console.error(err)
        return {
          success: false,
          message: "諸品の編集に失敗しました",
        }
      }
    }
  )
