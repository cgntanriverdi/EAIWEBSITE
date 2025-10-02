import { motion, useScroll, useTransform } from 'framer-motion';
import { Upload, Globe, Zap, ArrowRight, Play, Check, Share2, Rocket, Send, BarChart2, RefreshCw, CheckCircle2, Loader2, Settings, ShoppingBag, Package } from 'lucide-react';
import { SiAmazon, SiEbay, SiShopify, SiEtsy, SiFacebook } from 'react-icons/si';
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
  },
  {
    icon: RefreshCw,
    title: 'Auto-Updates',
    description: 'Keep all listings synchronized with automatic price and inventory updates across channels.'
  },
  {
    icon: BarChart2,
    title: 'Performance Analytics',
    description: 'Track performance metrics across all platforms to optimize your distribution strategy.'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Control',
    description: 'Automated validation ensures listings meet platform requirements before publishing.'
  }
];

const howItWorksSteps = [
  {
    icon: Upload,
    title: 'Upload',
    description: 'Connect your product catalog and marketplace accounts'
  },
  {
    icon: Settings,
    title: 'Configure',
    description: 'Set platform-specific rules and optimization preferences'
  },
  {
    icon: Rocket,
    title: 'Publish',
    description: 'Distribute listings to all platforms with one click'
  }
];

const platforms = [
  { name: 'Amazon', status: 'active', icon: SiAmazon, color: 'text-[#FF9900]', bgColor: 'bg-[#FF9900]/10' },
  { name: 'eBay', status: 'syncing', icon: SiEbay, color: 'text-[#E53238]', bgColor: 'bg-[#E53238]/10' },
  { name: 'Shopify', status: 'active', icon: SiShopify, color: 'text-[#96BF48]', bgColor: 'bg-[#96BF48]/10' },
  { name: 'Etsy', status: 'active', icon: SiEtsy, color: 'text-[#F16521]', bgColor: 'bg-[#F16521]/10' },
  { name: 'Walmart', status: 'active', icon: ShoppingBag, color: 'text-[#0071CE]', bgColor: 'bg-[#0071CE]/10' },
  { name: 'Facebook', status: 'syncing', icon: SiFacebook, color: 'text-[#1877F2]', bgColor: 'bg-[#1877F2]/10' }
];

const metrics = [
  { value: '245%', label: 'Reach increase' },
  { value: '3.2M+', label: 'Products published' },
  { value: '50+', label: 'Platforms' }
];

const PublishingAgentPage = () => {
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
        {/* Hero Section - Navy Gradient with Publishing Dashboard Mockup */}
        <section ref={heroRef} className="relative pt-20 pb-32 px-4 overflow-hidden">
          {/* Animated 3D Navy Wave Background with Visible Boundaries */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Deep Base Layer */}
            <div 
              className="absolute inset-0" 
              style={{
                background: 'linear-gradient(180deg, #0A2540 0%, #132f4c 100%)'
              }}
            />
            
            {/* SVG Wave Layers with Defined Boundaries */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
              <defs>
                {/* Gradients for each wave layer */}
                <linearGradient id="wave1Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(30, 73, 118, 0.4)" />
                  <stop offset="100%" stopColor="rgba(30, 73, 118, 0.6)" />
                </linearGradient>
                <linearGradient id="wave2Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(42, 95, 148, 0.5)" />
                  <stop offset="100%" stopColor="rgba(42, 95, 148, 0.7)" />
                </linearGradient>
                <linearGradient id="wave3Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(56, 116, 176, 0.6)" />
                  <stop offset="100%" stopColor="rgba(56, 116, 176, 0.8)" />
                </linearGradient>
                <linearGradient id="wave4Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(78, 141, 204, 0.7)" />
                  <stop offset="100%" stopColor="rgba(78, 141, 204, 0.9)" />
                </linearGradient>
              </defs>
              
              {/* Wave 1 - Furthest back */}
              <path 
                className="wave-path-1" 
                d="M0,400 C240,320 480,480 720,400 C960,320 1200,480 1440,400 L1440,800 L0,800 Z" 
                fill="url(#wave1Gradient)"
                style={{ animation: 'waveMove1 20s ease-in-out infinite' }}
              />
              
              {/* Wave 2 - Mid-back */}
              <path 
                className="wave-path-2" 
                d="M0,450 C320,370 640,530 960,450 C1120,410 1280,530 1440,470 L1440,800 L0,800 Z" 
                fill="url(#wave2Gradient)"
                style={{ animation: 'waveMove2 16s ease-in-out infinite reverse' }}
              />
              
              {/* Wave 3 - Mid-front */}
              <path 
                className="wave-path-3" 
                d="M0,520 C360,440 720,600 1080,520 C1260,480 1350,580 1440,540 L1440,800 L0,800 Z" 
                fill="url(#wave3Gradient)"
                style={{ animation: 'waveMove3 12s ease-in-out infinite' }}
              />
              
              {/* Wave 4 - Closest */}
              <path 
                className="wave-path-4" 
                d="M0,600 C400,520 800,680 1200,600 C1320,570 1380,650 1440,620 L1440,800 L0,800 Z" 
                fill="url(#wave4Gradient)"
                style={{ animation: 'waveMove4 10s ease-in-out infinite reverse' }}
              />
            </svg>
          </div>
          
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
                <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm" data-testid="badge-ai-publishing">
                  AI-powered distribution
                </Badge>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Publish everywhere, instantly
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                  Distribute products across 50+ platforms with one click. Automated synchronization keeps inventory and pricing perfect across all channels.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/pricing">
                    <Button 
                      size="lg" 
                      className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
                      data-testid="button-start-publishing"
                    >
                      Start publishing <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent backdrop-blur-sm"
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                    data-testid="button-see-demo"
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

              {/* Right: Publishing Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                {/* Clean Card Design matching screenshot */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-8">
                  {/* Header with Title and Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Multi-Platform Publishing</h3>
                        <p className="text-sm text-gray-600">Distribution Hub</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 text-sm font-medium">
                      6 Active
                    </Badge>
                  </div>

                  {/* Platform Grid - 2x3 */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {platforms.map((platform, index) => {
                      const Icon = platform.icon;
                      return (
                        <motion.div
                          key={platform.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                          className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center gap-3 border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          <div className={`w-12 h-12 rounded-xl ${platform.bgColor} flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 ${platform.color}`} />
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-semibold text-gray-900">{platform.name}</div>
                            {platform.status === 'active' ? (
                              <div className="flex items-center justify-center gap-1 mt-1">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-xs font-medium text-green-700">Active</span>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center gap-1 mt-1">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                <span className="text-xs font-medium text-blue-700">Syncing</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Metrics Section */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Products Distributed</div>
                      <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-bold text-indigo-600">2,847</div>
                        <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                          +245%
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">vs. single platform</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Total Reach</div>
                      <div className="text-3xl font-bold text-indigo-600">12.4M</div>
                    </div>
                  </div>

                  {/* Publish Button */}
                  <button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-lg shadow-indigo-600/20"
                    data-testid="button-publish-all-platforms"
                  >
                    Publish to All Platforms
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section - White Background */}
        <section className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Powerful distribution features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage multi-platform publishing at scale
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    {/* Minimal Icon with Ring Border */}
                    <div className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center mb-4 group-hover:border-gray-300 transition-colors">
                      <Icon className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section - Gray Background */}
        <section id="how-it-works" className="py-32 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How it works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three simple steps to global distribution
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              
              {howItWorksSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative text-center"
                  >
                    {/* Step Number Circle */}
                    <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center text-2xl font-bold text-gray-900 relative z-10">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl border-2 border-gray-200 flex items-center justify-center bg-white">
                      <Icon className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Metrics Section - White Background */}
        <section className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg text-gray-600">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Navy Gradient */}
        <section className="py-32 px-4 relative overflow-hidden">
          {/* Navy Gradient Background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(135deg, #0A2540 0%, #1e3a5f 50%, #0F172A 100%)'
            }}
          />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to scale your distribution?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands of sellers reaching billions of customers with automated multi-platform publishing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/pricing">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
                    data-testid="button-start-publishing-cta"
                  >
                    Start publishing today <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg border-2 border-white bg-transparent backdrop-blur-sm"
                    data-testid="link-see-agents"
                  >
                    Explore all agents
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        /* SVG Wave Animations - Creating flowing motion with visible boundaries */
        
        /* Wave 1 - Slowest, furthest back */
        @keyframes waveMove1 {
          0% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(-30px) translateY(-15px);
          }
          100% { 
            transform: translateX(0) translateY(0);
          }
        }
        
        /* Wave 2 - Mid-back layer */
        @keyframes waveMove2 {
          0% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(40px) translateY(-20px);
          }
          100% { 
            transform: translateX(0) translateY(0);
          }
        }
        
        /* Wave 3 - Mid-front layer */
        @keyframes waveMove3 {
          0% { 
            transform: translateX(0) translateY(0);
          }
          33% { 
            transform: translateX(-50px) translateY(-25px);
          }
          66% { 
            transform: translateX(-30px) translateY(10px);
          }
          100% { 
            transform: translateX(0) translateY(0);
          }
        }
        
        /* Wave 4 - Closest, most prominent */
        @keyframes waveMove4 {
          0% { 
            transform: translateX(0) translateY(0);
          }
          25% { 
            transform: translateX(60px) translateY(-30px);
          }
          50% { 
            transform: translateX(30px) translateY(-15px);
          }
          75% { 
            transform: translateX(-20px) translateY(15px);
          }
          100% { 
            transform: translateX(0) translateY(0);
          }
        }
        
        /* Ensure smooth rendering */
        .wave-path-1, .wave-path-2, .wave-path-3, .wave-path-4 {
          transform-origin: center;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default PublishingAgentPage;
