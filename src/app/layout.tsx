import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import ZodProvider from "@/components/providers/ZodProvider"

export const metadata: Metadata = {
  title: "ECサイト",
  description: "オンラインショッピングサイト",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ZodProvider>{children}</ZodProvider>
        <Toaster />
      </body>
    </html>
  )
}
