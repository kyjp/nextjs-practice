import React from "react"

import HeaderNavigation from "./HeaderNavigation"
import HeaderUserLink from "./HeaderUserLink"

const Header = async () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-16 w-11/12 items-center justify-between">
        <h1 className="text-xl font-bold">ECサイト</h1>
        <HeaderNavigation>
          <HeaderUserLink />
        </HeaderNavigation>
      </div>
    </header>
  )
}

export default Header
