import { motion } from 'framer-motion';
import { Upload, Globe, Zap, ArrowRight, Play, Check, ShoppingCart, Share2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

const features = [
  {
    icon: Globe,
    title: 'Multi-Platform Distribution',
    description: 'Publish to Amazon, eBay, Shopify, Etsy, and 50+ other platforms simultaneously with one click.'
  },
  {
    icon: Zap,
    title: 'Instant Synchronization',
    description: 'Real-time inventory and pricing updates across all platforms to prevent overselling.'
  },
  {
    icon: Share2,
    title: 'Smart Channel Optimization',
    description: 'Automatically optimize listings for each platform\'s unique requirements and algorithms.'
  }
];

const platforms = [
  { name: 'Amazon', color: 'from-orange-400 to-orange-600', users: '300M+' },
  { name: 'eBay', color: 'from-blue-400 to-blue-600', users: '180M+' },
  { name: 'Shopify', color: 'from-green-400 to-green-600', users: '1.7M+' },
  { name: 'Etsy', color: 'from-orange-400 to-red-500', users: '90M+' },
  { name: 'Facebook', color: 'from-blue-500 to-blue-700', users: '2.9B+' },
  { name: 'Instagram', color: 'from-pink-400 to-purple-600', users: '2B+' },
  { name: 'Google Shopping', color: 'from-red-400 to-yellow-500', users: '1B+' },
  { name: 'Walmart', color: 'from-blue-600 to-yellow-400', users: '240M+' }
];

const useCases = [
  {
    title: 'Multi-Channel E-commerce',
    description: 'Expand your reach by selling across all major marketplaces simultaneously',
    results: '300% increase in sales volume',
    stats: {
      timeReduction: '95%',
      reachIncrease: '300%',
      platforms: '50+',
      efficiency: '98%'
    }
  },
  {
    title: 'Inventory Management',
    description: 'Centralized inventory control prevents overselling and stockouts across channels',
    results: '99.8% inventory accuracy',
    stats: {
      accuracy: '99.8%',
      oversells: '0.2%',
      updates: 'Real-time',
      sync: '<1 sec'
    }
  },
  {
    title: 'Brand Consistency',
    description: 'Maintain consistent brand messaging and product information across all platforms',
    results: '85% improvement in brand recognition',
    stats: {
      consistency: '100%',
      compliance: '99%',
      updates: 'Instant',
      quality: '95%'
    }
  }
];

const automationSteps = [
  {
    step: 1,
    title: 'Connect Platforms',
    description: 'Link your existing marketplace accounts with secure API connections',
    time: '5 min'
  },
  {
    step: 2,
    title: 'Configure Products',
    description: 'Set up product catalogs with platform-specific optimizations',
    time: '10 min'
  },
  {
    step: 3,
    title: 'Auto-Publish',
    description: 'Automatically distribute listings with real-time synchronization',
    time: 'Instant'
  },
  {
    step: 4,
    title: 'Monitor & Optimize',
    description: 'Track performance and optimize listings based on platform analytics',
    time: 'Ongoing'
  }
];

const PublishingAgentPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
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
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mb-8 shadow-lg"
            >
              <Upload className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Publishing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Agent
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Distribute your products across 50+ platforms simultaneously. One click, unlimited reach, maximum sales potential.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-start-publishing">
                Start Publishing <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-2xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300" data-testid="button-see-platforms">
                <Play className="mr-2 w-5 h-5" /> See Platforms
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Upload Elements */}
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-20 w-6 h-6 bg-indigo-500 rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-1/3 left-24 w-4 h-4 bg-purple-500 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/2 right-1/4 w-8 h-8 bg-cyan-400 rounded-full opacity-20"
        />
      </section>

      {/* Platform Grid Section */}
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
              Connected Platforms
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Reach Billions of Customers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your products, everywhere your customers shop. Instant access to the world's largest marketplaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {platform.users} users
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Process Section */}
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
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From setup to success in minutes, not months.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {automationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center relative"
              >
                {index < automationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-600 dark:to-purple-600 transform -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg text-white font-bold text-2xl"
                  >
                    {step.step}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    {step.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Intelligent Distribution
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced features that ensure your products perform optimally on every platform.
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
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how businesses scale their operations with automated publishing.
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
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-2 h-16 rounded-full mb-6" />
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
                  
                  {/* Stats Dashboard */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(useCase.stats).map(([key, value], statIndex) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * statIndex, duration: 0.4 }}
                          className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                        >
                          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Scale Your Distribution?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses reaching billions of customers with automated publishing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="outline" className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-get-started-publishing">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/pricing">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl transition-all duration-300" data-testid="link-explore-pricing">
                  Explore Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PublishingAgentPage;