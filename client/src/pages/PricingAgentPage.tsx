import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, BarChart3, Zap, ArrowRight, Play, Check, Target, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';

const features = [
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description: 'Real-time competitor price tracking and market trend analysis to optimize your pricing strategy.'
  },
  {
    icon: Target,
    title: 'Dynamic Pricing',
    description: 'Automatically adjust prices based on demand, competition, and inventory levels for maximum profit.'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Optimization',
    description: 'AI algorithms that find the sweet spot between competitiveness and profitability.'
  }
];

const useCases = [
  {
    title: 'Competitive Price Monitoring',
    description: 'Stay ahead of competitors with real-time price tracking and automated alerts',
    results: '23% increase in profit margins',
    metrics: {
      pricePoints: '50,000+',
      competitors: '200+',
      markets: '15',
      accuracy: '98.7%'
    }
  },
  {
    title: 'Dynamic Pricing Strategy',
    description: 'Automatically adjust prices based on market conditions and demand patterns',
    results: '35% boost in revenue',
    metrics: {
      adjustments: '1,000+/day',
      response: '<15 min',
      optimization: '24/7',
      impact: '+35%'
    }
  },
  {
    title: 'Inventory-Based Pricing',
    description: 'Optimize prices based on stock levels, seasonality, and demand forecasting',
    results: '18% reduction in dead stock',
    metrics: {
      forecast: '99.2%',
      turnover: '+45%',
      waste: '-68%',
      efficiency: '87%'
    }
  }
];

const pricingStrategies = [
  {
    name: 'Penetration Pricing',
    description: 'Enter new markets with competitive prices',
    increase: '+127%',
    color: 'from-green-400 to-emerald-500'
  },
  {
    name: 'Value-Based Pricing',
    description: 'Price based on customer perceived value',
    increase: '+89%',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    name: 'Premium Positioning',
    description: 'Establish brand as premium with strategic pricing',
    increase: '+156%',
    color: 'from-teal-400 to-cyan-500'
  }
];

const PricingAgentPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />
      <div className="overflow-hidden">
        {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl mb-8 shadow-lg"
            >
              <DollarSign className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Agent
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Unlock optimal pricing with AI-powered market intelligence. Maximize profits while staying competitive in real-time.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-optimize-pricing">
                Optimize Pricing <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-2xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300" data-testid="button-see-analysis">
                <Play className="mr-2 w-5 h-5" /> See Analysis
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Price Elements */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-12 text-3xl font-bold text-green-500/30 select-none"
        >
          $24.99
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 18, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-16 text-4xl font-bold text-emerald-500/30 select-none"
        >
          ↗ +23%
        </motion.div>
      </section>

      {/* Pricing Strategies Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2 rounded-full">
              Proven Strategies
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Revenue Growth Strategies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              AI-powered pricing strategies that adapt to your market and maximize revenue.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${strategy.color} rounded-full opacity-10 translate-x-8 -translate-y-8`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {strategy.name}
                    </h3>
                    <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${strategy.color}`}>
                      {strategy.increase}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {strategy.description}
                  </p>
                  <div className="mt-6">
                    <div className={`h-2 bg-gradient-to-r ${strategy.color} rounded-full`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Intelligent Price Intelligence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced algorithms analyze market conditions to recommend optimal pricing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Real Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how businesses optimize their pricing with measurable impact.
            </p>
          </motion.div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-2 h-16 rounded-full mb-6" />
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold mb-6">
                      <Check className="w-5 h-5" />
                      {useCase.results}
                    </div>
                  </div>
                  
                  {/* Metrics Dashboard */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(useCase.metrics).map(([key, value], metricIndex) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * metricIndex, duration: 0.4 }}
                          className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                        >
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {value}
                          </div>
                          <div className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400 font-semibold">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700 rounded-3xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-2">
                  Don't Leave Money on the Table
                </h3>
                <p className="text-amber-700 dark:text-amber-300 text-lg leading-relaxed">
                  Studies show that 60% of businesses are leaving 20-40% of potential revenue on the table due to suboptimal pricing. 
                  Our AI-powered pricing agent ensures you capture every opportunity while remaining competitive.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Maximize Your Revenue?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses optimizing their pricing with AI-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-start-optimizing">
                Start Optimizing <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/pricing">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl transition-all duration-300" data-testid="link-view-plans">
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