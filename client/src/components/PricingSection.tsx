import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Target } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Individual Agents",
      description: "Perfect for targeted improvements",
      price: "$8-15",
      period: "per agent use",
      icon: Target,
      features: [
        "Choose specific agents",
        "Pay only for what you use",
        "No monthly commitments",
        "Basic support",
        "Standard processing speed"
      ],
      popular: false,
      gradient: "from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    },
    {
      name: "Full Workflow",
      description: "Complete automation for serious sellers",
      price: "$35",
      period: "per listing",
      icon: Zap,
      features: [
        "All 4 agents included",
        "End-to-end automation",
        "Priority processing",
        "Advanced analytics",
        "Premium support",
        "Bulk operations",
        "$9 savings vs individual"
      ],
      popular: true,
      gradient: "from-primary/5 to-primary/10"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large teams",
      price: "Custom",
      period: "contact sales",
      icon: Star,
      features: [
        "Custom agent training",
        "API access",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "Volume discounts",
        "SLA guarantees"
      ],
      popular: false,
      gradient: "from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary" data-testid="badge-pricing">
            <Star className="w-3 h-3 mr-1" />
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-pricing-title">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-subtitle">
            Flexible pricing that scales with your business. Start with individual agents or go full automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden hover-elevate transition-all duration-300 ${
                plan.popular 
                ? 'ring-2 ring-primary shadow-xl scale-105' 
                : ''
              }`}
              data-testid={`card-pricing-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground z-10" data-testid="badge-most-popular">
                  Most Popular
                </Badge>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`}></div>
              
              <CardHeader className="relative z-10 text-center pb-2">
                <div className={`w-16 h-16 rounded-2xl ${plan.popular ? 'bg-primary' : 'bg-muted'} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground" data-testid={`text-plan-name-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {plan.name}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-plan-description-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0">
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-foreground" data-testid={`text-plan-price-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground" data-testid={`text-plan-period-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3" data-testid={`feature-${featureIndex}`}>
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'shadow-lg' : ''} hover-elevate`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => console.log(`${plan.name} plan selected`)}
                  data-testid={`button-select-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4" data-testid="text-money-back-guarantee">
            30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}