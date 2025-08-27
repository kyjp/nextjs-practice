import React from "react"
import { getIsProductBookmarked } from "../../queries/getIsProductBookmarked"
import BookmarkButtonPresentation from "./Presentation"

type PropsType = {
  productId: number
}

const BookmarkButtonContainer = async ({ productId }: PropsType) => {
  const isBookmarked = await getIsProductBookmarked(productId)
  return (
    <BookmarkButtonPresentation
      isBookmarked={isBookmarked}
      productId={productId}
    />
  )
}

export default BookmarkButtonContainer
