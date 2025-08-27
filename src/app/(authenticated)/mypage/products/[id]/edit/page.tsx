import BackLink from "@/components/ui/BackLink"
import UpdateProductFormContainer from "@/features/product/components/ProductForm/EditProductFormContainer"
import ProductFormCardLayout from "@/features/product/components/ProductFormCardLayout"
import { pathParamIdSchema } from "@/schemas"
import { notFound } from "next/navigation"
import React from "react"

type PropsType = {
  params: Promise<{ id: string }>
}

const UserProductEditPage = async ({ params }: PropsType) => {
  const { id } = await params

  const validation = pathParamIdSchema.safeParse(id)

  if (!validation.success) {
    return notFound()
  }

  return (
    <>
      <BackLink
        text="商品詳細に戻る"
        href={`/mypage/products/${validation.data}`}
      />
      <ProductFormCardLayout title="商品編集" description="商品を編集します">
        <UpdateProductFormContainer id={validation.data} />
      </ProductFormCardLayout>
    </>
  )
}

export default UserProductEditPage
