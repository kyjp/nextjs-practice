import React from "react"
import { notFound } from "next/navigation"
import ProductDetailPresentation from "./Presentation"
import { getProductById } from "../../queries/getProductById"
import { getCurrentUser } from "@/lib/session"

type PropsType = {
  id: number
}

const MyProductDetailContainer = async ({ id }: PropsType) => {
  const product = await getProductById(id)
  const { userId } = await getCurrentUser()

  if (product == null) {
    return notFound()
  }

  return (
    <ProductDetailPresentation
      product={product}
      isOwnProduct={product.userId === userId}
    />
  )
}

export default MyProductDetailContainer
