import BackLink from "@/components/ui/BackLink"
import ProductDetailContainer from "@/features/product/components/ProductDetail/ProductDetailContainer"
import { pathParamIdSchema } from "@/schemas"
import { notFound } from "next/navigation"
import React from "react"

type PropsType = {
  params: Promise<{ id: string }>
}

const ProductDetailPage = async ({ params }: PropsType) => {
  const { id } = await params

  const validation = pathParamIdSchema.safeParse(id)

  if (!validation.success) {
    return notFound()
  }

  return (
    <div>
      <BackLink text="マイページに戻る" href="/mypage" />
      <ProductDetailContainer id={validation.data} />
    </div>
  )
}

export default ProductDetailPage
