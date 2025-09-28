import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, DollarSign, Camera, Upload } from "lucide-react";

interface Agent {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  position: { x: number; y: number };
  color: string;
  lightningColor: string;
  capabilities: string[];
  description: string;
}

export default function LightningHero() {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  const agents: Agent[] = [
    {
      id: "description",
      name: "Description Agent",
      icon: FileText,
      position: { x: 15, y: 25 },
      color: "from-blue-500 to-blue-700",
      lightningColor: "#3b82f6",
      capabilities: [
        "AI-powered product descriptions",
        "SEO-optimized content",
        "Persuasive copywriting",
        "Multiple tone variations"
      ],
      description: "Transform basic product info into compelling, conversion-focused descriptions that sell."
    },
    {
      id: "pricing",
      name: "Pricing Agent", 
      icon: DollarSign,
      position: { x: 85, y: 25 },
      color: "from-green-500 to-green-700",
      lightningColor: "#10b981",
      capabilities: [
        "Dynamic market analysis",
        "Competitive pricing strategies",
        "Profit optimization",
        "Real-time price adjustments"
      ],
      description: "Maximize profits with intelligent pricing that adapts to market conditions."
    },
    {
      id: "images",
      name: "Image Generation",
      icon: Camera,
      position: { x: 15, y: 75 },
      color: "from-purple-500 to-purple-700",
      lightningColor: "#8b5cf6",
      capabilities: [
        "Studio-quality product photos",
        "Multiple angle generation",
        "Background variations",
        "Brand-consistent styling"
      ],
      description: "Generate professional product imagery that showcases your items in the best light."
    },
    {
      id: "publishing",
      name: "Publishing Agent",
      icon: Upload,
      position: { x: 85, y: 75 },
      color: "from-orange-500 to-orange-700", 
      lightningColor: "#f97316",
      capabilities: [
        "Multi-platform publishing",
        "Automated listing creation",
        "Inventory synchronization",
        "Performance tracking"
      ],
      description: "Seamlessly publish and manage your products across all major e-commerce platforms."
    }
  ];

  // Single straight lightning bolt like huly.io - elegant and minimalist
  const mainLightningPath = "M400 0 L400 600";

  const getCurrentLightningColor = () => {
    if (!hoveredAgent) return "#6366f1"; // Default indigo
    const agent = agents.find(a => a.id === hoveredAgent);
    return agent?.lightningColor || "#6366f1";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-16 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* Main heading */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
            data-testid="text-lightning-hero-title"
          >
            AI Commerce Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-lightning-hero-subtitle"
          >
            Four AI agents working in perfect harmony to transform your e-commerce business
          </motion.p>
        </div>

        {/* Lightning Animation Container */}
        <div className="relative w-full h-[400px] md:h-[600px] mx-auto">
          {/* Central Lightning SVG */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <svg 
              width="800" 
              height="600" 
              viewBox="0 0 800 600" 
              className="w-full h-full"
              role="presentation"
              aria-label="Lightning animation representing AI power"
              data-testid="svg-lightning-animation"
            >
              <defs>
                {/* Pure white bright core for flowing beam */}
                <linearGradient id="lightningCore" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                </linearGradient>
                
                {/* Uniform column glow gradients for color transitions */}
                <linearGradient id="atmosphericGlow1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.4" />
                </linearGradient>
                
                <linearGradient id="atmosphericGlow2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#4338ca" stopOpacity="0.4" />
                </linearGradient>
                
                <linearGradient id="atmosphericGlow3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#0891b2" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0e7490" stopOpacity="0.4" />
                </linearGradient>

                {/* Optimized filters for better mobile performance */}
                <filter id="atmosphericGlow" x="-100%" y="-50%" width="300%" height="200%">
                  <feGaussianBlur stdDeviation="25" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                <filter id="mediumGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                <filter id="coreGlow" x="-25%" y="-25%" width="150%" height="150%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background atmospheric glow rects for uniform column effect */}
              <motion.rect
                x="320" y="0" width="160" height="600"
                fill="url(#atmosphericGlow1)"
                filter="url(#atmosphericGlow)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.5, 0.4, 0.6, 0.4]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.rect
                x="340" y="0" width="120" height="600"
                fill="url(#atmosphericGlow2)"
                filter="url(#mediumGlow)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.4, 0.6, 0.5, 0.7, 0.5]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              <motion.rect
                x="360" y="0" width="80" height="600"
                fill="url(#atmosphericGlow3)"
                filter="url(#mediumGlow)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.2, 0.4, 0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
              />

              {/* Flowing lightning beam with true top-to-bottom motion */}
              <motion.line
                x1="400" y1="0" x2="400" y2="600"
                stroke="url(#lightningCore)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="600"
                filter="url(#coreGlow)"
                initial={{ 
                  strokeDashoffset: 600,
                  opacity: 0.8
                }}
                animate={{ 
                  strokeDashoffset: [600, 0, -600],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                data-testid="lightning-main-bolt"
              />

              {/* Secondary flowing beam for depth */}
              <motion.line
                x1="400" y1="0" x2="400" y2="600"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="400"
                initial={{ 
                  strokeDashoffset: 400,
                  opacity: 0.6
                }}
                animate={{ 
                  strokeDashoffset: [400, 0, -400],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
              />
              
              {/* Ultra bright inner core with subtle flow */}
              <motion.line
                x1="400" y1="0" x2="400" y2="600"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="200"
                initial={{ 
                  strokeDashoffset: 200,
                  opacity: 0.9
                }}
                animate={{ 
                  strokeDashoffset: [200, 0, -200],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1
                }}
              />
              
              {/* Removed hover particles for minimalist aesthetic like huly.io */}
            </svg>
          </motion.div>

          {/* AI Agents positioned around lightning */}
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            const isHovered = hoveredAgent === agent.id;
            
            return (
              <div key={agent.id} className="absolute" style={{ 
                left: `${agent.position.x}%`, 
                top: `${agent.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}>
                {/* Agent Icon */}
                <motion.div
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center cursor-pointer shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Learn about ${agent.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -4, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 0.8, delay: 0.6 + index * 0.1 },
                    scale: { duration: 0.8, delay: 0.6 + index * 0.1 },
                    y: { duration: 4, repeat: Infinity, delay: index * 0.5, ease: "easeInOut" }
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredAgent(agent.id)}
                  onHoverEnd={() => setHoveredAgent(null)}
                  onFocus={() => setHoveredAgent(agent.id)}
                  onBlur={() => setHoveredAgent(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      console.log(`${agent.name} selected via keyboard`);
                    }
                  }}
                  data-testid={`agent-${agent.id}`}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${agent.color} blur-xl`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0.6 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Glassmorphism Information Card */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute top-20 md:top-24 left-1/2 transform -translate-x-1/2 w-72 md:w-80 z-20"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      data-testid={`card-${agent.id}`}
                    >
                      <div 
                        className="p-6 rounded-2xl border border-white/20 backdrop-blur-xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(99, 102, 241, 0.15)'
                        }}
                      >
                        <h3 className="text-xl font-bold text-white mb-3" data-testid={`card-title-${agent.id}`}>
                          {agent.name}
                        </h3>
                        <p className="text-white/80 text-sm mb-4 leading-relaxed" data-testid={`card-description-${agent.id}`}>
                          {agent.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="text-white/90 font-semibold text-sm">Key Capabilities:</h4>
                          <ul className="space-y-1">
                            {agent.capabilities.map((capability, capIndex) => (
                              <motion.li
                                key={capIndex}
                                className="text-white/70 text-xs flex items-center"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: capIndex * 0.05 }}
                                data-testid={`capability-${agent.id}-${capIndex}`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mr-2"></span>
                                {capability}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Card glow effect */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-50 blur-xl"
                          style={{ 
                            background: `linear-gradient(135deg, ${getCurrentLightningColor()}20, transparent)` 
                          }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white font-semibold px-12 py-4 rounded-full text-lg shadow-2xl hover:shadow-indigo-500/25"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => console.log('Experience the Power clicked')}
            data-testid="button-lightning-cta"
          >
            Experience the Power →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}