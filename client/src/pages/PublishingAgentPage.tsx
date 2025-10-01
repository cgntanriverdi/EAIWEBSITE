import { motion, useScroll, useTransform } from 'framer-motion';
import { Upload, Globe, Zap, ArrowRight, Play, Check, Share2, Rocket, Send, BarChart2, RefreshCw, CheckCircle2, Loader2, Settings } from 'lucide-react';
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
  { name: 'Amazon', status: 'active', listings: 234 },
  { name: 'eBay', status: 'active', listings: 189 },
  { name: 'Shopify', status: 'syncing', listings: 234 },
  { name: 'Etsy', status: 'active', listings: 156 },
  { name: 'Walmart', status: 'active', listings: 198 },
  { name: 'Facebook', status: 'syncing', listings: 234 }
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
          {/* Animated Navy Wave Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Base Layer */}
            <div 
              className="absolute inset-0" 
              style={{
                background: 'linear-gradient(135deg, #0A2540 0%, #132f4c 25%, #1e4976 50%, #132f4c 75%, #0A2540 100%)',
                backgroundSize: '400% 400%',
                animation: 'navyWave 20s ease-in-out infinite'
              }}
            />
            
            {/* Wave Layer 1 - Subtle movement */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                background: 'radial-gradient(ellipse at 20% 50%, rgba(30, 73, 118, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(19, 47, 76, 0.3) 0%, transparent 50%)',
                backgroundSize: '200% 200%',
                animation: 'waveFloat1 15s ease-in-out infinite'
              }}
            />
            
            {/* Wave Layer 2 - Creates depth */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(ellipse at 60% 40%, rgba(10, 37, 64, 0.5) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(30, 73, 118, 0.4) 0%, transparent 60%)',
                backgroundSize: '250% 250%',
                animation: 'waveFloat2 18s ease-in-out infinite reverse'
              }}
            />
            
            {/* Wave Layer 3 - Top highlights */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: 'radial-gradient(circle at 70% 30%, rgba(30, 73, 118, 0.6) 0%, transparent 40%), radial-gradient(circle at 40% 80%, rgba(19, 47, 76, 0.5) 0%, transparent 40%)',
                backgroundSize: '300% 300%',
                animation: 'waveFloat3 22s ease-in-out infinite'
              }}
            />
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

              {/* Right: Publishing Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                {/* Browser Chrome Mockup */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-white/10">
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-white rounded-md px-4 py-1 text-xs text-gray-600 border border-gray-200 max-w-xs w-full text-center">
                        publishing-hub.com/dashboard
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="bg-white p-6">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center">
                          <Send className="w-5 h-5 text-gray-700" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Multi-Platform Publishing</h3>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-md text-sm font-medium transition-colors hover:bg-gray-50" data-testid="button-sync-all">
                          Sync All
                        </button>
                        <button className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-md text-sm font-medium transition-colors hover:bg-gray-50" data-testid="button-publish-toolbar">
                          Publish
                        </button>
                      </div>
                    </div>

                    {/* Live Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">1,842</div>
                        <div className="text-xs text-gray-600">Published today</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-600">Success rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">0.4s</div>
                        <div className="text-xs text-gray-600">Avg. sync</div>
                      </div>
                    </div>

                    {/* Platform Status Cards */}
                    <div className="space-y-3">
                      {platforms.map((platform, index) => (
                        <div key={platform.name} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between border border-gray-200">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                              <Globe className="w-4 h-4 text-gray-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{platform.name}</div>
                              <div className="text-xs text-gray-600">{platform.listings} listings</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {platform.status === 'active' ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-md border border-green-200">Active</span>
                              </>
                            ) : (
                              <>
                                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                                <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-md border border-blue-200">Syncing</span>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating KPI Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -left-4 top-20 bg-white rounded-xl shadow-xl p-4 border border-gray-200"
                >
                  <div className="text-sm text-gray-600 mb-1">Platform Reach</div>
                  <div className="text-2xl font-bold text-green-600">+245%</div>
                  <div className="text-xs text-gray-500 mt-1">vs. single platform</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -right-4 bottom-32 bg-white rounded-xl shadow-xl p-4 border border-gray-200"
                >
                  <div className="text-sm text-gray-600 mb-1">Total Published</div>
                  <div className="text-2xl font-bold text-[#0A2540]">3.2M+</div>
                  <div className="text-xs text-gray-500 mt-1">Products distributed</div>
                </motion.div>
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
        @keyframes navyWave {
          0%, 100% { 
            background-position: 0% 50%; 
          }
          50% { 
            background-position: 100% 50%; 
          }
        }
        
        @keyframes waveFloat1 {
          0%, 100% { 
            background-position: 0% 0%;
            transform: translateY(0) scale(1);
          }
          33% { 
            background-position: 50% 50%;
            transform: translateY(-10px) scale(1.05);
          }
          66% { 
            background-position: 100% 100%;
            transform: translateY(5px) scale(0.98);
          }
        }
        
        @keyframes waveFloat2 {
          0%, 100% { 
            background-position: 100% 100%;
            transform: translateX(0) translateY(0);
          }
          33% { 
            background-position: 0% 50%;
            transform: translateX(15px) translateY(-15px);
          }
          66% { 
            background-position: 50% 0%;
            transform: translateX(-10px) translateY(10px);
          }
        }
        
        @keyframes waveFloat3 {
          0%, 100% { 
            background-position: 50% 50%;
            transform: scale(1) rotate(0deg);
          }
          50% { 
            background-position: 100% 0%;
            transform: scale(1.1) rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
};

export default PublishingAgentPage;
