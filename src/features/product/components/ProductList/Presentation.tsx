import { ProductWithUser } from "@/types"
import React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { formatPrice } from "@/lib/number"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"

type PropsType = {
  products: ProductWithUser[]
  detailBasePath: "/mypage/products" | "/products"
}

const ProductListPresentation = ({ products, detailBasePath }: PropsType) => {
  if (products.length === 0) {
    return <p className="py-10 text-center">商品がありません</p>
  }
  return (
    <Carousel>
      <CarouselContent className="p-4">
        {products.map((product) => (
          <CarouselItem key={product.id} className="basis-1/3">
            <div className="p-1">
              <Card className="transition-transform hover:scale-105">
                <CardHeader className="p-4">
                  <Link
                    href={`${detailBasePath}/${product.id}`}
                    className="block"
                  >
                    <CardTitle className="line-clamp-1">
                      {product.title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Link
                    href={`${detailBasePath}/${product.id}`}
                    className="block"
                  >
                    <div className="relative aspect-square w-full overflow-hidden rounded-md">
                      <Image
                        src={product.imageUrl ?? "/no-image.png"}
                        fill
                        sizes="100vh"
                        className="object-cover"
                        alt={product.title}
                      />
                    </div>
                  </Link>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    <Link
                      href={`${detailBasePath}/${product.id}`}
                      className="block"
                    >
                      {product.description}
                    </Link>
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 p-4 pt-0">
                  <div className="flex w-full items-center justify-between">
                    <p className="font-bold">{formatPrice(product.price)}</p>
                    <p className="text-sm text-muted-foreground">
                      在庫: {product.stock}
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-between border-t pt-2">
                    <Link
                      href={`/users/${product.user.id}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:underline"
                    >
                      <Avatar className="size-8">
                        <AvatarImage
                          src={product.user.imageUrl ?? undefined}
                          alt="ユーザー画像"
                        />
                        <AvatarFallback>
                          <User size={32} />
                        </AvatarFallback>
                      </Avatar>
                      <span>{product.user.name}</span>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default ProductListPresentation
