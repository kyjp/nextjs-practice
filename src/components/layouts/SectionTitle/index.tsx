import React, { ReactNode } from "react"

type PropsType = {
  title: string
  children?: ReactNode
}

const SectionTitle = ({ title, children }: PropsType) => {
  return (
    <div className="my-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  )
}

export default SectionTitle
