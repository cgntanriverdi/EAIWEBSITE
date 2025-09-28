import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Viewport visibility detection
  const [isInViewport, setIsInViewport] = useState(true);
  
  // Screen size detection for responsive arc/branch counts
  const [screenSize, setScreenSize] = useState('large');
  
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    motionQuery.addEventListener('change', handleMotionChange);
    
    // Screen size detection
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenSize('small');
      else if (width < 1024) setScreenSize('medium');
      else setScreenSize('large');
    };
    
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    // Intersection observer for viewport detection
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const section = document.querySelector('[data-testid="hero-section"]');
    if (section) observer.observe(section);
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', updateScreenSize);
      if (section) observer.unobserve(section);
    };
  }, []);
  
  // Memoized paths to prevent re-renders
  const memoizedArcs = useMemo(() => {
    const arcCount = screenSize === 'small' ? 5 : screenSize === 'medium' ? 8 : 12;
    return Array.from({ length: arcCount }).map((_, i) => ({
      id: `arc-${i}`,
      path: `M40 ${120 + i * 70} L${20 + Math.random() * 40} ${140 + i * 70} L${10 + Math.random() * 60} ${160 + i * 70} L${5 + Math.random() * 70} ${180 + i * 70}`,
      strokeWidth: Math.random() * 2 + 0.8,
      delay: i * 0.05 + Math.random() * 3,
      repeatDelay: 1.5 + Math.random() * 4
    }));
  }, [screenSize]);
  
  const memoizedBranches = useMemo(() => {
    const branchCount = screenSize === 'small' ? 3 : screenSize === 'medium' ? 6 : 10;
    return Array.from({ length: branchCount }).map((_, i) => ({
      id: `branch-${i}`,
      path: `M40 ${160 + i * 80} L${60 + Math.random() * 25} ${180 + i * 80} L${80 + Math.random() * 20} ${200 + i * 80} L${95 + Math.random() * 15} ${220 + i * 80}`,
      strokeWidth: 1.5 + Math.random(),
      delay: i * 0.08 + Math.random() * 2.5,
      repeatDelay: 2 + Math.random() * 3,
      color: i % 2 === 0 ? "rgba(0, 191, 255, 0.8)" : "rgba(255, 215, 0, 0.6)"
    }));
  }, [screenSize]);
  
  const particleCount = screenSize === 'small' ? 6 : screenSize === 'medium' ? 8 : 12;
  const orbCount = screenSize === 'small' ? 3 : screenSize === 'medium' ? 4 : 6;
  const hoverParticleCount = screenSize === 'small' ? 4 : screenSize === 'medium' ? 6 : 8;
  
  const shouldAnimate = !prefersReducedMotion && isInViewport;
  
  return (
    <section className="relative min-h-screen overflow-hidden" data-testid="hero-section">
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
              {/* Realistic Lightning Atmospheric Glow */}
              <linearGradient id="lightningGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(75, 0, 130, 0.2)" />
                <stop offset="15%" stopColor="rgba(138, 43, 226, 0.5)" />
                <stop offset="30%" stopColor="rgba(30, 144, 255, 0.7)" />
                <stop offset="50%" stopColor="rgba(0, 191, 255, 0.9)" />
                <stop offset="70%" stopColor="rgba(30, 144, 255, 0.7)" />
                <stop offset="85%" stopColor="rgba(138, 43, 226, 0.5)" />
                <stop offset="100%" stopColor="rgba(75, 0, 130, 0.2)" />
              </linearGradient>

              <linearGradient id="lightningCore" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(220, 230, 255, 0.7)" />
                <stop offset="15%" stopColor="rgba(255, 255, 255, 0.95)" />
                <stop offset="35%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="50%" stopColor="rgba(240, 248, 255, 1)" />
                <stop offset="65%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="85%" stopColor="rgba(255, 255, 255, 0.95)" />
                <stop offset="100%" stopColor="rgba(220, 230, 255, 0.7)" />
              </linearGradient>

              <linearGradient id="electricArc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(75, 0, 130, 0)" />
                <stop offset="15%" stopColor="rgba(255, 215, 0, 0.3)" />
                <stop offset="30%" stopColor="rgba(0, 191, 255, 0.8)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="70%" stopColor="rgba(0, 191, 255, 0.8)" />
                <stop offset="85%" stopColor="rgba(255, 215, 0, 0.3)" />
                <stop offset="100%" stopColor="rgba(75, 0, 130, 0)" />
              </linearGradient>

              {/* Advanced SVG Filters for Realistic Lightning */}
              <filter id="electricalNoise" x="-100%" y="-50%" width="300%" height="200%">
                <feTurbulence baseFrequency="0.08 0.4" numOctaves="3" result="noise" seed="2">
                  {shouldAnimate && (
                    <animate attributeName="baseFrequency" values="0.08 0.4;0.12 0.6;0.08 0.4" dur="0.4s" repeatCount="indefinite"/>
                  )}
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                <feColorMatrix values="1 0 1 0 0  0 1 1 0 0.1  1 0 1 0 0.2  0 0 0 1 0" />
              </filter>

              <filter id="electricGlow" x="-100%" y="-50%" width="300%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feGaussianBlur stdDeviation="12" result="blur2" />
                <feGaussianBlur stdDeviation="20" result="blur3" />
                <feMerge>
                  <feMergeNode in="blur3" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Plasma Channel Filter */}
              <filter id="plasmaGlow" x="-80%" y="-50%" width="260%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feColorMatrix in="blur" values="1 0 0 0 0.2  0 1 0 0 0.5  0 0 1 0 1  0 0 0 1 0" result="blueGlow"/>
                <feMerge>
                  <feMergeNode in="blueGlow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>

            {/* Main Lightning Channel - Chaotic Electrical Discharge */}
            <motion.path
              d="M40 0 L38 80 L42 160 L37 240 L43 320 L39 400 L44 480 L38 560 L41 640 L39 720 L42 800 L38 880 L40 960 L40 1000"
              stroke="url(#lightningGlow)"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              filter="url(#electricGlow)"
              className="group-hover:drop-shadow-[0_0_80px_rgba(0,191,255,0.9)] transition-all duration-200"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={shouldAnimate ? { 
                pathLength: 1, 
                opacity: [0.5, 0.8, 0.6],
                strokeWidth: [14, 20, 16]
              } : { pathLength: 1, opacity: 0.6, strokeWidth: 14 }}
              whileHover={shouldAnimate ? { 
                opacity: [0.7, 0.9, 0.8],
                strokeWidth: [20, 28, 24]
              } : {}}
              transition={{ 
                pathLength: { duration: 1.8, ease: [0.7, 0, 0.3, 1] },
                opacity: { duration: shouldAnimate ? 1.2 : 0, repeat: shouldAnimate ? Infinity : 0, ease: [0.9, 0, 0.1, 1] },
                strokeWidth: { duration: shouldAnimate ? 1.0 : 0, repeat: shouldAnimate ? Infinity : 0, ease: [0.8, 0, 0.2, 1] }
              }}
            />

            {/* Core Energy Beam with Extreme Chaotic Crackling */}
            <motion.path
              d="M40 0 L38 80 L42 160 L37 240 L43 320 L39 400 L44 480 L38 560 L41 640 L39 720 L42 800 L38 880 L40 960 L40 1000"
              stroke="url(#lightningCore)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              className="group-hover:drop-shadow-[0_0_60px_rgba(240,248,255,1)] transition-all duration-100"
              animate={shouldAnimate ? { 
                strokeWidth: [6, 8, 7],
                opacity: [0.8, 0.9, 0.85]
              } : { strokeWidth: 6, opacity: 0.8 }}
              whileHover={shouldAnimate ? { 
                strokeWidth: [8, 12, 10],
                opacity: [0.9, 1, 0.95]
              } : {}}
              transition={{ 
                strokeWidth: { duration: shouldAnimate ? 0.8 : 0, repeat: shouldAnimate ? Infinity : 0, ease: [0.9, 0, 0.1, 1] },
                opacity: { duration: shouldAnimate ? 0.6 : 0, repeat: shouldAnimate ? Infinity : 0, ease: [0.8, 0, 0.2, 1] }
              }}
            />

            {/* Inner Bright Core - Plasma Channel with Extreme Jitter */}
            <motion.path
              d="M40 0 L38 80 L42 160 L37 240 L43 320 L39 400 L44 480 L38 560 L41 640 L39 720 L42 800 L38 880 L40 960 L40 1000"
              stroke="rgba(255, 255, 255, 1)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,1)] transition-all duration-50"
              animate={shouldAnimate ? { 
                opacity: [0.9, 1, 0.95],
                strokeWidth: [2, 3, 2.5]
              } : { opacity: 0.9, strokeWidth: 2 }}
              whileHover={shouldAnimate ? { 
                opacity: [0.95, 1, 0.98],
                strokeWidth: [3, 4, 3.5]
              } : {}}
              transition={{ 
                opacity: { duration: shouldAnimate ? 0.5 : 0, repeat: shouldAnimate ? Infinity : 0, ease: [0.95, 0, 0.05, 1] },
                strokeWidth: { duration: shouldAnimate ? 0.4 : 0, repeat: shouldAnimate ? Infinity : 0, ease: [0.9, 0, 0.1, 1] }
              }}
            />

            {/* Chaotic Electrical Arcs with Sudden Jolts */}
            {memoizedArcs.map((arc) => (
              <motion.path
                key={arc.id}
                d={arc.path}
                stroke="url(#electricArc)"
                strokeWidth={arc.strokeWidth}
                fill="none"
                strokeLinecap="round"
                filter="url(#electricalNoise)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={shouldAnimate ? { 
                  pathLength: [0, 0, 1, 0.4, 0], 
                  opacity: [0, 0, 0.8, 0.3, 0],
                  strokeWidth: [arc.strokeWidth * 0.5, arc.strokeWidth * 0.5, arc.strokeWidth * 1.5, arc.strokeWidth, arc.strokeWidth * 0.3]
                } : { pathLength: 0, opacity: 0 }}
                transition={{
                  duration: shouldAnimate ? 0.25 + Math.random() * 0.15 : 0,
                  delay: shouldAnimate ? arc.delay : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  repeatDelay: shouldAnimate ? arc.repeatDelay : 0,
                  ease: [0.9, 0, 0.1, 1]
                }}
              />
            ))}

            {/* Fractal Lightning Branches with Electrical Discharge */}
            {memoizedBranches.map((branch) => (
              <motion.path
                key={branch.id}
                d={branch.path}
                stroke={branch.color}
                strokeWidth={branch.strokeWidth}
                fill="none"
                strokeLinecap="round"
                filter="url(#electricalNoise)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={shouldAnimate ? { 
                  pathLength: [0, 0, 0.6, 0.8, 0.2, 0], 
                  opacity: [0, 0, 0.7, 0.9, 0.3, 0],
                  strokeWidth: [branch.strokeWidth * 0.5, branch.strokeWidth * 0.5, branch.strokeWidth * 1.8, branch.strokeWidth * 1.3, branch.strokeWidth * 0.8, branch.strokeWidth * 0.3]
                } : { pathLength: 0, opacity: 0 }}
                transition={{
                  duration: shouldAnimate ? 0.3 + Math.random() * 0.2 : 0,
                  delay: shouldAnimate ? branch.delay : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  repeatDelay: shouldAnimate ? branch.repeatDelay : 0,
                  ease: [0.8, 0, 0.2, 1]
                }}
              />
            ))}
          </svg>

          {/* Enhanced Particle System */}
          {Array.from({ length: particleCount }).map((_, i) => (
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
                duration: shouldAnimate ? 2.5 + Math.random() * 1.5 : 0,
                delay: shouldAnimate ? i * 0.2 + Math.random() * 2 : 0,
                repeat: shouldAnimate ? Infinity : 0,
                ease: "linear"
              }}
            />
          ))}

          {/* Floating Energy Orbs */}
          {Array.from({ length: orbCount }).map((_, i) => (
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
                duration: shouldAnimate ? 4.5 + Math.random() * 1.5 : 0,
                delay: shouldAnimate ? i * 0.8 + Math.random() * 3 : 0,
                repeat: shouldAnimate ? Infinity : 0,
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
              duration: shouldAnimate ? 5 : 0,
              repeat: shouldAnimate ? Infinity : 0,
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
              duration: shouldAnimate ? 3 : 0,
              repeat: shouldAnimate ? Infinity : 0,
              ease: "easeInOut"
            }}
          />

          {/* Hover Particle Burst */}
          {Array.from({ length: hoverParticleCount }).map((_, i) => (
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
                duration: shouldAnimate ? 2 : 0,
                delay: shouldAnimate ? 0.3 : 0,
                repeat: shouldAnimate ? Infinity : 0,
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