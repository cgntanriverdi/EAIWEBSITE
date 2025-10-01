import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, Bot, Target } from "lucide-react";
import { useRef } from "react";

export default function DashboardPreview() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect - move elements at different speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -30]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -70]);

  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto h-[500px]" data-testid="dashboard-preview">
      {/* Customer activity card - bottom of stack */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-48 left-4 right-4 z-10"
      >
        <Card className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center mr-2">
                <Target className="w-3 h-3 text-white" />
              </div>
              Performance Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-gray-900 mb-2">+34%</div>
            <div className="text-xs text-green-600 font-medium">Conversion boost this week</div>
            
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Click-through rate</span>
                <span className="text-gray-900 font-medium">+28.3%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Avg. listing quality</span>
                <span className="text-gray-900 font-medium">9.2/10</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AI Processing card - middle of stack */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-28 left-4 right-4 z-20"
      >
        <Card className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">AI Processing</div>
                <div className="text-xs text-gray-500">Model: GPT-4</div>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-xs text-gray-500">Time Saved</div>
              <div className="text-lg font-bold text-gray-900">147.2 hrs</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main analytics card - top of stack */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-4 right-4 z-30"
      >
        <Card className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Listings Optimized
              </CardTitle>
              <Badge className="text-xs bg-indigo-50 text-indigo-700 border-indigo-200">
                Today
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">2,847</div>
                <div className="text-sm text-gray-500">Product descriptions generated today 7:50 AM</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-lg font-semibold text-gray-900">1,892</div>
                  <div className="text-xs text-gray-500">Yesterday</div>
                </div>
                <div>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +50.5%
                  </div>
                </div>
              </div>

              {/* Mini chart representation */}
              <div className="mt-4 h-20 bg-gray-50 rounded-md flex items-end justify-between p-2">
                {[45, 60, 35, 80, 55, 90, 75, 65, 85, 70, 95, 88].map((height, i) => (
                  <motion.div
                    key={i}
                    className="bg-indigo-500 rounded-sm w-2"
                    style={{ height: `${height}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Background glow effect - more subtle for Stripe style */}
      <motion.div
        className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-3xl -z-10"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}