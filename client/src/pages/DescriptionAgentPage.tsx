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
  },
  {
    category: "Luxury Fashion",
    before: "Black leather jacket. Made from genuine leather. Multiple sizes available. Classic motorcycle style design.",
    after: "Command every room with timeless rebellion. This isn't just a leather jacket—it's your armor of confidence, crafted from buttery-soft genuine leather that tells your story. The kind of piece that gets better with every adventure, developing character that reflects your journey. A legacy piece that transcends trends.",
  },
  {
    category: "Home & Living",
    before: "Ceramic coffee mug. 12 oz capacity. Microwave and dishwasher safe. White with simple design.",
    after: "Transform your morning ritual into a moment of zen. This hand-crafted ceramic sanctuary holds 12 oz of pure potential—whether it's your meditation brew or afternoon comfort. Perfectly weighted to feel substantial yet intimate, with a silky-smooth finish that makes every sip a tactile pleasure. Because mornings deserve this kind of poetry.",
  }
];

const DescriptionAgentPage = () => {
  const [selectedExample, setSelectedExample] = useState(0);
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
                  AI-POWERED COPYWRITING
                </p>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-2xl mb-8">
                  <FileText className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  Description Agent
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Transform ordinary words into extraordinary stories that captivate, convince, and convert.
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
                  data-testid="button-start-writing"
                >
                  Start Writing <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 text-lg rounded-lg bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
                  data-testid="button-see-examples"
                >
                  <Play className="mr-2 w-5 h-5" /> See Examples
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Before/After Showcase - Light Cream Background */}
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
                SEE THE TRANSFORMATION
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Before & After
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
                  className={`px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
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
              <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Before */}
                  <motion.div
                    key={`before-${selectedExample}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Before</span>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed italic border-l-4 border-gray-200 pl-4">
                      "{beforeAfterExamples[selectedExample].before}"
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MessageCircle className="w-4 h-4" />
                      <span>Generic product description</span>
                    </div>
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
                      "{beforeAfterExamples[selectedExample].after}"
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600">
                      <Sparkles className="w-4 h-4" />
                      <span>AI-enhanced compelling copy</span>
                    </div>
                  </motion.div>
                </div>

                {/* Metrics */}
                <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-3 gap-6">
                  {[
                    { label: 'Word Count', before: '18', after: '68', increase: '+278%' },
                    { label: 'Emotional Impact', before: 'Low', after: 'High', increase: '+500%' },
                    { label: 'Conversion Lift', before: 'Baseline', after: '2.4x', increase: '+140%' }
                  ].map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                        {metric.label}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-gray-400 line-through text-sm">{metric.before}</span>
                        <ArrowRight className="w-4 h-4 text-indigo-600" />
                        <span className="text-xl font-bold text-gray-900">{metric.after}</span>
                      </div>
                      <div className="text-sm text-green-600 font-semibold mt-1">
                        {metric.increase}
                      </div>
                    </div>
                  ))}
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
                INTELLIGENT FEATURES
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Powered by Intelligence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                Ready to Write Copy<br />That Converts?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Transform your product descriptions and watch your conversion rates soar
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-lg shadow-lg transition-all duration-300"
                  data-testid="button-start-today"
                >
                  Start Writing Today <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/pricing">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg border-2 border-white bg-transparent transition-all duration-300"
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
