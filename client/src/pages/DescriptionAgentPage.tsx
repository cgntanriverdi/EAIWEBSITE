import { motion } from 'framer-motion';
import { FileText, Target, Sparkles, ArrowRight, Play, Check, TrendingUp, Brain, Wand2, BookOpen, Zap, MessageCircle, Star, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

const features = [
  {
    icon: Brain,
    title: 'AI-powered intelligence',
    description: 'Advanced language models understand context and craft messages that resonate with your target audience'
  },
  {
    icon: Target,
    title: 'SEO optimized',
    description: 'Every word strategically chosen to rank higher while maintaining natural, compelling narratives'
  },
  {
    icon: TrendingUp,
    title: 'Conversion focused',
    description: 'Psychological triggers embedded to drive measurable results and boost sales'
  },
  {
    icon: Wand2,
    title: 'Instant variations',
    description: 'Generate multiple description styles and tones to match your brand voice'
  },
  {
    icon: BookOpen,
    title: 'Brand consistency',
    description: 'Maintain your unique voice across thousands of product descriptions'
  },
  {
    icon: Sparkles,
    title: 'Multi-language',
    description: 'Create compelling copy in over 50 languages with cultural nuance'
  }
];

const beforeAfterExamples = [
  {
    category: "Premium Electronics",
    before: "Wireless headphones with noise cancellation. 30-hour battery life. Available in black and silver colors. Bluetooth 5.0 compatible.",
    after: "Escape into your sanctuary of pure sound. These premium wireless headphones don't just block noise—they create your personal oasis of acoustic perfection. With 30 hours of uninterrupted bliss and buttery-soft ear cushions, every listening session becomes a luxurious retreat from the everyday chaos.",
    metrics: { words: '+278%', engagement: '+350%', conversion: '+140%' }
  },
  {
    category: "Luxury Fashion",
    before: "Black leather jacket. Made from genuine leather. Multiple sizes available. Classic motorcycle style design.",
    after: "Command every room with timeless rebellion. This isn't just a leather jacket—it's your armor of confidence, crafted from buttery-soft genuine leather that tells your story. The kind of piece that gets better with every adventure, developing character that reflects your journey.",
    metrics: { words: '+312%', engagement: '+425%', conversion: '+165%' }
  },
  {
    category: "Home & Living",
    before: "Ceramic coffee mug. 12 oz capacity. Microwave and dishwasher safe. White with simple design.",
    after: "Transform your morning ritual into a moment of zen. This hand-crafted ceramic sanctuary holds 12 oz of pure potential—whether it's your meditation brew or afternoon comfort. Perfectly weighted to feel substantial yet intimate, with a silky-smooth finish that makes every sip a tactile pleasure.",
    metrics: { words: '+298%', engagement: '+380%', conversion: '+125%' }
  }
];

const metrics = [
  { value: '300%', label: 'Increase in CTR' },
  { value: '2.4x', label: 'Higher conversions' },
  { value: '85%', label: 'Time saved' }
];

const capabilities = [
  'Generate compelling product descriptions',
  'Optimize for search engines',
  'Maintain brand voice consistency',
  'Create multiple variations instantly',
  'Support for 50+ languages',
  'Bulk description processing'
];

const DescriptionAgentPage = () => {
  const [selectedExample, setSelectedExample] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="relative overflow-hidden">
        {/* Hero Section with Navy Gradient */}
        <section className="relative pt-20 pb-32 px-4 overflow-hidden">
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
                <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm" data-testid="badge-ai-copywriting">
                  AI-powered copywriting
                </Badge>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Product descriptions that sell
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                  Transform ordinary words into extraordinary stories. Our AI crafts compelling product descriptions that captivate customers and drive conversions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/pricing">
                    <Button 
                      size="lg" 
                      className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
                      data-testid="button-start-writing"
                    >
                      Start writing <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent backdrop-blur-sm"
                    data-testid="button-see-examples"
                    onClick={() => document.getElementById('examples-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Play className="mr-2 w-5 h-5" /> See examples
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

              {/* Right: Realistic Editor Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded px-3 py-1.5 text-xs text-gray-600">
                      <span className="text-gray-400">🔒</span>
                      <span className="font-mono">description-ai.com/editor</span>
                    </div>
                  </div>
                  
                  {/* Editor Content */}
                  <div className="bg-gray-50">
                    {/* Toolbar */}
                    <div className="bg-white border-b border-gray-200 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <FileText className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">Product Descriptions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                            <Edit3 className="w-3 h-3 inline mr-1" />
                            Edit
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
                          <div className="text-2xl font-bold text-gray-900">1,423</div>
                          <div className="text-xs text-gray-500">Created today</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="text-2xl font-bold text-green-600">94%</div>
                          <div className="text-xs text-gray-500">Quality score</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="text-2xl font-bold text-indigo-600">0.8s</div>
                          <div className="text-xs text-gray-500">Avg. time</div>
                        </div>
                      </div>

                      {/* Description Preview */}
                      <div className="bg-white rounded-lg border border-gray-200 p-5 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg" />
                            <div>
                              <div className="text-sm font-semibold text-gray-900">Premium Headphones</div>
                              <div className="text-xs text-gray-500">Electronics</div>
                            </div>
                          </div>
                          <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">
                            ✓ Ready
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-100 rounded-full w-full" />
                          <div className="h-2 bg-gray-100 rounded-full w-5/6" />
                          <div className="h-2 bg-gray-100 rounded-full w-4/6" />
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>156 words</span>
                            <span>•</span>
                            <span className="text-green-600 font-medium">SEO optimized</span>
                          </div>
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        </div>
                      </div>

                      {/* Another Description */}
                      <div className="mt-3 bg-white rounded-lg border border-gray-200 p-5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg" />
                            <div>
                              <div className="text-sm font-semibold text-gray-900">Coffee Maker Pro</div>
                              <div className="text-xs text-gray-500">Home & Kitchen</div>
                            </div>
                          </div>
                          <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-medium">
                            <Sparkles className="w-3 h-3 inline mr-1" />
                            Generating...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                >
                  <div className="text-xs text-gray-500 mb-1">Conversion rate</div>
                  <div className="text-2xl font-bold text-gray-900">+140%</div>
                  <div className="text-xs text-green-600 mt-1">↑ Above baseline</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                >
                  <div className="text-xs text-gray-500 mb-1">Descriptions written</div>
                  <div className="text-2xl font-bold text-indigo-600">1.8M+</div>
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
                Everything you need to create compelling copy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful AI tools that make professional copywriting accessible to everyone
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

        {/* Before/After Examples - Light Gray Background */}
        <section id="examples-section" className="py-32 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                See the transformation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch ordinary descriptions become extraordinary selling tools
              </p>
            </motion.div>

            {/* Category Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center mb-12"
            >
              {beforeAfterExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExample(index)}
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                    selectedExample === index
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  data-testid={`button-category-${index}`}
                >
                  {example.category}
                </button>
              ))}
            </motion.div>

            {/* Comparison Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="relative bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Before */}
                  <motion.div
                    key={`before-${selectedExample}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-400" />
                      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Before</span>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed border-l-4 border-gray-200 pl-4">
                      {beforeAfterExamples[selectedExample].before}
                    </p>
                  </motion.div>
                  
                  {/* After */}
                  <motion.div
                    key={`after-${selectedExample}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">After</span>
                    </div>
                    <p className="text-base text-gray-900 leading-relaxed font-medium border-l-4 border-indigo-600 pl-4">
                      {beforeAfterExamples[selectedExample].after}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600">
                      <Sparkles className="w-4 h-4" />
                      <span>AI-enhanced copy</span>
                    </div>
                  </motion.div>
                </div>

                {/* Metrics */}
                <div className="pt-8 border-t border-gray-200 grid grid-cols-3 gap-6">
                  {[
                    { label: 'Word Count', value: beforeAfterExamples[selectedExample].metrics.words },
                    { label: 'Engagement', value: beforeAfterExamples[selectedExample].metrics.engagement },
                    { label: 'Conversions', value: beforeAfterExamples[selectedExample].metrics.conversion }
                  ].map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                        {metric.label}
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works - White Background */}
        <section className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left: Visual */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="h-12 bg-white rounded-lg flex items-center px-4 text-sm text-gray-700 border border-gray-200">
                          <Edit3 className="w-4 h-4 mr-2 text-gray-400" />
                          Enter product details
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
                          AI writing...
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
                          <FileText className="w-4 h-4 inline mr-2" />
                          Perfect description ready!
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
                  Three simple steps to perfect copy
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our AI handles the complexity so you can focus on selling. Input your product details, customize, and publish.
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

                <Link href="/pricing">
                  <Button 
                    size="lg" 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-lg"
                    data-testid="button-try-now"
                  >
                    Try it now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics Section - Gray Background */}
        <section className="py-32 px-4 bg-gray-50">
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
                Join thousands of businesses achieving remarkable results with AI-powered copywriting
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

        {/* CTA Section - Navy Gradient */}
        <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#1e3a5f] to-[#0F172A]">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to write copy that converts?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Start creating compelling product descriptions in minutes. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/pricing">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
                    data-testid="button-start-today"
                  >
                    Start writing today <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg border-2 border-white bg-transparent backdrop-blur-sm"
                    data-testid="link-see-pricing"
                  >
                    See pricing
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

export default DescriptionAgentPage;
