import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { type PricingPlan } from "@shared/schema";
import { 
  Check, 
  Star, 
  Sparkles, 
  Zap, 
  ArrowRight,
  Shield,
  Headphones,
  Rocket,
  Crown,
  Users,
  Building,
  Briefcase,
  CreditCard
} from "lucide-react";

export default function PricingPage() {
  const heroRef = useRef(null);
  const plansRef = useRef(null);
  const faqRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: plansProgress } = useScroll({
    target: plansRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: faqProgress } = useScroll({
    target: faqRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const heroY = useTransform(heroProgress, [0, 1], [0, -100]);
  const plansY = useTransform(plansProgress, [0, 1], [0, -50]);
  const faqY = useTransform(faqProgress, [0, 1], [0, -75]);

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

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock expert assistance"
    },
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Optimized for maximum performance"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built for teams of any size"
    }
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Start with a 14-day free trial on any plan. No credit card required. Full access to all features during the trial period."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing."
    },
    {
      question: "What's included in customer support?",
      answer: "All plans include email support. Pro and Enterprise plans get priority support with faster response times and phone/chat access."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes, we provide custom enterprise solutions with dedicated infrastructure, custom integrations, and personalized support."
    },
    {
      question: "How secure is my data?",
      answer: "We use bank-grade encryption, SOC 2 compliance, and regular security audits to ensure your data is completely secure."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers."
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
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
      </div>
    );
  }

  if (error || !plans) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="bg-white/95 backdrop-blur-md border border-red-200 shadow-2xl rounded-2xl p-12">
              <p className="text-red-600 text-lg font-medium">Error loading pricing plans. Please try again later.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
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
        </motion.div>

        {/* Floating Pricing Cards */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`price-particle-${i}`}
            className="absolute w-16 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/60 text-xs font-mono"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            ${Math.floor(Math.random() * 200)}
          </motion.div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2" data-testid="badge-pricing-hero">
                <CreditCard className="w-3 h-3 mr-2" />
                Choose Your Plan
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-testid="text-pricing-title"
            >
              Simple, transparent{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                pricing
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-pricing-subtitle"
            >
              Start free, scale as you grow. No hidden fees, no surprises. Cancel anytime.
            </motion.p>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 flex gap-2">
                <div className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-medium">Monthly</div>
                <div className="text-white/60 px-4 py-2 text-sm">Yearly (Save 20%)</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section ref={plansRef} className="relative py-32 px-6 overflow-hidden" id="pricing">
        {/* Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"
          style={{ y: plansY }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-indigo-50 text-indigo-700 border-indigo-200 px-4 py-2" data-testid="badge-plans">
              <Sparkles className="w-3 h-3 mr-2" />
              Pricing Plans
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight" data-testid="text-plans-title">
              Choose your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                perfect plan
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" data-testid="text-plans-subtitle">
              Start with our free plan and upgrade as your business grows. All plans include our core AI agents.
            </p>
          </motion.div>

          {/* Plans Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-8xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {plans?.map((plan, index) => {
              const isPopular = plan.displayName === "Pro";
              const planIcons = {
                "Basic": Users,
                "Pro": Rocket,
                "Plus": Crown,
                "Enterprise": Building
              };
              const IconComponent = planIcons[plan.displayName as keyof typeof planIcons] || Briefcase;

              return (
                <motion.div
                  key={plan.id}
                  className={`relative group ${isPopular ? 'scale-105 lg:scale-110' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: isPopular ? 1.05 : 1.02 }}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-1 shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}

                  <Card className={`h-full bg-white/95 backdrop-blur-md border shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 ${
                    isPopular 
                      ? 'border-orange-200 shadow-orange-200/50 hover:shadow-orange-300/50' 
                      : 'border-gray-200 hover:shadow-3xl'
                  } group-hover:border-indigo-300`}>
                    
                    {/* Gradient background for popular plan */}
                    {isPopular && (
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 opacity-50" />
                    )}

                    <CardHeader className="text-center pb-8 pt-12 relative">
                      {/* Icon */}
                      <motion.div 
                        className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center ${
                          isPopular 
                            ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                            : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                        } group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </motion.div>

                      {/* Plan name */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid={`text-plan-${plan.displayName.toLowerCase()}`}>
                        {plan.displayName}
                      </h3>
                      
                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-center justify-center">
                          <span className="text-5xl font-bold text-gray-900" data-testid={`text-price-${plan.displayName.toLowerCase()}`}>
                            {formatPrice(plan.price)}
                          </span>
                          {!plan.isContactSales && (
                            <span className="text-gray-600 text-lg ml-2">/{formatPeriod(plan)}</span>
                          )}
                        </div>
                        {plan.isContactSales && (
                          <p className="text-gray-600 text-sm mt-2">Custom pricing for your needs</p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-8" data-testid={`text-description-${plan.displayName.toLowerCase()}`}>
                        {plan.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0 pb-12 px-8 relative">
                      {/* Features */}
                      <div className="space-y-4 mb-8">
                        {(plan.features as string[])?.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) }}
                            viewport={{ once: true }}
                          >
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full font-semibold py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 ${
                          isPopular
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg'
                            : plan.isContactSales
                            ? 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white'
                            : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white'
                        }`}
                        onClick={() => handlePlanSelect(plan)}
                        data-testid={`button-select-${plan.displayName.toLowerCase()}`}
                      >
                        {plan.isContactSales ? (
                          <>
                            Contact Sales
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        ) : (
                          <>
                            Start {plan.displayName}
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2">
              <Shield className="w-3 h-3 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Enterprise-grade{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                features
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Built with security, performance, and reliability at the core.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="relative py-32 px-6 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
          style={{ y: faqY }}
        />
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-indigo-50 text-indigo-700 border-indigo-200 px-4 py-2">
              <Sparkles className="w-3 h-3 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Ready to get{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                started?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join thousands of businesses transforming their e-commerce with AI.
            </p>
            
            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              data-testid="button-start-free-trial-cta"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}