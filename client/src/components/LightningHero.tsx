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

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
              style={{ mixBlendMode: 'screen' }}
            >
              <defs>
                {/* Animated gradients for color cycling in atmospheric glow */}
                <linearGradient id="atmosphericGlow1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <motion.stop 
                    offset="0%" 
                    stopOpacity="0.6"
                    animate={{ 
                      stopColor: ["#8b5cf6", "#a855f7", "#9333ea", "#8b5cf6"]
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 8,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.stop 
                    offset="50%" 
                    stopOpacity="0.8"
                    animate={{ 
                      stopColor: ["#7c3aed", "#8b5cf6", "#7c3aed", "#6d28d9"]
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 10,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: prefersReducedMotion ? 0 : 1
                    }}
                  />
                  <motion.stop 
                    offset="100%" 
                    stopOpacity="0.6"
                    animate={{ 
                      stopColor: ["#6d28d9", "#7c3aed", "#8b5cf6", "#6d28d9"]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                </linearGradient>
                
                <linearGradient id="atmosphericGlow2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <motion.stop 
                    offset="0%" 
                    stopOpacity="0.6"
                    animate={{ 
                      stopColor: ["#6366f1", "#4f46e5", "#6366f1", "#8b5cf6"]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  <motion.stop 
                    offset="50%" 
                    stopOpacity="0.8"
                    animate={{ 
                      stopColor: ["#4f46e5", "#6366f1", "#4338ca", "#4f46e5"]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                  <motion.stop 
                    offset="100%" 
                    stopOpacity="0.6"
                    animate={{ 
                      stopColor: ["#4338ca", "#4f46e5", "#6366f1", "#4338ca"]
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 3
                    }}
                  />
                </linearGradient>
                
                <linearGradient id="atmosphericGlow3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <motion.stop 
                    offset="0%" 
                    stopOpacity="0.5"
                    animate={{ 
                      stopColor: ["#06b6d4", "#0891b2", "#06b6d4", "#4f46e5"]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                  <motion.stop 
                    offset="50%" 
                    stopOpacity="0.7"
                    animate={{ 
                      stopColor: ["#0891b2", "#06b6d4", "#0e7490", "#0891b2"]
                    }}
                    transition={{ 
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 3
                    }}
                  />
                  <motion.stop 
                    offset="100%" 
                    stopOpacity="0.5"
                    animate={{ 
                      stopColor: ["#0e7490", "#0891b2", "#06b6d4", "#0e7490"]
                    }}
                    transition={{ 
                      duration: 11,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 4
                    }}
                  />
                </linearGradient>

                {/* Fractal noise for organic edge wobble */}
                <filter id="organicWobble" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence 
                    type="fractalNoise" 
                    baseFrequency="0.003 0.12" 
                    numOctaves="2" 
                    result="turbulence"
                  >
                    <animateTransform
                      attributeName="baseFrequency"
                      values="0.003 0.12;0.004 0.14;0.003 0.12"
                      dur="15s"
                      repeatCount="indefinite"
                    />
                  </feTurbulence>
                  <feDisplacementMap 
                    in="SourceGraphic" 
                    in2="turbulence" 
                    scale="6"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="displacement"
                  />
                  <feBlend mode="screen" in="displacement" in2="SourceGraphic"/>
                </filter>

                {/* Energy flow mask for top-to-bottom movement */}
                <mask id="energyFlowMask">
                  <rect x="0" y="0" width="800" height="600" fill="black"/>
                  <motion.rect
                    x="390" y="0" width="20" height="600"
                    fill="white"
                    initial={{ y: -100 }}
                    animate={{ y: prefersReducedMotion ? -100 : [600, -100] }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 2.5,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.rect
                    x="390" y="0" width="20" height="400"
                    fill="white"
                    opacity={0.6}
                    initial={{ y: -200 }}
                    animate={{ y: prefersReducedMotion ? -200 : [600, -200] }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 3,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "linear",
                      delay: prefersReducedMotion ? 0 : 0.8
                    }}
                  />
                </mask>

                {/* Premium filter effects with tight regions */}
                <filter id="atmosphericBlur1" x="-100%" y="-10%" width="300%" height="120%">
                  <feGaussianBlur stdDeviation="30" result="coloredBlur"/>
                  <feBlend mode="screen" in="coloredBlur" in2="SourceGraphic"/>
                </filter>
                
                <filter id="atmosphericBlur2" x="-80%" y="-10%" width="260%" height="120%">
                  <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
                  <feBlend mode="screen" in="coloredBlur" in2="SourceGraphic"/>
                </filter>
                
                <filter id="atmosphericBlur3" x="-60%" y="-10%" width="220%" height="120%">
                  <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
                  <feBlend mode="screen" in="coloredBlur" in2="SourceGraphic"/>
                </filter>
                
                <filter id="coreBlur1" x="-25%" y="-10%" width="150%" height="120%">
                  <feGaussianBlur stdDeviation="18" result="coloredBlur"/>
                  <feBlend mode="screen" in="coloredBlur" in2="SourceGraphic"/>
                </filter>
                
                <filter id="coreBlur2" x="-15%" y="-10%" width="130%" height="120%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feBlend mode="screen" in="coloredBlur" in2="SourceGraphic"/>
                </filter>
                
                <filter id="coreBlur3" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feBlend mode="screen" in="coloredBlur" in2="SourceGraphic"/>
                </filter>
              </defs>
              
              {/* Atmospheric glow layers - 3 wide columns with gradients */}
              <motion.rect
                x="320" y="0" width="160" height="600"
                fill="url(#atmosphericGlow1)"
                filter="url(#atmosphericBlur1)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.4, 0.6, 0.5, 0.7, 0.5]
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
                filter="url(#atmosphericBlur2)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.5, 0.7, 0.6, 0.8, 0.6]
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
                filter="url(#atmosphericBlur3)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.5, 0.4, 0.6, 0.4]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
              />

              {/* Core beam - narrow rect elements with bloom effects */}
              <motion.rect
                x="392" y="0" width="16" height="600"
                fill="#ffffff"
                filter="url(#coreBlur1)"
                mask="url(#energyFlowMask)"
                initial={{ opacity: 0.7 }}
                animate={{ 
                  opacity: [0.7, 0.9, 0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                data-testid="lightning-core-beam-1"
              />

              <motion.rect
                x="394" y="0" width="12" height="600"
                fill="#ffffff"
                filter="url(#coreBlur2)"
                mask="url(#energyFlowMask)"
                initial={{ opacity: 0.8 }}
                animate={{ 
                  opacity: [0.8, 1, 0.9, 1, 0.9]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                data-testid="lightning-core-beam-2"
              />
              
              <motion.rect
                x="396" y="0" width="8" height="600"
                fill="#ffffff"
                filter="url(#coreBlur3)"
                mask="url(#energyFlowMask)"
                style={{ filter: 'url(#organicWobble)' }}
                initial={{ opacity: 0.9 }}
                animate={{ 
                  opacity: [0.9, 1, 1, 1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                data-testid="lightning-core-beam-3"
              />
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