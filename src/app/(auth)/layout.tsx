import { GuestGuard } from "@/components/auth/auth-guard"
import { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <GuestGuard>
      <div className="auth-layout">
        {children}
      </div>
    </GuestGuard>
  )
}
