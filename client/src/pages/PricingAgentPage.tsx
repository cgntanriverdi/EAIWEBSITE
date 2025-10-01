import { motion, useScroll, useTransform } from 'framer-motion';
import { DollarSign, TrendingUp, BarChart3, Zap, ArrowRight, Play, Check, Target, AlertCircle, LineChart, Activity, Sparkles, Brain, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import { useState, useRef } from 'react';

const features = [
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description: 'Real-time competitor tracking and market trend analysis that gives you the intelligence to stay ahead.'
  },
  {
    icon: Target,
    title: 'Dynamic Pricing',
    description: 'Automatically adjust prices based on demand, competition, and inventory for maximum profitability.'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Optimization',
    description: 'AI algorithms find the perfect balance between competitiveness and profit margins.'
  }
];

const pricingStrategies = [
  {
    id: 1,
    name: 'Penetration',
    fullName: 'Market Penetration',
    description: 'Enter new markets with competitive pricing',
    impact: '+127%',
    metric: 'Market Share',
    stats: { revenue: '+89%', volume: '+156%', margin: '+45%' }
  },
  {
    id: 2,
    name: 'Value-Based',
    fullName: 'Value-Based Pricing',
    description: 'Price based on customer perceived value',
    impact: '+89%',
    metric: 'Revenue',
    stats: { revenue: '+112%', volume: '+67%', margin: '+78%' }
  },
  {
    id: 3,
    name: 'Premium',
    fullName: 'Premium Positioning',
    description: 'Establish brand as premium with strategic pricing',
    impact: '+156%',
    metric: 'Profit Margin',
    stats: { revenue: '+145%', volume: '+34%', margin: '+203%' }
  }
];

const howItWorksSteps = [
  {
    icon: Upload,
    title: 'Input',
    description: 'Upload your product catalog and market data'
  },
  {
    icon: Brain,
    title: 'AI Analysis',
    description: 'Our AI analyzes market trends and competitor pricing'
  },
  {
    icon: Sparkles,
    title: 'Optimized Pricing',
    description: 'Receive data-driven pricing recommendations'
  }
];

const PricingAgentPage = () => {
  const [selectedStrategy, setSelectedStrategy] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="relative overflow-hidden">
        {/* Hero Section - Navy Gradient with Dashboard Mockup */}
        <section ref={heroRef} className="relative pt-20 pb-32 px-4 overflow-hidden">
          {/* Navy Gradient Background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(135deg, #0A2540 0%, #1e3a5f 50%, #0F172A 100%)'
            }}
          />
          
          {/* Smooth Fade to White */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-0" />

          <div className="max-w-7xl mx-auto relative z-10 pt-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <motion.div
                style={{ y, opacity }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm" data-testid="badge-ai-pricing">
                  AI-powered pricing optimization
                </Badge>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Pricing that maximizes revenue
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                  Unlock optimal pricing with AI-powered intelligence. Maximize profits while staying competitive in real-time.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
                    data-testid="button-optimize-pricing"
                  >
                    <Link href="/pricing">
                      Optimize Pricing <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent backdrop-blur-sm"
                    data-testid="button-see-demo"
                    onClick={() => document.getElementById('strategy-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Play className="mr-2 w-5 h-5" /> See demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex items-center gap-8 text-blue-100 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Free trial included</span>
                  </div>
                </div>
              </motion.div>

              {/* Right: Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                {/* Floating KPI Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -top-8 -left-8 bg-white rounded-xl shadow-xl p-4 z-20"
                  data-testid="kpi-revenue-increase"
                >
                  <div className="text-2xl font-bold text-indigo-600">+156%</div>
                  <div className="text-sm text-gray-600">Revenue increase</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-4 z-20"
                  data-testid="kpi-prices-optimized"
                >
                  <div className="text-2xl font-bold text-indigo-600">3.2M+</div>
                  <div className="text-sm text-gray-600">Prices optimized</div>
                </motion.div>

                {/* Browser Chrome */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" data-testid="chrome-dot-red" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" data-testid="chrome-dot-yellow" />
                      <div className="w-3 h-3 rounded-full bg-green-400" data-testid="chrome-dot-green" />
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded px-3 py-1.5 text-xs text-gray-600">
                      <span className="text-gray-400">🔒</span>
                      <span className="font-mono">pricing-ai.com/dashboard</span>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="bg-gray-50 p-6">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900">Pricing Dashboard</span>
                      </div>
                    </div>

                    {/* Live Stats Cards */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-white rounded-lg p-3 border border-gray-200" data-testid="stat-prices-optimized">
                        <div className="text-xs text-gray-500 mb-1">Prices optimized</div>
                        <div className="text-xl font-bold text-gray-900">3,421</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200" data-testid="stat-accuracy">
                        <div className="text-xs text-gray-500 mb-1">Accuracy</div>
                        <div className="text-xl font-bold text-gray-900">97%</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200" data-testid="stat-response-time">
                        <div className="text-xs text-gray-500 mb-1">Response</div>
                        <div className="text-xl font-bold text-gray-900">0.3s</div>
                      </div>
                    </div>

                    {/* Price Recommendation Cards */}
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 border border-gray-200" data-testid="price-card-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">Wireless Headphones</span>
                          <Badge className="bg-green-100 text-green-700 text-xs">Optimal</Badge>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-900">$129</span>
                          <span className="text-sm text-gray-500 line-through">$149</span>
                          <span className="text-sm text-green-600">+12% sales</span>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-gray-200" data-testid="price-card-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">Smart Watch Pro</span>
                          <Badge className="bg-blue-100 text-blue-700 text-xs">Analyzing</Badge>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-900">$299</span>
                          <span className="text-sm text-gray-500 line-through">$349</span>
                          <span className="text-sm text-blue-600">Processing...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section - White Background with Stroke-Only Icons */}
        <section className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
                POWERFUL FEATURES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything you need to optimize pricing
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                  data-testid={`feature-${index}`}
                >
                  {/* Stroke-only icon with ring border */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 mb-6">
                    <feature.icon className="w-7 h-7 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section - Gray-50 Background */}
        <section className="py-32 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
                HOW IT WORKS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Three steps to optimized pricing
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                  data-testid={`how-it-works-step-${index}`}
                >
                  {/* Connector Line */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-300" />
                  )}
                  
                  <div className="text-center relative z-10">
                    {/* Step Number Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-2xl font-bold mb-6">
                      {index + 1}
                    </div>
                    
                    {/* Icon with minimal style */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gray-300 mb-6 bg-white">
                      <step.icon className="w-9 h-9 text-gray-900" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Simulator - White Background */}
        <section id="strategy-section" className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
                INTERACTIVE STRATEGY SIMULATOR
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Pricing Strategy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how different pricing strategies impact your bottom line in real-time
              </p>
            </motion.div>

            {/* Strategy Selector */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {pricingStrategies.map((strategy, index) => (
                <motion.button
                  key={strategy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedStrategy(index)}
                  className={`group relative p-6 rounded-xl transition-all duration-300 text-left shadow-lg ${
                    selectedStrategy === index
                      ? 'bg-indigo-600 text-white shadow-xl'
                      : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl'
                  }`}
                  data-testid={`button-strategy-${index}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-xl font-bold ${selectedStrategy === index ? 'text-white' : 'text-gray-900'}`}>
                      {strategy.name}
                    </h3>
                    <div className={`text-2xl font-bold ${selectedStrategy === index ? 'text-white' : 'text-indigo-600'}`}>
                      {strategy.impact}
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed ${selectedStrategy === index ? 'text-blue-100' : 'text-gray-600'}`}>
                    {strategy.description}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Enhanced Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="relative bg-white rounded-2xl p-12 border border-gray-200 shadow-xl">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {pricingStrategies[selectedStrategy].fullName}
                  </h3>
                  <p className="text-gray-600">
                    {pricingStrategies[selectedStrategy].description}
                  </p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-3 gap-6 mb-12">
                  {Object.entries(pricingStrategies[selectedStrategy].stats).map(([key, value], idx) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                      className="relative group"
                      data-testid={`kpi-${key}`}
                    >
                      <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-white transition-all duration-300 shadow-md">
                        <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          {value}
                        </div>
                        <div className="flex items-center gap-2 text-indigo-600">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-semibold">Projected increase</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart Visualization */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="flex items-end gap-3 h-32">
                    {[...Array(12)].map((_, i) => {
                      const height = 30 + (Math.sin((i + selectedStrategy * 3) * 0.5) * 30) + (selectedStrategy * 15);
                      return (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.6 + i * 0.05, duration: 0.6 }}
                          className="flex-1 bg-indigo-600 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                          data-testid={`chart-bar-${i}`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-4 text-sm text-gray-500">
                    <span>Jan</span>
                    <span>Jun</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - Gray-50 Background */}
        <section className="py-32 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to optimize your pricing?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI to maximize revenue and stay competitive.
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
                data-testid="button-start-optimizing"
              >
                <Link href="/pricing">
                  Start Optimizing <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default PricingAgentPage;
