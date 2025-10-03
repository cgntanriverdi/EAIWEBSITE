import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { type PricingPlan } from "@shared/schema";
import { Check, Info, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  
  const { data: plans, isLoading, error } = useQuery<PricingPlan[]>({
    queryKey: ['/api/pricing-plans'],
  });

  const formatPrice = (price: number | null, isYearly: boolean = false) => {
    if (price === null) return "Custom";
    const monthlyPrice = price / 100;
    if (isYearly) {
      // Apply 30% discount to monthly price for yearly billing
      const discountedMonthlyPrice = Math.floor(monthlyPrice * 0.7);
      return `$${discountedMonthlyPrice}`;
    }
    return `$${monthlyPrice.toFixed(0)}`;
  };

  const handlePlanSelect = async (plan: PricingPlan) => {
    if (plan.isContactSales) {
      console.log('Contact sales for Enterprise plan');
    } else {
      console.log(`${plan.displayName} plan selected`);
    }
  };

  // Feature comparison data
  const comparisonFeatures = [
    { 
      category: "Core Features",
      features: [
        { name: "Product listings", basic: "20", pro: "50", plus: "100+", enterprise: "Unlimited" },
        { name: "AI optimization level", basic: "Basic", pro: "Advanced", plus: "Premium", enterprise: "Custom" },
        { name: "Processing speed", basic: "Standard", pro: "Fast", plus: "Fastest", enterprise: "Custom" },
        { name: "Monthly credit refresh", basic: true, pro: true, plus: true, enterprise: true },
      ]
    },
    {
      category: "Support & Analytics", 
      features: [
        { name: "Email support", basic: true, pro: true, plus: true, enterprise: true },
        { name: "Priority support", basic: false, pro: true, plus: true, enterprise: true },
        { name: "Live chat support", basic: false, pro: false, plus: true, enterprise: true },
        { name: "Phone support", basic: false, pro: false, plus: false, enterprise: true },
        { name: "Dedicated account manager", basic: false, pro: false, plus: false, enterprise: true },
        { name: "Analytics dashboard", basic: false, pro: true, plus: true, enterprise: true },
        { name: "Advanced analytics", basic: false, pro: false, plus: true, enterprise: true },
      ]
    },
    {
      category: "Advanced Features",
      features: [
        { name: "API access", basic: false, pro: false, plus: true, enterprise: true },
        { name: "Custom AI model training", basic: false, pro: false, plus: false, enterprise: true },
        { name: "Custom integrations", basic: false, pro: false, plus: false, enterprise: true },
        { name: "White-label options", basic: false, pro: false, plus: false, enterprise: true },
        { name: "SLA guarantees", basic: false, pro: false, plus: false, enterprise: true },
      ]
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Skeleton className="h-12 w-40 mx-auto mb-4" />
          <Skeleton className="h-8 w-96 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-[500px]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !plans) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-red-600">Error loading pricing plans. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />
      
      {/* Animated Rainbow Gradient Strip - Angled diagonal design */}
      <div className="absolute inset-0 pointer-events-none" style={{ height: '120%' }}>
        {/* Main animated rainbow gradient */}
        <div 
          className="absolute"
          style={{
            top: '20%',
            left: '-20%',
            right: '-20%',
            height: '500px',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 11%, #3B82F6 22%, #06B6D4 33%, #10B981 44%, #EC4899 55%, #EF4444 66%, #F97316 77%, #FBBF24 88%, #8B5CF6 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
            transform: 'rotate(-8deg) skewY(-2deg)',
            opacity: 0.15,
            filter: 'blur(60px)',
          }}
        />
        
        {/* Secondary overlay for depth */}
        <div 
          className="absolute"
          style={{
            top: '22%',
            left: '-15%',
            right: '-15%',
            height: '450px',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)',
            transform: 'rotate(-8deg) skewY(-2deg)',
            opacity: 0.4,
            mixBlendMode: 'screen',
          }}
        />
        
        {/* Accent layer with pink/purple */}
        <div 
          className="absolute"
          style={{
            top: '24%',
            left: '10%',
            right: '10%',
            height: '400px',
            background: 'radial-gradient(ellipse at 70% 50%, rgba(236, 72, 153, 0.25) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)',
            transform: 'rotate(-8deg) skewY(-2deg)',
            opacity: 0.3,
            mixBlendMode: 'overlay',
          }}
        />
      </div>
      
      {/* Header Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-testid="text-pricing-title">
            Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-10" data-testid="text-pricing-subtitle">
            Subscribe to the AI Commerce Studio plan that best fits you
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-100 rounded-full p-1.5" data-testid="toggle-billing">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              data-testid="button-monthly"
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingPeriod === "yearly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              data-testid="button-yearly"
            >
              Yearly
              <Badge className="bg-indigo-600 text-white text-xs px-2 py-0.5">Save 30%</Badge>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans?.map((plan) => {
            const isPopular = plan.displayName === "Pro";

            return (
              <div
                key={plan.id}
                className={`relative ${isPopular ? 'lg:scale-105' : ''}`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-indigo-600 text-white border-0 px-4 py-1 shadow-sm">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card className={`h-full bg-white border ${
                  isPopular 
                    ? 'border-indigo-200 shadow-xl' 
                    : 'border-gray-200 shadow-sm hover:shadow-md transition-shadow'
                }`}>
                  <CardHeader className="pb-6">
                    {/* Plan Name */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900" data-testid={`text-plan-${plan.displayName.toLowerCase()}`}>
                        {plan.displayName}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gray-900" data-testid={`text-price-${plan.displayName.toLowerCase()}`}>
                          {formatPrice(plan.price, billingPeriod === "yearly")}
                        </span>
                        {!plan.isContactSales && (
                          <span className="text-gray-600 text-sm">
                            {billingPeriod === "yearly" ? "per month" : "/month"}
                          </span>
                        )}
                      </div>
                      {!plan.isContactSales && billingPeriod === "yearly" && (
                        <p className="text-sm text-gray-600 mt-1">
                          billed annually
                        </p>
                      )}
                      {plan.productCredits && (
                        <p className="text-sm text-gray-600 mt-2">
                          {plan.productCredits} product credits/month
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6" data-testid={`text-description-${plan.displayName.toLowerCase()}`}>
                      {plan.description}
                    </p>

                    {/* CTA Button */}
                    <Button
                      className={`w-full font-medium transition-all ${
                        isPopular
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                          : plan.isContactSales
                          ? 'bg-gray-900 hover:bg-gray-800 text-white'
                          : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'
                      }`}
                      onClick={() => handlePlanSelect(plan)}
                      data-testid={`button-select-${plan.displayName.toLowerCase()}`}
                    >
                      {plan.isContactSales ? "Contact Sales" : `Start ${plan.displayName}`}
                    </Button>
                  </CardHeader>

                  <CardContent className="pt-6 border-t border-gray-100">
                    {/* Features */}
                    <div className="space-y-3">
                      {(plan.features as string[])?.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compare Plans Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-gray-200">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="text-compare-title">
            Compare plans
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-medium text-gray-900 w-1/3"></th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Basic</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-indigo-50">Pro</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Plus</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((section, sectionIndex) => (
                <React.Fragment key={`section-${sectionIndex}`}>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td colSpan={5} className="py-3 px-4 font-semibold text-gray-900 text-sm">
                      {section.category}
                    </td>
                  </tr>
                  {section.features.map((feature, featureIndex) => (
                    <tr 
                      key={`feature-${sectionIndex}-${featureIndex}`}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 text-sm text-gray-700 flex items-center gap-2">
                        {feature.name}
                        <Info className="w-3.5 h-3.5 text-gray-400" />
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? (
                            <Check className="w-5 h-5 text-indigo-600 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-sm text-gray-700">{feature.basic}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center bg-indigo-50">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? (
                            <Check className="w-5 h-5 text-indigo-600 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-sm text-gray-700">{feature.pro}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof feature.plus === 'boolean' ? (
                          feature.plus ? (
                            <Check className="w-5 h-5 text-indigo-600 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-sm text-gray-700">{feature.plus}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <Check className="w-5 h-5 text-indigo-600 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-sm text-gray-700">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section with Testimonial */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="text-cta-title">
                Get started with AI Commerce Studio
              </h2>
              <p className="text-indigo-100 text-lg mb-8">
                Join thousands of businesses already optimizing their e-commerce listings with AI-powered agents.
              </p>
              <Link href="/products">
                <Button 
                  className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
                  data-testid="button-cta-start"
                >
                  Try Our Agents
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-indigo-100 text-lg italic mb-4">
                "The AI agents transformed our entire product catalog in days. Our conversion rate increased by 85% and we're saving 20 hours per week. This is a game-changer for e-commerce."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  SC
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Chen</div>
                  <div className="text-indigo-200 text-sm">E-commerce Manager, Fashion Forward Co</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-testid="text-faq-title">
          Frequently asked questions
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How does the free trial work?</h3>
            <p className="text-gray-600">Start with a 14-day free trial on any plan. No credit card required. Full access to all features during the trial period.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change my plan anytime?</h3>
            <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in customer support?</h3>
            <p className="text-gray-600">All plans include email support. Pro and Enterprise plans get priority support with faster response times and phone/chat access.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer custom enterprise solutions?</h3>
            <p className="text-gray-600">Yes, we provide custom enterprise solutions with dedicated infrastructure, custom integrations, and personalized support.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How secure is my data?</h3>
            <p className="text-gray-600">We use bank-grade encryption, SOC 2 compliance, and regular security audits to ensure your data is completely secure.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
