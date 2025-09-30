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
    gradient: 'from-amber-400 via-orange-300 to-yellow-400'
  },
  {
    name: 'Studio Pro',
    description: 'Professional three-point lighting setup',
    icon: '💡',
    gradient: 'from-gray-300 via-white to-gray-200'
  },
  {
    name: 'Dramatic',
    description: 'High-contrast with deep shadows for luxury items',
    icon: '🌙',
    gradient: 'from-purple-900 via-indigo-800 to-black'
  },
  {
    name: 'Neon Glow',
    description: 'Vibrant neon accents for modern tech products',
    icon: '✨',
    gradient: 'from-violet-500 via-fuchsia-500 to-pink-500'
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
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-[#020205] dark:bg-[#020205]">
      <Navigation />
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-fuchsia-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl"
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
              {/* Holographic Camera Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-1/4 w-40 h-40 opacity-20"
              >
                <div className="w-full h-full border-2 border-violet-400/50 rounded-2xl transform rotate-45" />
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 rounded-[2.5rem] mb-12 shadow-2xl shadow-violet-500/40 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-[2.5rem]" />
                <Image className="w-16 h-16 text-white relative z-10" strokeWidth={1.5} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
                  Image Generation
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 mt-4">
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
                Transform products into{' '}
                <span className="font-medium text-violet-400">visual masterpieces</span> with AI-powered photography that rivals professional studios.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 hover:from-violet-700 hover:via-fuchsia-700 hover:to-pink-700 text-white px-10 py-7 text-xl font-medium rounded-[1.25rem] shadow-2xl shadow-violet-500/50 hover:shadow-violet-600/60 transition-all duration-500 hover:scale-105 border-0"
                  data-testid="button-start-free-trial"
                >
                  Start Creating <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="px-10 py-7 text-xl rounded-[1.25rem] hover:bg-white/5 backdrop-blur-sm transition-all duration-500 text-gray-300"
                  data-testid="button-watch-demo"
                >
                  <Play className="mr-3 w-6 h-6" fill="currentColor" /> Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Lens Elements */}
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, 180, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-40 right-32 opacity-20 pointer-events-none hidden lg:block"
            >
              <Aperture className="w-24 h-24 text-violet-400" strokeWidth={1} />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 30, 0],
                rotate: [0, -90, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
              className="absolute bottom-40 left-28 opacity-20 pointer-events-none hidden lg:block"
            >
              <Camera className="w-20 h-20 text-fuchsia-400" strokeWidth={1} />
            </motion.div>
          </div>
        </section>

        {/* Studio Modes Showcase */}
        <section className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <Badge variant="outline" className="mb-6 text-base px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border-violet-500/30">
                <Sparkles className="w-4 h-4 mr-2 inline text-violet-400" />
                AI-Powered Studio Modes
              </Badge>
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Perfect Lighting,<br />Every Time
              </h2>
              <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light">
                Choose from professional lighting presets or let AI select the{' '}
                <span className="text-violet-400 font-medium">perfect setup</span>
              </p>
            </motion.div>

            {/* Interactive Studio Mode Selector */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {studioModes.map((mode, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedMode(index)}
                  className={`group relative p-8 rounded-3xl transition-all duration-500 text-left ${
                    selectedMode === index
                      ? 'bg-white/10 backdrop-blur-xl border-2 border-violet-500/50 shadow-2xl shadow-violet-500/20'
                      : 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/8 hover:border-white/20'
                  }`}
                  data-testid={`button-mode-${index}`}
                >
                  <div className="text-5xl mb-4">{mode.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{mode.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{mode.description}</p>
                  
                  {selectedMode === index && (
                    <motion.div
                      layoutId="activeMode"
                      className={`absolute inset-0 bg-gradient-to-br ${mode.gradient} opacity-10 rounded-3xl -z-10`}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Glass Product Frame Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 shadow-2xl overflow-hidden">
                {/* Selected Mode Gradient Overlay */}
                <motion.div
                  key={selectedMode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 bg-gradient-to-br ${studioModes[selectedMode].gradient} rounded-[3rem]`}
                />
                
                {/* Product Showcase Area */}
                <div className="relative z-10 aspect-video bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl flex items-center justify-center border border-white/5">
                  <motion.div
                    key={selectedMode}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <Camera className="w-32 h-32 text-gray-600 mx-auto mb-6" strokeWidth={1} />
                    <h3 className="text-3xl font-bold text-white mb-3">{studioModes[selectedMode].name}</h3>
                    <p className="text-gray-400 text-lg max-w-md mx-auto">
                      {studioModes[selectedMode].description}
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                      <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">AI Rendering Preview</span>
                    </div>
                  </motion.div>
                </div>

                {/* Holographic UI Elements */}
                <div className="absolute top-6 right-6 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-violet-400/30 backdrop-blur-sm" />
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
                Professional Results
              </h2>
              <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light">
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
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-violet-500 via-fuchsia-600 to-pink-600 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-xl shadow-violet-500/30 group-hover:shadow-violet-500/50 group-hover:scale-110 transition-all duration-500">
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

        {/* Results Showcase */}
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
                Proven Impact
              </h2>
              <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light">
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
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-square flex items-center justify-center p-12">
                      <Camera className="w-24 h-24 text-gray-700 group-hover:text-gray-600 transition-colors duration-500" strokeWidth={1} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">
                        {item.category}
                      </div>
                      <div className="text-3xl font-bold text-white">
                        {item.result}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-700" />
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
                Transform Your<br />Product Images
              </h2>
              <p className="text-2xl text-violet-100 mb-12 max-w-3xl mx-auto font-light">
                Join thousands creating stunning visuals with our Image Generation Agent
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-violet-600 hover:bg-violet-50 px-10 py-7 text-xl font-medium rounded-[1.25rem] shadow-2xl hover:shadow-white/40 transition-all duration-500 hover:scale-105 border-0"
                  data-testid="button-get-started"
                >
                  Get Started Today <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Link href="/pricing">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-white hover:bg-white/10 px-10 py-7 text-xl rounded-[1.25rem] backdrop-blur-sm transition-all duration-500"
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
