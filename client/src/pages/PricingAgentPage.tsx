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
    color: 'from-emerald-400 to-green-500',
    stats: { revenue: '+89%', volume: '+156%', margin: '+45%' }
  },
  {
    id: 2,
    name: 'Value-Based',
    fullName: 'Value-Based Pricing',
    description: 'Price based on customer perceived value',
    impact: '+89%',
    metric: 'Revenue',
    color: 'from-teal-400 to-cyan-500',
    stats: { revenue: '+112%', volume: '+67%', margin: '+78%' }
  },
  {
    id: 3,
    name: 'Premium',
    fullName: 'Premium Positioning',
    description: 'Establish brand as premium with strategic pricing',
    impact: '+156%',
    metric: 'Profit Margin',
    color: 'from-cyan-400 to-blue-500',
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
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-[#050708] dark:bg-[#050708]">
      <Navigation />
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-emerald-500/15 via-green-500/8 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/8 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-32 pb-32 px-4 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              style={{ y, opacity }}
              className="text-center relative z-10"
            >
              {/* Floating Price Tags */}
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 right-20 opacity-15 pointer-events-none hidden lg:block"
              >
                <div className="text-6xl font-bold text-emerald-400">$49</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 rounded-[2.5rem] mb-12 shadow-2xl shadow-emerald-500/40 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-[2.5rem]" />
                <DollarSign className="w-16 h-16 text-white relative z-10" strokeWidth={1.5} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
                  Pricing
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mt-4">
                    Agent
                  </span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Unlock optimal pricing with{' '}
                <span className="font-medium text-emerald-400">AI-powered intelligence</span>. Maximize profits while staying competitive in real-time.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white px-10 py-7 text-xl font-medium rounded-[1.25rem] shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-600/60 transition-all duration-500 hover:scale-105 border-0"
                  data-testid="button-optimize-pricing"
                >
                  Optimize Pricing <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="px-10 py-7 text-xl rounded-[1.25rem] hover:bg-white/5 backdrop-blur-sm transition-all duration-500 text-gray-300"
                  data-testid="button-see-analysis"
                >
                  <Play className="mr-3 w-6 h-6" fill="currentColor" /> See Analysis
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Chart Elements */}
            <motion.div
              animate={{ 
                y: [0, 35, 0],
                scale: [1, 0.95, 1]
              }}
              transition={{ 
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-32 left-24 opacity-15 pointer-events-none hidden lg:block"
            >
              <LineChart className="w-28 h-28 text-teal-400" strokeWidth={1} />
            </motion.div>
          </div>
        </section>

        {/* Strategy Simulator */}
        <section className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <Badge variant="outline" className="mb-6 text-base px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border-emerald-500/30">
                <Activity className="w-4 h-4 mr-2 inline text-emerald-400" />
                Interactive Strategy Simulator
              </Badge>
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Choose Your<br />Pricing Strategy
              </h2>
              <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light">
                See how different pricing strategies impact your{' '}
                <span className="text-emerald-400 font-medium">bottom line</span> in real-time
              </p>
            </motion.div>

            {/* Strategy Selector */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {pricingStrategies.map((strategy, index) => (
                <motion.button
                  key={strategy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedStrategy(index)}
                  className={`group relative p-8 rounded-3xl transition-all duration-500 text-left ${
                    selectedStrategy === index
                      ? 'bg-white/10 backdrop-blur-xl border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/20'
                      : 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/8 hover:border-white/20'
                  }`}
                  data-testid={`button-strategy-${index}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{strategy.name}</h3>
                    <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${strategy.color}`}>
                      {strategy.impact}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{strategy.description}</p>
                  <div className={`h-1.5 bg-gradient-to-r ${strategy.color} rounded-full`} />
                  
                  {selectedStrategy === index && (
                    <motion.div
                      layoutId="activeStrategy"
                      className={`absolute inset-0 bg-gradient-to-br ${strategy.color} opacity-10 rounded-3xl -z-10`}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Glass Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 shadow-2xl overflow-hidden">
                {/* Selected Strategy Gradient */}
                <motion.div
                  key={selectedStrategy}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 bg-gradient-to-br ${pricingStrategies[selectedStrategy].color} rounded-[3rem]`}
                />
                
                {/* Dashboard Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {pricingStrategies[selectedStrategy].fullName}
                      </h3>
                      <p className="text-gray-400">
                        {pricingStrategies[selectedStrategy].description}
                      </p>
                    </div>
                    <motion.div
                      key={`impact-${selectedStrategy}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${pricingStrategies[selectedStrategy].color}`}
                    >
                      {pricingStrategies[selectedStrategy].impact}
                    </motion.div>
                  </div>

                  {/* KPI Cards with 3D Depth */}
                  <div className="grid grid-cols-3 gap-6">
                    {Object.entries(pricingStrategies[selectedStrategy].stats).map(([key, value], idx) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                        className="relative group"
                      >
                        {/* Shadow layer for 3D effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 rounded-2xl transform translate-y-1 blur-sm" />
                        
                        {/* Main card */}
                        <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 group-hover:border-white/30 transition-all duration-300">
                          <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-3">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <motion.div
                            key={`${selectedStrategy}-${key}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + idx * 0.1, type: "spring", stiffness: 200 }}
                            className="text-5xl font-bold text-white mb-2"
                          >
                            {value}
                          </motion.div>
                          <div className="flex items-center gap-2 text-emerald-400">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-semibold">Projected increase</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Chart Visualization */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex items-end gap-4 h-32">
                      {[...Array(12)].map((_, i) => {
                        const height = 30 + (Math.sin((i + selectedStrategy * 3) * 0.5) * 30) + (selectedStrategy * 15);
                        return (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 0.6 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                            className={`flex-1 bg-gradient-to-t ${pricingStrategies[selectedStrategy].color} rounded-t-lg opacity-70 hover:opacity-100 transition-opacity cursor-pointer`}
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

                {/* Holographic UI Elements */}
                <div className="absolute top-6 right-6 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-emerald-400/30 backdrop-blur-sm" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Intelligent Pricing
              </h2>
              <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light">
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
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/30 group-hover:shadow-emerald-500/50 group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-white/5 backdrop-blur-xl border border-amber-500/30 rounded-[2rem] p-10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent" />
              
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-16 h-16 bg-amber-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <AlertCircle className="w-8 h-8 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Don't Leave Money on the Table
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Studies show that <span className="text-amber-400 font-semibold">60% of businesses</span> are leaving 20-40% of potential revenue on the table due to suboptimal pricing. Our AI-powered pricing agent ensures you capture every opportunity while remaining competitive.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0tMiAwdjJoMnYtMmgtMnptLTIgMHYyaDJ2LTJoLTJ6bS0yIDB2Mmgydi0yaC0yem0tMiAwdjJoMnYtMmgtMnptLTIgMHYyaDJ2LTJoLTJ6bS0yIDB2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMCAydjJoMnYtMmgtMnptMCAydjJoMnYtMmgtMnptMCAydjJoMnYtMmgtMnptMCAydjJoMnYtMmgtMnptMCAydjJoMnYtMmgtMnptMCAydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Maximize Your<br />Revenue Potential
              </h2>
              <p className="text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto font-light">
                Join thousands of businesses optimizing their pricing with AI intelligence
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-7 text-xl font-medium rounded-[1.25rem] shadow-2xl hover:shadow-white/40 transition-all duration-500 hover:scale-105 border-0"
                  data-testid="button-start-optimizing"
                >
                  Start Optimizing <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Link href="/pricing">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-white hover:bg-white/10 px-10 py-7 text-xl rounded-[1.25rem] backdrop-blur-sm transition-all duration-500"
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
