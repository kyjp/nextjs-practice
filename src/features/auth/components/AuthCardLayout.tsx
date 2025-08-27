import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React, { ReactNode } from "react"

type PropsType = {
  title: string
  description: string
  children: ReactNode
  footer: ReactNode
}

const AuthCardLayout = ({
  title,
  description,
  children,
  footer,
}: PropsType) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>{footer}</CardFooter>
      </Card>
    </div>
  )
}

export default AuthCardLayout
