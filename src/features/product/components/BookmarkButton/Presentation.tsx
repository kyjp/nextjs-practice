"use client"

import React, { useState } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"
import { useAction } from "next-safe-action/hooks"
import { deleteBookmark } from "../../actions/deleteBookmark"
import { createBookmark } from "../../actions/createBookmark"
import { toast } from "sonner"

type PropsType = {
  isBookmarked: boolean
  productId: number
}

const BookmarkButtonPresentation = ({
  isBookmarked: initialIsBookmarked,
  productId,
}: PropsType) => {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked)
  const { execute } = useAction(
    isBookmarked ? deleteBookmark : createBookmark,
    {
      onSuccess: ({ data }) => {
        if (data == null) return
        if (data.success) {
          toast.success(data.message)
          setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked)
        } else {
          toast.error(data.message)
        }
      },
    }
  )
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" onClick={() => execute({ productId })}>
            <Bookmark
              className={
                isBookmarked
                  ? "fill-green-400 text-green-400"
                  : "text-muted-foreground"
              }
              size={18}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isBookmarked ? "ブックマークを解除" : "ブックマークする"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default BookmarkButtonPresentation
