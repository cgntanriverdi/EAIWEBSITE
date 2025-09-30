import { motion, useScroll, useTransform } from 'framer-motion';
import { Upload, Globe, Zap, ArrowRight, Play, Check, ShoppingCart, Share2, Clock, Rocket, Package, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import { useState, useRef } from 'react';

const features = [
  {
    icon: Globe,
    title: 'Multi-Platform Distribution',
    description: 'Publish to Amazon, eBay, Shopify, Etsy, and 50+ platforms simultaneously with a single click.'
  },
  {
    icon: Zap,
    title: 'Instant Synchronization',
    description: 'Real-time inventory and pricing updates across all platforms to prevent overselling and stockouts.'
  },
  {
    icon: Share2,
    title: 'Smart Optimization',
    description: 'Automatically optimize listings for each platform\'s unique requirements and search algorithms.'
  }
];

const platforms = [
  { name: 'Amazon', icon: '🛒', color: 'from-orange-400 to-amber-600', users: '300M+' },
  { name: 'eBay', icon: '🏪', color: 'from-blue-400 to-indigo-600', users: '180M+' },
  { name: 'Shopify', icon: '🏬', color: 'from-indigo-400 to-purple-600', users: '1.7M+' },
  { name: 'Etsy', icon: '🎨', color: 'from-orange-400 to-red-500', users: '90M+' },
  { name: 'Facebook', icon: '👥', color: 'from-blue-500 to-blue-700', users: '2.9B+' },
  { name: 'Instagram', icon: '📸', color: 'from-pink-400 to-purple-600', users: '2B+' },
  { name: 'Google', icon: '🔍', color: 'from-red-400 to-yellow-500', users: '1B+' },
  { name: 'Walmart', icon: '🏪', color: 'from-blue-600 to-yellow-400', users: '240M+' }
];

const pipelineSteps = [
  {
    step: 1,
    title: 'Connect',
    description: 'Link marketplace accounts',
    time: '5 min',
    icon: Package,
    status: 'completed'
  },
  {
    step: 2,
    title: 'Configure',
    description: 'Set up product catalogs',
    time: '10 min',
    icon: Send,
    status: 'active'
  },
  {
    step: 3,
    title: 'Publish',
    description: 'Auto-distribute listings',
    time: 'Instant',
    icon: Rocket,
    status: 'pending'
  },
  {
    step: 4,
    title: 'Optimize',
    description: 'Track and improve performance',
    time: 'Ongoing',
    icon: Check,
    status: 'pending'
  }
];

const PublishingAgentPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Ambient Background Effects - Subtle like landing page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-indigo-500/5 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-transparent to-indigo-400/5"
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
              {/* Orbiting Platform Icons */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none hidden lg:block"
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-indigo-400/30 rounded-xl"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 60}deg) translateY(-280px)`
                    }}
                  >
                    <ShoppingCart className="w-6 h-6 text-indigo-400 m-auto mt-3" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-[2.5rem] mb-12 shadow-2xl relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-[2.5rem]" />
                <Upload className="w-16 h-16 text-white relative z-10" strokeWidth={1.5} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 leading-[0.9] tracking-tight">
                  Publishing
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 mt-4">
                    Agent
                  </span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Distribute your products across{' '}
                <span className="font-medium text-indigo-600">50+ platforms</span> simultaneously. One click, unlimited reach, maximum sales.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 text-white px-10 py-7 text-xl font-medium rounded-[1.25rem] shadow-2xl shadow-indigo-500/50 hover:shadow-cyan-600/60 transition-all duration-500 hover:scale-105 border-0"
                  data-testid="button-start-publishing"
                >
                  Start Publishing <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="px-10 py-7 text-xl rounded-[1.25rem] hover:bg-gray-50 backdrop-blur-sm transition-all duration-500 text-gray-700"
                  data-testid="button-see-platforms"
                >
                  <Play className="mr-3 w-6 h-6" fill="currentColor" /> See Platforms
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Globe Effect */}
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 right-20 opacity-10 pointer-events-none hidden lg:block"
            >
              <Globe className="w-48 h-48 text-indigo-400" strokeWidth={0.5} />
            </motion.div>
          </div>
        </section>

        {/* Launch Pipeline Timeline */}
        <section className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <Badge variant="outline" className="mb-6 text-base px-6 py-3 rounded-full bg-indigo-50 text-indigo-700 border-indigo-200">
                <Rocket className="w-4 h-4 mr-2 inline text-indigo-400" />
                Launch Pipeline
              </Badge>
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                From Setup to<br />Success in Minutes
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                Our intelligent pipeline guides you through{' '}
                <span className="text-indigo-400 font-medium">every step</span>
              </p>
            </motion.div>

            {/* Interactive Pipeline */}
            <div className="relative max-w-6xl mx-auto">
              {/* Connection Lines */}
              <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-indigo-500/20 hidden lg:block" />
              
              <div className="grid lg:grid-cols-4 gap-8 relative">
                {pipelineSteps.map((step, index) => {
                  const isActive = activeStep === index;
                  const isCompleted = activeStep > index;
                  const Icon = step.icon;
                  
                  return (
                    <motion.button
                      key={step.step}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                      onClick={() => setActiveStep(index)}
                      className="group relative text-left"
                      data-testid={`button-step-${index}`}
                    >
                      {/* Glass Capsule */}
                      <div className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 ${
                        isActive 
                          ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/20 bg-white/10' 
                          : isCompleted
                          ? 'border-green-500/30 bg-white/8'
                          : 'border-white/10 hover:border-white/20 hover:bg-white/8'
                      }`}>
                        {/* Progress Pulse */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
                            animate={{ opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                        
                        {/* Step Number Badge */}
                        <div className="relative z-10">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.3, duration: 0.5, type: "spring" }}
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl transition-all duration-500 ${
                              isActive
                                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/50'
                                : isCompleted
                                ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-green-500/30'
                                : 'bg-white/10'
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="w-8 h-8 text-white" strokeWidth={2.5} />
                            ) : (
                              <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                            )}
                          </motion.div>
                          
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold">
                            <Clock className="w-4 h-4" />
                            {step.time}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Grid */}
        <section className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                Reach Billions<br />of Customers
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                Instant access to the world's largest marketplaces
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-white/20 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{platform.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-semibold">
                      {platform.users} users
                    </p>
                    <div className={`mt-4 h-1 bg-gradient-to-r ${platform.color} rounded-full`} />
                  </div>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                Intelligent Distribution
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                Advanced features ensuring optimal performance on every platform
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
                  className="group relative bg-white/95 backdrop-blur-md border border-gray-200 p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-600 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-xl shadow-indigo-500/30 group-hover:shadow-indigo-500/50 group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-700" />
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
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                Scale Your<br />Distribution
              </h2>
              <p className="text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto font-light">
                Join thousands reaching billions of customers with automated publishing
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-indigo-600 hover:bg-cyan-50 px-10 py-7 text-xl font-medium rounded-[1.25rem] shadow-2xl hover:shadow-white/40 transition-all duration-500 hover:scale-105 border-0"
                  data-testid="button-get-started-publishing"
                >
                  Get Started Today <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Link href="/pricing">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-white hover:bg-white/10 px-10 py-7 text-xl rounded-[1.25rem] backdrop-blur-sm transition-all duration-500"
                    data-testid="link-explore-pricing"
                  >
                    Explore Pricing
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

export default PublishingAgentPage;
