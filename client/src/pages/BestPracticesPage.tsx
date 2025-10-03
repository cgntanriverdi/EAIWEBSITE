import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Zap, Shield, TrendingUp, Target, Clock, CheckCircle, ArrowRight, Code, Settings, BarChart3, Lock, Rocket, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { useRef } from 'react';

const categories = [
  {
    id: 'performance',
    label: 'Performance',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'security',
    label: 'Security',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'optimization',
    label: 'Optimization',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'workflow',
    label: 'Workflow',
    icon: Target,
    color: 'from-purple-500 to-pink-500'
  }
];

const bestPractices = {
  performance: [
    {
      title: 'Batch Processing',
      description: 'Process multiple products simultaneously for maximum efficiency',
      tips: [
        'Use batch API endpoints for bulk operations',
        'Limit batch sizes to 100 items for optimal performance',
        'Implement retry logic for failed batch items',
        'Monitor queue depth and adjust concurrency'
      ],
      impact: 'Up to 10x faster processing',
      difficulty: 'Intermediate'
    },
    {
      title: 'Caching Strategy',
      description: 'Implement intelligent caching to reduce API calls and costs',
      tips: [
        'Cache generated content for 24-48 hours',
        'Use ETags for conditional requests',
        'Implement cache invalidation on product updates',
        'Store frequently accessed data in Redis'
      ],
      impact: '80% reduction in API costs',
      difficulty: 'Advanced'
    },
    {
      title: 'Async Processing',
      description: 'Handle long-running tasks without blocking user experience',
      tips: [
        'Use webhooks for completion notifications',
        'Implement job queues for background processing',
        'Provide real-time status updates',
        'Set appropriate timeouts for each operation'
      ],
      impact: '5x better user experience',
      difficulty: 'Intermediate'
    }
  ],
  security: [
    {
      title: 'API Key Management',
      description: 'Secure storage and rotation of API credentials',
      tips: [
        'Never commit API keys to version control',
        'Use environment variables for credentials',
        'Rotate keys every 90 days',
        'Implement IP whitelisting for production'
      ],
      impact: 'Critical security protection',
      difficulty: 'Beginner'
    },
    {
      title: 'Rate Limiting',
      description: 'Implement proper rate limiting to prevent abuse',
      tips: [
        'Add exponential backoff for rate limit errors',
        'Monitor rate limit headers in responses',
        'Use token bucket algorithm for smooth traffic',
        'Set up alerts for approaching limits'
      ],
      impact: 'Prevents service disruption',
      difficulty: 'Intermediate'
    },
    {
      title: 'Data Encryption',
      description: 'Protect sensitive customer and product data',
      tips: [
        'Use HTTPS for all API communications',
        'Encrypt sensitive data at rest',
        'Implement field-level encryption for PII',
        'Use secure random generators for IDs'
      ],
      impact: 'Compliance and trust',
      difficulty: 'Advanced'
    }
  ],
  optimization: [
    {
      title: 'Cost Optimization',
      description: 'Maximize ROI by optimizing resource usage',
      tips: [
        'Use appropriate tier based on usage patterns',
        'Implement intelligent caching strategies',
        'Monitor and optimize batch sizes',
        'Archive unused generated content'
      ],
      impact: 'Save 40-60% on costs',
      difficulty: 'Intermediate'
    },
    {
      title: 'Quality Control',
      description: 'Ensure consistent high-quality outputs',
      tips: [
        'Set up automated quality checks',
        'Use A/B testing for content variations',
        'Implement human review workflows',
        'Monitor engagement metrics continuously'
      ],
      impact: '+45% conversion rates',
      difficulty: 'Intermediate'
    },
    {
      title: 'A/B Testing',
      description: 'Data-driven optimization of AI-generated content',
      tips: [
        'Test multiple content variations',
        'Track conversion metrics by variation',
        'Use statistical significance thresholds',
        'Automate winner selection and rollout'
      ],
      impact: '+30% performance improvement',
      difficulty: 'Advanced'
    }
  ],
  workflow: [
    {
      title: 'Automation Pipeline',
      description: 'Build end-to-end automated workflows',
      tips: [
        'Define clear trigger conditions',
        'Implement error handling and rollback',
        'Add human approval gates for critical steps',
        'Monitor workflow execution metrics'
      ],
      impact: '95% time savings',
      difficulty: 'Advanced'
    },
    {
      title: 'Version Control',
      description: 'Track and manage content versions effectively',
      tips: [
        'Store all generated content versions',
        'Implement rollback capabilities',
        'Tag versions with performance metrics',
        'Archive old versions after 90 days'
      ],
      impact: 'Easy content management',
      difficulty: 'Beginner'
    },
    {
      title: 'Monitoring & Alerts',
      description: 'Stay informed about system health and issues',
      tips: [
        'Set up error rate alerts',
        'Monitor API response times',
        'Track daily cost spending',
        'Alert on quality score drops'
      ],
      impact: 'Proactive issue detection',
      difficulty: 'Intermediate'
    }
  ]
};

const quickTips = [
  {
    icon: Clock,
    title: 'Start Small',
    description: 'Begin with a single product category before scaling',
    color: 'text-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Measure Everything',
    description: 'Track metrics before and after AI implementation',
    color: 'text-green-600'
  },
  {
    icon: Target,
    title: 'Iterate Quickly',
    description: 'Use feedback loops to continuously improve outputs',
    color: 'text-purple-600'
  },
  {
    icon: CheckCircle,
    title: 'Validate Results',
    description: 'Always review AI outputs before publishing',
    color: 'text-orange-600'
  }
];

const commonPitfalls = [
  {
    title: 'Over-automation without review',
    problem: 'Publishing AI content without human oversight',
    solution: 'Implement approval workflows for initial rollout',
    icon: AlertTriangle
  },
  {
    title: 'Ignoring rate limits',
    problem: 'Not handling API rate limiting properly',
    solution: 'Add exponential backoff and queue management',
    icon: Clock
  },
  {
    title: 'Poor error handling',
    problem: 'Not gracefully handling API failures',
    solution: 'Implement retry logic and fallback mechanisms',
    icon: Shield
  }
];

export default function BestPracticesPage() {
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

      {/* Hero Section - Amber Gradient */}
      <section ref={heroRef} className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(180deg, #D97706 0%, #F59E0B 100%)'
            }}
          />
          
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
            <defs>
              <linearGradient id="practiceWave1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(245, 158, 11, 0.4)" />
                <stop offset="100%" stopColor="rgba(245, 158, 11, 0.6)" />
              </linearGradient>
              <linearGradient id="practiceWave2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(251, 191, 36, 0.5)" />
                <stop offset="100%" stopColor="rgba(251, 191, 36, 0.7)" />
              </linearGradient>
              <linearGradient id="practiceWave3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(252, 211, 77, 0.6)" />
                <stop offset="100%" stopColor="rgba(252, 211, 77, 0.8)" />
              </linearGradient>
            </defs>
            
            <path 
              d="M0,400 C240,320 480,480 720,400 C960,320 1200,480 1440,400 L1440,800 L0,800 Z" 
              fill="url(#practiceWave1)"
              style={{ animation: 'waveMove1 20s ease-in-out infinite' }}
            />
            <path 
              d="M0,450 C320,370 640,530 960,450 C1120,410 1280,530 1440,470 L1440,800 L0,800 Z" 
              fill="url(#practiceWave2)"
              style={{ animation: 'waveMove2 16s ease-in-out infinite reverse' }}
            />
            <path 
              d="M0,520 C360,440 720,600 1080,520 C1260,480 1350,580 1440,540 L1440,800 L0,800 Z" 
              fill="url(#practiceWave3)"
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
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm" data-testid="badge-best-practices">
              <Lightbulb className="w-3 h-3 mr-2" />
              Best Practices
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Master AI commerce workflows
            </h1>
            
            <p className="text-xl text-amber-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn proven strategies, optimization techniques, and expert tips to maximize your AI commerce results.
            </p>

            <div className="flex items-center justify-center gap-6 text-amber-100 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Production-Ready Patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Industry Standards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all h-full">
                    <CardContent className="p-6">
                      <Icon className={`w-12 h-12 ${tip.color} mb-4`} />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Practices Tabs */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-50 text-amber-700 border-amber-200" data-testid="badge-practices">
              <Rocket className="w-3 h-3 mr-2" />
              Expert Guidance
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive best practices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these proven patterns to build robust, scalable AI commerce solutions
            </p>
          </div>

          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid gap-8">
                  {bestPractices[category.id as keyof typeof bestPractices].map((practice, index) => (
                    <motion.div
                      key={practice.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-2 border-gray-100 hover:shadow-xl transition-all">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">{practice.title}</h3>
                              <p className="text-gray-600">{practice.description}</p>
                            </div>
                            <Badge variant="outline" className="shrink-0">
                              {practice.difficulty}
                            </Badge>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                Implementation Tips
                              </h4>
                              <ul className="space-y-3">
                                {practice.tips.map((tip) => (
                                  <li key={tip} className="flex items-start gap-2 text-gray-700">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                                    <span className="text-sm">{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white`}>
                              <h4 className="font-semibold mb-2">Expected Impact</h4>
                              <div className="text-3xl font-bold mb-4">{practice.impact}</div>
                              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 w-full">
                                View Implementation Guide <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="py-32 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200" data-testid="badge-pitfalls">
              <AlertTriangle className="w-3 h-3 mr-2" />
              Common Pitfalls
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Avoid these mistakes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from common errors to save time and prevent costly mistakes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {commonPitfalls.map((pitfall, index) => {
              const Icon = pitfall.icon;
              return (
                <motion.div
                  key={pitfall.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all h-full">
                    <CardContent className="p-8">
                      <Icon className="w-12 h-12 text-red-500 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{pitfall.title}</h3>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-red-600 mb-1">Problem:</div>
                        <p className="text-gray-600 text-sm">{pitfall.problem}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-600 mb-1">Solution:</div>
                        <p className="text-gray-700 text-sm">{pitfall.solution}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to implement best practices?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Start building robust AI commerce solutions today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8">
              Get Started <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Code className="w-5 h-5 mr-2" />
              View Code Examples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
