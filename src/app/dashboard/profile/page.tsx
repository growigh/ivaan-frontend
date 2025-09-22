"use client"

import { useUser } from "@/components/contexts/user-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilePage() {
  const { user } = useUser()

  const getUserInitials = (name?: string) => {
    if (!name) return "U"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Card>
        <CardHeader className="flex flex-col items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user?.avatar || ""} alt={user?.name || "User"} />
            <AvatarFallback>{getUserInitials(user?.name)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold text-center">
            {user?.name || "User"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="text-base">{user?.email || "Not available"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">User ID</p>
              <p className="text-base">{user?.id || "Not available"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Created At</p>
              <p className="text-base">{user?.createdAt ? new Date(user.createdAt).toLocaleString() : "Not available"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Last Updated</p>
              <p className="text-base">{user?.updatedAt ? new Date(user.updatedAt).toLocaleString() : "Not available"}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
