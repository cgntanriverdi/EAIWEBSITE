import { motion } from 'framer-motion';
import { FileText, PenTool, Target, Zap, ArrowRight, Play, Check, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';

const features = [
  {
    icon: PenTool,
    title: 'Compelling Copy',
    description: 'Generate persuasive product descriptions that convert browsers into buyers with psychological triggers.'
  },
  {
    icon: Target,
    title: 'SEO Optimized',
    description: 'Built-in keyword optimization ensures your products rank higher in search results.'
  },
  {
    icon: TrendingUp,
    title: 'Conversion Focused',
    description: 'Every word crafted to drive action, increasing your conversion rates by up to 40%.'
  }
];

const useCases = [
  {
    title: 'E-commerce Product Pages',
    description: 'Transform bland product specs into compelling stories that sell',
    results: '40% increase in conversion rates',
    example: 'Before: "Blue cotton t-shirt, size M"\nAfter: "Luxuriously soft premium cotton tee that feels like a gentle embrace. Perfect for casual elegance."'
  },
  {
    title: 'Marketing Campaigns',
    description: 'Create captivating copy for ads, emails, and social media posts',
    results: '65% higher click-through rates',
    example: 'Generate multiple variations for A/B testing with different emotional appeals and call-to-actions.'
  },
  {
    title: 'Product Catalogs',
    description: 'Consistent, professional descriptions across thousands of products',
    results: '90% reduction in copywriting time',
    example: 'Bulk generate descriptions maintaining brand voice while highlighting unique features for each item.'
  }
];

const copyExamples = [
  {
    category: "Electronics",
    before: "Wireless headphones with noise cancellation and 30-hour battery life.",
    after: "Escape into your own world with these premium wireless headphones. Advanced noise cancellation blocks out distractions while 30 hours of battery life keeps your music playing all week long."
  },
  {
    category: "Fashion",
    before: "Black leather jacket, genuine leather, multiple sizes available.",
    after: "Command attention in this timeless black leather jacket. Crafted from buttery-soft genuine leather that only gets better with age, it's your armor of confidence for any adventure."
  }
];

const DescriptionAgentPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />
      <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl mb-8 shadow-lg"
            >
              <FileText className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Description
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Agent
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Transform bland product specs into compelling stories that convert. AI-powered copywriting that speaks to your customers' hearts and wallets.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-start-writing">
                Start Writing <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-2xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300" data-testid="button-see-examples">
                <Play className="mr-2 w-5 h-5" /> See Examples
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Text Elements */}
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-16 text-6xl opacity-10 font-bold text-blue-500 select-none"
        >
          "Wow!"
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            rotate: [0, -1, 0]
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-1/3 left-12 text-4xl opacity-10 font-bold text-cyan-500 select-none"
        >
          "Perfect!"
        </motion.div>
      </section>

      {/* Before/After Examples Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2 rounded-full">
              See the Transformation
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Before & After
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Watch ordinary product descriptions become extraordinary selling tools.
            </p>
          </motion.div>

          <div className="space-y-12">
            {copyExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg"
              >
                <div className="text-center mb-8">
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                    {example.category}
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Before */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Before</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl min-h-32 flex items-center">
                      <p className="text-gray-700 dark:text-gray-300 italic">
                        "{example.before}"
                      </p>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">After</span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl min-h-32 flex items-center border-l-4 border-blue-500">
                      <p className="text-gray-800 dark:text-gray-200 font-medium">
                        "{example.after}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Powered by Psychology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every description leverages proven psychological triggers that influence buying decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how businesses boost their results with compelling copy.
            </p>
          </motion.div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-2 h-16 rounded-full mb-6" />
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold mb-4">
                      <Check className="w-5 h-5" />
                      {useCase.results}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl">
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic font-medium leading-relaxed">
                      {useCase.example}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Write Copy That Converts?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Transform your product descriptions and watch your conversion rates soar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-start-today">
                Start Writing Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/pricing">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl transition-all duration-300" data-testid="link-see-pricing">
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