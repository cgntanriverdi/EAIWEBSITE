import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Target, Zap } from 'lucide-react';

interface PriceNode {
  id: number;
  angle: number;
  distance: number;
  price: number;
  profit: number;
  label: string;
}

const strategies = [
  { name: 'Competitive', color: 'from-blue-500 to-cyan-500', icon: Target },
  { name: 'Premium', color: 'from-purple-500 to-pink-500', icon: TrendingUp },
  { name: 'Dynamic', color: 'from-orange-500 to-red-500', icon: Zap }
];

export function RevenueConstellation() {
  const [activeStrategy, setActiveStrategy] = useState(1);
  const [metrics, setMetrics] = useState({ revenue: 0, margin: 0, sales: 0 });

  const priceNodes: PriceNode[] = [
    { id: 1, angle: 0, distance: 80, price: 29, profit: 12, label: 'Entry' },
    { id: 2, angle: 72, distance: 120, price: 49, profit: 24, label: 'Standard' },
    { id: 3, angle: 144, distance: 140, price: 79, profit: 42, label: 'Premium' },
    { id: 4, angle: 216, distance: 100, price: 39, profit: 18, label: 'Value' },
    { id: 5, angle: 288, distance: 110, price: 59, profit: 30, label: 'Plus' },
  ];

  useEffect(() => {
    const targetMetrics = {
      revenue: 45000 + activeStrategy * 15000,
      margin: 35 + activeStrategy * 8,
      sales: 1200 + activeStrategy * 300
    };

    const interval = setInterval(() => {
      setMetrics(prev => ({
        revenue: Math.floor(prev.revenue + (targetMetrics.revenue - prev.revenue) * 0.1),
        margin: Math.floor(prev.margin + (targetMetrics.margin - prev.margin) * 0.1),
        sales: Math.floor(prev.sales + (targetMetrics.sales - prev.sales) * 0.1)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [activeStrategy]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 border border-indigo-500/30" data-testid="revenue-constellation-canvas">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Central constellation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
          {/* Center core */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 40px rgba(99, 102, 241, 0.6)',
                '0 0 60px rgba(99, 102, 241, 0.9)',
                '0 0 40px rgba(99, 102, 241, 0.6)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <DollarSign className="w-12 h-12 text-white" strokeWidth={2.5} />
          </motion.div>

          {/* Orbital rings */}
          {[100, 140, 180].map((radius, ringIndex) => (
            <motion.div
              key={radius}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/20"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
              }}
              animate={{
                rotate: ringIndex % 2 === 0 ? 360 : -360,
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                rotate: { duration: 30 + ringIndex * 10, repeat: Infinity, ease: "linear" },
                opacity: { duration: 4, repeat: Infinity }
              }}
            />
          ))}

          {/* Price nodes */}
          {priceNodes.map((node, index) => {
            const x = Math.cos((node.angle * Math.PI) / 180) * node.distance;
            const y = Math.sin((node.angle * Math.PI) / 180) * node.distance;
            const isOptimal = index === 2;

            return (
              <motion.div
                key={node.id}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Connection line to center */}
                <svg
                  className="absolute top-1/2 left-1/2 pointer-events-none"
                  style={{
                    width: `${node.distance * 2}px`,
                    height: `${node.distance * 2}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`${50 + (x / node.distance) * 50}%`}
                    y2={`${50 + (y / node.distance) * 50}%`}
                    stroke={isOptimal ? 'rgba(168, 85, 247, 0.5)' : 'rgba(99, 102, 241, 0.2)'}
                    strokeWidth="2"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </svg>

                {/* Node */}
                <motion.div
                  className={`relative ${isOptimal ? 'w-20 h-20' : 'w-16 h-16'} rounded-2xl flex flex-col items-center justify-center ${
                    isOptimal
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                      : 'bg-gradient-to-br from-indigo-600 to-indigo-800'
                  } shadow-lg`}
                  animate={{
                    y: [0, -5, 0],
                    boxShadow: isOptimal
                      ? [
                          '0 0 20px rgba(168, 85, 247, 0.4)',
                          '0 0 40px rgba(168, 85, 247, 0.6)',
                          '0 0 20px rgba(168, 85, 247, 0.4)',
                        ]
                      : undefined,
                  }}
                  transition={{
                    y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                    boxShadow: { duration: 2, repeat: Infinity },
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-white font-bold text-lg">${node.price}</div>
                  <div className="text-white/70 text-xs">{node.label}</div>
                  {isOptimal && (
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-xs">⭐</span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Profit indicator */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-indigo-300 font-medium"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  +${node.profit} profit
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Strategy selector */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-indigo-500/30 flex gap-2">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <button
                key={strategy.name}
                onClick={() => setActiveStrategy(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeStrategy === index
                    ? `bg-gradient-to-r ${strategy.color} text-white shadow-lg`
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
                data-testid={`button-strategy-${index}`}
              >
                <Icon className="w-4 h-4" />
                {strategy.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Live metrics */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {[
          { label: 'Revenue', value: `$${metrics.revenue.toLocaleString()}`, color: 'from-green-500 to-emerald-600' },
          { label: 'Margin', value: `${metrics.margin}%`, color: 'from-blue-500 to-cyan-600' },
          { label: 'Sales', value: metrics.sales, color: 'from-purple-500 to-pink-600' }
        ].map((metric) => (
          <motion.div
            key={metric.label}
            className={`bg-gradient-to-br ${metric.color} rounded-2xl px-6 py-3 shadow-lg`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="text-white/80 text-xs font-medium">{metric.label}</div>
            <div className="text-white text-xl font-bold">{metric.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
