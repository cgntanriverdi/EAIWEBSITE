import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
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
import DocumentationPage from "@/pages/DocumentationPage";
import UseCasesPage from "@/pages/UseCasesPage";
import BestPracticesPage from "@/pages/BestPracticesPage";
import SupportPage from "@/pages/SupportPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/resources" component={ResourcesPage} />
      
      {/* Agent Pages */}
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
