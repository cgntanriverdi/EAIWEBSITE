import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  BookOpen, 
  FileText, 
  Zap, 
  HeadphonesIcon,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Users,
  MessageCircle,
  Lightbulb,
  Code,
  GraduationCap,
  Rocket,
  CheckCircle,
  Star,
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";

export default function ResourcesPage() {
  const heroRef = useRef(null);
  const learningRef = useRef(null);
  const supportRef = useRef(null);
  const communityRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: learningProgress } = useScroll({
    target: learningRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: supportProgress } = useScroll({
    target: supportRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: communityProgress } = useScroll({
    target: communityRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const heroY = useTransform(heroProgress, [0, 1], [0, -100]);
  const learningY = useTransform(learningProgress, [0, 1], [0, -50]);
  const supportY = useTransform(supportProgress, [0, 1], [0, -75]);
  const communityY = useTransform(communityProgress, [0, 1], [0, -60]);

  const learningResources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Complete guides and API references for every feature",
      type: "Guide",
      readTime: "10 min read",
      category: "Getting Started",
      gradient: "from-blue-500 to-cyan-500",
      items: [
        "Quick Start Guide",
        "API Reference", 
        "Best Practices",
        "Integration Guides",
        "Troubleshooting"
      ]
    },
    {
      icon: FileText,
      title: "Use Cases",
      description: "Real-world examples and success stories from our customers",
      type: "Case Study",
      readTime: "15 min read", 
      category: "Examples",
      gradient: "from-purple-500 to-pink-500",
      items: [
        "E-commerce Success Stories",
        "ROI Case Studies",
        "Implementation Examples",
        "Industry Solutions",
        "Performance Metrics"
      ]
    },
    {
      icon: Zap,
      title: "Best Practices",
      description: "Optimize your AI commerce workflows with expert tips",
      type: "Tutorial",
      readTime: "8 min read",
      category: "Optimization", 
      gradient: "from-green-500 to-emerald-500",
      items: [
        "Workflow Optimization",
        "Performance Tuning",
        "Security Guidelines", 
        "Cost Optimization",
        "Scaling Strategies"
      ]
    },
    {
      icon: Code,
      title: "Developer Resources",
      description: "SDKs, code samples, and technical documentation",
      type: "Technical",
      readTime: "20 min read",
      category: "Development",
      gradient: "from-orange-500 to-red-500", 
      items: [
        "SDK Documentation",
        "Code Examples",
        "Webhook Setup",
        "Custom Integrations",
        "Testing Guidelines"
      ]
    }
  ];

  const supportOptions = [
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "Get help from our expert team",
      type: "24/7 Support",
      availability: "Available now",
      gradient: "from-indigo-500 to-purple-500",
      features: [
        "Live chat support",
        "Email assistance", 
        "Priority response",
        "Screen sharing",
        "Phone support (Pro+)"
      ],
      cta: "Contact Support"
    },
    {
      icon: GraduationCap,
      title: "Training & Onboarding",
      description: "Personalized training for your team",
      type: "1:1 Sessions",
      availability: "Schedule anytime",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Custom onboarding",
        "Team training sessions",
        "Best practice workshops",
        "Performance reviews",
        "Ongoing coaching"
      ],
      cta: "Book Training"
    },
    {
      icon: Users,
      title: "Enterprise Support",
      description: "Dedicated support for enterprise customers",
      type: "Dedicated Team", 
      availability: "Custom SLA",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Dedicated success manager",
        "Custom SLA agreements",
        "Priority feature requests",
        "Architecture reviews",
        "24/7 escalation path"
      ],
      cta: "Contact Enterprise"
    }
  ];

  const quickLinks = [
    {
      icon: Rocket,
      title: "Quick Start",
      description: "Get up and running in 5 minutes",
      type: "Guide"
    },
    {
      icon: FileText,
      title: "API Docs",
      description: "Complete API reference",
      type: "Reference"
    },
    {
      icon: Play,
      title: "Video Tutorials",
      description: "Learn with step-by-step videos",
      type: "Video"
    },
    {
      icon: Download,
      title: "SDKs",
      description: "Download our official SDKs",
      type: "Tool"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "10K+",
      label: "Active Users",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      number: "500+",
      label: "Documentation Pages",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      number: "99.9%",
      label: "Support Satisfaction",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      number: "< 1hr",
      label: "Average Response Time",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-pink-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Floating Resource Icons */}
        {Array.from({ length: 10 }).map((_, i) => {
          const icons = [BookOpen, FileText, Code, Lightbulb, GraduationCap];
          const IconComponent = icons[i % icons.length];
          return (
            <motion.div
              key={`resource-icon-${i}`}
              className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white/60"
              style={{
                left: `${15 + i * 8}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.4, 0.8, 0.4],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
            >
              <IconComponent className="w-6 h-6" />
            </motion.div>
          );
        })}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2" data-testid="badge-resources-hero">
                <BookOpen className="w-3 h-3 mr-2" />
                Resources & Support
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-testid="text-resources-title"
            >
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                succeed
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-resources-subtitle"
            >
              Comprehensive documentation, expert support, and a thriving community to help you master AI commerce.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.button
                    key={link.title}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-left hover:bg-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-6 h-6 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-white font-medium text-sm mb-1">{link.title}</div>
                    <div className="text-white/60 text-xs">{link.description}</div>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="absolute bottom-8 left-8 right-8 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Learning Resources */}
      <section ref={learningRef} className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"
          style={{ y: learningY }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-indigo-50 text-indigo-700 border-indigo-200 px-4 py-2" data-testid="badge-learning">
              <GraduationCap className="w-3 h-3 mr-2" />
              Learning Resources
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight" data-testid="text-learning-title">
              Master AI commerce with{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                expert guidance
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" data-testid="text-learning-subtitle">
              From quick start guides to advanced techniques, we have everything you need to become an AI commerce expert.
            </p>
          </motion.div>

          {/* Learning Resources Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {learningResources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 group-hover:scale-105 h-full">
                    <CardHeader className="pb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${resource.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="mb-2">{resource.type}</Badge>
                          <div className="text-sm text-gray-500">{resource.readTime}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{resource.description}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-3 mb-6">
                        {resource.items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (itemIndex * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm font-medium">{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Button 
                        className={`w-full bg-gradient-to-r ${resource.gradient} text-white font-semibold py-3 rounded-xl hover:scale-105 transition-all duration-300`}
                        data-testid={`button-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Explore {resource.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section ref={supportRef} className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: supportY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-pink-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2">
              <HeadphonesIcon className="w-3 h-3 mr-2" />
              Expert Support
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Get help when{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                you need it
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Our team of experts is here to help you succeed with personalized support and guidance.
            </p>
          </motion.div>

          {/* Support Options Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={option.title}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 group-hover:scale-105 h-full">
                    <CardHeader className="pb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${option.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mb-2">{option.type}</Badge>
                          <div className="text-sm text-white/60">{option.availability}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                      <p className="text-white/80 leading-relaxed">{option.description}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-3 mb-6">
                        {option.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-white/90 text-sm font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Button 
                        className={`w-full bg-gradient-to-r ${option.gradient} text-white font-semibold py-3 rounded-xl hover:scale-105 transition-all duration-300`}
                        data-testid={`button-${option.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {option.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Still have{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                questions?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Our team is here to help you get started and succeed with AI commerce.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                data-testid="button-contact-support"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 text-lg rounded-xl"
                data-testid="button-browse-docs"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Browse Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}