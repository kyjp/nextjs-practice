import React from "react"
import { getOtherUserProducts } from "../../queries/getOtherUserProducts"
import ProductListPresentation from "./Presentation"

const OtherUserProductListContainer = async () => {
  const products = await getOtherUserProducts()

  return (
    <ProductListPresentation products={products} detailBasePath="/products" />
  )
}

export default OtherUserProductListContainer
