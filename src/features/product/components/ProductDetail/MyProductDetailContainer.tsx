import React from "react"
import { notFound } from "next/navigation"
import ProductDetailPresentation from "./Presentation"
import { getCurrentUserProductWitUserById } from "../../queries/getCurrentUserProductWitUserById"

type PropsType = {
  id: number
}

const MyProductDetailContainer = async ({ id }: PropsType) => {
  const product = await getCurrentUserProductWitUserById(id)

  if (product == null) {
    return notFound()
  }

  return <ProductDetailPresentation product={product} isOwnProduct={true} />
}

export default MyProductDetailContainer
