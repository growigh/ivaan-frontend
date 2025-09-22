"use client"

import { useUser } from "@/components/contexts/user-context"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  CheckCircle,
  Clock,
  TrendingUp,
  Users
} from "lucide-react"

export default function DashboardPage() {
  const { user } = useUser()

  const stats = [
    {
      title: "Total Meetings",
      value: "24",
      change: "+12%",
      changeType: "positive" as const,
      icon: Calendar,
    },
    {
      title: "Team Members",
      value: "8",
      change: "+2",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "This Week",
      value: "6",
      change: "Meetings",
      changeType: "neutral" as const,
      icon: Clock,
    },
    {
      title: "Completed",
      value: "18",
      change: "Tasks",
      changeType: "positive" as const,
      icon: CheckCircle,
    },
  ]

  const recentActivities = [
    {
      title: "Weekly Team Meeting",
      time: "2 hours ago",
      status: "completed",
    },
    {
      title: "Project Review",
      time: "Yesterday",
      status: "completed",
    },
    {
      title: "Client Presentation",
      time: "Tomorrow 2:00 PM",
      status: "upcoming",
    },
    {
      title: "Sprint Planning",
      time: "Friday 10:00 AM",
      status: "upcoming",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {user?.name?.split(' ')[0] || 'User'}!
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your meetings and team today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-muted-foreground"
                  }
                >
                  {stat.change}
                </span>
                {stat.changeType !== "neutral" && " from last month"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <Badge
                    variant={
                      activity.status === "completed" ? "default" : "secondary"
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Meeting Success Rate</span>
                <span className="text-sm font-medium">94%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-[94%]"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Team Participation</span>
                <span className="text-sm font-medium">87%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-[87%]"></div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-600">
                  +15% improvement this month
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-sm font-medium">Name</p>
              <p className="text-sm text-muted-foreground">{user?.name || "Not available"}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{user?.email || "Not available"}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">User ID</p>
              <p className="text-sm text-muted-foreground">{user?.id || "Not available"}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
