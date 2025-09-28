import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Star, Zap, Target, Users, Crown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { type PricingPlan } from "@shared/schema";

export default function PricingSection() {
  const { data: plans, isLoading, error } = useQuery<PricingPlan[]>({
    queryKey: ['/api/pricing-plans'],
  });

  const getPlanIcon = (planName: string) => {
    switch (planName.toLowerCase()) {
      case 'basic': return Target;
      case 'pro': return Zap;
      case 'plus': return Users;
      case 'enterprise': return Crown;
      default: return Star;
    }
  };

  const getPlanGradient = (planName: string) => {
    switch (planName.toLowerCase()) {
      case 'basic': return "from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
      case 'pro': return "from-primary/5 to-primary/10";
      case 'plus': return "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20";
      case 'enterprise': return "from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20";
      default: return "from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
    }
  };

  const formatPrice = (price: number | null) => {
    if (price === null) return "Custom";
    return `$${(price / 100).toFixed(0)}`;
  };

  const formatPeriod = (plan: PricingPlan) => {
    if (plan.isContactSales) return "contact sales";
    return "per month";
  };

  const handlePlanSelect = async (plan: PricingPlan) => {
    if (plan.isContactSales) {
      // Handle Enterprise contact sales
      // For now, we'll just scroll to a contact form or show a modal
      console.log('Contact sales for Enterprise plan');
      // You could implement a contact form modal here
    } else {
      // Handle regular plan selection/payment
      console.log(`${plan.displayName} plan selected`);
      // You would integrate with your payment processor here
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-6 w-32 mx-auto mb-4" />
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-[600px] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-[500px] rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !plans) {
    return (
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-destructive">Error loading pricing plans. Please try again later.</p>
        </div>
      </section>
    );
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const IconComponent = getPlanIcon(plan.name);
            const gradient = getPlanGradient(plan.name);
            
            return (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden hover-elevate transition-all duration-300 ${
                  plan.isPopular 
                  ? 'ring-2 ring-primary shadow-xl scale-105' 
                  : ''
                }`}
                data-testid={`card-pricing-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {plan.isPopular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground z-10" data-testid="badge-most-popular">
                    Most Popular
                  </Badge>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`}></div>
                
                <CardHeader className="relative z-10 text-center pb-2">
                  <div className={`w-16 h-16 rounded-2xl ${plan.isPopular ? 'bg-primary' : 'bg-muted'} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className={`w-8 h-8 ${plan.isPopular ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground" data-testid={`text-plan-name-${plan.name.toLowerCase()}`}>
                    {plan.displayName}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-plan-description-${plan.name.toLowerCase()}`}>
                    {plan.description}
                  </p>
                  {plan.productCredits && (
                    <div className="mt-2">
                      <Badge variant="outline" className="text-xs">
                        {plan.name === 'plus' ? `${plan.productCredits}+ products/month` : `${plan.productCredits} products/month`}
                      </Badge>
                    </div>
                  )}
                  {plan.productCredits === null && (
                    <div className="mt-2">
                      <Badge variant="outline" className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-none">
                        Unlimited products
                      </Badge>
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-foreground" data-testid={`text-plan-price-${plan.name.toLowerCase()}`}>
                        {formatPrice(plan.price)}
                      </span>
                      <span className="text-muted-foreground" data-testid={`text-plan-period-${plan.name.toLowerCase()}`}>
                        {formatPeriod(plan)}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3" data-testid={`feature-${plan.name.toLowerCase()}-${featureIndex}`}>
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    )) || []}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.isPopular ? 'shadow-lg' : ''} hover-elevate`}
                    variant={plan.isPopular ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => handlePlanSelect(plan)}
                    data-testid={`button-select-${plan.name.toLowerCase()}`}
                  >
                    {plan.isContactSales ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
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
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span>Enterprise API Access Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}