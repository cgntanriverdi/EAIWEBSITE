import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Products", href: "#features" },
    { label: "Solutions", href: "#workflow" },
    { label: "Developers", href: "#workflow" },
    { label: "Startups", href: "#pricing" },
    { label: "Enterprise", href: "#contact" },
    { label: "Pricing", href: "#pricing" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Clean Logo */}
          <div className="flex items-center gap-3" data-testid="logo">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">AI Commerce Studio</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Navigate to ${item.label}`);
                }}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
              onClick={() => console.log('Sign in clicked')}
              data-testid="button-sign-in"
            >
              SIGN IN
            </Button>
            
            <Button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 rounded-md shadow-sm"
              onClick={() => console.log('Contact sales clicked')}
              data-testid="button-contact-sales-nav"
            >
              Contact sales
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    console.log(`Navigate to ${item.label}`);
                  }}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="border-t border-gray-200 pt-4 pb-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm font-medium mb-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log('Sign in clicked');
                  }}
                  data-testid="mobile-button-sign-in"
                >
                  SIGN IN
                </Button>
                
                <Button
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md shadow-sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log('Contact sales clicked');
                  }}
                  data-testid="mobile-button-contact-sales"
                >
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}