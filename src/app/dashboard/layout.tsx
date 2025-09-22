import { AuthGuard } from "@/components/auth/auth-guard"
import { ReactNode } from "react"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AuthGuard>
      <div className="dashboard-layout">
        {children}
      </div>
    </AuthGuard>
  )
}
