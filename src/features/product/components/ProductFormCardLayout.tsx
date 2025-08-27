import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React, { ReactNode } from "react"

type PropsType = {
  title: string
  description: string
  children: ReactNode
}

const ProductFormCardLayout = ({ title, description, children }: PropsType) => {
  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default ProductFormCardLayout
