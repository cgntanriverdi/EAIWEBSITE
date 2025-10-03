import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Image, FileText, DollarSign, Upload, BookOpen, HeadphonesIcon, CreditCard, Zap, Star, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigationRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navigationRef.current && !navigationRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const simpleNavItems = [
    // Removed Solutions, Developers, and Enterprise as requested
  ];

  const dropdownItems = {
    products: {
      agents: [
        {
          icon: Image,
          title: "Image Generation Agent",
          description: "AI-powered product photography and visual content creation",
          href: "/agents/image-generation"
        },
        {
          icon: FileText,
          title: "Description Agent",
          description: "Compelling product descriptions optimized for conversion",
          href: "/agents/description"
        },
        {
          icon: DollarSign,
          title: "Pricing Agent",
          description: "Intelligent pricing optimization based on market data",
          href: "/agents/pricing"
        },
        {
          icon: Upload,
          title: "Publishing Agent",
          description: "Automated listing distribution across multiple platforms",
          href: "/agents/publishing"
        }
      ],
// Removed platform section as requested
    },
    pricing: {
      plans: [
        {
          icon: Zap,
          title: "Basic Plan",
          description: "Perfect for small businesses starting with AI commerce",
          href: "#basic-plan"
        },
        {
          icon: Star,
          title: "Pro Plan",
          description: "Advanced features for growing e-commerce businesses",
          href: "#pro-plan"
        },
        {
          icon: CreditCard,
          title: "Enterprise",
          description: "Custom solutions for large-scale operations",
          href: "#enterprise-plan"
        }
      ],
      features: [
        {
          icon: Image,
          title: "Usage & Billing",
          description: "Flexible pricing based on your usage patterns",
          href: "#billing"
        },
        {
          icon: HeadphonesIcon,
          title: "Support Tiers",
          description: "Different levels of support for each plan",
          href: "#support"
        }
      ]
    },
    resources: {
      learn: [
        {
          icon: BookOpen,
          title: "Documentation",
          description: "Complete guides and API references",
          href: "/resources/documentation"
        },
        {
          icon: FileText,
          title: "Use Cases",
          description: "Real-world examples and success stories",
          href: "/resources/use-cases"
        },
        {
          icon: Zap,
          title: "Best Practices",
          description: "Optimize your AI commerce workflows",
          href: "/resources/best-practices"
        }
      ],
      support: [
        {
          icon: HeadphonesIcon,
          title: "Customer Support",
          description: "Get help from our expert team",
          href: "/resources/support"
        },
// Removed API Status and Community as requested
      ]
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" data-testid="navigation" ref={navigationRef}>
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
            {/* Products Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => handleDropdownClick('products')}
                aria-expanded={activeDropdown === 'products'}
                aria-controls="products-dropdown"
                data-testid="nav-link-products"
              >
                Products
                <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'products' && (
                <div id="products-dropdown" className="absolute top-full left-0 mt-2 w-[400px] bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 p-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">AI Agents</h3>
                    <div className="space-y-3">
                      {dropdownItems.products.agents.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={() => {
                              setActiveDropdown(null);
                              console.log(`Navigate to ${item.title}`);
                            }}
                          >
                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                              <IconComponent className="w-4 h-4 text-indigo-600" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{item.title}</div>
                              <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              data-testid="nav-link-pricing"
            >
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => handleDropdownClick('resources')}
                aria-expanded={activeDropdown === 'resources'}
                aria-controls="resources-dropdown"
                data-testid="nav-link-resources"
              >
                Resources
                <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div id="resources-dropdown" className="absolute top-full left-0 mt-2 w-[500px] bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 p-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">Learn</h3>
                      <div className="space-y-3">
                        {dropdownItems.resources.learn.map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <Link
                              key={index}
                              href={item.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                              onClick={() => {
                                setActiveDropdown(null);
                                console.log(`Navigate to ${item.title}`);
                              }}
                            >
                              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                                <IconComponent className="w-4 h-4 text-indigo-600" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
                      <div className="space-y-3">
                        <Link
                          href="/resources/support"
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => {
                            setActiveDropdown(null);
                            console.log('Navigate to Customer Support');
                          }}
                        >
                          <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                            <HeadphonesIcon className="w-4 h-4 text-indigo-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Customer Support</div>
                            <div className="text-xs text-gray-500 mt-1">Get help from our expert team</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple Navigation Items - Removed as requested */}
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
              {/* Mobile Products Section */}
              <div className="border-b border-gray-100 pb-3 mb-3">
                <div className="text-sm font-semibold text-gray-900 px-3 py-2">Products</div>
                <div className="text-xs font-medium text-gray-500 px-3 py-1">AI Agents</div>
                {dropdownItems.products.agents.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        console.log(`Navigate to ${item.title}`);
                      }}
                      data-testid={`mobile-nav-link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <IconComponent className="w-4 h-4 text-indigo-600" />
                      {item.title}
                    </Link>
                  );
                })}
                {/* Platform section removed */}
              </div>

              {/* Mobile Pricing Link */}
              <div className="border-b border-gray-100 pb-3 mb-3">
                <Link
                  href="/pricing"
                  className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log('Navigate to Pricing page');
                  }}
                  data-testid="mobile-nav-link-pricing"
                >
                  Pricing
                </Link>
              </div>

              {/* Mobile Resources Section */}
              <div className="border-b border-gray-100 pb-3 mb-3">
                <div className="text-sm font-semibold text-gray-900 px-3 py-2">Resources</div>
                <div className="text-xs font-medium text-gray-500 px-3 py-1">Learn</div>
                {dropdownItems.resources.learn.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        console.log(`Navigate to ${item.title}`);
                      }}
                      data-testid={`mobile-nav-link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <IconComponent className="w-4 h-4 text-indigo-600" />
                      {item.title}
                    </Link>
                  );
                })}
                <div className="text-xs font-medium text-gray-500 px-3 py-1 mt-2">Support</div>
                <Link
                  href="/resources/support"
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log('Navigate to Customer Support');
                  }}
                  data-testid="mobile-nav-link-customer-support"
                >
                  <HeadphonesIcon className="w-4 h-4 text-indigo-600" />
                  Customer Support
                </Link>
              </div>

              {/* Simple Navigation Items - Removed as requested */}
              
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