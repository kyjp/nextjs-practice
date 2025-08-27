import SectionTitle from "@/components/layouts/SectionTitle"
import { Button } from "@/components/ui/button"
import MyProductListContainer from "@/features/product/components/ProductList/MyProductListContainer"
import { Plus } from "lucide-react"
import Link from "next/link"
import React from "react"

export const dynamic = "force-dynamic"

const MyPage = () => {
  return (
    <div>
      <SectionTitle title="自分の商品一覧">
        <Link href="/mypage/products/new">
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            商品を登録する
          </Button>
        </Link>
      </SectionTitle>
      <MyProductListContainer />
    </div>
  )
}

export default MyPage
