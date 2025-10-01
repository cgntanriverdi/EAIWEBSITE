import { motion } from 'framer-motion';
import { Image, Camera, Zap, Sparkles, ArrowRight, Play, Check, Layers, Wand2, Palette, Grid3x3, Smartphone, Upload, Download, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';

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
    icon: Smartphone,
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
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="relative overflow-hidden">
        {/* Hero Section with Animated Blue Gradient */}
        <section className="relative pt-20 pb-32 px-4 overflow-hidden isolate">
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm" data-testid="badge-ai-powered">
                  AI-powered imagery
                </Badge>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Professional product photography at scale
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                  Generate studio-quality product images in seconds. Our AI transforms simple photos into professional e-commerce visuals that drive conversions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
                    data-testid="button-start-free"
                  >
                    Start for free <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent backdrop-blur-sm"
                    data-testid="button-see-demo"
                  >
                    <Play className="mr-2 w-5 h-5" /> See it in action
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

              {/* Right: Realistic Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded px-3 py-1.5 text-xs text-gray-600">
                      <span className="text-gray-400">🔒</span>
                      <span className="font-mono">image-generator.ai/dashboard</span>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="bg-gray-50">
                    {/* Toolbar */}
                    <div className="bg-white border-b border-gray-200 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <Image className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">Product Images</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                            <Upload className="w-3 h-3 inline mr-1" />
                            Upload
                          </button>
                          <button className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded hover:bg-indigo-700">
                            Generate
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="p-6">
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="text-2xl font-bold text-gray-900">2,847</div>
                          <div className="text-xs text-gray-500">Generated today</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="text-2xl font-bold text-green-600">98%</div>
                          <div className="text-xs text-gray-500">Quality score</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="text-2xl font-bold text-indigo-600">1.2s</div>
                          <div className="text-xs text-gray-500">Avg. time</div>
                        </div>
                      </div>

                      {/* Image Grid */}
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="relative bg-white rounded-lg border border-gray-200 aspect-square overflow-hidden group cursor-pointer hover:border-indigo-400 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <Camera className="w-6 h-6 text-gray-400" />
                            </div>
                            {i === 1 && (
                              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                                ✓ Done
                              </div>
                            )}
                            {i === 2 && (
                              <div className="absolute inset-0 bg-indigo-600/10 backdrop-blur-sm flex items-center justify-center">
                                <div className="text-xs text-indigo-700 font-medium">Processing...</div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="text-xs text-gray-500 mb-1">Processing speed</div>
                  <div className="text-2xl font-bold text-gray-900">2.3s</div>
                  <div className="text-xs text-green-600 mt-1">↑ 40% faster</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="text-xs text-gray-500 mb-1">Images generated</div>
                  <div className="text-2xl font-bold text-indigo-600">2.5M+</div>
                  <div className="text-xs text-gray-500 mt-1">This month</div>
                </motion.div>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 ring-1 ring-gray-200 group-hover:ring-gray-300 transition-all">
                    <feature.icon className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
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
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left: Visual */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="h-12 bg-gray-50 rounded-lg flex items-center px-4 text-sm text-gray-700 border border-gray-200">
                          <Upload className="w-4 h-4 mr-2 text-gray-400" />
                          Upload your product photo
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold">
                        2
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-10 bg-indigo-50 rounded-lg flex items-center px-4 text-sm text-indigo-700 font-medium border border-indigo-200">
                          <Sparkles className="w-4 h-4 mr-2" />
                          AI processing...
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-indigo-600"
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
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm font-medium text-green-900">
                          <Download className="w-4 h-4 inline mr-2" />
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
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ring-1 ring-gray-300">
                        <Check className="w-3 h-3 text-gray-700" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-lg"
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

            <div className="grid md:grid-cols-3 gap-16 text-center">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-3">
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
        <section className="py-32 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <Badge className="mb-6 bg-indigo-50 text-indigo-700 border-indigo-200 ring-1 ring-indigo-100" data-testid="badge-mobile-first">
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
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-gray-200 mt-0.5">
                      <Smartphone className="w-4 h-4 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Responsive interface</h4>
                      <p className="text-gray-600">Seamless experience across all screen sizes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-gray-200 mt-0.5">
                      <Zap className="w-4 h-4 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Lightning fast</h4>
                      <p className="text-gray-600">Optimized performance on mobile networks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ring-1 ring-gray-200 mt-0.5">
                      <Settings className="w-4 h-4 text-gray-700" />
                    </div>
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
                  <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-gray-800">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-white px-6 py-3 flex justify-between items-center text-xs border-b border-gray-100">
                        <span className="font-semibold text-gray-900">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-3 border border-gray-400 rounded-sm" />
                          <div className="w-2 h-3 bg-gray-400 rounded-sm" />
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-4 space-y-4 bg-gray-50 h-full">
                        <div className="bg-white rounded-xl p-4 border border-gray-200">
                          <div className="text-xs text-gray-500 mb-2">Upload Image</div>
                          <div className="flex items-center justify-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                            <Camera className="w-10 h-10 text-gray-400" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white rounded-lg p-2 aspect-square flex items-center justify-center border border-gray-200">
                            <Image className="w-8 h-8 text-gray-300" />
                          </div>
                          <div className="bg-white rounded-lg p-2 aspect-square flex items-center justify-center border border-gray-200">
                            <Image className="w-8 h-8 text-gray-300" />
                          </div>
                        </div>

                        <button className="w-full bg-indigo-600 text-white rounded-lg py-3 text-center font-semibold text-sm">
                          Generate Images
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-200"
                  >
                    <Sparkles className="w-5 h-5 text-indigo-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA - Navy Gradient */}
        <section className="py-32 px-4 relative overflow-hidden isolate">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#1e3a5f] to-[#0F172A] z-0" />
          
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
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Start creating professional product photography in minutes. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0A2540] hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-lg shadow-lg"
                  data-testid="button-get-started-final"
                >
                  Get started free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/pricing">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg rounded-lg bg-transparent backdrop-blur-sm"
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

export default ImageGenerationAgentPage;
