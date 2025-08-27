import React from "react"

import AuthCardLayout from "@/features/auth/components/AuthCardLayout"
import LoginForm from "@/features/auth/components/LoginForm"
import Link from "next/link"

const LoginPage = () => {
  return (
    <AuthCardLayout
      title="ログイン"
      description="ログインしてください"
      footer={
        <p className="mt-5 w-full text-center text-sm">
          アカウントをお持ちでない場合は
          <Link href="/signup" className="text-blue-600 underline">
            こちら
          </Link>
        </p>
      }
    >
      <LoginForm />
    </AuthCardLayout>
  )
}

export default LoginPage
