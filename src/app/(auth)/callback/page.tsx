"use client"

import { useUser } from "@/components/contexts/user-context"
import { userApi } from "@/lib/api/user"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { setUser } = useUser()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleCallback = async () => {
      const success = searchParams.get('success')
      const error = searchParams.get('error')
      const errorMessage = searchParams.get('message')

      if (error) {
        setStatus('error')
        setMessage(errorMessage || 'Authentication failed')
        // Redirect to login after showing error
        setTimeout(() => {
          router.push('/login')
        }, 3000)
        return
      }

      if (success === 'true') {
        try {
          // Fetch user profile after successful authentication
          const user = await userApi.getMe()
          if (user) {
            setUser(user)
            setStatus('success')
            setMessage('Authentication successful! Redirecting...')
            // Redirect to dashboard or intended page
            setTimeout(() => {
              router.push('/dashboard')
            }, 2000)
          } else {
            throw new Error('Failed to fetch user profile')
          }
        } catch (error) {
          console.error('Error fetching user profile:', error)
          setStatus('error')
          setMessage('Failed to fetch user profile')
          setTimeout(() => {
            router.push('/login')
          }, 3000)
        }
      } else {
        // No success or error params, redirect to login
        router.push('/login')
      }
    }

    handleCallback()
  }, [searchParams, router, setUser])

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-md w-full text-center">
        {status === 'loading' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Authenticating...
            </h2>
            <p className="text-slate-400">
              Please wait while we complete your authentication.
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Welcome!
            </h2>
            <p className="text-slate-400">{message}</p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Authentication Failed
            </h2>
            <p className="text-slate-400 mb-4">{message}</p>
            <p className="text-sm text-slate-500">
              Redirecting to login page...
            </p>
          </>
        )}
      </div>
    </div>
  )
}
