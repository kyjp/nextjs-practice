import BackLink from "@/components/ui/BackLink"
import MyProductDetailContainer from "@/features/product/components/ProductDetail/MyProductDetailContainer"
import { pathParamIdSchema } from "@/schemas"
import { notFound } from "next/navigation"
import React from "react"

type PropsType = {
  params: Promise<{ id: string }>
}

const UserProductDetailPage = async ({ params }: PropsType) => {
  const { id } = await params

  const validation = pathParamIdSchema.safeParse(id)

  if (!validation.success) {
    return notFound()
  }

  return (
    <div>
      <BackLink text="マイページに戻る" href="/mypage" />
      <MyProductDetailContainer id={validation.data} />
    </div>
  )
}

export default UserProductDetailPage
