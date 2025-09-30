import { motion } from 'framer-motion';
import { useState } from 'react';
import { Globe, Rocket, CheckCircle2, Clock } from 'lucide-react';

const platforms = [
  { name: 'Amazon', icon: '📦', angle: 0, color: 'from-orange-500 to-amber-600' },
  { name: 'eBay', icon: '🛒', angle: 45, color: 'from-blue-500 to-blue-600' },
  { name: 'Shopify', icon: '🏪', angle: 90, color: 'from-green-500 to-emerald-600' },
  { name: 'Etsy', icon: '🎨', angle: 135, color: 'from-orange-600 to-red-500' },
  { name: 'Walmart', icon: '⭐', angle: 180, color: 'from-blue-600 to-cyan-600' },
  { name: 'Facebook', icon: '👥', angle: 225, color: 'from-blue-700 to-indigo-600' },
  { name: 'Instagram', icon: '📸', angle: 270, color: 'from-pink-500 to-purple-600' },
  { name: 'TikTok', icon: '🎵', angle: 315, color: 'from-black to-cyan-500' },
];

const pipelineStages = [
  { label: 'Preparing', icon: Clock, progress: 100 },
  { label: 'Optimizing', icon: Rocket, progress: 75 },
  { label: 'Publishing', icon: Globe, progress: 40 },
  { label: 'Live', icon: CheckCircle2, progress: 25 }
];

export function GlobalLaunchOrbit() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 border border-blue-500/30" data-testid="global-launch-orbit-canvas">
      {/* World map overlay */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '30px 30px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Central hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[600px] h-[600px]">
          {/* Core globe */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center overflow-hidden"
            animate={{
              boxShadow: [
                '0 0 40px rgba(59, 130, 246, 0.6)',
                '0 0 60px rgba(59, 130, 246, 0.9)',
                '0 0 40px rgba(59, 130, 246, 0.6)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Globe className="w-16 h-16 text-white" strokeWidth={1.5} />
            {/* Rotating meridian lines */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute top-0 left-1/2 w-px h-full bg-white/20"
                  style={{ transform: `rotate(${i * 45}deg)` }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Orbital paths */}
          {[140, 200, 260].map((radius, index) => (
            <motion.div
              key={radius}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-blue-500/20"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
              }}
              animate={{
                rotate: index % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 40 + index * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}

          {/* Platform nodes */}
          {platforms.map((platform, index) => {
            const radius = 180;
            const x = Math.cos((platform.angle * Math.PI) / 180) * radius;
            const y = Math.sin((platform.angle * Math.PI) / 180) * radius;
            const isActive = index % 3 === activeStage % 3;

            return (
              <div key={platform.name}>
                {/* Connection beam */}
                {isActive && (
                  <svg
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      width: '100%',
                      height: '100%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="url(#beamGradient)"
                      strokeWidth="3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                      transition={{
                        pathLength: { duration: 1.5, ease: "easeInOut" },
                        opacity: { duration: 1.5, times: [0, 0.5, 1] },
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    />
                    <defs>
                      <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                        <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
                        <stop offset="100%" stopColor="rgba(34, 211, 238, 1)" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}

                {/* Platform node */}
                <motion.div
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} flex flex-col items-center justify-center shadow-xl cursor-pointer`}
                    animate={{
                      y: [0, -8, 0],
                      boxShadow: isActive
                        ? [
                            '0 0 20px rgba(59, 130, 246, 0.5)',
                            '0 0 40px rgba(59, 130, 246, 0.8)',
                            '0 0 20px rgba(59, 130, 246, 0.5)',
                          ]
                        : undefined,
                    }}
                    transition={{
                      y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                      boxShadow: isActive ? { duration: 2, repeat: Infinity } : undefined,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="text-3xl mb-1">{platform.icon}</div>
                    <div className="text-white text-[10px] font-medium">{platform.name}</div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Publishing particles */}
                  {isActive && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                          animate={{
                            scale: [0, 1, 0],
                            x: [(Math.random() - 0.5) * 60],
                            y: [(Math.random() - 0.5) * 60],
                            opacity: [1, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pipeline status */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-blue-500/30">
          <div className="flex gap-2">
            {pipelineStages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = index === activeStage;
              const isComplete = index < activeStage;

              return (
                <button
                  key={stage.label}
                  onClick={() => setActiveStage(index)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : isComplete
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                  data-testid={`button-pipeline-${index}`}
                >
                  {/* Progress bar */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ width: 0 }}
                      animate={{ width: `${stage.progress}%` }}
                      transition={{ duration: 2 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{stage.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute top-8 right-8 space-y-2">
        {[
          { label: 'Platforms', value: '50+' },
          { label: 'Products', value: '2.4K' },
          { label: 'Success Rate', value: '99.8%' }
        ].map((stat) => (
          <motion.div
            key={stat.label}
            className="bg-black/40 backdrop-blur-xl rounded-xl px-4 py-2 border border-blue-500/30 text-right"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-blue-300 text-xs">{stat.label}</div>
            <div className="text-white text-lg font-bold">{stat.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
