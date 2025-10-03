import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  LayoutDashboard, 
  Package, 
  Image, 
  FileText, 
  DollarSign, 
  Upload, 
  Settings, 
  LogOut,
  ChevronRight,
  TrendingUp,
  Zap,
  Calendar,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useState, useEffect } from "react";
import OnboardingTutorial from "@/components/OnboardingTutorial";

interface DashboardMetrics {
  subscription: {
    plan: string;
    creditsRemaining: number;
    totalCredits: number | null;
  };
  usageStats: {
    todayUses: number;
    todayCredits: number;
    descriptionAgentUses: number;
    imageAgentUses: number;
    pricingAgentUses: number;
    publishingAgentUses: number;
  };
  usageHistory: Array<{
    date: string;
    descriptionAgentUses: number;
    imageAgentUses: number;
    pricingAgentUses: number;
    publishingAgentUses: number;
    creditsUsed: number;
  }>;
}

interface Product {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  price: number | null;
  status: string;
  agentsUsed: string[];
  createdAt: string;
}

export default function DashboardPage() {
  const [, navigate] = useLocation();
  const [dateRange, setDateRange] = useState<"7" | "30" | "90">("30");
  const [showTutorial, setShowTutorial] = useState(false);

  const { data: user } = useQuery<{ id: string; username: string }>({
    queryKey: ["/api/user"],
  });

  const { data: metrics, isLoading: metricsLoading, error: metricsError } = useQuery<DashboardMetrics>({
    queryKey: ["/api/dashboard/metrics"],
    enabled: !!user,
  });

  const { data: products, isLoading: productsLoading, error: productsError } = useQuery<Product[]>({
    queryKey: ["/api/dashboard/products"],
    enabled: !!user,
  });

  useEffect(() => {
    if (!user?.id) return;
    
    const hasSeenTutorial = localStorage.getItem(`hasSeenTutorial_${user.id}`);
    const isNewUser = sessionStorage.getItem("isNewUser");
    
    if (isNewUser === "true" && !hasSeenTutorial) {
      setShowTutorial(true);
    }
  }, [user?.id]);

  const handleTutorialComplete = () => {
    if (!user?.id) return;
    
    setShowTutorial(false);
    localStorage.setItem(`hasSeenTutorial_${user.id}`, "true");
    sessionStorage.removeItem("isNewUser");
  };

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    navigate("/login");
  };

  const sidebarNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
    { icon: Package, label: "My Products", href: "/products", active: false },
    { icon: Sparkles, label: "Agents", href: "/agents", active: false },
    { icon: Settings, label: "Settings", href: "/settings", active: false },
  ];

  const agentCards = [
    {
      icon: FileText,
      title: "Description Agent",
      description: "Generate compelling product descriptions",
      uses: metrics?.usageStats.descriptionAgentUses || 0,
      color: "text-blue-600 bg-blue-50",
      href: "/agents/description"
    },
    {
      icon: Image,
      title: "Image Agent",
      description: "Create professional product photos",
      uses: metrics?.usageStats.imageAgentUses || 0,
      color: "text-purple-600 bg-purple-50",
      href: "/agents/image-generation"
    },
    {
      icon: DollarSign,
      title: "Pricing Agent",
      description: "Optimize pricing strategy",
      uses: metrics?.usageStats.pricingAgentUses || 0,
      color: "text-green-600 bg-green-50",
      href: "/agents/pricing"
    },
    {
      icon: Upload,
      title: "Publishing Agent",
      description: "Publish to all platforms",
      uses: metrics?.usageStats.publishingAgentUses || 0,
      color: "text-orange-600 bg-orange-50",
      href: "/agents/publishing"
    }
  ];

  const recentProducts = products?.slice(0, 5) || [];

  const chartData = metrics?.usageHistory?.map(item => ({
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    Description: item.descriptionAgentUses,
    Image: item.imageAgentUses,
    Pricing: item.pricingAgentUses,
    Publishing: item.publishingAgentUses,
  })) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Onboarding Tutorial */}
      {showTutorial && <OnboardingTutorial onComplete={handleTutorialComplete} />}
      
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col" data-testid="dashboard-sidebar">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">AI Commerce</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1" data-testid="dashboard-nav">
          {sidebarNavItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <button
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  item.active
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                data-testid={`nav-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </Link>
          ))}
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="w-10 h-10" data-testid="avatar-user">
              <AvatarFallback className="bg-indigo-100 text-indigo-600 font-semibold">
                {user?.username?.substring(0, 2).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate" data-testid="text-username">
                {user?.username || "User"}
              </p>
              <p className="text-xs text-gray-500" data-testid="text-plan">
                {metrics?.subscription.plan || "Loading..."}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={handleLogout}
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Log out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900" data-testid="text-dashboard-title">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Welcome back, {user?.username}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="px-3 py-1" data-testid="badge-date">
                <Calendar className="w-3 h-3 mr-2" />
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </Badge>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow" data-testid="card-credits">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Credits Remaining</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2" data-testid="text-credits-remaining">
                    {metricsLoading ? "..." : metrics?.subscription.creditsRemaining || 0}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    of {metrics?.subscription.totalCredits || "unlimited"}
                  </p>
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow" data-testid="card-today-usage">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Today's Usage</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2" data-testid="text-today-uses">
                    {metricsLoading ? "..." : metrics?.usageStats.todayUses || 0}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {metrics?.usageStats.todayCredits || 0} credits used
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow" data-testid="card-products">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Products</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2" data-testid="text-total-products">
                    {productsLoading ? "..." : products?.length || 0}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {recentProducts.filter(p => p.status === "published").length} published
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </Card>
          </div>

          {/* Usage Overview */}
          <Card className="p-6 bg-white border border-gray-200 shadow-sm" data-testid="card-usage-overview">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Usage Overview</h2>
              <div className="flex gap-2">
                {(["7", "30", "90"] as const).map((days) => (
                  <Button
                    key={days}
                    variant={dateRange === days ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDateRange(days)}
                    data-testid={`button-range-${days}`}
                  >
                    {days} days
                  </Button>
                ))}
              </div>
            </div>
            
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" stroke="#888" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#888" style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="Description" fill="#3b82f6" />
                  <Bar dataKey="Image" fill="#a855f7" />
                  <Bar dataKey="Pricing" fill="#10b981" />
                  <Bar dataKey="Publishing" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-300px flex items-center justify-center text-gray-400">
                <p>No usage data available yet</p>
              </div>
            )}
          </Card>

          {/* Quick Actions */}
          <div data-testid="section-quick-actions">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {agentCards.map((agent) => (
                <Link key={agent.title} href={agent.href}>
                  <Card className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group" data-testid={`card-agent-${agent.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${agent.color}`}>
                      <agent.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {agent.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{agent.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {agent.uses} uses today
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Products */}
          <div data-testid="section-recent-products">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Products</h2>
              <Link href="/products">
                <Button variant="ghost" size="sm" data-testid="button-view-all-products">
                  View all
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            {productsLoading ? (
              <Card className="p-8 bg-white border border-gray-200 shadow-sm text-center text-gray-400">
                <p>Loading products...</p>
              </Card>
            ) : recentProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentProducts.map((product) => (
                  <Card key={product.id} className="p-4 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow" data-testid={`card-product-${product.id}`}>
                    {product.imageUrl && (
                      <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                        <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm" data-testid={`text-product-title-${product.id}`}>
                        {product.title}
                      </h3>
                      <Badge variant={product.status === "published" ? "default" : "secondary"} className="text-xs" data-testid={`badge-product-status-${product.id}`}>
                        {product.status}
                      </Badge>
                    </div>
                    {product.description && (
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                    )}
                    {product.price && (
                      <p className="text-sm font-semibold text-gray-900" data-testid={`text-product-price-${product.id}`}>
                        ${(product.price / 100).toFixed(2)}
                      </p>
                    )}
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 bg-white border border-gray-200 shadow-sm text-center">
                <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No products yet</p>
                <Link href="/agents/description">
                  <Button data-testid="button-create-first-product">
                    Create your first product
                  </Button>
                </Link>
              </Card>
            )}
          </div>

          {/* Recommendations */}
          <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm" data-testid="card-recommendations">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <Sparkles className="w-5 h-5 text-indigo-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Try the Image Agent</p>
                  <p className="text-xs text-gray-500 mt-1">Transform your product photos with AI-powered enhancements</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Optimize your pricing</p>
                  <p className="text-xs text-gray-500 mt-1">Use the Pricing Agent to maximize your profit margins</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <Upload className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Publish everywhere</p>
                  <p className="text-xs text-gray-500 mt-1">Use the Publishing Agent to reach more customers</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
