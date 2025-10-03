import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, Zap, Shield } from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
    country: "",
    emailUpdates: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up submitted:", formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Rainbow gradient background - same as landing page hero */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 11%, #3B82F6 22%, #06B6D4 33%, #10B981 44%, #EC4899 55%, #EF4444 66%, #F97316 77%, #FBBF24 88%, #8B5CF6 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />

      {/* Overlay layers for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, #06B6D4 0%, rgba(6, 182, 212, 0.6) 30%, transparent 60%)',
          mixBlendMode: 'screen',
          opacity: 0.7
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 40%, #EC4899 0%, rgba(236, 72, 153, 0.5) 25%, transparent 50%)',
          mixBlendMode: 'screen',
          opacity: 0.6
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block space-y-8 text-white"
          >
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 mb-12 cursor-pointer group" data-testid="link-home-logo">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">AI Commerce Studio</span>
              </div>
            </Link>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Get started quickly</h3>
                  <p className="text-white/80 text-sm">
                    Start optimizing your product listings in minutes with our AI-powered agents and intuitive interface.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Support any business model</h3>
                  <p className="text-white/80 text-sm">
                    E-commerce, subscriptions, marketplaces, and more—all within a unified platform optimized for growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Join thousands of businesses</h3>
                  <p className="text-white/80 text-sm">
                    AI Commerce Studio is trusted by ambitious startups and enterprises of every size to scale their operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Sign up form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-md mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8" data-testid="text-signup-title">
                Create your AI Commerce account
              </h1>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    data-testid="input-email"
                    required
                  />
                </div>

                {/* Full name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full"
                    data-testid="input-fullname"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full"
                    data-testid="input-password"
                    required
                  />
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                    Country
                  </Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => setFormData({ ...formData, country: value })}
                  >
                    <SelectTrigger className="w-full" data-testid="select-country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">🇺🇸 United States</SelectItem>
                      <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                      <SelectItem value="ca">🇨🇦 Canada</SelectItem>
                      <SelectItem value="au">🇦🇺 Australia</SelectItem>
                      <SelectItem value="de">🇩🇪 Germany</SelectItem>
                      <SelectItem value="fr">🇫🇷 France</SelectItem>
                      <SelectItem value="es">🇪🇸 Spain</SelectItem>
                      <SelectItem value="it">🇮🇹 Italy</SelectItem>
                      <SelectItem value="jp">🇯🇵 Japan</SelectItem>
                      <SelectItem value="other">🌍 Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Email updates checkbox */}
                <div className="flex items-start space-x-2 py-2">
                  <Checkbox
                    id="emailUpdates"
                    checked={formData.emailUpdates}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, emailUpdates: checked as boolean })
                    }
                    data-testid="checkbox-email-updates"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="emailUpdates"
                      className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                    >
                      Get emails from AI Commerce Studio about product updates, industry news, and events. 
                      You can <span className="text-indigo-600 hover:text-indigo-700">unsubscribe</span> at any time.{" "}
                      <Link href="/privacy" className="text-indigo-600 hover:text-indigo-700 underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-indigo-500/30"
                  data-testid="button-create-account"
                >
                  Create account
                </Button>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">OR</span>
                  </div>
                </div>

                {/* Google sign up - placeholder */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-lg transition-colors"
                  onClick={() => console.log("Sign up with Google clicked")}
                  data-testid="button-google-signup"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Sign up with Google
                </Button>
              </form>

              {/* Sign in link */}
              <div className="mt-8 text-center">
                <span className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login">
                    <span className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer" data-testid="link-sign-in">
                      Sign in
                    </span>
                  </Link>
                </span>
              </div>
            </div>

            {/* Footer links - mobile only */}
            <div className="lg:hidden mt-8 flex items-center justify-center gap-6 text-sm">
              <Link href="/privacy">
                <span className="text-white/80 hover:text-white cursor-pointer">Privacy & terms</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer links - desktop */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <Link href="/privacy">
          <span className="text-white/80 hover:text-white text-sm cursor-pointer">Privacy & terms</span>
        </Link>
      </div>
    </div>
  );
}
