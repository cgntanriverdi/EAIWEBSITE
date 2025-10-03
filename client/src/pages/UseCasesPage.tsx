import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Users, ShoppingBag, Sparkles, ArrowRight, Check, Quote, Star, BarChart3, DollarSign, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { useRef } from 'react';

const caseStudies = [
  {
    company: 'StyleHub Fashion',
    industry: 'E-commerce Fashion',
    logo: '👗',
    challenge: 'Managing 10,000+ product descriptions across multiple languages was taking weeks and costing thousands monthly',
    solution: 'Implemented Description Agent with multi-language support and SEO optimization',
    results: [
      { metric: '+245%', label: 'Organic Traffic' },
      { metric: '92%', label: 'Time Saved' },
      { metric: '+$180K', label: 'Monthly Revenue' }
    ],
    quote: "AI Commerce Studio transformed our content workflow. We now publish in 12 languages instantly with better quality than our human writers.",
    author: 'Sarah Chen',
    role: 'Head of E-commerce',
    gradient: 'from-pink-500 to-rose-500',
    stats: {
      products: '12,500+',
      languages: '12',
      timeframe: '3 months'
    }
  },
  {
    company: 'TechGear Pro',
    industry: 'Electronics Retail',
    logo: '💻',
    challenge: 'Product images were inconsistent, low-quality, and expensive to produce at scale',
    solution: 'Deployed Image Generation Agent for automated product photography and lifestyle scenes',
    results: [
      { metric: '+320%', label: 'Click-Through Rate' },
      { metric: '85%', label: 'Cost Reduction' },
      { metric: '+$250K', label: 'Quarterly Sales' }
    ],
    quote: "We went from spending $50K monthly on product photography to $5K, while actually improving quality and consistency.",
    author: 'Michael Torres',
    role: 'Operations Director',
    gradient: 'from-blue-500 to-cyan-500',
    stats: {
      products: '8,900+',
      images: '45,000+',
      timeframe: '2 months'
    }
  },
  {
    company: 'HomeNest Marketplace',
    industry: 'Home & Living',
    logo: '🏠',
    challenge: 'Pricing across 50+ competitors was manual, slow, and often resulted in lost sales or low margins',
    solution: 'Integrated Pricing Agent for real-time competitive analysis and dynamic pricing',
    results: [
      { metric: '+156%', label: 'Profit Margin' },
      { metric: '+89%', label: 'Sales Volume' },
      { metric: '$420K', label: 'Additional Revenue' }
    ],
    quote: "The AI pricing optimization paid for itself in the first week. Our margins have never been better while staying competitive.",
    author: 'Jennifer Park',
    role: 'CEO',
    gradient: 'from-emerald-500 to-green-500',
    stats: {
      products: '15,200+',
      competitors: '52',
      timeframe: '4 months'
    }
  },
  {
    company: 'GlobalCraft Artisan',
    industry: 'Handmade Goods',
    logo: '🎨',
    challenge: 'Publishing to multiple marketplaces manually was taking 40+ hours per week',
    solution: 'Automated distribution with Publishing Agent across Amazon, Etsy, eBay, and Shopify',
    results: [
      { metric: '+410%', label: 'Platform Reach' },
      { metric: '95%', label: 'Time Saved' },
      { metric: '+$95K', label: 'Monthly Revenue' }
    ],
    quote: "We went from being on 2 platforms to 8 platforms in one day. Sales quadrupled within the first month.",
    author: 'David Kumar',
    role: 'Founder',
    gradient: 'from-purple-500 to-indigo-500',
    stats: {
      products: '3,400+',
      platforms: '8',
      timeframe: '6 weeks'
    }
  }
];

const industries = [
  { name: 'Fashion & Apparel', icon: '👔', count: '1,200+ customers' },
  { name: 'Electronics', icon: '📱', count: '850+ customers' },
  { name: 'Home & Living', icon: '🛋️', count: '980+ customers' },
  { name: 'Beauty & Cosmetics', icon: '💄', count: '620+ customers' },
  { name: 'Sports & Fitness', icon: '⚽', count: '540+ customers' },
  { name: 'Books & Media', icon: '📚', count: '430+ customers' }
];

const metrics = [
  { value: '10,000+', label: 'Active Businesses', icon: Users },
  { value: '$2.5B+', label: 'Revenue Generated', icon: DollarSign },
  { value: '245%', label: 'Avg. ROI', icon: TrendingUp },
  { value: '98.4%', label: 'Customer Satisfaction', icon: Star }
];

export default function UseCasesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Gradient Background */}
      <section ref={heroRef} className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(180deg, #059669 0%, #10B981 100%)'
            }}
          />
          
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
            <defs>
              <linearGradient id="caseWave1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
              </linearGradient>
              <linearGradient id="caseWave2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(52, 211, 153, 0.5)" />
                <stop offset="100%" stopColor="rgba(52, 211, 153, 0.7)" />
              </linearGradient>
              <linearGradient id="caseWave3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(110, 231, 183, 0.6)" />
                <stop offset="100%" stopColor="rgba(110, 231, 183, 0.8)" />
              </linearGradient>
            </defs>
            
            <path 
              d="M0,400 C240,320 480,480 720,400 C960,320 1200,480 1440,400 L1440,800 L0,800 Z" 
              fill="url(#caseWave1)"
              style={{ animation: 'waveMove1 20s ease-in-out infinite' }}
            />
            <path 
              d="M0,450 C320,370 640,530 960,450 C1120,410 1280,530 1440,470 L1440,800 L0,800 Z" 
              fill="url(#caseWave2)"
              style={{ animation: 'waveMove2 16s ease-in-out infinite reverse' }}
            />
            <path 
              d="M0,520 C360,440 720,600 1080,520 C1260,480 1350,580 1440,540 L1440,800 L0,800 Z" 
              fill="url(#caseWave3)"
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
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm" data-testid="badge-use-cases">
              <TrendingUp className="w-3 h-3 mr-2" />
              Customer Success Stories
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Real results from real businesses
            </h1>
            
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover how leading e-commerce businesses are transforming their operations and scaling revenue with AI Commerce Studio.
            </p>

            <div className="flex items-center justify-center gap-6 text-emerald-100 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>10,000+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>$2.5B+ Revenue Generated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-gray-600">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200" data-testid="badge-case-studies">
              <Target className="w-3 h-3 mr-2" />
              Featured Case Studies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success stories that inspire
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn how businesses like yours achieved remarkable growth with AI commerce
            </p>
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-gray-100 hover:border-emerald-200 overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Left Side - Company Info & Quote */}
                      <div className="p-12 bg-gradient-to-br from-gray-50 to-white">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="text-6xl">{study.logo}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                            <p className="text-gray-600">{study.industry}</p>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Challenge</h4>
                          <p className="text-gray-700 mb-6">{study.challenge}</p>

                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Solution</h4>
                          <p className="text-gray-700">{study.solution}</p>
                        </div>

                        <div className="relative bg-white rounded-xl p-6 border-2 border-emerald-100">
                          <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-200" />
                          <p className="text-gray-900 italic mb-4 relative z-10">"{study.quote}"</p>
                          <div>
                            <div className="font-semibold text-gray-900">{study.author}</div>
                            <div className="text-sm text-gray-600">{study.role}</div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Results */}
                      <div className={`p-12 bg-gradient-to-br ${study.gradient} flex flex-col justify-center`}>
                        <div className="mb-8">
                          <h4 className="text-white/80 font-semibold mb-6 text-lg">Key Results</h4>
                          <div className="grid grid-cols-3 gap-6 mb-8">
                            {study.results.map((result) => (
                              <div key={result.label} className="text-center">
                                <div className="text-4xl font-bold text-white mb-2">{result.metric}</div>
                                <div className="text-white/80 text-sm">{result.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                          <div>
                            <div className="text-2xl font-bold text-white">{study.stats.products}</div>
                            <div className="text-white/70 text-sm">Products</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">{study.stats.languages || study.stats.images || study.stats.competitors || study.stats.platforms}</div>
                            <div className="text-white/70 text-sm">{study.stats.languages ? 'Languages' : study.stats.images ? 'Images' : study.stats.competitors ? 'Competitors' : 'Platforms'}</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">{study.stats.timeframe}</div>
                            <div className="text-white/70 text-sm">Timeline</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200" data-testid="badge-industries">
              <ShoppingBag className="w-3 h-3 mr-2" />
              Industries We Serve
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powering success across industries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From fashion to electronics, businesses in every vertical are scaling with AI
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all text-center group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to write your success story?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join 10,000+ businesses transforming their e-commerce with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8">
              Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Sparkles className="w-5 h-5 mr-2" />
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
