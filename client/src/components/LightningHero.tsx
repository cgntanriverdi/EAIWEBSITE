import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
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
  
  // Mouse tracking for interactivity
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Viewport visibility detection
  const [isInViewport, setIsInViewport] = useState(true);
  
  // Screen size detection for responsive arc/branch counts
  const [screenSize, setScreenSize] = useState('large');
  
  // Lightsaber ignition animation controls
  const lightsaberProgress = useMotionValue(0);
  const lightsaberAnimationRef = useRef<number | null>(null);
  const [isLightsaberIgnited, setIsLightsaberIgnited] = useState(false);
  
  // Performance-optimized flicker with useRef (no re-renders)
  const flickerIntensity = useRef(1);
  const flickerMotionValue = useMotionValue(1);
  const animationFrameRef = useRef<number | null>(null);
  
  // Mouse interaction motion values for smooth transforms
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Deterministic seed for consistent visuals
  const seededRandom = useCallback((seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }, []);
  
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    motionQuery.addEventListener('change', handleMotionChange);
    
    // Performance-optimized mouse tracking with motion values
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = document.querySelector('[data-testid="lightning-hero-section"]')?.getBoundingClientRect();
      if (rect) {
        const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100;
        const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100;
        
        setMousePosition({ x, y });
        mouseX.set(x - 50); // Center around 0
        mouseY.set(y - 50); // Center around 0
      }
    };
    
    const handleMouseEnter = () => setIsMouseOver(true);
    const handleMouseLeave = () => setIsMouseOver(false);
    
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
    
    const section = document.querySelector('[data-testid="lightning-hero-section"]');
    if (section) {
      observer.observe(section);
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }
    
    // Lightsaber ignition animation
    let ignitionStartTime = Date.now();
    const lightsaberIgnition = () => {
      if (!prefersReducedMotion && isInViewport) {
        const elapsed = (Date.now() - ignitionStartTime) / 1000;
        const ignitionDuration = 2.5; // 2.5 seconds for full ignition
        
        if (elapsed < ignitionDuration) {
          // Smooth easing function for lightsaber ignition
          const progress = Math.min(elapsed / ignitionDuration, 1);
          const easedProgress = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          
          lightsaberProgress.set(easedProgress);
          
          if (easedProgress >= 1 && !isLightsaberIgnited) {
            setIsLightsaberIgnited(true);
          }
        } else {
          // After ignition, add subtle flickering
          const flickerTime = elapsed - ignitionDuration;
          const noise1 = Math.sin(flickerTime * 2.3) * 0.05 + 0.95;
          const noise2 = Math.sin(flickerTime * 1.7 + 2.1) * 0.03 + 0.97;
          const combinedNoise = (noise1 + noise2) / 2;
          
          flickerIntensity.current = combinedNoise;
          flickerMotionValue.set(combinedNoise);
        }
      }
      lightsaberAnimationRef.current = requestAnimationFrame(lightsaberIgnition);
    };
    
    if (!prefersReducedMotion && isInViewport) {
      lightsaberIgnition();
    }
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', updateScreenSize);
      if (section) {
        observer.unobserve(section);
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lightsaberAnimationRef.current) {
        cancelAnimationFrame(lightsaberAnimationRef.current);
      }
    };
  }, [prefersReducedMotion, isInViewport]);

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

  // Deterministic memoized paths to prevent re-renders
  const memoizedLeftArcs = useMemo(() => {
    const arcCount = screenSize === 'small' ? 3 : screenSize === 'medium' ? 5 : 8;
    return Array.from({ length: arcCount }).map((_, i) => {
      const seed1 = i * 13.7;
      const seed2 = i * 23.3;
      const seed3 = i * 41.1;
      return {
        id: `left-arc-${i}`,
        path: `M400 ${50 + i * 70} L${320 - seededRandom(seed1) * 80} ${80 + i * 70} L${280 - seededRandom(seed2) * 100} ${110 + i * 70} L${240 - seededRandom(seed3) * 120} ${140 + i * 70}`,
        strokeWidth: seededRandom(i * 7.5) * 2 + 1,
        delay: i * 0.03 + seededRandom(i * 11.2) * 4,
        repeatDelay: 2 + seededRandom(i * 17.8) * 6
      };
    });
  }, [screenSize, seededRandom]);
  
  const memoizedRightArcs = useMemo(() => {
    const arcCount = screenSize === 'small' ? 3 : screenSize === 'medium' ? 5 : 8;
    return Array.from({ length: arcCount }).map((_, i) => {
      const seed1 = i * 19.4 + 100;
      const seed2 = i * 29.7 + 200;
      const seed3 = i * 37.2 + 300;
      return {
        id: `right-arc-${i}`,
        path: `M400 ${80 + i * 65} L${480 + seededRandom(seed1) * 80} ${110 + i * 65} L${520 + seededRandom(seed2) * 100} ${140 + i * 65} L${560 + seededRandom(seed3) * 120} ${170 + i * 65}`,
        strokeWidth: seededRandom(i * 8.8 + 50) * 2 + 0.8,
        delay: i * 0.04 + seededRandom(i * 12.7 + 75) * 5,
        repeatDelay: 1.8 + seededRandom(i * 21.3 + 125) * 7
      };
    });
  }, [screenSize, seededRandom]);
  
  const memoizedFractalBranches = useMemo(() => {
    const branchCount = screenSize === 'small' ? 4 : screenSize === 'medium' ? 8 : 12;
    return Array.from({ length: branchCount }).map((_, i) => {
      const side = i % 2 === 0 ? -1 : 1;
      const baseX = 400;
      const offsetX = side * (40 + seededRandom(i * 15.6) * 60);
      
      return {
        id: `fractal-${i}`,
        path: `M${baseX} ${100 + i * 40} L${baseX + offsetX * 0.3} ${120 + i * 40} L${baseX + offsetX * 0.7} ${140 + i * 40} L${baseX + offsetX} ${160 + i * 40}`,
        strokeWidth: 0.5 + seededRandom(i * 9.3) * 1.5,
        color: i % 3 === 0 ? "rgba(255, 215, 0, 0.7)" : i % 3 === 1 ? "rgba(30, 144, 255, 0.8)" : "rgba(255, 255, 255, 0.9)",
        delay: i * 0.06 + seededRandom(i * 14.2) * 6,
        repeatDelay: 3 + seededRandom(i * 18.9) * 8
      };
    });
  }, [screenSize, seededRandom]);

  // Split lightning path into segments for progressive width scaling
  const topLightningPath = `M400 0 
    L400.5 30 L399.5 60 L400.2 90 L399.8 120
    L401 150 L399 180 L401.5 200`;
    
  const middleLightningPath = `M401.5 200 L398.5 240
    L403 270 L397 300 L405 330 L395 360
    L410 390 L390 400`;
    
  const bottomLightningPath = `M390 400 L415 450 L385 480
    L425 510 L375 540 L440 570 L360 590 L400 600`;
    
  // Massive beam base path for dramatic width (250-400px bottom)
  const beamBasePath = `M300 550 L400 0 L500 550 
    Q450 580 400 600 Q350 580 300 550 Z`;
    
  // Ultra-wide atmospheric base (wider blooming pedestal)
  const atmosphericBasePath = `M150 480 L400 0 L650 480 
    Q600 590 400 600 Q200 590 150 480 Z`;
    
  // More dramatic secondary branch paths
  const branchPaths = [
    "M385 180 L360 210 L368 240 L355 275 L365 305",
    "M415 220 L440 250 L432 280 L445 315 L435 345", 
    "M375 350 L350 380 L358 410 L345 445 L355 475",
    "M425 320 L450 350 L442 380 L455 415 L445 445",
    "M380 480 L355 510 L363 540 L350 575",
    "M420 460 L445 490 L437 520 L450 555"
  ];

  const getCurrentLightningColor = () => {
    if (!hoveredAgent) return "#00bfff"; // Electric blue default
    const agent = agents.find(a => a.id === hoveredAgent);
    // Map to realistic lightning colors
    const colorMap: Record<string, string> = {
      "#3b82f6": "#1e90ff", // Blue to electric blue
      "#10b981": "#00ff7f", // Green to electric green
      "#8b5cf6": "#8a2be2", // Purple to blue violet
      "#f97316": "#ffd700"  // Orange to gold
    };
    return colorMap[agent?.lightningColor || ""] || "#00bfff";
  };
  
  const shouldAnimate = !prefersReducedMotion && isInViewport;
  
  // Mouse transform values for smooth beam targeting
  const beamSkewX = useTransform(mouseX, [-50, 50], [-2, 2]);
  const beamSkewY = useTransform(mouseY, [-50, 50], [-1, 1]);
  const beamTranslateX = useTransform(mouseX, [-50, 50], [-5, 5]);
  const beamTranslateY = useTransform(mouseY, [-50, 50], [-3, 3]);
  
  const atmosphericSkewX = useTransform(mouseX, [-50, 50], [-1.5, 1.5]);
  const atmosphericSkewY = useTransform(mouseY, [-50, 50], [-0.8, 0.8]);
  const atmosphericTranslateX = useTransform(mouseX, [-50, 50], [-8, 8]);
  const atmosphericTranslateY = useTransform(mouseY, [-50, 50], [-5, 5]);
  
  // Lightsaber-specific transform values
  const lightsaberOpacity = useTransform(lightsaberProgress, [0, 0.1, 1], [0, 0.3, 1]);
  const lightsaberScale = useTransform(lightsaberProgress, [0, 0.5, 1], [0.8, 0.95, 1]);
  const lightsaberGlow = useTransform(lightsaberProgress, [0, 0.8, 1], [0, 0.6, 1]);
  
  // Progressive width scaling for different sections
  const topWidth = useTransform(lightsaberProgress, [0, 1], [0, 2]);
  const middleWidth = useTransform(lightsaberProgress, [0, 1], [0, 8]);
  const bottomWidth = useTransform(lightsaberProgress, [0, 1], [0, 20]);
  
  // Calculate stroke-dasharray for progressive reveal
  const pathLength = 600; // Approximate path length
  const strokeDasharray = `${pathLength}`;
  const strokeDashoffset = useTransform(lightsaberProgress, [0, 1], [pathLength, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-16 overflow-hidden" data-testid="lightning-hero-section">
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
                {/* Complete Fog System Gradients */}
                <radialGradient id="fogGradient1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(79, 70, 229, 0.06)" stopOpacity="1" />
                  <stop offset="50%" stopColor="rgba(67, 56, 202, 0.04)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="rgba(55, 48, 163, 0.02)" stopOpacity="0.3" />
                </radialGradient>
                
                <radialGradient id="fogGradient2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(99, 102, 241, 0.08)" stopOpacity="1" />
                  <stop offset="50%" stopColor="rgba(79, 70, 229, 0.06)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="rgba(67, 56, 202, 0.03)" stopOpacity="0.2" />
                </radialGradient>
                
                <radialGradient id="fogGradient3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(124, 58, 237, 0.1)" stopOpacity="1" />
                  <stop offset="50%" stopColor="rgba(109, 40, 217, 0.07)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgba(91, 33, 182, 0.04)" stopOpacity="0.1" />
                </radialGradient>
                
                <radialGradient id="fogGradient4" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0.12)" stopOpacity="1" />
                  <stop offset="50%" stopColor="rgba(124, 58, 237, 0.08)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgba(109, 40, 217, 0.05)" stopOpacity="0.08" />
                </radialGradient>
                
                <radialGradient id="electricalDischarge" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" stopOpacity="1" />
                  <stop offset="30%" stopColor="rgba(196, 181, 253, 0.8)" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="rgba(139, 92, 246, 0.6)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="rgba(79, 70, 229, 0.3)" stopOpacity="0.3" />
                </radialGradient>

                {/* Huly.io Lightning Atmospheric Gradients - Exact Color Matching */}
                <motion.linearGradient 
                  id="hulyAtmospheric1" 
                  x1="0%" 
                  y1="0%" 
                  x2="0%" 
                  y2="100%"
                  animate={{
                    x1: isMouseOver && !prefersReducedMotion ? `${Math.max(0, Math.min(100, mousePosition.x - 5))}%` : "0%",
                    x2: isMouseOver && !prefersReducedMotion ? `${Math.max(0, Math.min(100, mousePosition.x + 5))}%` : "0%"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.stop 
                    offset="0%" 
                    stopOpacity="0.2"
                    animate={{ 
                      stopColor: ["#1a0f4a", "#2d1b69", "#4c2a7a", "#1a0f4a"],
                      stopOpacity: shouldAnimate ? [0.12 * flickerIntensity.current, 0.32 * flickerIntensity.current, 0.22 * flickerIntensity.current, 0.28 * flickerIntensity.current] : 0.2 * flickerIntensity.current
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 4 + Math.random() * 3,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2
                    }}
                  />
                  <motion.stop 
                    offset="25%" 
                    stopOpacity="0.5"
                    animate={{ 
                      stopColor: ["#312e81", "#4338ca", "#4f46e5", "#312e81"],
                      stopOpacity: shouldAnimate ? [0.4 * flickerIntensity.current, 0.7 * flickerIntensity.current, 0.5 * flickerIntensity.current, 0.6 * flickerIntensity.current] : 0.5 * flickerIntensity.current
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 3 + Math.random() * 2,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 3
                    }}
                  />
                  <motion.stop 
                    offset="50%" 
                    stopOpacity="0.7"
                    animate={{ 
                      stopColor: ["#6366f1", "#7c3aed", "#8b5cf6", "#6366f1"],
                      stopOpacity: shouldAnimate ? [0.6 * flickerIntensity.current, 0.9 * flickerIntensity.current, 0.7 * flickerIntensity.current, 0.8 * flickerIntensity.current] : 0.7 * flickerIntensity.current
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 5 + Math.random() * 3,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 1
                    }}
                  />
                  <motion.stop 
                    offset="75%" 
                    stopOpacity="0.8"
                    animate={{ 
                      stopColor: ["#a78bfa", "#c4b5fd", "#ddd6fe", "#a78bfa"],
                      stopOpacity: shouldAnimate ? [0.7 * flickerIntensity.current, 1.0 * flickerIntensity.current, 0.8 * flickerIntensity.current, 0.9 * flickerIntensity.current] : 0.8 * flickerIntensity.current
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 4 + Math.random() * 2,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 1.5
                    }}
                  />
                  <motion.stop 
                    offset="100%" 
                    stopOpacity="0.9"
                    animate={{ 
                      stopColor: ["#ffffff", "#faf5ff", "#f3e8ff", "#ffffff"],
                      stopOpacity: shouldAnimate ? [0.8 * flickerIntensity.current, 1.0 * flickerIntensity.current, 0.9 * flickerIntensity.current, 0.95 * flickerIntensity.current] : 0.9 * flickerIntensity.current
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 6 + Math.random() * 4,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2
                    }}
                  />
                </motion.linearGradient>
                
                <motion.linearGradient 
                  id="hulyAtmospheric2" 
                  x1="0%" 
                  y1="0%" 
                  x2="0%" 
                  y2="100%"
                  animate={{
                    x1: isMouseOver && !prefersReducedMotion ? `${Math.max(0, Math.min(100, mousePosition.x - 3))}%` : "0%",
                    x2: isMouseOver && !prefersReducedMotion ? `${Math.max(0, Math.min(100, mousePosition.x + 3))}%` : "0%"
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.stop 
                    offset="0%" 
                    stopOpacity="0.3"
                    animate={{ 
                      stopColor: ["#2d1b69", "#4c2a7a", "#6b46c1", "#2d1b69"],
                      stopOpacity: shouldAnimate ? [0.25 * flickerIntensity.current, 0.45 * flickerIntensity.current, 0.35 * flickerIntensity.current, 0.4 * flickerIntensity.current] : 0.3 * flickerIntensity.current
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 5 + Math.random() * 2,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 3
                    }}
                  />
                  <motion.stop 
                    offset="40%" 
                    stopOpacity="0.8"
                    animate={{ 
                      stopColor: ["#7c3aed", "#8b5cf6", "#a855f7", "#7c3aed"],
                      stopOpacity: shouldAnimate ? [0.7 * flickerIntensity.current, 1.0 * flickerIntensity.current, 0.8 * flickerIntensity.current, 0.9 * flickerIntensity.current] : 0.8 * flickerIntensity.current
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 3 + Math.random() * 2,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2
                    }}
                  />
                  <motion.stop 
                    offset="70%" 
                    stopOpacity="0.9"
                    animate={{ 
                      stopColor: ["#a78bfa", "#c4b5fd", "#e9d5ff", "#a78bfa"],
                      stopOpacity: shouldAnimate ? [0.8 * flickerIntensity.current, 1.0 * flickerIntensity.current, 0.85 * flickerIntensity.current, 0.95 * flickerIntensity.current] : 0.9 * flickerIntensity.current
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 4 + Math.random() * 2,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 1.5
                    }}
                  />
                  <motion.stop 
                    offset="100%" 
                    stopOpacity="1.0"
                    animate={{ 
                      stopColor: ["#ffffff", "#fefbff", "#fdf4ff", "#ffffff"],
                      stopOpacity: shouldAnimate ? [0.95 * flickerIntensity.current, 1.0 * flickerIntensity.current, 0.98 * flickerIntensity.current, 1.0 * flickerIntensity.current] : 1.0 * flickerIntensity.current
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 4 + Math.random() * 3,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 1
                    }}
                  />
                </motion.linearGradient>
                
                <motion.linearGradient 
                  id="hulyCore" 
                  x1="0%" 
                  y1="0%" 
                  x2="0%" 
                  y2="100%"
                  animate={{
                    x1: isMouseOver && !prefersReducedMotion ? `${Math.max(0, Math.min(100, mousePosition.x - 1))}%` : "0%",
                    x2: isMouseOver && !prefersReducedMotion ? `${Math.max(0, Math.min(100, mousePosition.x + 1))}%` : "0%"
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <motion.stop 
                    offset="0%" 
                    stopOpacity="1.0"
                    animate={{ 
                      stopColor: ["#ffffff", "#ffffff", "#fefefe", "#ffffff"],
                      stopOpacity: shouldAnimate ? [1.0, 1.0, 0.98, 1.0] : 1.0
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 2 + Math.random() * 1,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 1
                    }}
                  />
                  <motion.stop 
                    offset="20%" 
                    stopOpacity="1.0"
                    animate={{ 
                      stopColor: ["#ffffff", "#fefefe", "#fdfdfd", "#ffffff"],
                      stopOpacity: shouldAnimate ? [1.0, 1.0, 0.99, 1.0] : 1.0
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 1.5 + Math.random() * 0.5,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 0.5
                    }}
                  />
                  <motion.stop 
                    offset="60%" 
                    stopOpacity="0.98"
                    animate={{ 
                      stopColor: ["#f8faff", "#f1f5f9", "#e2e8f0", "#f8faff"],
                      stopOpacity: shouldAnimate ? [0.95, 1.0, 0.96, 0.98] : 0.98
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 2.5 + Math.random() * 1,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 1.5
                    }}
                  />
                  <motion.stop 
                    offset="100%" 
                    stopOpacity="0.95"
                    animate={{ 
                      stopColor: ["#e0e7ff", "#c7d2fe", "#a5b4fc", "#e0e7ff"],
                      stopOpacity: shouldAnimate ? [0.9, 0.98, 0.93, 0.95] : 0.95
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 3 + Math.random() * 2,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2
                    }}
                  />
                </motion.linearGradient>

                {/* Fractal noise for organic edge wobble - FIXED */}
                <filter id="organicWobble" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence 
                    type="fractalNoise" 
                    baseFrequency="0.003 0.12" 
                    numOctaves="2" 
                    result="turbulence"
                  >
                    <animate
                      attributeName="baseFrequency"
                      values="0.003 0.12;0.004 0.14;0.0025 0.10;0.0035 0.13;0.003 0.12"
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

                {/* Huly.io Massive Soft Diffusion Filters */}
                <filter id="hulyMassiveBlur1" x="-200%" y="-50%" width="500%" height="200%">
                  <motion.feGaussianBlur 
                    stdDeviation="80" 
                    result="massiveBlur"
                    animate={{ stdDeviation: shouldAnimate ? [70, 90, 75, 85, 80] : 80 * flickerIntensity.current }}
                    transition={{ duration: shouldAnimate ? 3 + Math.random() * 2 : 0, repeat: shouldAnimate ? Infinity : 0, ease: "easeInOut" }}
                  />
                  <feBlend mode="screen" in="massiveBlur" in2="SourceGraphic"/>
                </filter>
                
                <filter id="hulyMassiveBlur2" x="-150%" y="-30%" width="400%" height="160%">
                  <feGaussianBlur stdDeviation="60" result="largeBlur"/>
                  <feBlend mode="screen" in="largeBlur" in2="SourceGraphic"/>
                </filter>
                
                <filter id="hulyAtmosphericBlur" x="-100%" y="-20%" width="300%" height="140%">
                  <feGaussianBlur stdDeviation="40" result="atmosphericBlur"/>
                  <feBlend mode="screen" in="atmosphericBlur" in2="SourceGraphic"/>
                </filter>
                
                <filter id="hulyCoreBlur1" x="-80%" y="-15%" width="260%" height="130%">
                  <feGaussianBlur stdDeviation="25" result="coreBlur"/>
                  <feBlend mode="screen" in="coreBlur" in2="SourceGraphic"/>
                </filter>
                
                <filter id="hulyCoreBlur2" x="-50%" y="-10%" width="200%" height="120%">
                  <feGaussianBlur stdDeviation="12" result="innerBlur"/>
                  <feBlend mode="screen" in="innerBlur" in2="SourceGraphic"/>
                </filter>
                
                <filter id="hulyWhiteCore" x="-20%" y="-5%" width="140%" height="110%">
                  <feGaussianBlur stdDeviation="3" result="whiteCore"/>
                  <feBlend mode="screen" in="whiteCore" in2="SourceGraphic"/>
                </filter>
                
                {/* Huly.io Fog Cloud Filters - Massive Blur for Atmospheric Effect */}
                <filter id="fogBlur1" x="-300%" y="-100%" width="700%" height="300%">
                  <feGaussianBlur stdDeviation="140" result="fog1"/>
                  <feBlend mode="screen" in="fog1" in2="SourceGraphic"/>
                </filter>
                
                <filter id="fogBlur2" x="-250%" y="-80%" width="600%" height="260%">
                  <feGaussianBlur stdDeviation="120" result="fog2"/>
                  <feBlend mode="screen" in="fog2" in2="SourceGraphic"/>
                </filter>
                
                <filter id="fogBlur3" x="-200%" y="-60%" width="500%" height="220%">
                  <feGaussianBlur stdDeviation="100" result="fog3"/>
                  <feBlend mode="screen" in="fog3" in2="SourceGraphic"/>
                </filter>
                
                <filter id="fogBlur4" x="-150%" y="-40%" width="400%" height="180%">
                  <feGaussianBlur stdDeviation="80" result="fog4"/>
                  <feBlend mode="screen" in="fog4" in2="SourceGraphic"/>
                </filter>
                
                {/* Huly.io Fog Cloud Radial Gradients - Blue/Purple Atmospheric Hues */}
                <radialGradient id="fogGradient1" cx="45%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="rgba(30, 58, 138, 0.15)" />
                  <stop offset="30%" stopColor="rgba(79, 70, 229, 0.12)" />
                  <stop offset="60%" stopColor="rgba(139, 92, 246, 0.08)" />
                  <stop offset="100%" stopColor="rgba(30, 27, 75, 0.03)" />
                </radialGradient>
                
                <radialGradient id="fogGradient2" cx="55%" cy="45%" r="70%">
                  <stop offset="0%" stopColor="rgba(67, 56, 202, 0.18)" />
                  <stop offset="25%" stopColor="rgba(109, 40, 217, 0.14)" />
                  <stop offset="50%" stopColor="rgba(147, 51, 234, 0.10)" />
                  <stop offset="100%" stopColor="rgba(24, 24, 59, 0.04)" />
                </radialGradient>
                
                <radialGradient id="fogGradient3" cx="40%" cy="60%" r="80%">
                  <stop offset="0%" stopColor="rgba(99, 102, 241, 0.16)" />
                  <stop offset="20%" stopColor="rgba(129, 140, 248, 0.13)" />
                  <stop offset="40%" stopColor="rgba(165, 180, 252, 0.09)" />
                  <stop offset="100%" stopColor="rgba(30, 41, 59, 0.02)" />
                </radialGradient>
                
                <radialGradient id="fogGradient4" cx="60%" cy="25%" r="65%">
                  <stop offset="0%" stopColor="rgba(76, 29, 149, 0.17)" />
                  <stop offset="35%" stopColor="rgba(124, 58, 237, 0.12)" />
                  <stop offset="70%" stopColor="rgba(168, 85, 247, 0.07)" />
                  <stop offset="100%" stopColor="rgba(15, 23, 42, 0.03)" />
                </radialGradient>
                
                <radialGradient id="fogGradient5" cx="50%" cy="70%" r="75%">
                  <stop offset="0%" stopColor="rgba(55, 48, 163, 0.19)" />
                  <stop offset="30%" stopColor="rgba(91, 33, 182, 0.15)" />
                  <stop offset="60%" stopColor="rgba(139, 69, 217, 0.08)" />
                  <stop offset="100%" stopColor="rgba(17, 24, 39, 0.02)" />
                </radialGradient>
                
                <radialGradient id="fogGradient6" cx="35%" cy="40%" r="90%">
                  <stop offset="0%" stopColor="rgba(79, 70, 229, 0.14)" />
                  <stop offset="25%" stopColor="rgba(116, 0, 234, 0.11)" />
                  <stop offset="50%" stopColor="rgba(147, 51, 234, 0.09)" />
                  <stop offset="100%" stopColor="rgba(12, 14, 35, 0.03)" />
                </radialGradient>
                
                <radialGradient id="fogGradient7" cx="65%" cy="55%" r="85%">
                  <stop offset="0%" stopColor="rgba(88, 28, 135, 0.16)" />
                  <stop offset="40%" stopColor="rgba(126, 34, 206, 0.12)" />
                  <stop offset="80%" stopColor="rgba(168, 85, 247, 0.06)" />
                  <stop offset="100%" stopColor="rgba(20, 25, 50, 0.02)" />
                </radialGradient>
                
                <radialGradient id="fogGradient8" cx="45%" cy="35%" r="95%">
                  <stop offset="0%" stopColor="rgba(67, 56, 202, 0.13)" />
                  <stop offset="30%" stopColor="rgba(107, 114, 228, 0.10)" />
                  <stop offset="65%" stopColor="rgba(165, 180, 252, 0.07)" />
                  <stop offset="100%" stopColor="rgba(8, 16, 40, 0.02)" />
                </radialGradient>
                
                {/* Electrical Discharge Gradients */}
                <radialGradient id="electricalDischarge" cx="50%" cy="50%" r="80%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                  <stop offset="20%" stopColor="rgba(240, 248, 255, 0.9)" />
                  <stop offset="50%" stopColor="rgba(30, 144, 255, 0.7)" />
                  <stop offset="80%" stopColor="rgba(138, 43, 226, 0.4)" />
                  <stop offset="100%" stopColor="rgba(75, 0, 130, 0.1)" />
                </radialGradient>

                {/* Lightning Branch Gradient */}
                <linearGradient id="lightningBranch" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 215, 0, 0.8)" />
                  <stop offset="30%" stopColor="rgba(255, 255, 255, 1)" />
                  <stop offset="70%" stopColor="rgba(30, 144, 255, 0.9)" />
                  <stop offset="100%" stopColor="rgba(138, 43, 226, 0.3)" />
                </linearGradient>
              </defs>
              
              {/* Huly.io Fog Cloud Layers - 8 Large Elliptical Fog Clouds */}
              <motion.ellipse
                cx="320" cy="200" rx="180" ry="120"
                fill="url(#fogGradient1)"
                filter="url(#fogBlur1)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.08, 0.15, 0.10, 0.18, 0.12] : 0.1 * flickerIntensity.current,
                  scale: shouldAnimate ? [1, 1.03, 0.98, 1.05, 1.01] : 1 + (isMouseOver ? 0.02 : 0),
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.1 : 0
                }}
                transition={{ 
                  duration: shouldAnimate ? 8 + Math.random() * 4 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 3
                }}
                style={{ mixBlendMode: 'screen' }}
              />
              
              <motion.ellipse
                cx="480" cy="150" rx="200" ry="140"
                fill="url(#fogGradient2)"
                filter="url(#fogBlur2)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.09, 0.16, 0.11, 0.19, 0.13] : 0.11 * flickerIntensity.current,
                  scale: shouldAnimate ? [1, 1.04, 0.97, 1.06, 1.02] : 1 + (isMouseOver ? 0.015 : 0),
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.08 : 0
                }}
                transition={{ 
                  duration: shouldAnimate ? 7 + Math.random() * 5 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 4
                }}
                style={{ mixBlendMode: 'screen' }}
              />
              
              <motion.ellipse
                cx="380" cy="280" rx="220" ry="160"
                fill="url(#fogGradient3)"
                filter="url(#fogBlur3)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.07, 0.14, 0.09, 0.17, 0.11] : 0.09 * flickerIntensity.current,
                  scale: shouldAnimate ? [1, 1.05, 0.96, 1.07, 1.03] : 1 + (isMouseOver ? 0.025 : 0),
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.12 : 0
                }}
                transition={{ 
                  duration: shouldAnimate ? 9 + Math.random() * 3 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                style={{ mixBlendMode: 'screen' }}
              />
              
              <motion.ellipse
                cx="420" cy="100" rx="190" ry="130"
                fill="url(#fogGradient4)"
                filter="url(#fogBlur4)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.08, 0.15, 0.10, 0.18, 0.12] : 0.10 * flickerIntensity.current,
                  scale: shouldAnimate ? [1, 1.02, 0.99, 1.04, 1.01] : 1 + (isMouseOver ? 0.018 : 0),
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.09 : 0
                }}
                transition={{ 
                  duration: shouldAnimate ? 6 + Math.random() * 4 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 1
                }}
                style={{ mixBlendMode: 'screen' }}
              />
              
              <motion.ellipse
                cx="360" cy="380" rx="240" ry="180"
                fill="url(#fogGradient5)"
                filter="url(#fogBlur1)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.06, 0.13, 0.08, 0.16, 0.10] : 0.08 * flickerIntensity.current,
                  scale: shouldAnimate ? [1, 1.06, 0.95, 1.08, 1.02] : 1 + (isMouseOver ? 0.03 : 0),
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.14 : 0
                }}
                transition={{ 
                  duration: shouldAnimate ? 10 + Math.random() * 2 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 5
                }}
                style={{ mixBlendMode: 'screen' }}
              />
              
              <motion.ellipse
                cx="460" cy="320" rx="210" ry="150"
                fill="url(#fogGradient6)"
                filter="url(#fogBlur2)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.07, 0.14, 0.09, 0.17, 0.11] : 0.09 * flickerIntensity.current,
                  scale: shouldAnimate ? [1, 1.03, 0.98, 1.05, 1.01] : 1 + (isMouseOver ? 0.02 : 0),
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.11 : 0
                }}
                transition={{ 
                  duration: shouldAnimate ? 8 + Math.random() * 6 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 3
                }}
                style={{ mixBlendMode: 'screen' }}
              />
              
              <motion.ellipse
                cx="340" cy="480" rx="260" ry="200"
                fill="url(#fogGradient7)"
                filter="url(#fogBlur3)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.05, 0.12, 0.07, 0.15, 0.09] : 0.07 * flickerIntensity.current,
                  scale: shouldAnimate ? [1, 1.07, 0.94, 1.09, 1.03] : 1 + (isMouseOver ? 0.035 : 0),
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.16 : 0
                }}
                transition={{ 
                  duration: shouldAnimate ? 11 + Math.random() * 3 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 4
                }}
                style={{ mixBlendMode: 'screen' }}
              />
              
              <motion.ellipse
                cx="400" cy="240" rx="280" ry="220"
                fill="url(#fogGradient8)"
                filter="url(#fogBlur4)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.06, 0.13, 0.08, 0.16, 0.10] : 0.08 * flickerIntensity.current,
                  scale: shouldAnimate ? [1, 1.04, 0.97, 1.06, 1.02] : 1 + (isMouseOver ? 0.025 : 0),
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.13 : 0
                }}
                transition={{ 
                  duration: shouldAnimate ? 9 + Math.random() * 5 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                style={{ mixBlendMode: 'screen' }}
              />

              {/* Enhanced Lightsaber Atmospheric Layers with Progressive Ignition */}
              <motion.path
                d={atmosphericBasePath}
                fill="url(#hulyAtmospheric1)"
                filter="url(#hulyMassiveBlur1)"
                initial={{ opacity: 0, scale: 0.8, clipPath: "inset(100% 0 0 0)" }}
                style={{ 
                  opacity: lightsaberOpacity,
                  scale: lightsaberScale,
                  clipPath: useTransform(lightsaberProgress, [0, 1], [
                    "inset(100% 0 0 0)",
                    "inset(0% 0 0 0)"
                  ])
                }}
                animate={{ 
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.4 : 0,
                  skewX: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.02 : 0
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
              />
              
              <motion.path
                d={beamBasePath}
                fill="url(#hulyAtmospheric2)"
                filter="url(#hulyMassiveBlur2)"
                initial={{ opacity: 0, scale: 0.9, clipPath: "inset(100% 0 0 0)" }}
                style={{ 
                  opacity: useTransform(lightsaberProgress, [0, 0.3, 1], [0, 0.6, 0.9]),
                  scale: useTransform(lightsaberProgress, [0, 0.7, 1], [0.9, 0.98, 1]),
                  clipPath: useTransform(lightsaberProgress, [0, 1], [
                    "inset(100% 0 0 0)",
                    "inset(0% 0 0 0)"
                  ])
                }}
                animate={{ 
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.3 : 0,
                  skewX: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.015 : 0
                }}
                transition={{ 
                  duration: 0.25,
                  ease: "easeOut"
                }}
              />
              
              <motion.path
                d={beamBasePath}
                fill="url(#hulyAtmospheric2)"
                filter="url(#hulyAtmosphericBlur)"
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                style={{
                  opacity: useTransform(lightsaberProgress, [0, 0.5, 1], [0, 0.7, isLightsaberIgnited ? flickerIntensity.current * 0.8 : 0.8]),
                  clipPath: useTransform(lightsaberProgress, [0, 1], [
                    "inset(100% 0 0 0)",
                    "inset(0% 0 0 0)"
                  ])
                }}
                animate={{ 
                  x: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.2 : 0,
                  skewX: isMouseOver && !prefersReducedMotion ? (mousePosition.x - 50) * 0.01 : 0
                }}
                transition={{ 
                  duration: 0.2,
                  ease: "easeOut"
                }}
              />

              {/* Lightsaber Core Layers - Progressive Ignition with Width Scaling */}
              {/* Outer Atmospheric Core */}
              <motion.path
                d={beamBasePath}
                fill="url(#hulyCore)"
                filter="url(#hulyCoreBlur1)"
                initial={{ opacity: 0, scale: 0.8, clipPath: "inset(100% 0 0 0)" }}
                style={{
                  opacity: useTransform(lightsaberProgress, [0, 0.4, 1], [0, 0.6, isLightsaberIgnited ? flickerIntensity.current * 0.7 : 0.7]),
                  scale: useTransform(lightsaberProgress, [0, 0.8, 1], [0.8, 0.95, 1]),
                  clipPath: useTransform(lightsaberProgress, [0, 1], [
                    "inset(100% 0 0 0)",
                    "inset(0% 0 0 0)"
                  ])
                }}
                data-testid="lightning-beam-outer"
              />
              
              {/* Middle Core Layer */}
              <motion.path
                d={beamBasePath}
                fill="url(#hulyCore)"
                filter="url(#hulyCoreBlur2)"
                initial={{ opacity: 0, scale: 0.9, clipPath: "inset(100% 0 0 0)" }}
                style={{
                  opacity: useTransform(lightsaberProgress, [0, 0.6, 1], [0, 0.8, isLightsaberIgnited ? flickerIntensity.current * 0.85 : 0.85]),
                  scale: useTransform(lightsaberProgress, [0, 0.9, 1], [0.9, 0.98, 1]),
                  clipPath: useTransform(lightsaberProgress, [0, 1], [
                    "inset(100% 0 0 0)",
                    "inset(0% 0 0 0)"
                  ])
                }}
                data-testid="lightning-beam-middle"
              />
              
              {/* Brilliant White Core */}
              <motion.path
                d={beamBasePath}
                fill="url(#hulyCore)"
                filter="url(#hulyWhiteCore)"
                initial={{ opacity: 0, scale: 1, clipPath: "inset(100% 0 0 0)" }}
                style={{
                  opacity: useTransform(lightsaberProgress, [0, 0.8, 1], [0, 0.9, isLightsaberIgnited ? flickerIntensity.current * 0.95 : 0.95]),
                  scale: useTransform(lightsaberProgress, [0, 1], [1, 1]),
                  clipPath: useTransform(lightsaberProgress, [0, 1], [
                    "inset(100% 0 0 0)",
                    "inset(0% 0 0 0)"
                  ])
                }}
                data-testid="lightning-beam-core"
              />
              
              {/* Progressive Width Lightning Path - Split into segments for width scaling */}
              {/* Top segment - thinnest */}
              <motion.path
                d={topLightningPath}
                fill="none"
                stroke="rgba(255, 255, 255, 1)"
                strokeLinecap="round"
                filter="url(#organicWobble)"
                initial={{ 
                  opacity: 0,
                  pathLength: 0,
                  strokeWidth: 0
                }}
                style={{
                  opacity: useTransform(lightsaberProgress, [0, 0.2, 1], [0, 0.8, isLightsaberIgnited ? flickerIntensity.current : 1]),
                  pathLength: useTransform(lightsaberProgress, [0, 0.33, 1], [0, 1, 1]),
                  strokeWidth: topWidth,
                  strokeDasharray: "200",
                  strokeDashoffset: useTransform(lightsaberProgress, [0, 0.33], [200, 0])
                }}
                data-testid="lightning-top-segment"
              />
              
              {/* Middle segment - medium thickness */}
              <motion.path
                d={middleLightningPath}
                fill="none"
                stroke="rgba(255, 255, 255, 1)"
                strokeLinecap="round"
                filter="url(#organicWobble)"
                initial={{ 
                  opacity: 0,
                  pathLength: 0,
                  strokeWidth: 0
                }}
                style={{
                  opacity: useTransform(lightsaberProgress, [0, 0.33, 0.66, 1], [0, 0, 0.8, isLightsaberIgnited ? flickerIntensity.current : 1]),
                  pathLength: useTransform(lightsaberProgress, [0.33, 0.66, 1], [0, 1, 1]),
                  strokeWidth: middleWidth,
                  strokeDasharray: "200",
                  strokeDashoffset: useTransform(lightsaberProgress, [0.33, 0.66], [200, 0])
                }}
                data-testid="lightning-middle-segment"
              />
              
              {/* Bottom segment - thickest */}
              <motion.path
                d={bottomLightningPath}
                fill="none"
                stroke="rgba(255, 255, 255, 1)"
                strokeLinecap="round"
                filter="url(#organicWobble)"
                initial={{ 
                  opacity: 0,
                  pathLength: 0,
                  strokeWidth: 0
                }}
                style={{
                  opacity: useTransform(lightsaberProgress, [0, 0.66, 1], [0, 0, isLightsaberIgnited ? flickerIntensity.current : 1]),
                  pathLength: useTransform(lightsaberProgress, [0.66, 1], [0, 1]),
                  strokeWidth: bottomWidth,
                  strokeDasharray: "200",
                  strokeDashoffset: useTransform(lightsaberProgress, [0.66, 1], [200, 0])
                }}
                data-testid="lightning-bottom-segment"
              />

              {/* Lightsaber Energy Flow Effect with Progressive Ignition */}
              <g mask="url(#energyFlowMask)">
                <motion.path
                  d={beamBasePath}
                  fill="url(#hulyCore)"
                  filter="url(#hulyWhiteCore)"
                  initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                  style={{
                    opacity: useTransform(lightsaberProgress, [0, 0.7, 1], [0, 0.8, isLightsaberIgnited ? flickerIntensity.current * 0.9 : 0.9]),
                    clipPath: useTransform(lightsaberProgress, [0, 1], [
                      "inset(100% 0 0 0)",
                      "inset(0% 0 0 0)"
                    ])
                  }}
                  data-testid="huly-energy-flow"
                />
              </g>

              {/* Subtle Huly.io Lightning Branches */}
              {branchPaths.slice(0, 3).map((branchPath, index) => (
                <motion.path
                  key={`huly-branch-${index}`}
                  d={branchPath}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="0.8"
                  filter="url(#hulyWhiteCore)"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ 
                    opacity: shouldAnimate ? [0, 0.6, 0.3, 0.7, 0.1] : 0.4 * flickerIntensity.current,
                    pathLength: shouldAnimate ? [0, 1, 0.6, 1, 0.2] : 0.8,
                    strokeWidth: shouldAnimate ? [0.5, 1.2, 0.8, 1.5, 1] : 0.8
                  }}
                  transition={{ 
                    duration: shouldAnimate ? 2 + Math.random() * 1 : 0,
                    repeat: shouldAnimate ? Infinity : 0,
                    ease: "easeInOut",
                    delay: index * 0.5 + Math.random() * 2
                  }}
                  data-testid={`huly-lightning-branch-${index}`}
                />
              ))}
              
              {/* Huly.io Fog Cloud Effects */}
              <motion.ellipse
                cx="400" cy="100" rx="120" ry="80"
                fill="rgba(139, 92, 246, 0.15)"
                filter="url(#hulyAtmosphericBlur)"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.1, 0.4, 0.2, 0.5, 0.3] : 0.2 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.5, 1.3, 0.8, 1.6, 1.1] : 1 + (isMouseOver ? 0.1 : 0),
                  rx: shouldAnimate ? [120, 150, 130, 170, 140] : 130,
                  ry: shouldAnimate ? [80, 100, 85, 110, 90] : 85
                }}
                transition={{ 
                  duration: shouldAnimate ? 5 + Math.random() * 3 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                data-testid="huly-fog-cloud-top"
              />
              
              <motion.ellipse
                cx="400" cy="250" rx="160" ry="100"
                fill="rgba(59, 75, 184, 0.12)"
                filter="url(#hulyMassiveBlur2)"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.08, 0.25, 0.15, 0.3, 0.2] : 0.15 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.6, 1.4, 0.9, 1.7, 1.2] : 1.1 + (isMouseOver ? 0.15 : 0),
                  rx: shouldAnimate ? [160, 200, 170, 220, 180] : 170,
                  ry: shouldAnimate ? [100, 125, 105, 135, 115] : 110
                }}
                transition={{ 
                  duration: shouldAnimate ? 7 + Math.random() * 4 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 3
                }}
                data-testid="huly-fog-cloud-middle"
              />
              
              <motion.ellipse
                cx="400" cy="400" rx="200" ry="120"
                fill="rgba(45, 27, 105, 0.1)"
                filter="url(#hulyMassiveBlur1)"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.05, 0.2, 0.1, 0.25, 0.15] : 0.12 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.7, 1.5, 1, 1.8, 1.3] : 1.2 + (isMouseOver ? 0.2 : 0),
                  rx: shouldAnimate ? [200, 250, 210, 270, 230] : 220,
                  ry: shouldAnimate ? [120, 150, 125, 160, 135] : 130
                }}
                transition={{ 
                  duration: shouldAnimate ? 9 + Math.random() * 5 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 4
                }}
                data-testid="huly-fog-cloud-bottom"
              />
              
              <motion.ellipse
                cx="400" cy="520" rx="240" ry="140"
                fill="rgba(26, 11, 61, 0.08)"
                filter="url(#hulyMassiveBlur1)"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.03, 0.15, 0.08, 0.18, 0.12] : 0.1 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.8, 1.6, 1.1, 1.9, 1.4] : 1.3 + (isMouseOver ? 0.25 : 0),
                  rx: shouldAnimate ? [240, 300, 250, 320, 270] : 260,
                  ry: shouldAnimate ? [140, 175, 145, 185, 160] : 150
                }}
                transition={{ 
                  duration: shouldAnimate ? 11 + Math.random() * 6 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 5
                }}
                data-testid="huly-fog-cloud-base"
              />
              
              {/* Complete 8-Layer Fog System with Mouse Parallax */}
              {/* Fog Layer 1 - Deepest background */}
              <motion.ellipse
                cx="400" cy="500" rx="320" ry="180"
                fill="url(#fogGradient1)"
                filter="url(#fogBlur1)"
                style={{ mixBlendMode: 'screen' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.02, 0.08, 0.04, 0.1, 0.06] : 0.05 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.9, 1.7, 1.2, 1.9, 1.4] : 1.5 + (isMouseOver ? 0.3 : 0),
                  cx: isMouseOver && !prefersReducedMotion ? 400 + (mousePosition.x - 50) * 0.15 : 400,
                  cy: isMouseOver && !prefersReducedMotion ? 500 + (mousePosition.y - 50) * 0.1 : 500
                }}
                transition={{ 
                  duration: shouldAnimate ? 12 + Math.random() * 8 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 6
                }}
                data-testid="huly-fog-layer-1"
              />
              
              {/* Fog Layer 2 */}
              <motion.ellipse
                cx="400" cy="450" rx="280" ry="160"
                fill="url(#fogGradient2)"
                filter="url(#fogBlur2)"
                style={{ mixBlendMode: 'screen' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.03, 0.12, 0.06, 0.15, 0.08] : 0.07 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.8, 1.6, 1.1, 1.8, 1.3] : 1.4 + (isMouseOver ? 0.25 : 0),
                  cx: isMouseOver && !prefersReducedMotion ? 400 + (mousePosition.x - 50) * 0.2 : 400,
                  cy: isMouseOver && !prefersReducedMotion ? 450 + (mousePosition.y - 50) * 0.12 : 450
                }}
                transition={{ 
                  duration: shouldAnimate ? 10 + Math.random() * 6 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 5
                }}
                data-testid="huly-fog-layer-2"
              />
              
              {/* Fog Layer 3 */}
              <motion.ellipse
                cx="400" cy="380" rx="240" ry="140"
                fill="rgba(79, 70, 229, 0.1)"
                filter="url(#fogBlur3)"
                style={{ mixBlendMode: 'screen' }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ 
                  opacity: shouldAnimate ? [0.05, 0.18, 0.1, 0.22, 0.12] : 0.1 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.7, 1.5, 1.0, 1.7, 1.2] : 1.3 + (isMouseOver ? 0.2 : 0),
                  cx: isMouseOver && !prefersReducedMotion ? 400 + (mousePosition.x - 50) * 0.25 : 400,
                  cy: isMouseOver && !prefersReducedMotion ? 380 + (mousePosition.y - 50) * 0.15 : 380
                }}
                transition={{ 
                  duration: shouldAnimate ? 8 + Math.random() * 4 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 4
                }}
                data-testid="huly-fog-layer-3"
              />
              
              {/* Fog Layer 4 */}
              <motion.ellipse
                cx="400" cy="320" rx="200" ry="120"
                fill="rgba(139, 92, 246, 0.12)"
                filter="url(#fogBlur4)"
                style={{ mixBlendMode: 'screen' }}
                animate={{ 
                  opacity: shouldAnimate ? [0.08, 0.25, 0.15, 0.3, 0.18] : 0.15 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.6, 1.4, 0.9, 1.6, 1.1] : 1.2 + (isMouseOver ? 0.15 : 0),
                  cx: isMouseOver && !prefersReducedMotion ? 400 + (mousePosition.x - 50) * 0.3 : 400,
                  cy: isMouseOver && !prefersReducedMotion ? 320 + (mousePosition.y - 50) * 0.18 : 320
                }}
                transition={{ 
                  duration: shouldAnimate ? 6 + Math.random() * 3 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 3
                }}
                data-testid="huly-fog-layer-4"
              />
              
              {/* Fog Layer 5 */}
              <motion.ellipse
                cx="400" cy="260" rx="160" ry="100"
                fill="rgba(167, 139, 250, 0.15)"
                filter="url(#hulyAtmosphericBlur)"
                style={{ mixBlendMode: 'screen' }}
                animate={{ 
                  opacity: shouldAnimate ? [0.12, 0.35, 0.2, 0.4, 0.25] : 0.2 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.5, 1.3, 0.8, 1.5, 1.0] : 1.1 + (isMouseOver ? 0.1 : 0),
                  cx: isMouseOver && !prefersReducedMotion ? 400 + (mousePosition.x - 50) * 0.35 : 400,
                  cy: isMouseOver && !prefersReducedMotion ? 260 + (mousePosition.y - 50) * 0.2 : 260
                }}
                transition={{ 
                  duration: shouldAnimate ? 4 + Math.random() * 2 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                data-testid="huly-fog-layer-5"
              />
              
              {/* Fog Layer 6 */}
              <motion.ellipse
                cx="400" cy="200" rx="120" ry="80"
                fill="rgba(196, 181, 253, 0.18)"
                filter="url(#hulyCoreBlur1)"
                style={{ mixBlendMode: 'screen' }}
                animate={{ 
                  opacity: shouldAnimate ? [0.15, 0.45, 0.25, 0.5, 0.3] : 0.25 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.4, 1.2, 0.7, 1.4, 0.9] : 1.0 + (isMouseOver ? 0.08 : 0),
                  cx: isMouseOver && !prefersReducedMotion ? 400 + (mousePosition.x - 50) * 0.4 : 400,
                  cy: isMouseOver && !prefersReducedMotion ? 200 + (mousePosition.y - 50) * 0.25 : 200
                }}
                transition={{ 
                  duration: shouldAnimate ? 3 + Math.random() * 1.5 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 1.5
                }}
                data-testid="huly-fog-layer-6"
              />
              
              {/* Fog Layer 7 */}
              <motion.ellipse
                cx="400" cy="150" rx="80" ry="60"
                fill="rgba(221, 214, 254, 0.22)"
                filter="url(#hulyCoreBlur2)"
                style={{ mixBlendMode: 'screen' }}
                animate={{ 
                  opacity: shouldAnimate ? [0.18, 0.55, 0.3, 0.6, 0.35] : 0.3 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.3, 1.1, 0.6, 1.3, 0.8] : 0.9 + (isMouseOver ? 0.06 : 0),
                  cx: isMouseOver && !prefersReducedMotion ? 400 + (mousePosition.x - 50) * 0.45 : 400,
                  cy: isMouseOver && !prefersReducedMotion ? 150 + (mousePosition.y - 50) * 0.3 : 150
                }}
                transition={{ 
                  duration: shouldAnimate ? 2 + Math.random() * 1 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 1
                }}
                data-testid="huly-fog-layer-7"
              />
              
              {/* Fog Layer 8 - Closest, most responsive */}
              <motion.ellipse
                cx="400" cy="100" rx="40" ry="40"
                fill="rgba(245, 243, 255, 0.25)"
                filter="url(#hulyWhiteCore)"
                style={{ mixBlendMode: 'screen' }}
                animate={{ 
                  opacity: shouldAnimate ? [0.2, 0.65, 0.35, 0.7, 0.4] : 0.35 * flickerIntensity.current,
                  scale: shouldAnimate ? [0.2, 1.0, 0.5, 1.2, 0.7] : 0.8 + (isMouseOver ? 0.05 : 0),
                  cx: isMouseOver && !prefersReducedMotion ? 400 + (mousePosition.x - 50) * 0.5 : 400,
                  cy: isMouseOver && !prefersReducedMotion ? 100 + (mousePosition.y - 50) * 0.35 : 100
                }}
                transition={{ 
                  duration: shouldAnimate ? 1.5 + Math.random() * 0.8 : 0,
                  repeat: shouldAnimate ? Infinity : 0,
                  ease: "easeInOut",
                  delay: Math.random() * 0.8
                }}
                data-testid="huly-fog-layer-8"
              />
              {/* Stable Electrical Arcs - Left Side */}
              {memoizedLeftArcs.map((arc) => (
                <motion.path
                  key={arc.id}
                  d={arc.path}
                  stroke="rgba(255, 255, 255, 0.8)"
                  strokeWidth={arc.strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#organicWobble)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: shouldAnimate ? [0, 0, 1, 0.3, 0] : 0, 
                    opacity: shouldAnimate ? [0, 0, 1, 0.6, 0] : 0,
                    strokeWidth: shouldAnimate ? [arc.strokeWidth * flickerIntensity.current, arc.strokeWidth * flickerIntensity.current, arc.strokeWidth * 3 * flickerIntensity.current, arc.strokeWidth * 1.5 * flickerIntensity.current, arc.strokeWidth * 0.3 * flickerIntensity.current] : arc.strokeWidth * flickerIntensity.current
                  }}
                  transition={{
                    duration: shouldAnimate ? 0.15 : 0,
                    delay: shouldAnimate ? arc.delay : 0,
                    repeat: shouldAnimate ? Infinity : 0,
                    repeatDelay: shouldAnimate ? arc.repeatDelay : 0,
                    ease: [1, 0, 0, 1]
                  }}
                />
              ))}

              {/* Stable Electrical Arcs - Right Side */}
              {memoizedRightArcs.map((arc) => (
                <motion.path
                  key={arc.id}
                  d={arc.path}
                  stroke="rgba(255, 255, 255, 0.8)"
                  strokeWidth={arc.strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#organicWobble)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: shouldAnimate ? [0, 0, 0.8, 0.2, 0] : 0, 
                    opacity: shouldAnimate ? [0, 0, 0.9, 0.4, 0] : 0,
                    strokeWidth: shouldAnimate ? [arc.strokeWidth * flickerIntensity.current, arc.strokeWidth * flickerIntensity.current, arc.strokeWidth * 2.5 * flickerIntensity.current, arc.strokeWidth * 1.2 * flickerIntensity.current, arc.strokeWidth * 0.2 * flickerIntensity.current] : arc.strokeWidth * flickerIntensity.current
                  }}
                  transition={{
                    duration: shouldAnimate ? 0.18 : 0,
                    delay: shouldAnimate ? arc.delay : 0,
                    repeat: shouldAnimate ? Infinity : 0,
                    repeatDelay: shouldAnimate ? arc.repeatDelay : 0,
                    ease: [0.9, 0, 0.1, 1]
                  }}
                />
              ))}

              {/* Secondary Fractal Branches */}
              {memoizedFractalBranches.map((branch) => (
                <motion.path
                  key={branch.id}
                  d={branch.path}
                  stroke={hoveredAgent ? getCurrentLightningColor() : branch.color}
                  strokeWidth={branch.strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={shouldAnimate ? { 
                    pathLength: [0, 0, 0.9, 0.3, 0], 
                    opacity: [0, 0, 0.7, 0.25, 0]
                  } : { pathLength: 0, opacity: 0 }}
                  transition={{
                    duration: shouldAnimate ? 0.25 + Math.random() * 0.2 : 0,
                    delay: shouldAnimate ? branch.delay : 0,
                    repeat: shouldAnimate ? Infinity : 0,
                    repeatDelay: shouldAnimate ? branch.repeatDelay : 0,
                    ease: [0.7, 0, 0.3, 1]
                  }}
                />
              ))}

              {/* Micro Lightning Sparks */}
              {shouldAnimate && Array.from({ length: screenSize === 'small' ? 10 : screenSize === 'medium' ? 15 : 20 }).map((_, i) => {
                const x = 390 + Math.random() * 20;
                const y = Math.random() * 600;
                
                return (
                  <motion.circle
                    key={`spark-${i}`}
                    cx={x}
                    cy={y}
                    r={Math.random() * 2 + 0.5}
                    fill={hoveredAgent ? getCurrentLightningColor() : "url(#electricalDischarge)"}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 0.15 + Math.random() * 0.1,
                      delay: i * 0.03 + Math.random() * 8,
                      repeat: Infinity,
                      repeatDelay: 4 + Math.random() * 10
                    }}
                  />
                );
              })}
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