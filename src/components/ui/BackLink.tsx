import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react"

type PropsType = {
  text: string
  href: string
}

const BackLink = ({ text, href }: PropsType) => {
  return (
    <div className="mb-6">
      <Link href={href} className="flex items-center gap-1 text-sm">
        <ArrowLeft size={16} />
        {text}
      </Link>
    </div>
  )
}

export default BackLink
