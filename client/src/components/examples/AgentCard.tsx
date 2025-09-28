import AgentCard from '../AgentCard';
import { FileText, DollarSign, Camera, Upload } from 'lucide-react';

export default function AgentCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      <AgentCard
        icon={FileText}
        title="Description Agent"
        description="AI-powered persuasive product descriptions that convert browsers into buyers using psychology-driven copy."
        features={[
          "Psychology-based persuasion",
          "SEO-optimized content",
          "Brand voice matching",
          "A/B testing variants"
        ]}
        price="$9"
        gradient="bg-gradient-to-br from-purple-500 to-pink-500"
      />
      
      <AgentCard
        icon={DollarSign}
        title="Pricing Agent"
        description="Intelligent competitive analysis and dynamic pricing optimization to maximize your profit margins."
        features={[
          "Real-time competitor analysis",
          "Dynamic pricing strategies",
          "Profit margin optimization",
          "Market trend insights"
        ]}
        price="$12"
        isPopular={true}
        gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
      />
      
      <AgentCard
        icon={Camera}
        title="Image Generation"
        description="Studio-quality model photography generated from your product images using advanced AI technology."
        features={[
          "Hyper-realistic models",
          "Multiple pose variations",
          "Professional lighting",
          "Brand style consistency"
        ]}
        price="$15"
        gradient="bg-gradient-to-br from-green-500 to-emerald-500"
      />
      
      <AgentCard
        icon={Upload}
        title="Publishing Agent"
        description="Seamless one-click publishing to Shopify with automatic optimization and catalog management."
        features={[
          "One-click Shopify sync",
          "Inventory management",
          "Category optimization",
          "Bulk operations"
        ]}
        price="$8"
        gradient="bg-gradient-to-br from-orange-500 to-red-500"
      />
    </div>
  );
}