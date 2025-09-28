import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Cosmic Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d2d5f 50%, #1a1a3e 75%, #0f0f23 100%)
          `,
        }}
      />

      {/* Atmospheric Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, rgba(15, 15, 35, 0.4) 70%, rgba(15, 15, 35, 0.8) 100%)
          `,
        }}
      />

      {/* Vertical Lightning Beam */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute" style={{ left: '65%', transform: 'translateX(-50%)' }}>
          <svg
            width="8"
            height="100vh"
            viewBox="0 0 8 1000"
            className="h-screen"
            style={{ filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))' }}
          >
            {/* Outer Glow */}
            <defs>
              <linearGradient id="lightningGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
                <stop offset="20%" stopColor="rgba(139, 92, 246, 0.3)" />
                <stop offset="40%" stopColor="rgba(99, 102, 241, 0.4)" />
                <stop offset="60%" stopColor="rgba(139, 92, 246, 0.4)" />
                <stop offset="80%" stopColor="rgba(139, 92, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
              </linearGradient>
              <linearGradient id="lightningCore" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
                <stop offset="30%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="70%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.6)" />
              </linearGradient>
            </defs>
            
            {/* Outer Purple Glow */}
            <motion.rect
              x="0"
              y="0"
              width="8"
              height="1000"
              fill="url(#lightningGlow)"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scaleX: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Core White Beam */}
            <motion.rect
              x="2"
              y="0"
              width="4"
              height="1000"
              fill="url(#lightningCore)"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.7, 1, 0.7],
                scaleX: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Inner Bright Core */}
            <motion.rect
              x="3"
              y="0"
              width="2"
              height="1000"
              fill="rgba(255, 255, 255, 0.9)"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>

          {/* Animated Energy Pulses */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-8 bg-white rounded-full opacity-80"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                filter: 'blur(1px)'
              }}
              initial={{ 
                y: 0,
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                y: '100vh',
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5]
              }}
              transition={{
                duration: 3,
                delay: i * 0.6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-16 xl:px-24">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-hero-title"
          >
            <span className="block">Everything App</span>
            <span className="block">for your</span>
            <span className="block">commerce</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="text-hero-subtitle"
          >
            AI Commerce Studio, an advanced platform, serves as an all-in-one replacement of manual e-commerce workflows, pricing strategies, and content creation.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              onClick={() => console.log('See in action clicked')}
              data-testid="button-hero-cta"
            >
              SEE IN ACTION →
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Glassmorphic Bottom Panels */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Left Panel - AI Agents */}
          <motion.div
            className="glassmorphic-panel p-6 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">AI Agents</h3>
              <div className="text-white/60 text-sm">4 Active</div>
            </div>
            <div className="space-y-3">
              <div className="text-white/80 text-sm">Automation Status</div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-white/70 text-sm">DESCRIPTION</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-white/70 text-sm">PRICING</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-white/70 text-sm">IMAGES</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Activity */}
          <motion.div
            className="glassmorphic-panel p-6 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">Activity</h3>
              <div className="text-white/60 text-sm">Live</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">D</span>
                </div>
                <div>
                  <div className="text-white text-sm">Description Agent generated</div>
                  <div className="text-white/60 text-xs">compelling copy for Product #1247</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">P</span>
                </div>
                <div>
                  <div className="text-white text-sm">Pricing Agent optimized</div>
                  <div className="text-white/60 text-xs">pricing for 23 products</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}