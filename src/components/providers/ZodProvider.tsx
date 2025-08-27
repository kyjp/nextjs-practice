"use client"

import { customErrorMap } from "@/lib/zod"
import React, { ReactNode, useEffect } from "react"
import { z } from "zod"

type PropsType = {
  children: ReactNode
}

const ZodProvider = ({ children }: PropsType) => {
  useEffect(() => {
    z.setErrorMap(customErrorMap)
  }, [])
  return <>{children}</>
}

export default ZodProvider
