import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Star, Sparkles, Zap } from "lucide-react";
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
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Skeleton className="h-8 w-40 mx-auto mb-6 rounded-full" />
            <Skeleton className="h-16 w-96 mx-auto mb-8 rounded-2xl" />
            <Skeleton className="h-8 w-[600px] mx-auto rounded-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-8xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl p-8">
                <Skeleton className="h-[500px] rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !plans) {
    return (
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-md border border-red-200 shadow-2xl rounded-2xl p-12">
            <p className="text-red-600 text-lg font-medium">Error loading pricing plans. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-32 px-4 overflow-hidden" id="pricing">
      {/* Glassmorphic background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-pink-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header section with enhanced animations */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-indigo-50 text-indigo-700 border-indigo-200 px-4 py-2">
              <Sparkles className="w-3 h-3 mr-2" />
              Pricing Plans
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight" 
            data-testid="text-pricing-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Choose Your Plan
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" 
            data-testid="text-pricing-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Flexible pricing that scales with your business. Start with individual agents or go full automation.
          </motion.p>
        </motion.div>

        {/* Pricing cards with parallax and glassmorphic design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-8xl mx-auto">
          {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`group relative ${
                  plan.isPopular ? 'scale-105 z-10' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                data-testid={`card-pricing-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Glassmorphic card */}
                <div className={`relative h-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 group-hover:bg-white group-hover:shadow-3xl ${
                  plan.isPopular ? 'ring-2 ring-indigo-500 bg-white' : ''
                }`}>
                  
                  {/* Popular badge with glow */}
                  {plan.isPopular && (
                    <motion.div
                      className="absolute -top-1 -right-1 z-20"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 shadow-lg" data-testid="badge-most-popular">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}
                  
                  {/* Plan header */}
                  <CardHeader className="text-center pb-6 pt-8">
                    <div className="mb-4">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                        plan.isPopular ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gradient-to-br from-gray-400 to-gray-600'
                      }`}>
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-3" 
                      data-testid={`text-plan-name-${plan.name.toLowerCase()}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {plan.displayName}
                    </motion.h3>
                    <p className="text-gray-600 text-sm leading-relaxed" data-testid={`text-plan-description-${plan.name.toLowerCase()}`}>
                      {plan.description}
                    </p>
                    
                    {/* Product credits badge */}
                    {plan.productCredits && (
                      <div className="mt-4">
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                          {plan.name === 'plus' ? `${plan.productCredits}+ products/month` : `${plan.productCredits} products/month`}
                        </Badge>
                      </div>
                    )}
                    {plan.productCredits === null && (
                      <div className="mt-4">
                        <Badge className="text-xs bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                          Unlimited products
                        </Badge>
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent className="pt-0 px-8 pb-8">
                    {/* Pricing */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center gap-2">
                        <motion.span 
                          className="text-4xl lg:text-5xl font-bold text-gray-900" 
                          data-testid={`text-plan-price-${plan.name.toLowerCase()}`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {formatPrice(plan.price)}
                        </motion.span>
                        <span className="text-gray-500 text-lg" data-testid={`text-plan-period-${plan.name.toLowerCase()}`}>
                          {formatPeriod(plan)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Features list */}
                    <ul className="space-y-4 mb-8">
                      {plan.features?.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start gap-3" 
                          data-testid={`feature-${plan.name.toLowerCase()}-${featureIndex}`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                        </motion.li>
                      )) || []}
                    </ul>
                    
                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className={`w-full h-12 font-semibold shadow-lg transition-all duration-300 ${
                          plan.isPopular 
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0' 
                            : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                        }`}
                        size="lg"
                        onClick={() => handlePlanSelect(plan)}
                        data-testid={`button-select-${plan.name.toLowerCase()}`}
                      >
                        {plan.isContactSales ? 'Contact Sales' : 'Get Started'}
                      </Button>
                    </motion.div>
                  </CardContent>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                      plan.isPopular ? 'bg-indigo-500/5' : 'bg-gray-500/5'
                    }`}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
          ))}
        </div>
        
        {/* Enhanced guarantee section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <p className="text-gray-700 text-lg font-medium mb-2" data-testid="text-money-back-guarantee">
              30-day money-back guarantee
            </p>
            <p className="text-gray-500 text-sm">
              No setup fees • Cancel anytime • 24/7 support included
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Floating background particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`pricing-particle-${i}`}
          className="absolute w-2 h-2 bg-indigo-400/20 rounded-full"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
}