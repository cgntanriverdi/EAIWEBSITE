import { motion, useScroll, useTransform } from 'framer-motion';
import { DollarSign, TrendingUp, BarChart3, Zap, ArrowRight, Play, Check, Target, AlertCircle, LineChart, Activity } from 'lucide-react';
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
        {/* Hero Section - Navy Blue */}
        <section ref={heroRef} className="relative pt-32 pb-32 px-4 min-h-screen flex items-center bg-[#0A2540]">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              style={{ y, opacity }}
              className="text-center relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <p className="text-sm uppercase tracking-wider text-gray-400 font-medium mb-8">
                  AI-POWERED PRICING OPTIMIZATION
                </p>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-2xl mb-8">
                  <DollarSign className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  Pricing Agent
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Unlock optimal pricing with AI-powered intelligence. Maximize profits while staying competitive in real-time.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  size="lg" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-medium rounded-lg shadow-lg transition-all duration-300"
                  data-testid="button-optimize-pricing"
                >
                  Optimize Pricing <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 text-lg rounded-lg bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
                  data-testid="button-see-analysis"
                >
                  <Play className="mr-2 w-5 h-5" /> See Analysis
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Strategy Simulator - Light Cream Background */}
        <section className="py-24 px-4 relative bg-[#F7F4F0]">
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
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Choose Your<br />Pricing Strategy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how different pricing strategies impact your bottom line in real-time
              </p>
            </motion.div>

            {/* Strategy Selector */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {pricingStrategies.map((strategy, index) => (
                <motion.button
                  key={strategy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedStrategy(index)}
                  className={`group relative p-6 rounded-xl transition-all duration-300 text-left ${
                    selectedStrategy === index
                      ? 'bg-white border-2 border-indigo-600 shadow-md'
                      : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                  data-testid={`button-strategy-${index}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{strategy.name}</h3>
                    <div className="text-2xl font-bold text-indigo-600">
                      {strategy.impact}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{strategy.description}</p>
                  <div className="h-1 bg-indigo-600 rounded-full" />
                </motion.button>
              ))}
            </div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="relative bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
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
                    >
                      <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-white transition-all duration-300">
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

        {/* Features Section - White Background */}
        <section className="py-24 px-4 relative bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-sm uppercase tracking-wider text-gray-600 font-medium mb-4">
                INTELLIGENT FEATURES
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Intelligent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced algorithms analyze market conditions to recommend optimal pricing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Section - Amber (Keep as-is) */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-amber-50 border border-amber-200 rounded-xl p-8 overflow-hidden"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-amber-300">
                  <AlertCircle className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Don't Leave Money on the Table
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Studies show that <span className="text-amber-700 font-semibold">60% of businesses</span> are leaving 20-40% of potential revenue on the table due to suboptimal pricing. Our AI-powered pricing agent ensures you capture every opportunity while remaining competitive.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - Navy Blue */}
        <section className="py-24 px-4 relative overflow-hidden bg-[#0A2540]">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Maximize Your<br />Revenue Potential
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of businesses optimizing their pricing with AI intelligence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-lg shadow-lg transition-all duration-300"
                  data-testid="button-start-optimizing"
                >
                  Start Optimizing <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/pricing">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg border-2 border-white bg-transparent transition-all duration-300"
                    data-testid="link-view-plans"
                  >
                    View Plans
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingAgentPage;
