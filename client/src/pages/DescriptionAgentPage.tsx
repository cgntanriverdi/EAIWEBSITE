import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, PenTool, Target, Zap, ArrowRight, Play, Check, TrendingUp, Sparkles, Brain, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import { useState, useRef } from 'react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Advanced language models understand context and craft messages that resonate with your target audience.'
  },
  {
    icon: Target,
    title: 'SEO Optimized',
    description: 'Every word strategically chosen to rank higher while maintaining natural, compelling narratives.'
  },
  {
    icon: TrendingUp,
    title: 'Conversion Focused',
    description: 'Psychological triggers embedded in every sentence to drive measurable results and boost sales by 40%.'
  }
];

const beforeAfterExamples = [
  {
    category: "Premium Electronics",
    before: "Wireless headphones with noise cancellation. 30-hour battery life. Available in black and silver colors. Bluetooth 5.0 compatible.",
    after: "Escape into your sanctuary of pure sound. These premium wireless headphones don't just block noise—they create your personal oasis of acoustic perfection. With 30 hours of uninterrupted bliss and buttery-soft ear cushions, every listening session becomes a luxurious retreat from the everyday chaos.",
    color: "from-indigo-500 via-purple-500 to-indigo-600"
  },
  {
    category: "Luxury Fashion",
    before: "Black leather jacket. Made from genuine leather. Multiple sizes available. Classic motorcycle style design.",
    after: "Command every room with timeless rebellion. This isn't just a leather jacket—it's your armor of confidence, crafted from buttery-soft genuine leather that tells your story. The kind of piece that gets better with every adventure, developing character that reflects your journey. A legacy piece that transcends trends.",
    color: "from-purple-500 via-pink-500 to-purple-600"
  },
  {
    category: "Home & Living",
    before: "Ceramic coffee mug. 12 oz capacity. Microwave and dishwasher safe. White with simple design.",
    after: "Transform your morning ritual into a moment of zen. This hand-crafted ceramic sanctuary holds 12 oz of pure potential—whether it's your meditation brew or afternoon comfort. Perfectly weighted to feel substantial yet intimate, with a silky-smooth finish that makes every sip a tactile pleasure. Because mornings deserve this kind of poetry.",
    color: "from-indigo-500 via-purple-500 to-indigo-600"
  }
];

const DescriptionAgentPage = () => {
  const [selectedExample, setSelectedExample] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
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
      
      {/* Ambient Background Elements - Subtle like landing page */}
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
              {/* Floating Glass Notebook Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 right-0 w-64 h-80 opacity-10 dark:opacity-5"
              >
                <div className="w-full h-full bg-gradient-to-br from-indigo-400/40 via-purple-300/30 to-indigo-500/40 dark:from-indigo-400/20 dark:via-purple-300/10 dark:to-indigo-500/20 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/20 dark:border-white/10 transform rotate-12" />
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
                className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-[2.5rem] mb-12 shadow-2xl relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-[2.5rem]" />
                <FileText className="w-16 h-16 text-white relative z-10" strokeWidth={1.5} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 leading-[0.9] tracking-tight">
                  Description
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
                Transform ordinary words into{' '}
                <span className="font-medium text-indigo-600">extraordinary stories</span> that captivate, convince, and convert.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 text-white px-10 py-7 text-xl font-medium rounded-[1.25rem] shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-600/60 transition-all duration-500 hover:scale-105 border-0"
                  data-testid="button-start-writing"
                >
                  Start Writing <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="px-10 py-7 text-xl rounded-[1.25rem] hover:bg-gray-50 backdrop-blur-sm transition-all duration-500 text-gray-700"
                  data-testid="button-see-examples"
                >
                  <Play className="mr-3 w-6 h-6" fill="currentColor" /> See Examples
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Typography Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-20 opacity-30 dark:opacity-20 pointer-events-none hidden lg:block"
            >
              <div className="text-8xl font-serif italic text-indigo-500 dark:text-purple-400">A</div>
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 25, 0],
                x: [0, -15, 0],
                rotate: [0, -8, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
              className="absolute bottom-32 left-16 opacity-30 dark:opacity-20 pointer-events-none hidden lg:block"
            >
              <div className="text-6xl font-serif italic text-purple-500 dark:text-pink-400">a</div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Before/After Showcase */}
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
                <Sparkles className="w-4 h-4 mr-2 inline" />
                See the Transformation
              </Badge>
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                Before & After
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                Watch ordinary descriptions become{' '}
                <span className="text-indigo-600 font-medium">extraordinary selling tools</span>
              </p>
            </motion.div>

            {/* Category Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-16"
            >
              {beforeAfterExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedExample(index);
                    setSliderValue(50);
                  }}
                  className={`px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 ${
                    selectedExample === index
                      ? 'bg-gradient-to-r ' + example.color + ' text-white shadow-xl scale-105'
                      : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 backdrop-blur-sm'
                  }`}
                  data-testid={`button-category-${index}`}
                >
                  {example.category}
                </button>
              ))}
            </motion.div>

            {/* Glass Panel with Slider Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative max-w-6xl mx-auto"
            >
              {/* Glassmorphic Container */}
              <div className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/50 dark:border-gray-700/50 overflow-hidden">
                {/* Ambient Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${beforeAfterExamples[selectedExample].color} opacity-5 rounded-[2.5rem]`} />
                
                <div className="relative z-10">
                  {/* Before/After Labels */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                      <span className="text-lg font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Before</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">After</span>
                      <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                    </div>
                  </div>

                  {/* Comparison Container */}
                  <div className="relative min-h-[300px] flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                      {/* Before */}
                      <motion.div
                        key={`before-${selectedExample}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-gray-700"
                      >
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                          "{beforeAfterExamples[selectedExample].before}"
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <MessageCircle className="w-4 h-4" />
                          <span>Generic product description</span>
                        </div>
                      </motion.div>
                      
                      {/* After - Glass Effect */}
                      <motion.div
                        key={`after-${selectedExample}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`bg-gradient-to-br ${beforeAfterExamples[selectedExample].color} bg-opacity-10 backdrop-blur-xl p-8 rounded-3xl border-2 border-white/30 dark:border-white/10 shadow-xl relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                        <div className="relative z-10">
                          <p className="text-lg text-gray-900 dark:text-white leading-relaxed font-medium">
                            "{beforeAfterExamples[selectedExample].after}"
                          </p>
                          <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                            <Sparkles className="w-4 h-4 text-yellow-500" />
                            <span className="text-gray-700 dark:text-gray-200">AI-enhanced compelling copy</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 grid grid-cols-3 gap-6">
                    {[
                      { label: 'Word Count', before: '18', after: '68', increase: '+278%' },
                      { label: 'Emotional Impact', before: 'Low', after: 'High', increase: '+500%' },
                      { label: 'Conversion Lift', before: 'Baseline', after: '2.4x', increase: '+140%' }
                    ].map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                        className="text-center"
                      >
                        <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-semibold">
                          {metric.label}
                        </div>
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-gray-400 dark:text-gray-600 line-through text-lg">{metric.before}</span>
                          <ArrowRight className="w-5 h-5 text-blue-500" />
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">{metric.after}</span>
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400 font-semibold mt-2">
                          {metric.increase}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-4 relative bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                Powered by Intelligence
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                Every word leverages proven psychological principles that influence buying decisions
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
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-xl shadow-indigo-500/30 group-hover:shadow-indigo-500/50 group-hover:scale-110 transition-all duration-500">
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700" />
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
                Ready to Write Copy<br />That Converts?
              </h2>
              <p className="text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto font-light">
                Transform your product descriptions and watch your conversion rates soar
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-7 text-xl font-medium rounded-[1.25rem] shadow-2xl hover:shadow-white/40 transition-all duration-500 hover:scale-105 border-0"
                  data-testid="button-start-today"
                >
                  Start Writing Today <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Link href="/pricing">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-white hover:bg-white/10 px-10 py-7 text-xl rounded-[1.25rem] backdrop-blur-sm transition-all duration-500"
                    data-testid="link-see-pricing"
                  >
                    See Pricing
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

export default DescriptionAgentPage;
