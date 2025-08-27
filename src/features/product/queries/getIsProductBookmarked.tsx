import prisma from "@/lib/prisma"
import { withUserId } from "@/lib/query-hanler"

export const getIsProductBookmarked = withUserId(
  async (userId: number, id: number) => {
    const product = await prisma.bookmark.findUnique({
      where: {
        userId_productId: {
          userId,
          productId: id,
        },
      },
    })
    return product != null
  },
  "商品取得エラー"
)
