'use client'

import { signIn } from "next-auth/react"

export default function SignInButton() {
  const handleGithubLogin = () => {
    signIn("github", { callbackUrl: '/dashboard' })
  }

  return (
    <button 
      onClick={handleGithubLogin}
      className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
    >
      Sign in with GitHub
    </button>
  )
}
