import prisma from "@/lib/prisma"
import { withErrorHandling } from "@/lib/query-hanler"

export const getProductById = withErrorHandling(async (id: number) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          imageUrl: true,
        },
      },
    },
  })
}, "商品取得エラー")
