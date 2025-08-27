import React from "react"
import { getCurrentUserProducts } from "../../queries/getCurrentUserProducts"
import ProductListPresentation from "./Presentation"

const MyProductListContainer = async () => {
  const products = await getCurrentUserProducts()

  return (
    <ProductListPresentation
      products={products}
      detailBasePath="/mypage/products"
    />
  )
}

export default MyProductListContainer
