import { useQuery, useMutation } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  LayoutDashboard, 
  Package, 
  Settings, 
  LogOut,
  Sparkles,
  User,
  CreditCard,
  Bell,
  Shield,
  Trash2
} from "lucide-react";
import { useState } from "react";

interface UserSubscription {
  subscription: {
    plan: string;
    creditsRemaining: number;
    totalCredits: number | null;
  };
}

export default function SettingsPage() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const { data: user } = useQuery<{ id: string; username: string }>({
    queryKey: ["/api/user"],
  });

  const { data: metrics } = useQuery<UserSubscription>({
    queryKey: ["/api/dashboard/metrics"],
    enabled: !!user,
  });

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    navigate("/login");
  };

  const sidebarNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Package, label: "My Products", href: "/my-products", active: false },
    { icon: Sparkles, label: "Agents", href: "/dashboard", active: false },
    { icon: Settings, label: "Settings", href: "/settings", active: true },
  ];

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile settings have been saved successfully.",
    });
    setIsEditing(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/dashboard">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-logo">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-900">AI Commerce</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {sidebarNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  data-testid={`link-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-indigo-100 text-indigo-600 text-sm font-medium">
                {user?.username?.substring(0, 2).toUpperCase() || "TE"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate" data-testid="text-username">
                {user?.username || "test@gmail.com"}
              </p>
              <p className="text-xs text-gray-500">{metrics?.subscription.plan || "Basic"}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={handleLogout}
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Log out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" data-testid="text-page-title">
              Settings
            </h1>
            <p className="text-gray-600">
              Manage your account settings and preferences
            </p>
          </div>

          <div className="space-y-6">
            {/* Profile Settings */}
            <Card className="bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Profile Information</CardTitle>
                    <CardDescription>Update your account details</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="username" className="text-sm font-medium text-gray-700">Username</Label>
                    <Input
                      id="username"
                      defaultValue={user?.username}
                      className="mt-1.5 bg-white border-gray-200"
                      disabled={!isEditing}
                      data-testid="input-username"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={user?.username}
                      className="mt-1.5 bg-white border-gray-200"
                      disabled={!isEditing}
                      data-testid="input-email"
                    />
                  </div>
                  <div className="flex gap-3 pt-2">
                    {isEditing ? (
                      <>
                        <Button onClick={handleSaveProfile} className="bg-indigo-600 hover:bg-indigo-700" data-testid="button-save">
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)} data-testid="button-cancel">
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline" onClick={() => setIsEditing(true)} data-testid="button-edit">
                        Edit Profile
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subscription */}
            <Card className="bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Subscription</CardTitle>
                    <CardDescription>Manage your billing and plan</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Current Plan</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{metrics?.subscription.plan || "Basic"}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Credits Remaining</p>
                    <p className="text-2xl font-bold text-indigo-600 mt-1">
                      {metrics?.subscription.creditsRemaining || 0}
                      {metrics?.subscription.totalCredits && (
                        <span className="text-sm text-gray-400 font-normal"> / {metrics.subscription.totalCredits}</span>
                      )}
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-3">
                  <Button variant="outline" asChild data-testid="button-upgrade-plan">
                    <Link href="/pricing">Upgrade Plan</Link>
                  </Button>
                  <Button variant="ghost" className="text-gray-600" data-testid="button-billing-history">
                    View Billing History
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Notifications</CardTitle>
                    <CardDescription>Configure how you receive updates</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                      <p className="text-sm text-gray-600">Receive updates about your products</p>
                    </div>
                    <Button variant="outline" size="sm" data-testid="button-email-notifications">
                      Enabled
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Usage Alerts</p>
                      <p className="text-sm text-gray-600">Get notified when credits are low</p>
                    </div>
                    <Button variant="outline" size="sm" data-testid="button-usage-alerts">
                      Enabled
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Security</CardTitle>
                    <CardDescription>Manage your password and security settings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Password</p>
                      <p className="text-sm text-gray-600">Last changed 30 days ago</p>
                    </div>
                    <Button variant="outline" size="sm" data-testid="button-change-password">
                      Change Password
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="bg-white border border-red-200">
              <CardHeader className="border-b border-red-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-red-900">Danger Zone</CardTitle>
                    <CardDescription>Irreversible account actions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Delete Account</p>
                    <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50" data-testid="button-delete-account">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
