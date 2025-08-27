import prisma from "@/lib/prisma"
import { withUserId } from "@/lib/query-hanler"

export const getOtherUserProducts = withUserId(async (userId: number) => {
  return prisma.product.findMany({
    where: {
      userId: {
        not: userId,
      },
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
}, "商品一覧取得エラー")
