import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  Package, 
  Settings, 
  LogOut,
  Sparkles,
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Calendar,
  DollarSign
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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

export default function MyProductsPage() {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: user } = useQuery<{ id: string; username: string }>({
    queryKey: ["/api/user"],
  });

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/dashboard/products"],
    enabled: !!user,
  });

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    navigate("/login");
  };

  const sidebarNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Package, label: "My Products", href: "/my-products", active: true },
    { icon: Sparkles, label: "Agents", href: "/dashboard", active: false },
    { icon: Settings, label: "Settings", href: "/settings", active: false },
  ];

  const filteredProducts = products?.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatPrice = (price: number | null) => {
    if (!price) return "Not set";
    return `$${(price / 100).toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
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
              <p className="text-xs text-gray-500">Basic</p>
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
        <div className="max-w-7xl mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" data-testid="text-page-title">
              My Products
            </h1>
            <p className="text-gray-600">
              Manage and optimize your product listings
            </p>
          </div>

          {/* Actions Bar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-white border-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search"
              />
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" data-testid="button-create-product">
              <Plus className="w-4 h-4 mr-2" />
              Create Product
            </Button>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 bg-white border border-gray-200">
                  <div className="animate-pulse">
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </Card>
              ))}
            </div>
          ) : filteredProducts && filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow" data-testid={`card-product-${product.id}`}>
                  {/* Product Image */}
                  <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center">
                    {product.imageUrl ? (
                      <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                    ) : (
                      <Package className="w-12 h-12 text-gray-400" />
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 truncate flex-1" data-testid={`text-product-title-${product.id}`}>
                        {product.title}
                      </h3>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 -mr-2">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>

                    {product.description && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {product.description}
                      </p>
                    )}

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5" />
                        {formatPrice(product.price)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(product.createdAt)}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Badge
                        variant={product.status === "published" ? "default" : "secondary"}
                        className={product.status === "published" ? "bg-green-100 text-green-700 hover:bg-green-100" : ""}
                      >
                        {product.status}
                      </Badge>
                      {product.agentsUsed && product.agentsUsed.length > 0 && (
                        <span className="text-xs text-gray-500">
                          {product.agentsUsed.length} agent{product.agentsUsed.length !== 1 ? 's' : ''} used
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 text-xs" data-testid={`button-edit-${product.id}`}>
                        <Edit className="w-3.5 h-3.5 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs" data-testid={`button-view-${product.id}`}>
                        <Eye className="w-3.5 h-3.5 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center bg-white border border-gray-200">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products yet</h3>
              <p className="text-gray-600 mb-6">
                Create your first product listing to get started with AI-powered optimization
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" data-testid="button-create-first-product">
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Product
              </Button>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
