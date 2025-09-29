import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, CreditCard, Users } from "lucide-react";
import { useRef } from "react";

export default function DashboardPreview() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect - move elements at different speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -30]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -70]);

  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto" data-testid="dashboard-preview">
      {/* Main analytics card */}
      <motion.div
        style={{ y: y1 }}
        className="relative z-30"
      >
        <Card className="bg-card/90 backdrop-blur border-card-border shadow-xl">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Revenue Analytics
              </CardTitle>
              <Badge variant="secondary" className="text-xs">
                Today
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold text-foreground">$3,528,106.72</div>
                <div className="text-sm text-muted-foreground">Total volume</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-lg font-semibold text-foreground">$2,001,069.56</div>
                  <div className="text-xs text-muted-foreground">Yesterday</div>
                </div>
                <div>
                  <div className="flex items-center text-green-500 text-sm">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +26.1%
                  </div>
                </div>
              </div>

              {/* Mini chart representation */}
              <div className="mt-4 h-20 bg-muted/30 rounded flex items-end justify-between p-2">
                {[45, 60, 35, 80, 55, 90, 75, 65, 85, 70, 95, 88].map((height, i) => (
                  <motion.div
                    key={i}
                    className="bg-primary rounded-sm w-2"
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

      {/* Payment method card - floating */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -top-4 -right-8 z-20 transform rotate-3"
      >
        <Card className="bg-card/95 backdrop-blur border-card-border shadow-lg w-48">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-medium text-foreground">Card Payment</div>
                <div className="text-xs text-muted-foreground">•••• 4242</div>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-xs text-muted-foreground">Amount</div>
              <div className="text-lg font-bold text-foreground">$1,247.50</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Customer activity card */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-32 -left-8 z-10 transform -rotate-2"
      >
        <Card className="bg-card/90 backdrop-blur border-card-border shadow-lg w-52">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Users className="w-4 h-4 mr-2" />
              New customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-foreground mb-2">+37</div>
            <div className="text-xs text-green-500">+8.1% vs last week</div>
            
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Net volume from sales</span>
                <span className="text-foreground font-medium">+25.6%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Average order value</span>
                <span className="text-foreground font-medium">$89.34</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3]
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