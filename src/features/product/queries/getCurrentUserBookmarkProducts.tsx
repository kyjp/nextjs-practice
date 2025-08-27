import prisma from "@/lib/prisma"
import { withUserId } from "@/lib/query-hanler"

export const getCurrentUserBookmarkProducts = withUserId(
  async (userId: number) => {
    return prisma.product.findMany({
      where: {
        bookmarks: {
          some: {
            userId,
          },
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
  },
  "商品一覧取得エラー"
)
