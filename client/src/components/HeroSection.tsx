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

      {/* Dynamic Lightning Energy Beam */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="absolute group cursor-pointer transition-all duration-300"
          style={{ left: '65%', transform: 'translateX(-50%)' }}
        >
          {/* Interactive Hover Area */}
          <div className="absolute -inset-20 z-10" />
          
          <svg
            width="80"
            height="100vh"
            viewBox="0 0 80 1000"
            className="h-screen transition-all duration-500"
            style={{ 
              filter: `
                drop-shadow(0 0 40px rgba(139, 92, 246, 0.9))
                drop-shadow(0 0 80px rgba(99, 102, 241, 0.6))
                drop-shadow(0 0 120px rgba(139, 92, 246, 0.4))
              `
            }}
            data-testid="lightning-beam-svg"
          >
            <defs>
              {/* Enhanced Gradients */}
              <linearGradient id="lightningGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
                <stop offset="15%" stopColor="rgba(139, 92, 246, 0.4)" />
                <stop offset="30%" stopColor="rgba(99, 102, 241, 0.6)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.8)" />
                <stop offset="70%" stopColor="rgba(99, 102, 241, 0.6)" />
                <stop offset="85%" stopColor="rgba(139, 92, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
              </linearGradient>

              <linearGradient id="lightningCore" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
                <stop offset="20%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="40%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="60%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="80%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.6)" />
              </linearGradient>

              <linearGradient id="electricArc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                <stop offset="20%" stopColor="rgba(139, 92, 246, 0.8)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="80%" stopColor="rgba(139, 92, 246, 0.8)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
              </linearGradient>

              {/* SVG Filters for Electrical Distortion */}
              <filter id="electricalNoise" x="-50%" y="-50%" width="200%" height="200%">
                <feTurbulence baseFrequency="0.02 0.3" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
                <feColorMatrix values="1 0 1 0 0  0 1 1 0 0  1 0 1 0 0  0 0 0 1 0" />
              </filter>

              <filter id="electricGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Dash patterns for flowing energy */}
              <pattern id="energyFlow" x="0" y="0" width="1" height="20" patternUnits="userSpaceOnUse">
                <rect width="1" height="10" fill="rgba(255,255,255,0.8)" />
                <rect y="10" width="1" height="10" fill="rgba(255,255,255,0.2)" />
              </pattern>
            </defs>

            {/* Organic Lightning Path - Main Beam */}
            <motion.path
              d="M40 0 Q35 100 42 200 Q38 300 41 400 Q45 500 39 600 Q42 700 40 800 Q37 900 40 1000"
              stroke="url(#lightningGlow)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              filter="url(#electricGlow)"
              className="group-hover:drop-shadow-[0_0_60px_rgba(139,92,246,1)] transition-all duration-300"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0.4, 0.8, 0.4],
                strokeWidth: [12, 18, 12]
              }}
              whileHover={{ 
                opacity: [0.6, 1, 0.6],
                strokeWidth: [18, 25, 18]
              }}
              transition={{ 
                pathLength: { duration: 2, ease: "easeInOut" },
                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                strokeWidth: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Core Energy Beam with Flow Animation */}
            <motion.path
              d="M40 0 Q35 100 42 200 Q38 300 41 400 Q45 500 39 600 Q42 700 40 800 Q37 900 40 1000"
              stroke="url(#lightningCore)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="20 10"
              className="group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all duration-300"
              initial={{ strokeDashoffset: 0 }}
              animate={{ 
                strokeDashoffset: [-30, 0],
                strokeWidth: [6, 8, 6]
              }}
              whileHover={{ 
                strokeDashoffset: [-40, 0],
                strokeWidth: [8, 12, 8]
              }}
              transition={{ 
                strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear" },
                strokeWidth: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Inner Bright Core */}
            <motion.path
              d="M40 0 Q35 100 42 200 Q38 300 41 400 Q45 500 39 600 Q42 700 40 800 Q37 900 40 1000"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="15 5"
              className="group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-300"
              initial={{ strokeDashoffset: 0 }}
              animate={{ 
                strokeDashoffset: [-20, 0],
                opacity: [0.7, 1, 0.7]
              }}
              whileHover={{ 
                strokeDashoffset: [-30, 0],
                opacity: [0.9, 1, 0.9],
                strokeWidth: [2, 4, 2]
              }}
              transition={{ 
                strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" },
                opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                strokeWidth: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Electrical Arcs - Random Branches */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.path
                key={`arc-${i}`}
                d={`M40 ${150 + i * 100} Q${25 + Math.random() * 30} ${170 + i * 100} ${15 + Math.random() * 50} ${190 + i * 100}`}
                stroke="url(#electricArc)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                filter="url(#electricalNoise)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0], 
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.2 + Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: 2 + Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Secondary Lightning Branches */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.path
                key={`branch-${i}`}
                d={`M40 ${200 + i * 120} Q${55 + Math.random() * 20} ${220 + i * 120} ${65 + Math.random() * 15} ${240 + i * 120}`}
                stroke="rgba(139, 92, 246, 0.6)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0], 
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.3 + Math.random() * 3,
                  repeat: Infinity,
                  repeatDelay: 3 + Math.random() * 4,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>

          {/* Enhanced Particle System */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 8 + 4,
                left: '50%',
                transform: 'translateX(-50%)',
                filter: 'blur(0.5px)',
                boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(139,92,246,0.6)'
              }}
              initial={{ 
                y: Math.random() * window.innerHeight,
                x: (Math.random() - 0.5) * 20,
                opacity: 0,
                scale: 0.3
              }}
              animate={{
                y: [null, window.innerHeight + 100],
                x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 30],
                opacity: [0, 1, 1, 0],
                scale: [0.3, 1, 1, 0.3]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: i * 0.2 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          {/* Floating Energy Orbs */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(139,92,246,0.8) 50%, transparent 100%)',
                left: '50%',
                transform: 'translateX(-50%)',
                filter: 'blur(1px)',
                boxShadow: '0 0 15px rgba(139,92,246,0.8)'
              }}
              initial={{ 
                y: window.innerHeight + 50,
                x: 0,
                opacity: 0
              }}
              animate={{
                y: [-50],
                x: [0, (Math.random() - 0.5) * 40, 0],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: i * 0.8 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Enhanced Ambient Glow with Hover Effects */}
          <motion.div
            className="absolute inset-0 pointer-events-none transition-all duration-500"
            style={{
              background: 'radial-gradient(ellipse 100px 800px at center, rgba(139,92,246,0.3) 0%, transparent 70%)',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            whileHover={{
              opacity: [0.5, 0.9, 0.5],
              scale: [1.2, 1.5, 1.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Additional Hover Glow Layer */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(ellipse 150px 1000px at center, rgba(255,255,255,0.2) 0%, rgba(139,92,246,0.4) 30%, transparent 70%)',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Hover Particle Burst */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`hover-particle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(0.5px)',
                boxShadow: '0 0 15px rgba(139,92,246,0.8)'
              }}
              animate={{
                x: [0, (Math.cos((i / 8) * Math.PI * 2) * 60)],
                y: [0, (Math.sin((i / 8) * Math.PI * 2) * 60)],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                repeat: Infinity,
                ease: "easeOut"
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