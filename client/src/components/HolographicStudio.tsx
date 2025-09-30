import { motion } from 'framer-motion';
import { useState } from 'react';
import { Camera, Zap, Sparkles, Image as ImageIcon } from 'lucide-react';

const productStages = [
  { label: 'Raw Photo', opacity: 0.3, blur: 8 },
  { label: 'AI Enhanced', opacity: 0.6, blur: 4 },
  { label: 'Studio Quality', opacity: 1, blur: 0 }
];

const lightingModes = [
  { name: 'Natural', gradient: 'from-amber-400 to-orange-500', icon: '☀️' },
  { name: 'Studio', gradient: 'from-blue-400 to-cyan-500', icon: '💡' },
  { name: 'Dramatic', gradient: 'from-purple-500 to-pink-500', icon: '✨' }
];

export function HolographicStudio() {
  const [activeStage, setActiveStage] = useState(2);
  const [activeLighting, setActiveLighting] = useState(1);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30" data-testid="holographic-studio-canvas">
      {/* Holographic grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Rotating product frame */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-80 h-80"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Holographic frame */}
          <div className="absolute inset-0 rounded-3xl border-4 border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl shadow-2xl" style={{
            boxShadow: '0 0 60px rgba(168, 85, 247, 0.4), inset 0 0 60px rgba(168, 85, 247, 0.1)'
          }}>
            {/* Product silhouette with stages */}
            <div className="absolute inset-8 flex items-center justify-center">
              <motion.div
                key={activeStage}
                className="relative w-full h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Simulated product with blur effect */}
                <motion.div
                  className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center"
                  style={{
                    filter: `blur(${productStages[activeStage].blur}px)`,
                    opacity: productStages[activeStage].opacity
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 ${30 + activeLighting * 20}px rgba(168, 85, 247, 0.6)`,
                      `0 0 ${50 + activeLighting * 20}px rgba(168, 85, 247, 0.8)`,
                      `0 0 ${30 + activeLighting * 20}px rgba(168, 85, 247, 0.6)`,
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ImageIcon className="w-24 h-24 text-white/80" strokeWidth={1.5} />
                </motion.div>

                {/* Enhancement particles */}
                {activeStage === 2 && (
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: `${20 + (i * 60) % 80}%`,
                          top: `${30 + (i * 40) % 60}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Corner accents */}
            {[0, 1, 2, 3].map((corner) => (
              <motion.div
                key={corner}
                className="absolute w-8 h-8"
                style={{
                  top: corner < 2 ? '-4px' : 'auto',
                  bottom: corner >= 2 ? '-4px' : 'auto',
                  left: corner % 2 === 0 ? '-4px' : 'auto',
                  right: corner % 2 === 1 ? '-4px' : 'auto',
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: corner * 0.5,
                }}
              >
                <div className="w-full h-full border-t-2 border-l-2 border-purple-400 rounded-tl-lg" style={{
                  transform: `rotate(${corner * 90}deg)`
                }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Control panel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 space-y-4">
        {/* Stage selector */}
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/30">
          <div className="flex gap-2">
            {productStages.map((stage, index) => (
              <button
                key={stage.label}
                onClick={() => setActiveStage(index)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeStage === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
                data-testid={`button-stage-${index}`}
              >
                {stage.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lighting modes */}
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/30">
          <div className="flex gap-3">
            {lightingModes.map((mode, index) => (
              <button
                key={mode.name}
                onClick={() => setActiveLighting(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeLighting === index
                    ? `bg-gradient-to-r ${mode.gradient} text-white shadow-lg`
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
                data-testid={`button-lighting-${index}`}
              >
                <span className="text-lg">{mode.icon}</span>
                {mode.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[Camera, Zap, Sparkles].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${15 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          >
            <Icon className="w-8 h-8 text-purple-400" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
