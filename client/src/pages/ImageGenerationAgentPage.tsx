import { motion, useScroll, useTransform } from 'framer-motion';
import { Image, Camera, Zap, Sparkles, ArrowRight, Play, Check, Layers, Aperture, Wand2, Palette, Grid3x3, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import { useState, useRef } from 'react';

const features = [
  {
    icon: Camera,
    title: 'Professional photography',
    description: 'Studio-quality product images with perfect lighting and composition'
  },
  {
    icon: Layers,
    title: 'Smart backgrounds',
    description: 'AI-powered background removal and replacement for any context'
  },
  {
    icon: Wand2,
    title: 'Instant variations',
    description: 'Generate unlimited image variations in different styles and angles'
  },
  {
    icon: Palette,
    title: 'Style transfer',
    description: 'Apply consistent brand aesthetics across all product images'
  },
  {
    icon: Grid3x3,
    title: 'Batch processing',
    description: 'Process thousands of images simultaneously with AI automation'
  },
  {
    icon: Aperture,
    title: 'Quality control',
    description: 'Automated quality checks ensure every image meets your standards'
  }
];

const metrics = [
  { value: '300%', label: 'Increase in CTR' },
  { value: '150%', label: 'Higher engagement' },
  { value: '80%', label: 'Cost reduction' }
];

const capabilities = [
  'Remove and replace backgrounds',
  'Generate product variations',
  'Enhance image quality',
  'Create lifestyle scenes',
  'Optimize for web and mobile',
  'Bulk image processing'
];

const ImageGenerationAgentPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="relative overflow-hidden">
        {/* Hero Section with Gradient Wave */}
        <section ref={heroRef} className="relative pt-20 pb-32 px-4 overflow-hidden">
          {/* Gradient Wave Background */}
          <motion.div 
            style={{ y }}
            className="absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400" />
            <svg
              className="absolute bottom-0 left-0 right-0 w-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{ height: '180px' }}
            >
              <path
                fill="white"
                fillOpacity="1"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </motion.div>

          <div className="max-w-7xl mx-auto relative z-10 pt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30" data-testid="badge-ai-powered">
                  AI-powered imagery
                </Badge>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Professional product photography at scale
                </h1>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                  Generate studio-quality product images in seconds. Our AI transforms simple photos into professional e-commerce visuals that drive conversions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
                    data-testid="button-start-free"
                  >
                    Start for free <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent"
                    data-testid="button-see-demo"
                  >
                    <Play className="mr-2 w-5 h-5" /> See it in action
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex items-center gap-8 text-white/80 text-sm">
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

              {/* Right: Device Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Mockup Device */}
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="text-xs text-gray-500 font-mono">image-generator.ai</div>
                    </div>
                    <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                          <Image className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-gray-700 mb-2">AI Processing</div>
                        <div className="flex gap-1 justify-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75" />
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4"
                  >
                    <div className="text-xs text-gray-500 mb-1">Processing speed</div>
                    <div className="text-2xl font-bold text-gray-900">2.3s</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4"
                  >
                    <div className="text-xs text-gray-500 mb-1">Images generated</div>
                    <div className="text-2xl font-bold text-purple-600">2.5M+</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid - Clean White Background */}
        <section className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Everything you need to create stunning visuals
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful AI tools that make professional product photography accessible to everyone
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

        {/* How It Works - Light Gray Background */}
        <section className="py-32 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Visual */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="h-12 bg-gray-100 rounded-lg flex items-center px-4 text-sm text-gray-600">
                          Upload your product photo
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                        2
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-10 bg-purple-100 rounded-lg flex items-center px-4 text-sm text-purple-700 font-medium">
                          AI processing...
                        </div>
                        <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-purple-600"
                            initial={{ width: '0%' }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-4 text-white text-sm font-medium">
                          Professional image ready!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Three simple steps to perfect images
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our AI handles the complexity so you can focus on selling. Upload, customize, and download—it's that simple.
                </p>
                
                <div className="space-y-3 mb-8">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-purple-600" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-lg"
                  data-testid="button-try-now"
                >
                  Try it now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics Section - White Background */}
        <section className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Results that speak for themselves
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of businesses achieving remarkable results with AI-powered imagery
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200"
                >
                  <div className="text-5xl md:text-6xl font-bold text-purple-600 mb-3">
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

        {/* Mobile Preview Section - Light Background */}
        <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200" data-testid="badge-mobile-first">
                  Mobile-first design
                </Badge>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Create on any device, anywhere
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our mobile-optimized interface lets you generate and manage product images from your phone, tablet, or desktop.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Smartphone className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Responsive interface</h4>
                      <p className="text-gray-600">Seamless experience across all screen sizes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Lightning fast</h4>
                      <p className="text-gray-600">Optimized performance on mobile networks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Intuitive controls</h4>
                      <p className="text-gray-600">Touch-optimized for mobile editing</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Mobile Device Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-gray-50 px-6 py-3 flex justify-between items-center text-xs">
                        <span className="font-semibold">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-4 bg-gray-300 rounded-sm" />
                          <div className="w-4 h-4 bg-gray-300 rounded-sm" />
                          <div className="w-4 h-4 bg-gray-300 rounded-sm" />
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-4 space-y-4">
                        <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl p-4 text-white">
                          <div className="text-xs mb-2 opacity-80">Upload Image</div>
                          <div className="flex items-center justify-center py-6">
                            <Camera className="w-12 h-12" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-100 rounded-lg p-3 aspect-square flex items-center justify-center">
                            <Image className="w-8 h-8 text-gray-400" />
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3 aspect-square flex items-center justify-center">
                            <Image className="w-8 h-8 text-gray-400" />
                          </div>
                        </div>

                        <div className="bg-purple-600 text-white rounded-lg py-3 text-center font-semibold text-sm">
                          Generate Images
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-3"
                  >
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA - Gradient Background */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to transform your product images?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Start creating professional product photography in minutes. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-lg shadow-lg"
                  data-testid="button-get-started-final"
                >
                  Get started free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/pricing">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg rounded-lg bg-transparent"
                    data-testid="link-view-pricing-final"
                  >
                    View pricing
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

export default ImageGenerationAgentPage;
