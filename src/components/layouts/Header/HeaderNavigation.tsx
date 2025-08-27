"use client"

import Link from "next/link"
import React, { ReactNode } from "react"

import { ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

type PropsType = {
  children: ReactNode
}

const HeaderNavigation = ({ children }: PropsType) => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path)
  }
  return (
    <div className="flex items-center gap-2">
      <Link
        className={cn(
          "text-sm text-gray-400 hover:text-primary transition-colors",
          isActive("/mypage") && "text-primary"
        )}
        href="/mypage"
      >
        マイページ
      </Link>
      <Link
        className={cn(
          "text-sm text-gray-400 hover:text-primary transition-colors",
          isActive("/products") && "text-primary"
        )}
        href="/products"
      >
        商品一覧
      </Link>
      <Link href="/cart">
        <ShoppingCart size={20} />
      </Link>
      {children}
    </div>
  )
}

export default HeaderNavigation
