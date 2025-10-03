import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Search, Code, Zap, Terminal, Book, FileText, ArrowRight, Check, ChevronRight, Copy, ExternalLink, Download, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import { useState, useRef } from 'react';

const quickStartSteps = [
  {
    step: '01',
    title: 'Create your account',
    description: 'Sign up for free and get instant access to all AI agents',
    code: 'npm install @ai-commerce/sdk',
    time: '30 seconds'
  },
  {
    step: '02',
    title: 'Get your API key',
    description: 'Generate your API credentials from the dashboard',
    code: 'export API_KEY=your_api_key_here',
    time: '1 minute'
  },
  {
    step: '03',
    title: 'Make your first request',
    description: 'Generate your first product description or image',
    code: `const result = await ai.generateDescription({
  product: "Premium Headphones",
  category: "Electronics"
});`,
    time: '5 minutes'
  }
];

const apiEndpoints = [
  {
    method: 'POST',
    endpoint: '/api/descriptions/generate',
    description: 'Generate AI-powered product descriptions',
    category: 'Description Agent'
  },
  {
    method: 'POST',
    endpoint: '/api/images/generate',
    description: 'Create product images with AI',
    category: 'Image Agent'
  },
  {
    method: 'POST',
    endpoint: '/api/pricing/optimize',
    description: 'Get AI-optimized pricing recommendations',
    category: 'Pricing Agent'
  },
  {
    method: 'POST',
    endpoint: '/api/publishing/distribute',
    description: 'Publish to multiple platforms instantly',
    category: 'Publishing Agent'
  }
];

const guides = [
  {
    icon: Zap,
    title: 'Quick Start',
    description: 'Get up and running in 5 minutes',
    topics: ['Installation', 'Authentication', 'First Request', 'Error Handling'],
    gradient: 'from-yellow-500 to-orange-500',
    time: '5 min'
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete API documentation with examples',
    topics: ['Endpoints', 'Parameters', 'Response Format', 'Rate Limits'],
    gradient: 'from-blue-500 to-cyan-500',
    time: '15 min'
  },
  {
    icon: Layers,
    title: 'Integration Guides',
    description: 'Connect with your existing tools',
    topics: ['Shopify', 'WooCommerce', 'Magento', 'Custom Platforms'],
    gradient: 'from-purple-500 to-pink-500',
    time: '20 min'
  },
  {
    icon: Terminal,
    title: 'SDK Documentation',
    description: 'Official SDKs for all languages',
    topics: ['JavaScript/TypeScript', 'Python', 'PHP', 'Ruby'],
    gradient: 'from-green-500 to-emerald-500',
    time: '10 min'
  }
];

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Deep Indigo Gradient */}
      <section ref={heroRef} className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(180deg, #312E81 0%, #4C1D95 100%)'
            }}
          />
          
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
            <defs>
              <linearGradient id="docWave1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(76, 29, 149, 0.4)" />
                <stop offset="100%" stopColor="rgba(76, 29, 149, 0.6)" />
              </linearGradient>
              <linearGradient id="docWave2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(109, 40, 217, 0.5)" />
                <stop offset="100%" stopColor="rgba(109, 40, 217, 0.7)" />
              </linearGradient>
              <linearGradient id="docWave3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.8)" />
              </linearGradient>
            </defs>
            
            <path 
              d="M0,400 C240,320 480,480 720,400 C960,320 1200,480 1440,400 L1440,800 L0,800 Z" 
              fill="url(#docWave1)"
              style={{ animation: 'waveMove1 20s ease-in-out infinite' }}
            />
            <path 
              d="M0,450 C320,370 640,530 960,450 C1120,410 1280,530 1440,470 L1440,800 L0,800 Z" 
              fill="url(#docWave2)"
              style={{ animation: 'waveMove2 16s ease-in-out infinite reverse' }}
            />
            <path 
              d="M0,520 C360,440 720,600 1080,520 C1260,480 1350,580 1440,540 L1440,800 L0,800 Z" 
              fill="url(#docWave3)"
              style={{ animation: 'waveMove3 12s ease-in-out infinite' }}
            />
          </svg>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-0" />

        <div className="max-w-7xl mx-auto relative z-10 pt-24">
          <motion.div
            style={{ y, opacity }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm" data-testid="badge-documentation">
              <BookOpen className="w-3 h-3 mr-2" />
              Documentation
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Everything you need to build with AI
            </h1>
            
            <p className="text-xl text-violet-100 mb-8 leading-relaxed">
              Comprehensive guides, API references, and code examples to help you integrate AI commerce into your applications.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur-sm border-white/20 rounded-xl"
                  data-testid="input-search-docs"
                />
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-6 text-violet-200 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>500+ Documentation Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Live Code Examples</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-200" data-testid="badge-quick-start">
              <Zap className="w-3 h-3 mr-2" />
              Quick Start
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Start building in <span className="text-indigo-600">5 minutes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to integrate AI commerce into your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden border-2 border-gray-100 hover:border-indigo-200 transition-all h-full">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-bl-full opacity-50" />
                  
                  <CardContent className="p-8 relative">
                    <div className="text-6xl font-bold text-indigo-100 mb-4">{step.step}</div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="bg-gray-900 rounded-lg p-4 mb-4 relative group">
                      <code className="text-sm text-green-400 font-mono whitespace-pre-wrap break-all">
                        {step.code}
                      </code>
                      <button
                        onClick={() => copyCode(step.code, index)}
                        className="absolute top-2 right-2 p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors opacity-0 group-hover:opacity-100"
                        data-testid={`button-copy-code-${index}`}
                      >
                        {copiedCode === index ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                      {step.time}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200" data-testid="badge-guides">
              <Book className="w-3 h-3 mr-2" />
              Complete Guides
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Master every feature
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed guides covering everything from basics to advanced techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all h-full group">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${guide.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-6">{guide.description}</p>

                      <div className="space-y-2 mb-6">
                        {guide.topics.map((topic) => (
                          <div key={topic} className="flex items-center gap-2 text-gray-700">
                            <ChevronRight className="w-4 h-4 text-indigo-500" />
                            <span className="text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{guide.time} read</span>
                        <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 group-hover:translate-x-1 transition-transform">
                          Read guide <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-50 text-cyan-700 border-cyan-200" data-testid="badge-api">
              <Terminal className="w-3 h-3 mr-2" />
              API Reference
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful API endpoints
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              RESTful API with comprehensive documentation and live examples
            </p>
          </div>

          <div className="grid gap-4">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.endpoint}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <Badge className={`${
                        endpoint.method === 'POST' ? 'bg-green-100 text-green-700 border-green-200' :
                        endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                        endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                        'bg-red-100 text-red-700 border-red-200'
                      }`}>
                        {endpoint.method}
                      </Badge>
                      <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-gray-600 mb-2">{endpoint.description}</p>
                  <Badge variant="outline" className="text-xs">{endpoint.category}</Badge>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Download className="w-5 h-5 mr-2" />
              Download API Spec (OpenAPI)
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to start building?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your API key and make your first request in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
              Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <FileText className="w-5 h-5 mr-2" />
              View Full Docs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
