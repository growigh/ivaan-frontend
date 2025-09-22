"use client"

import { useUser } from "@/components/contexts/user-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DashboardPage() {
  const { user, logout } = useUser()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              Logout
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Welcome!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-slate-300">
                  <span className="font-medium">Name:</span> {user?.name}
                </p>
                <p className="text-slate-300">
                  <span className="font-medium">Email:</span> {user?.email}
                </p>
                <p className="text-slate-300">
                  <span className="font-medium">User ID:</span> {user?.id}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                {user?.avatar && (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full"
                  />
                )}
                <div>
                  <p className="text-slate-300 text-sm">
                    Member since: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </p>
                  <p className="text-slate-300 text-sm">
                    Last updated: {user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Edit Profile
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Settings
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View Activity
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
