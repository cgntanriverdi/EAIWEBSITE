import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Image as ImageIcon, FileText, Sparkles, ShoppingBag } from "lucide-react";
import { useRef } from "react";

export default function DashboardPreview() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect - move elements at different speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -30]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -70]);

  return (
    <div ref={ref} className="relative w-full max-w-2xl mx-auto h-[550px]" data-testid="dashboard-preview">
      {/* Product Listing Card - bottom of stack */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-60 left-0 right-0 z-10"
      >
        <Card className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
          <CardContent className="p-6 relative">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Active Listings</h3>
                  <p className="text-xs text-gray-500">Across all platforms</p>
                </div>
              </div>
              <Badge className="bg-green-50 text-green-700 border-green-200 text-xs">Live</Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-50/80 rounded-lg p-3">
                <div className="text-2xl font-bold text-gray-900">1,247</div>
                <div className="text-xs text-gray-500 mt-1">Published</div>
              </div>
              <div className="bg-gray-50/80 rounded-lg p-3">
                <div className="text-2xl font-bold text-indigo-600">342</div>
                <div className="text-xs text-gray-500 mt-1">Pending</div>
              </div>
              <div className="bg-gray-50/80 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">94%</div>
                <div className="text-xs text-gray-500 mt-1">Success</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AI Generation Stats - middle of stack */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-32 left-0 right-0 z-20"
      >
        <Card className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
          <CardContent className="p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">AI Generation</h3>
                  <p className="text-xs text-gray-500">Real-time processing</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-600 font-medium">Active</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 border border-purple-100">
                <FileText className="w-5 h-5 text-purple-600 mb-2" />
                <div className="text-xl font-bold text-gray-900">2.8k</div>
                <div className="text-xs text-gray-600">Descriptions</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 border border-blue-100">
                <ImageIcon className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-xl font-bold text-gray-900">1.4k</div>
                <div className="text-xs text-gray-600">Images</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 border border-green-100">
                <DollarSign className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-xl font-bold text-gray-900">892</div>
                <div className="text-xs text-gray-600">Prices</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Revenue Impact Card - top of stack */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 right-0 z-30"
      >
        <Card className="bg-gradient-to-br from-white via-white/95 to-indigo-50/30 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <CardHeader className="pb-3 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-base font-bold text-gray-900">
                    Revenue Impact
                  </CardTitle>
                  <p className="text-xs text-gray-500 mt-1">Last 30 days performance</p>
                </div>
              </div>
              <Badge className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                +156%
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                <div className="flex items-baseline space-x-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    $847K
                  </div>
                  <div className="text-sm text-green-600 font-semibold flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +234%
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-1">Generated revenue this month</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/60 rounded-lg p-3 border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Conversion Rate</div>
                  <div className="text-2xl font-bold text-gray-900">18.4%</div>
                  <div className="text-xs text-green-600 font-medium mt-1">+12.3%</div>
                </div>
                <div className="bg-white/60 rounded-lg p-3 border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Avg Order Value</div>
                  <div className="text-2xl font-bold text-gray-900">$142</div>
                  <div className="text-xs text-green-600 font-medium mt-1">+28%</div>
                </div>
              </div>

              {/* Enhanced chart */}
              <div className="h-24 bg-gradient-to-br from-gray-50 to-indigo-50/50 rounded-xl flex items-end justify-between p-3 gap-1 border border-gray-100">
                {[40, 55, 35, 70, 50, 85, 65, 75, 60, 90, 70, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-md shadow-lg"
                    style={{ height: `${height}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: 1.2 + i * 0.08 }}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Enhanced glow effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}