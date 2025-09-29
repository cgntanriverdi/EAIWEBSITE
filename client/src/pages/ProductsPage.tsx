import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Image, 
  FileText, 
  DollarSign, 
  Upload, 
  Sparkles, 
  Zap, 
  Target,
  Camera,
  Brain,
  Wand2,
  ArrowRight,
  CheckCircle,
  Play,
  Layers
} from "lucide-react";

export default function ProductsPage() {
  const heroRef = useRef(null);
  const agentsRef = useRef(null);
  const featuresRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: agentsProgress } = useScroll({
    target: agentsRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: featuresProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const heroY = useTransform(heroProgress, [0, 1], [0, -100]);
  const agentsY = useTransform(agentsProgress, [0, 1], [0, -50]);
  const featuresY = useTransform(featuresProgress, [0, 1], [0, -75]);

  const agents = [
    {
      icon: Image,
      title: "Image Generation Agent",
      description: "Transform basic product photos into stunning professional images with AI models, perfect lighting, and premium backgrounds that make your products irresistible.",
      features: [
        "AI model generation",
        "Professional backgrounds", 
        "Lighting optimization",
        "Multiple style variants",
        "Real-time rendering",
        "Brand consistency"
      ],
      color: "from-purple-500 to-pink-500",
      accentColor: "bg-purple-500",
      demo: "Live Demo"
    },
    {
      icon: FileText,
      title: "Description Agent", 
      description: "Generate compelling, SEO-optimized product descriptions that drive sales using advanced language models trained on high-converting e-commerce copy.",
      features: [
        "SEO-optimized content",
        "Conversion-focused copy",
        "Brand voice matching",
        "Multi-language support", 
        "A/B testing variants",
        "Performance analytics"
      ],
      color: "from-blue-500 to-cyan-500",
      accentColor: "bg-blue-500",
      demo: "See Examples"
    },
    {
      icon: DollarSign,
      title: "Pricing Agent",
      description: "Calculate optimal prices with AI-powered market analysis, competitor tracking, and demand forecasting to maximize your margins while staying competitive.",
      features: [
        "Dynamic pricing models",
        "Competitor price tracking", 
        "Profit margin optimization",
        "Market demand analysis",
        "Real-time adjustments",
        "Revenue forecasting"
      ],
      color: "from-green-500 to-emerald-500", 
      accentColor: "bg-green-500",
      demo: "Try Calculator"
    },
    {
      icon: Upload,
      title: "Publishing Agent",
      description: "Instantly publish your perfected listings across multiple marketplaces and platforms with automatic formatting and platform-specific optimization.",
      features: [
        "Multi-platform publishing",
        "Automated formatting",
        "Real-time sync",
        "Performance tracking",
        "Error handling",
        "Rollback capabilities"
      ],
      color: "from-orange-500 to-red-500",
      accentColor: "bg-orange-500", 
      demo: "Watch Flow"
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "Autonomous Intelligence",
      description: "Our agents work independently, making intelligent decisions without constant oversight."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process thousands of listings in minutes, not hours or days."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced algorithms ensure every optimization is perfectly tailored to your market."
    },
    {
      icon: Layers,
      title: "Seamless Integration", 
      description: "Works with your existing tools and workflows without disruption."
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
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-pink-500/10" />
        </motion.div>

        {/* Floating Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`hero-particle-${i}`}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 7}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2" data-testid="badge-products-hero">
                <Sparkles className="w-3 h-3 mr-2" />
                AI Agents
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-testid="text-products-title"
            >
              Autonomous AI agents that{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                perfect everything
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-products-subtitle"
            >
              Four specialized AI agents work in perfect harmony to transform your basic product listings into professional, high-converting e-commerce experiences that drive sales.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                data-testid="button-try-agents"
              >
                Try Our Agents
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
                data-testid="button-watch-demo"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Agent Cards Preview */}
        <motion.div 
          className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="space-y-4">
            {agents.slice(0, 3).map((agent, index) => {
              const IconComponent = agent.icon;
              return (
                <motion.div
                  key={agent.title}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 w-64"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${agent.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{agent.title}</div>
                      <div className="text-white/60 text-xs">Active</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* AI Agents Showcase */}
      <section ref={agentsRef} className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"
          style={{ y: agentsY }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-indigo-50 text-indigo-700 border-indigo-200 px-4 py-2" data-testid="badge-agents">
              <Wand2 className="w-3 h-3 mr-2" />
              Meet Your Agents
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight" data-testid="text-agents-title">
              Four specialists,{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                infinite possibilities
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" data-testid="text-agents-subtitle">
              Each AI agent is a master of their domain, working together to create the perfect listing experience.
            </p>
          </motion.div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {agents.map((agent, index) => {
              const IconComponent = agent.icon;
              return (
                <motion.div
                  key={agent.title}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                    <CardContent className="p-8">
                      {/* Agent Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${agent.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{agent.title}</h3>
                          <div className={`inline-flex items-center gap-2 ${agent.accentColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            Active
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {agent.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {agent.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button 
                        className={`w-full bg-gradient-to-r ${agent.color} text-white font-semibold py-3 rounded-xl hover:scale-105 transition-all duration-300`}
                        data-testid={`button-${agent.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {agent.demo}
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

      {/* Platform Capabilities */}
      <section ref={featuresRef} className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: featuresY }}
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
              <Target className="w-3 h-3 mr-2" />
              Platform Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Built for{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                performance
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Our platform is engineered for scale, speed, and reliability with enterprise-grade capabilities.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-white/70 leading-relaxed">{capability.description}</p>
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
              Ready to transform your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                e-commerce?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join thousands of businesses already using our AI agents to create perfect listings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                data-testid="button-start-free-trial"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 text-lg rounded-xl"
                data-testid="button-schedule-demo"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}