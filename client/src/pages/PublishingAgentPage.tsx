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
  { name: 'Amazon', icon: '🛒', users: '300M+' },
  { name: 'eBay', icon: '🏪', users: '180M+' },
  { name: 'Shopify', icon: '🏬', users: '1.7M+' },
  { name: 'Etsy', icon: '🎨', users: '90M+' },
  { name: 'Facebook', icon: '👥', users: '2.9B+' },
  { name: 'Instagram', icon: '📸', users: '2B+' },
  { name: 'Google', icon: '🔍', users: '1B+' },
  { name: 'Walmart', icon: '🏪', users: '240M+' }
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
                  MULTI-PLATFORM DISTRIBUTION
                </p>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-2xl mb-8">
                  <Upload className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  Publishing Agent
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Distribute your products across 50+ platforms simultaneously. One click, unlimited reach, maximum sales.
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
                  data-testid="button-start-publishing"
                >
                  Start Publishing <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 text-lg rounded-lg bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
                  data-testid="button-see-platforms"
                >
                  <Play className="mr-2 w-5 h-5" /> See Platforms
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Launch Pipeline Timeline - Light Cream Background */}
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
                LAUNCH PIPELINE
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                From Setup to<br />Success in Minutes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our intelligent pipeline guides you through every step
              </p>
            </motion.div>

            {/* Interactive Pipeline */}
            <div className="grid lg:grid-cols-4 gap-6 relative">
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
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    onClick={() => setActiveStep(index)}
                    className="group relative text-left"
                    data-testid={`button-step-${index}`}
                  >
                    <div className={`relative bg-white rounded-xl p-6 border transition-all duration-300 ${
                      isActive 
                        ? 'border-indigo-600 shadow-md' 
                        : isCompleted
                        ? 'border-green-500 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        isActive
                          ? 'bg-indigo-600'
                          : isCompleted
                          ? 'bg-green-500'
                          : 'bg-gray-100 border border-gray-200'
                      }`}>
                        {isCompleted ? (
                          <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                        ) : (
                          <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} strokeWidth={1.5} />
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-semibold border border-gray-200">
                        <Clock className="w-4 h-4" />
                        {step.time}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platform Grid - White Background */}
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
                GLOBAL REACH
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Reach Billions<br />of Customers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Instant access to the world's largest marketplaces
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-indigo-300 text-center"
                >
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-semibold">
                    {platform.users} users
                  </p>
                  <div className="mt-3 h-1 bg-indigo-600 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Light Cream Background */}
        <section className="py-24 px-4 relative bg-[#F7F4F0]">
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
                Intelligent Distribution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                Scale Your<br />Distribution
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands reaching billions of customers with automated publishing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-lg shadow-lg transition-all duration-300"
                  data-testid="button-get-started-publishing"
                >
                  Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/pricing">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg border-2 border-white bg-transparent transition-all duration-300"
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
