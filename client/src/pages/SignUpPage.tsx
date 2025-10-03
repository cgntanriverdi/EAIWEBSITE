import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, Zap, TrendingUp, Users } from "lucide-react";

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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Rainbow gradient at bottom - like Stripe */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 11%, #3B82F6 22%, #06B6D4 33%, #10B981 44%, #EC4899 55%, #EF4444 66%, #F97316 77%, #FBBF24 88%, #8B5CF6 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 80%)'
        }}
      />

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left side - Conversion-optimized content with FOMO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 lg:pr-8"
            >
              {/* Logo */}
              <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer group" data-testid="link-home-logo">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-all">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">AI Commerce Studio</span>
                </div>
              </Link>

              {/* Main benefits with FOMO */}
              <div className="space-y-8 border-l-2 border-gray-200 pl-6">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Get started quickly</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Integrate with developer-friendly APIs or choose low-code or pre-built solutions.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Support any business model</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    E-commerce, subscriptions, SaaS platforms, marketplaces, and more—all within a unified platform.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Join millions of businesses</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    AI Commerce Studio is trusted by ambitious startups and enterprises of every size.
                  </p>
                </div>
              </div>

              {/* FOMO element - Social proof */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-orange-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                      +2K
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-indigo-900">2,847 businesses joined this week</p>
                  </div>
                </div>
                <p className="text-sm text-indigo-700">
                  Don't miss out—increase your revenue by an average of <span className="font-bold">234%</span> with AI-optimized listings.
                </p>
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>14-day free trial</span>
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
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10 max-w-md mx-auto lg:ml-auto">
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
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
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

                  {/* Google sign up */}
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
            </motion.div>

          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="absolute bottom-8 left-8 z-20">
        <Link href="/privacy">
          <span className="text-indigo-600 hover:text-indigo-700 text-sm font-medium cursor-pointer">
            © AI Commerce Studio
          </span>
        </Link>
        <span className="text-gray-400 mx-3">•</span>
        <Link href="/privacy">
          <span className="text-gray-600 hover:text-gray-900 text-sm cursor-pointer">
            Privacy & terms
          </span>
        </Link>
      </div>
    </div>
  );
}
