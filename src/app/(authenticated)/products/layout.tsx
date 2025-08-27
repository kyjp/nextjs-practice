import React, { ReactNode } from "react"

type PropsType = {
  children: ReactNode
}

const ProductLayout = ({ children }: PropsType) => {
  return (
    <div className="flex justify-between">
      <div className="w-8/12">{children}</div>
      <div className="w-3/12"></div>
    </div>
  )
}

export default ProductLayout
