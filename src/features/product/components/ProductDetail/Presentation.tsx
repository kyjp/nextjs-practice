import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/number"
import { ProductWithUser } from "@/types"
import { Edit, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import BookmarkButtonContainer from "../BookmarkButton/Container"

type PropsType = {
  product: ProductWithUser
  isOwnProduct: boolean
}

const ProductDetailPresentation = ({ product, isOwnProduct }: PropsType) => {
  const { id, title, description, price, stock, imageUrl, user } = product

  const { name, imageUrl: userImageUrl } = user
  return (
    <div className="flex gap-8">
      <div className="relative aspect-square w-full flex-1">
        <Image
          src={imageUrl ?? "/no-image.png"}
          alt="商品画像"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex-1 space-y-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
            {isOwnProduct ? (
              <Link href={`/mypage/products/${id}/edit`}>
                <Button variant="ghost" size="icon">
                  <Edit size={16} />
                </Button>
              </Link>
            ) : (
              <BookmarkButtonContainer productId={id} />
            )}
          </div>
          <p className="text-xl font-bold text-primary">{formatPrice(price)}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">在庫数:</span>
            <span className="font-medium">{stock}</span>
          </div>
          {stock === 0 && (
            <p className="font-medium text-destructive">在庫切れ</p>
          )}
        </div>

        <div className="space-y-4 border-t pt-4">
          <h2 className="font-bold">商品説明</h2>
          <p className="whitespace-pre-wrap">{description}</p>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center gap-2">
            <Avatar className="size-8">
              <AvatarImage src={userImageUrl ?? undefined} alt="ユーザー画像" />
              <AvatarFallback>
                <User size={32} />
              </AvatarFallback>
            </Avatar>
            <span className="font-medium">{name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPresentation
