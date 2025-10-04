import { useQuery, useMutation } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
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
  Trash2,
  AlertTriangle,
  Eye,
  EyeOff,
  AlertCircle
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [usageAlerts, setUsageAlerts] = useState(true);
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { data: user } = useQuery<{ id: string; email: string }>({
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

  const calculatePasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: "", color: "", barColor: "" };
    
    if (password.length < 8) {
      return { strength: 20, label: "Too weak", color: "text-red-600", barColor: "bg-red-500" };
    }
    
    let strength = 0;
    const checks = {
      length: password.length >= 8,
      hasLowerCase: /[a-z]/.test(password),
      hasUpperCase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasMultipleWords: password.includes(' ')
    };

    if (checks.length) strength += 30;
    if (checks.hasLowerCase) strength += 20;
    if (checks.hasUpperCase) strength += 20;
    if (checks.hasNumber) strength += 15;
    if (checks.hasSpecial) strength += 10;
    if (checks.hasMultipleWords) strength += 5;

    if (strength <= 35) {
      return { strength, label: "Too weak", color: "text-red-600", barColor: "bg-red-500" };
    } else if (strength <= 55) {
      return { strength, label: "Weak", color: "text-orange-600", barColor: "bg-orange-500" };
    } else if (strength <= 75) {
      return { strength, label: "Good", color: "text-yellow-600", barColor: "bg-yellow-500" };
    } else {
      return { strength, label: "Strong", color: "text-green-600", barColor: "bg-green-500" };
    }
  };

  const passwordStrength = calculatePasswordStrength(newPassword);

  const changePasswordMutation = useMutation({
    mutationFn: async (data: { currentPassword: string; newPassword: string }) => {
      const res = await apiRequest("POST", "/api/user/change-password", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Password changed",
        description: "Your password has been updated successfully.",
      });
      setShowPasswordDialog(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowCurrentPassword(false);
      setShowNewPassword(false);
      setShowConfirmPassword(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to change password",
        variant: "destructive",
      });
    },
  });

  const deleteAccountMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("DELETE", "/api/user/delete-account");
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Account deleted",
        description: "Your account has been permanently deleted.",
      });
      navigate("/login");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete account",
        variant: "destructive",
      });
    },
  });

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    if (newPassword.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      });
      return;
    }
    
    changePasswordMutation.mutate({ currentPassword, newPassword });
  };

  const handleDeleteAccount = async () => {
    deleteAccountMutation.mutate();
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
                {user?.email?.substring(0, 2).toUpperCase() || "TE"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate" data-testid="text-username">
                {user?.email || "test@gmail.com"}
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
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2" data-testid="text-page-title">
              Settings
            </h1>
            <p className="text-gray-600">
              Manage your account settings and preferences
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Profile Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">Profile Information</CardTitle>
                      <CardDescription className="text-gray-600">Update your account details</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-900">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={user?.email}
                        className="mt-1.5 bg-white border-gray-200 text-gray-900"
                        disabled={!isEditing}
                        data-testid="input-email"
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <AnimatePresence mode="wait">
                        {isEditing ? (
                          <motion.div
                            key="editing"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="flex gap-3"
                          >
                            <Button 
                              onClick={handleSaveProfile} 
                              className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-105" 
                              data-testid="button-save"
                            >
                              Save Changes
                            </Button>
                            <Button variant="outline" onClick={() => setIsEditing(false)} data-testid="button-cancel">
                              Cancel
                            </Button>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="not-editing"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                          >
                            <Button 
                              variant="outline" 
                              onClick={() => setIsEditing(true)} 
                              className="hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-600 transition-all duration-200"
                              data-testid="button-edit"
                            >
                              Edit Profile
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">Subscription</CardTitle>
                      <CardDescription className="text-gray-600">Manage your billing and plan</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Current Plan</p>
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
                    <Button 
                      variant="outline" 
                      asChild 
                      className="hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-600 transition-all duration-200"
                      data-testid="button-upgrade-plan"
                    >
                      <Link href="/pricing">Upgrade Plan</Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200" 
                      data-testid="button-billing-history"
                    >
                      View Billing History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Bell className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">Notifications</CardTitle>
                      <CardDescription className="text-gray-600">Configure how you receive updates</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                        <p className="text-sm text-gray-600">Receive updates about your products</p>
                      </div>
                      <Switch
                        checked={emailNotifications}
                        onCheckedChange={(checked) => {
                          setEmailNotifications(checked);
                          toast({
                            title: checked ? "Enabled" : "Disabled",
                            description: `Email notifications have been ${checked ? "enabled" : "disabled"}.`,
                          });
                        }}
                        data-testid="switch-email-notifications"
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Usage Alerts</p>
                        <p className="text-sm text-gray-600">Get notified when credits are low</p>
                      </div>
                      <Switch
                        checked={usageAlerts}
                        onCheckedChange={(checked) => {
                          setUsageAlerts(checked);
                          toast({
                            title: checked ? "Enabled" : "Disabled",
                            description: `Usage alerts have been ${checked ? "enabled" : "disabled"}.`,
                          });
                        }}
                        data-testid="switch-usage-alerts"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">Security</CardTitle>
                      <CardDescription className="text-gray-600">Manage your password and security settings</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Password</p>
                        <p className="text-sm text-gray-600">Last changed 30 days ago</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setShowPasswordDialog(true)}
                        className="hover:bg-purple-50 hover:text-purple-600 hover:border-purple-600 transition-all duration-200"
                        data-testid="button-change-password"
                      >
                        Change Password
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Danger Zone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="bg-white border border-red-200 hover:shadow-lg hover:shadow-red-100 transition-all duration-300">
                <CardHeader className="border-b border-red-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-red-900">Danger Zone</CardTitle>
                      <CardDescription className="text-red-700">Irreversible account actions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-red-50 transition-colors duration-200">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Delete Account</p>
                      <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-red-300 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200" 
                      onClick={() => setShowDeleteDialog(true)}
                      data-testid="button-delete-account"
                    >
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Change Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="dialog-rainbow-header">
            <DialogTitle className="flex items-center gap-2 text-gray-900">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-purple-600" />
              </div>
              <span className="font-bold">Change Password</span>
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Enter your current password and choose a new one
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 px-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-sm font-medium text-gray-900">Current Password</Label>
              <div className="relative">
                <Input
                  id="current-password"
                  type={showCurrentPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="bg-white border-gray-200 text-gray-900 pr-10"
                  data-testid="input-current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                  data-testid="button-toggle-current-password"
                >
                  {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="new-password" className="text-sm font-medium text-gray-900">New Password</Label>
                <AnimatePresence>
                  {newPassword && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className={`text-sm font-semibold ${passwordStrength.color}`}
                    >
                      {passwordStrength.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-white border-gray-200 text-gray-900 pr-10"
                  data-testid="input-new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                  data-testid="button-toggle-new-password"
                >
                  {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <AnimatePresence>
                {newPassword && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex gap-1">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`h-1 flex-1 rounded-full origin-left ${
                          passwordStrength.strength >= 25 ? passwordStrength.barColor : "bg-gray-200"
                        }`}
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className={`h-1 flex-1 rounded-full origin-left ${
                          passwordStrength.strength >= 50 ? passwordStrength.barColor : "bg-gray-200"
                        }`}
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className={`h-1 flex-1 rounded-full origin-left ${
                          passwordStrength.strength >= 75 ? passwordStrength.barColor : "bg-gray-200"
                        }`}
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                      <p className="leading-relaxed">
                        Passwords need to be at least 8 characters. Mix uppercase, lowercase, and numbers for better security.
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-900">Confirm New Password</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-white border-gray-200 text-gray-900 pr-10"
                  data-testid="input-confirm-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                  data-testid="button-toggle-confirm-password"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setShowPasswordDialog(false)}
              className="hover:scale-105 transition-all duration-200"
              data-testid="button-cancel-password"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleChangePassword}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 hover:scale-105"
              data-testid="button-confirm-password"
            >
              Change Password
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Account Alert Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader className="dialog-rainbow-header">
            <AlertDialogTitle className="flex items-center gap-2 text-gray-900">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center animate-pulse">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <span className="font-bold">Are you absolutely sure?</span>
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              This action <span className="font-semibold text-red-600">cannot be undone</span>. This will permanently delete your account
              and remove all your data from our servers including:
              <ul className="list-disc list-inside mt-3 space-y-1.5 text-gray-700 font-medium">
                <li>All product listings</li>
                <li>Usage history and analytics</li>
                <li>Subscription information</li>
                <li>Account credentials</li>
              </ul>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              className="hover:scale-105"
              data-testid="button-cancel-delete"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteAccount}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-200 hover:scale-105"
              data-testid="button-confirm-delete"
            >
              Delete Account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
