import Header from "@/components/layouts/Header"
import React, { ReactNode } from "react"

type PropsType = {
  children: ReactNode
}

const AuthenticatedLayout = ({ children }: PropsType) => {
  return (
    <>
      <Header />
      <div className="mx-auto my-8 w-11/12">{children}</div>
    </>
  )
}

export default AuthenticatedLayout
