import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const sampleWords = [
  'Premium', 'Luxurious', 'Handcrafted', 'Sustainable', 'Innovative',
  'Elegant', 'Durable', 'Authentic', 'Exclusive', 'Refined',
  'Modern', 'Timeless', 'Versatile', 'Comfortable', 'Quality'
];

const beforeAfter = [
  { before: 'Generic product description', after: 'Captivating story that converts' },
  { before: 'Basic features list', after: 'Emotional connection with buyers' },
  { before: 'Simple bullet points', after: 'Persuasive narrative experience' }
];

export function StoryWeave() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % beforeAfter.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
  };

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-indigo-100"
      onMouseMove={handleMouseMove}
      data-testid="story-weave-canvas"
    >
      {/* Floating word clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {sampleWords.map((word, i) => (
          <motion.div
            key={word}
            className="absolute text-indigo-300/40 font-bold select-none"
            style={{
              left: `${(i * 17 + 10) % 85}%`,
              top: `${(i * 23 + 15) % 75}%`,
              fontSize: `${20 + (i % 3) * 8}px`,
              x,
              y,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Central transformation showcase */}
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="max-w-3xl w-full space-y-8">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {/* Before */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex-shrink-0 w-24 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-semibold">
                  BEFORE
                </span>
              </div>
              <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200">
                <p className="text-gray-500 text-sm line-through">
                  {beforeAfter[activeIndex].before}
                </p>
              </div>
            </motion.div>

            {/* Transformation arrow */}
            <motion.div
              className="flex justify-center"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex-shrink-0 w-24 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold">
                  AFTER
                </span>
              </div>
              <div className="flex-1 bg-gradient-to-br from-white to-indigo-50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-indigo-300 shadow-lg">
                <p className="text-gray-900 text-sm font-medium">
                  {beforeAfter[activeIndex].after}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Metrics badges */}
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { label: 'Conversion', value: '+47%' },
              { label: 'Engagement', value: '+63%' },
              { label: 'SEO Score', value: '98/100' }
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-indigo-200 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-xs text-gray-600">{metric.label}</div>
                <div className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {metric.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated ribbons */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.path
          d="M0,250 Q400,200 800,250 T1600,250"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          animate={{ d: [
            "M0,250 Q400,200 800,250 T1600,250",
            "M0,250 Q400,300 800,250 T1600,250",
            "M0,250 Q400,200 800,250 T1600,250"
          ]}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
