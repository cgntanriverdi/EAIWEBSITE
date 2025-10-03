import { motion, useScroll, useTransform } from 'framer-motion';
import { HeadphonesIcon, MessageCircle, Mail, Phone, Clock, Search, FileQuestion, Zap, CheckCircle, ArrowRight, ExternalLink, BookOpen, Video, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import { useState, useRef } from 'react';

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7 Support',
    responseTime: '< 2 minutes',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Instant responses', 'Screen sharing', 'File uploads', 'Chat history']
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Detailed technical support via email',
    availability: 'Business Hours',
    responseTime: '< 4 hours',
    gradient: 'from-purple-500 to-pink-500',
    features: ['Detailed answers', 'Attachments', 'Priority queue', 'Follow-up tracking']
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    availability: 'Pro & Enterprise',
    responseTime: 'Immediate',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Direct access', 'Emergency hotline', 'Dedicated number', 'Callback option']
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal support manager for Enterprise',
    availability: 'Enterprise Only',
    responseTime: 'On-demand',
    gradient: 'from-orange-500 to-red-500',
    features: ['Personal manager', 'Custom SLA', 'Priority access', 'Proactive monitoring']
  }
];

const faqs = [
  {
    question: 'How quickly can I integrate AI Commerce Studio?',
    answer: 'Most customers are up and running within 5-10 minutes. Our quick start guide walks you through account setup, API key generation, and your first request.'
  },
  {
    question: 'What if the AI-generated content doesn\'t meet my standards?',
    answer: 'You have full control over all outputs. Use our quality parameters, custom prompts, and review workflows to ensure content meets your brand standards. Plus, our quality score system helps you identify and improve low-performing content.'
  },
  {
    question: 'Can I try it before committing to a paid plan?',
    answer: 'Absolutely! We offer a free trial with 20 credits so you can test all features. No credit card required to start.'
  },
  {
    question: 'How does billing work?',
    answer: 'Plans are billed monthly based on your credit usage. You can upgrade, downgrade, or cancel anytime. Enterprise customers get custom billing terms.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We use enterprise-grade encryption, SOC 2 compliance, and never train our models on your proprietary data. Your product information stays private and secure.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'All plans include email support with <4hr response time. Pro and Enterprise plans get live chat, phone support, and dedicated success managers.'
  }
];

const resources = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: '500+ pages of guides and tutorials',
    link: '/resources/documentation'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step video walkthroughs',
    link: '#videos'
  },
  {
    icon: FileQuestion,
    title: 'Knowledge Base',
    description: 'Searchable articles and FAQs',
    link: '#kb'
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other users',
    link: '#community'
  }
];

const supportStats = [
  { value: '99.9%', label: 'Customer Satisfaction' },
  { value: '< 2min', label: 'Avg Response Time' },
  { value: '24/7', label: 'Availability' },
  { value: '50+', label: 'Support Experts' }
];

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
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

      {/* Hero Section - Cyan Gradient */}
      <section ref={heroRef} className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(180deg, #0891B2 0%, #06B6D4 100%)'
            }}
          />
          
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
            <defs>
              <linearGradient id="supportWave1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.6)" />
              </linearGradient>
              <linearGradient id="supportWave2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.5)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0.7)" />
              </linearGradient>
              <linearGradient id="supportWave3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(103, 232, 249, 0.6)" />
                <stop offset="100%" stopColor="rgba(103, 232, 249, 0.8)" />
              </linearGradient>
            </defs>
            
            <path 
              d="M0,400 C240,320 480,480 720,400 C960,320 1200,480 1440,400 L1440,800 L0,800 Z" 
              fill="url(#supportWave1)"
              style={{ animation: 'waveMove1 20s ease-in-out infinite' }}
            />
            <path 
              d="M0,450 C320,370 640,530 960,450 C1120,410 1280,530 1440,470 L1440,800 L0,800 Z" 
              fill="url(#supportWave2)"
              style={{ animation: 'waveMove2 16s ease-in-out infinite reverse' }}
            />
            <path 
              d="M0,520 C360,440 720,600 1080,520 C1260,480 1350,580 1440,540 L1440,800 L0,800 Z" 
              fill="url(#supportWave3)"
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
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm" data-testid="badge-support">
              <HeadphonesIcon className="w-3 h-3 mr-2" />
              Customer Support
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We're here to help you succeed
            </h1>
            
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Get expert assistance 24/7 from our dedicated support team. We're committed to your success.
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
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur-sm border-white/20 rounded-xl"
                  data-testid="input-search-support"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {supportStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-cyan-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-50 text-cyan-700 border-cyan-200" data-testid="badge-channels">
              <MessageCircle className="w-3 h-3 mr-2" />
              Support Channels
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose your preferred way to get help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple support options to fit your needs and urgency level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all h-full group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${channel.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-2">{channel.availability}</Badge>
                          <div className="text-sm text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {channel.responseTime}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                      <p className="text-gray-600">{channel.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {channel.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className={`w-full bg-gradient-to-r ${channel.gradient} text-white`}>
                        Start Chat <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200" data-testid="badge-contact">
              <Mail className="w-3 h-3 mr-2" />
              Send Us a Message
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Have a question? We'd love to hear from you
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 4 hours
            </p>
          </div>

          <Card className="border-2 border-gray-100">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input
                    type="text"
                    placeholder="What do you need help with?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    data-testid="input-subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    rows={6}
                    placeholder="Describe your question or issue in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    data-testid="textarea-message"
                  />
                </div>

                <Button size="lg" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Send Message <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200" data-testid="badge-faqs">
              <FileQuestion className="w-3 h-3 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quick answers to common questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-gray-100 hover:border-cyan-200 transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-cyan-600 text-sm font-bold">?</span>
                      </div>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 ml-9">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-32 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200" data-testid="badge-resources">
              <Zap className="w-3 h-3 mr-2" />
              Self-Service Resources
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find answers on your own
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive knowledge base and learning resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.a
                  key={resource.title}
                  href={resource.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="block"
                >
                  <Card className="border-2 border-gray-100 hover:border-cyan-200 hover:shadow-lg transition-all h-full group">
                    <CardContent className="p-8 text-center">
                      <Icon className="w-12 h-12 text-cyan-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                      <div className="flex items-center justify-center gap-1 text-cyan-600 text-sm font-medium">
                        Explore <ExternalLink className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still need help?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Our support team is standing by to assist you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Live Chat
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              View All Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
