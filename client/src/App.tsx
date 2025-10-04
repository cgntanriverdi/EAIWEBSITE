import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/pages/LandingPage";
import ProductsPage from "@/pages/ProductsPage";
import PricingPage from "@/pages/PricingPage";
import ResourcesPage from "@/pages/ResourcesPage";
import ImageGenerationAgentPage from "@/pages/ImageGenerationAgentPage";
import DescriptionAgentPage from "@/pages/DescriptionAgentPage";
import PricingAgentPage from "@/pages/PricingAgentPage";
import PublishingAgentPage from "@/pages/PublishingAgentPage";
import WorkflowPage from "@/pages/WorkflowPage";
import DocumentationPage from "@/pages/DocumentationPage";
import UseCasesPage from "@/pages/UseCasesPage";
import BestPracticesPage from "@/pages/BestPracticesPage";
import SupportPage from "@/pages/SupportPage";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import MyProductsPage from "@/pages/MyProductsPage";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "@/pages/not-found";

interface ProtectedRouteProps {
  component: React.ComponentType;
}

function ProtectedRoute({ component: Component }: ProtectedRouteProps) {
  const [, navigate] = useLocation();
  const { data: user, isLoading } = useQuery<{ id: string; email: string }>({
    queryKey: ["/api/user"],
  });

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  }, [isLoading, user, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
      
      {/* Protected Dashboard Routes */}
      <Route path="/dashboard">
        {() => <ProtectedRoute component={DashboardPage} />}
      </Route>
      <Route path="/my-products">
        {() => <ProtectedRoute component={MyProductsPage} />}
      </Route>
      <Route path="/settings">
        {() => <ProtectedRoute component={SettingsPage} />}
      </Route>
      
      {/* Agent Pages */}
      <Route path="/workflow" component={WorkflowPage} />
      <Route path="/agents/image-generation" component={ImageGenerationAgentPage} />
      <Route path="/agents/description" component={DescriptionAgentPage} />
      <Route path="/agents/pricing" component={PricingAgentPage} />
      <Route path="/agents/publishing" component={PublishingAgentPage} />
      
      {/* Resource Pages */}
      <Route path="/resources/documentation" component={DocumentationPage} />
      <Route path="/resources/use-cases" component={UseCasesPage} />
      <Route path="/resources/best-practices" component={BestPracticesPage} />
      <Route path="/resources/support" component={SupportPage} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
