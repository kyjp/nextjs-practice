"use server"

import { authedClient } from "@/lib/safe-action"
import prisma from "@/lib/prisma"
import { productCreateFormValuesSchema } from "../schemas"
import { uploadImageToS3 } from "@/lib/s3"

export const createProduct = authedClient
  .schema(productCreateFormValuesSchema)
  .action(
    async ({
      parsedInput: { title, description, price, stock, image },
      ctx: { userId },
    }) => {
      try {
        let imageUrl: string | undefined
        if (image != null) {
          imageUrl = await uploadImageToS3(image, "products")
        }
        const product = await prisma.product.create({
          data: {
            title,
            description,
            price,
            stock,
            imageUrl,
            userId,
          },
        })
        return {
          id: product.id,
          success: true,
          message: "商品を作成しました",
        }
      } catch (err) {
        console.error(err)
        return {
          success: false,
          message: "諸品の作成に失敗しました",
        }
      }
    }
  )
