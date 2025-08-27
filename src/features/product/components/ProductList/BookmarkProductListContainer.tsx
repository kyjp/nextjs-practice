import React from "react"
import ProductListPresentation from "./Presentation"
import { getCurrentUserBookmarkProducts } from "../../queries/getCurrentUserBookmarkProducts"

const BookmarkProductListContainer = async () => {
  const products = await getCurrentUserBookmarkProducts()

  return (
    <ProductListPresentation
      products={products}
      detailBasePath="/mypage/products"
    />
  )
}

export default BookmarkProductListContainer
