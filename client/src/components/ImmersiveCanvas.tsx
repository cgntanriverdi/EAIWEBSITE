import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ImmersiveCanvasProps {
  children: ReactNode;
  palette?: string[];
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
}

export function ImmersiveCanvas({ 
  children, 
  palette = ['#8b5cf6', '#a855f7', '#c084fc', '#e879f9'],
  intensity = 'medium',
  interactive = false
}: ImmersiveCanvasProps) {
  const opacities = {
    low: 0.05,
    medium: 0.1,
    high: 0.15
  };

  return (
    <div className="relative">
      {/* Morphing gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%]"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${palette[0]}${Math.floor(opacities[intensity] * 255).toString(16).padStart(2, '0')}, transparent 50%)`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[120%] h-[120%]"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${palette[1]}${Math.floor(opacities[intensity] * 255).toString(16).padStart(2, '0')}, transparent 50%)`,
          }}
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 100, -70, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-[100%] h-[100%]"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${palette[2]}${Math.floor(opacities[intensity] * 0.8 * 255).toString(16).padStart(2, '0')}, transparent 45%)`,
          }}
          animate={{
            x: [0, 60, -90, 0],
            y: [0, -60, 80, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
      {children}
    </div>
  );
}
