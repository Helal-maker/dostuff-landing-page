import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Logo } from './Logo';
import { 
  Menu, 
  Home, 
  Sparkles, 
  Layers, 
  X,
  CircleDollarSign,
  ArrowRight
} from 'lucide-react';

interface NavItem {
  label: string;
  id: string; // Changed from href to id for internal routing logic
  icon: any;
}

const links: NavItem[] = [
  { label: 'Home', id: 'home', icon: Home },
  { label: 'How it Works', id: 'how-it-works', icon: Sparkles },
  { label: 'Features', id: 'features', icon: Layers },
  { label: 'Pricing', id: 'pricing', icon: CircleDollarSign },
];

interface PremiumNavLinkProps {
  item: NavItem;
  onClick: (id: string) => void;
}

const PremiumNavLink: React.FC<PremiumNavLinkProps> = ({ item, onClick }) => (
  <button 
    onClick={() => onClick(item.id)}
    className="group relative flex items-center justify-center px-1 lg:px-2 py-2 cursor-pointer"
    aria-label={`Navigate to ${item.label}`}
  >
    <div className="flex items-center gap-2 lg:gap-3 px-2 lg:px-3 py-1.5 lg:py-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-transparent hover:bg-white/5 border border-transparent hover:border-white/5">
      {/* Icon */}
      <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 group-hover:text-white transition-colors duration-500 relative z-10" aria-hidden="true" />
      
      {/* Text Label - Always Visible */}
      <span className="text-xs lg:text-sm font-medium text-gray-300 group-hover:text-white whitespace-nowrap transition-colors duration-500 relative z-10">{item.label}</span>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-brand-purple/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  </button>
);

interface NavbarProps {
    onGetStarted: () => void;
    onNavClick: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGetStarted, onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none" role="navigation" aria-label="Main navigation">
        <div className="pointer-events-auto flex items-center justify-between gap-2 md:gap-4 lg:gap-8 bg-black/20 backdrop-blur-xl border border-white/5 rounded-full py-2 md:py-2.5 px-3 md:px-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full max-w-5xl transition-all duration-700 hover:bg-black/30 hover:border-white/10 hover:shadow-[0_10px_40px_rgba(139,92,246,0.1)]" itemscope itemtype="https://schema.org/SiteNavigationElement">
          
          {/* Brand Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="group px-1 md:px-2 transition-opacity hover:opacity-80" aria-label="Do Stuff - Home" itemprop="url">
             <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0 lg:gap-1" role="menubar">
            {links.map((link) => (
              <PremiumNavLink key={link.label} item={link} onClick={handleNavClick} />
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 pl-2 lg:pl-4 border-l border-white/5">
            <button
                onClick={onGetStarted}
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
                aria-label="Get Started - Create your first exam"
            >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="relative flex items-center gap-2 h-full w-full cursor-pointer rounded-full bg-black px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-gray-900">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-black/90 backdrop-blur-2xl transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center gap-3">
                  <Logo />
               </div>
               <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                  <span className="ml-2 text-sm font-medium">Close</span>
                  <span className="sr-only">Close menu</span>
               </button>
            </div>

            <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <button 
                    key={link.label} 
                    onClick={() => handleNavClick(link.id)}
                    className="flex items-center gap-4 text-xl text-gray-300 hover:text-white font-medium group text-left"
                  >
                    <link.icon className="w-6 h-6 text-brand-purple group-hover:text-brand-glow transition-colors" />
                    {link.label}
                  </button>
                ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
                <Button 
                    variant="primary" 
                    glow 
                    className="w-full justify-center text-lg py-4"
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        onGetStarted();
                    }}
                >
                    Get Started
                </Button>
            </div>
         </div>
      </div>
    </>
  );
};