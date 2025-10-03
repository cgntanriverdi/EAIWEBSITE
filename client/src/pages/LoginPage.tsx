import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
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
        <div className="w-full max-w-md mx-auto">
          
          {/* Centered login card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10">
              {/* Logo */}
              <Link href="/">
                <div className="flex items-center justify-center gap-3 cursor-pointer group mb-8" data-testid="link-home-logo">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-all">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">AI Commerce Studio</span>
                </div>
              </Link>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center" data-testid="text-login-title">
                Welcome back
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Sign in to your account to continue
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white text-gray-900"
                    data-testid="input-email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </Label>
                    <Link href="/forgot-password">
                      <span className="text-sm text-indigo-600 hover:text-indigo-700 cursor-pointer" data-testid="link-forgot-password">
                        Forgot password?
                      </span>
                    </Link>
                  </div>
                  <div className="relative h-9">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full bg-white text-gray-900 pr-10 h-9"
                      data-testid="input-password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors w-5 h-5 flex items-center justify-center focus:outline-none"
                      data-testid="button-toggle-password"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  data-testid="button-sign-in"
                >
                  Sign in
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

                {/* Google sign in */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-gray-700 font-medium py-3 rounded-lg transition-all shadow-sm hover:shadow-md"
                  onClick={() => console.log("Sign in with Google clicked")}
                  data-testid="button-google-signin"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Sign in with Google
                </Button>
              </form>

              {/* Sign up link */}
              <div className="mt-8 text-center">
                <span className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/signup">
                    <span className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer" data-testid="link-sign-up">
                      Sign up
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </motion.div>

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
