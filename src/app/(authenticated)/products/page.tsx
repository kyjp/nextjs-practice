import SectionTitle from "@/components/layouts/SectionTitle"
import BookmarkProductListContainer from "@/features/product/components/ProductList/BookmarkProductListContainer"
import OtherUserProductListContainer from "@/features/product/components/ProductList/OtherUserProductListContainer"
import React from "react"

export const dynamic = "force-dynamic"

const ProductsPage = () => {
  return (
    <>
      <SectionTitle title="商品一覧" />
      <OtherUserProductListContainer />
      <SectionTitle title="ブックマークした商品一覧" />
      <BookmarkProductListContainer />
    </>
  )
}

export default ProductsPage
