"use client"

import { useUser } from "@/components/contexts/user-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface AuthGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  redirectTo?: string
}

export function AuthGuard({
  children,
  fallback,
  redirectTo = "/login"
}: AuthGuardProps) {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push(redirectTo)
    }
  }, [user, loading, router, redirectTo])

  // Show loading state
  if (loading) {
    return (
      fallback || (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
        </div>
      )
    )
  }

  // If not authenticated, show nothing (will redirect)
  if (!user) {
    return null
  }

  // User is authenticated, show protected content
  return <>{children}</>
}

interface GuestGuardProps {
  children: React.ReactNode
  redirectTo?: string
}

export function GuestGuard({
  children,
  redirectTo = "/dashboard"
}: GuestGuardProps) {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push(redirectTo)
    }
  }, [user, loading, router, redirectTo])

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  // If authenticated, show nothing (will redirect)
  if (user) {
    return null
  }

  // User is not authenticated, show guest content
  return <>{children}</>
}
