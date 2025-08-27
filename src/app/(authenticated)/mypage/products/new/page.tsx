import BackLink from "@/components/ui/BackLink"
import CreateProductFormContainer from "@/features/product/components/ProductForm/CreateProductFormContainer"
import ProductFormCardLayout from "@/features/product/components/ProductFormCardLayout"
import React from "react"

const ProductCreatePage = () => {
  return (
    <>
      <BackLink text="マイページに戻る" href="/mypage" />
      <ProductFormCardLayout title="商品登録" description="商品を登録します">
        <CreateProductFormContainer />
      </ProductFormCardLayout>
    </>
  )
}

export default ProductCreatePage
