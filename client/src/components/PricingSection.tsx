import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { type PricingPlan } from "@shared/schema";

export default function PricingSection() {
  const { data: plans, isLoading, error } = useQuery<PricingPlan[]>({
    queryKey: ['/api/pricing-plans'],
  });

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
      console.log('Contact sales for Enterprise plan');
    } else {
      console.log(`${plan.displayName} plan selected`);
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
    <section className="py-20 px-4 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-pricing-title">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-subtitle">
            Flexible pricing that scales with your business. Start with individual agents or go full automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative bg-card hover:bg-card/80 transition-colors ${
                plan.isPopular 
                ? 'ring-2 ring-primary' 
                : ''
              }`}
              data-testid={`card-pricing-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {plan.isPopular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground" data-testid="badge-most-popular">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
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
                    <Badge variant="outline" className="text-xs">
                      Unlimited products
                    </Badge>
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="pt-0">
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
                  className="w-full"
                  variant={plan.isPopular ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => handlePlanSelect(plan)}
                  data-testid={`button-select-${plan.name.toLowerCase()}`}
                >
                  {plan.isContactSales ? 'Contact Sales' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4" data-testid="text-money-back-guarantee">
            30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}