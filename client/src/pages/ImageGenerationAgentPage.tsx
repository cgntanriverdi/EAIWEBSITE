import { motion, useScroll, useTransform } from 'framer-motion';
import { Image, Camera, Zap, Sparkles, ArrowRight, Play, Check, Layers, Aperture, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import { useState, useRef } from 'react';

const features = [
  {
    icon: Camera,
    title: 'Studio Photography',
    description: 'Generate professional-grade product photos with perfect lighting, composition, and depth that rival high-end studio shoots.'
  },
  {
    icon: Layers,
    title: 'Smart Backgrounds',
    description: 'Automatically remove, replace, or enhance backgrounds with contextually perfect scenes and environments.'
  },
  {
    icon: Wand2,
    title: 'Instant Variations',
    description: 'Create unlimited variations in different styles, angles, and lighting setups—all in a single click.'
  }
];

const studioModes = [
  {
    name: 'Natural Light',
    description: 'Soft, diffused lighting perfect for lifestyle products',
    icon: '☀️',
  },
  {
    name: 'Studio Pro',
    description: 'Professional three-point lighting setup',
    icon: '💡',
  },
  {
    name: 'Dramatic',
    description: 'High-contrast with deep shadows for luxury items',
    icon: '🌙',
  },
  {
    name: 'Neon Glow',
    description: 'Vibrant neon accents for modern tech products',
    icon: '✨',
  }
];

const showcaseImages = [
  { category: 'Electronics', result: '300% ↑ CTR' },
  { category: 'Fashion', result: '150% ↑ Engagement' },
  { category: 'Home Decor', result: '80% ↓ Cost' }
];

const ImageGenerationAgentPage = () => {
  const [selectedMode, setSelectedMode] = useState(0);
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
                  AI-POWERED VISUAL CREATION
                </p>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-2xl mb-8">
                  <Image className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  Image Generation Agent
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Transform products into visual masterpieces with AI-powered photography that rivals professional studios.
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
                  data-testid="button-start-free-trial"
                >
                  Start Creating <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 text-lg rounded-lg bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
                  data-testid="button-watch-demo"
                >
                  <Play className="mr-2 w-5 h-5" /> Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Studio Modes Showcase - Light Cream Background */}
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
                AI-POWERED STUDIO MODES
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Perfect Lighting,<br />Every Time
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from professional lighting presets or let AI select the perfect setup
              </p>
            </motion.div>

            {/* Interactive Studio Mode Selector */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {studioModes.map((mode, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedMode(index)}
                  className={`group relative p-6 rounded-xl transition-all duration-300 text-left ${
                    selectedMode === index
                      ? 'bg-white border-2 border-indigo-600 shadow-md'
                      : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                  data-testid={`button-mode-${index}`}
                >
                  <div className="text-4xl mb-3">{mode.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{mode.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{mode.description}</p>
                </motion.button>
              ))}
            </div>

            {/* Product Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="relative bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
                <div className="relative aspect-video bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
                  <motion.div
                    key={selectedMode}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <Camera className="w-24 h-24 text-gray-400 mx-auto mb-4" strokeWidth={1} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{studioModes[selectedMode].name}</h3>
                    <p className="text-gray-600 text-base max-w-md mx-auto">
                      {studioModes[selectedMode].description}
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                      <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">AI Rendering Preview</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section - White Background */}
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
                PROFESSIONAL FEATURES
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Professional Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every feature designed to deliver studio-grade imagery for your products
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

        {/* Results Showcase - Light Cream Background */}
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
                PROVEN RESULTS
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Proven Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Businesses transforming visual content with measurable results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {showcaseImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="aspect-square flex items-center justify-center p-12 bg-gray-50">
                      <Camera className="w-20 h-20 text-gray-300" strokeWidth={1} />
                    </div>
                    <div className="p-6">
                      <div className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                        {item.category}
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        {item.result}
                      </div>
                    </div>
                  </div>
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
                Transform Your<br />Product Images
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands creating stunning visuals with our Image Generation Agent
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-lg shadow-lg transition-all duration-300"
                  data-testid="button-get-started"
                >
                  Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/pricing">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg border-2 border-white bg-transparent transition-all duration-300"
                    data-testid="link-view-pricing"
                  >
                    View Pricing
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
