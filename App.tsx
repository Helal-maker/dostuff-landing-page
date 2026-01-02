import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ChoosePath } from './components/ChoosePath';
import { Footer } from './components/Footer';
import { DownloadPage } from './components/DownloadPage';
import { HowItWorks } from './components/HowItWorks';
import { PricingPage } from './components/PricingPage';
import { PrivacyPolicy, TermsOfService, Support, ContactUs } from './components/LegalPages';
import { StructuredData } from './components/StructuredData';
import { PerformanceOptimization } from './components/PerformanceOptimization';
import { Analytics } from './components/Analytics';
import { SEOValidator } from './components/SEOValidator';
import { HelmetProvider } from 'react-helmet-async';

type ViewState = 'home' | 'download' | 'how-it-works' | 'pricing' | 'privacy' | 'terms' | 'support' | 'contact';

export default function App() {
  const [view, setView] = useState<ViewState>('home');

  // Handle scrolling after view change for features
  const scrollToFeatures = () => {
    setTimeout(() => {
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleNavigation = (id: string) => {
      if (id === 'home') {
          setView('home');
          scrollToTop();
      } else if (id === 'features') {
          setView('home');
          scrollToFeatures();
      } else if (id === 'how-it-works') {
          setView('how-it-works');
          scrollToTop();
      } else if (id === 'pricing') {
          setView('pricing');
          scrollToTop();
      } else if (id === 'download') {
          setView('download');
          scrollToTop();
      } else if (id === 'privacy') {
          setView('privacy');
          scrollToTop();
      } else if (id === 'terms') {
          setView('terms');
          scrollToTop();
      } else if (id === 'support') {
          setView('support');
          scrollToTop();
      } else if (id === 'contact') {
          setView('contact');
          scrollToTop();
      }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-purple selection:text-white font-sans overflow-x-hidden">
        {/* Performance Optimization */}
        <PerformanceOptimization />
        
        {/* Analytics */}
        <Analytics
          gaMeasurementId="G-XXXXXXXXXX"
          gtmId="GTM-XXXXXXX"
        />
        
        <Navbar
          onGetStarted={() => {
              setView('download');
              scrollToTop();
          }}
          onNavClick={handleNavigation}
        />
        <main>
          {/* Structured Data for current page */}
          {view === 'home' && <StructuredData pageType="homepage" title="Do Stuff - The Ultimate Online Exam Platform" />}
          {view === 'download' && <StructuredData pageType="product" title="Download - Do Stuff Exam Platform" />}
          {view === 'how-it-works' && <StructuredData pageType="about" title="How It Works - Do Stuff" />}
          {view === 'pricing' && <StructuredData pageType="product" title="Pricing - Do Stuff Exam Platform" />}
          {view === 'privacy' && <StructuredData pageType="legal" title="Privacy Policy - Do Stuff" />}
          {view === 'terms' && <StructuredData pageType="legal" title="Terms of Service - Do Stuff" />}
          {view === 'support' && <StructuredData pageType="about" title="Support - Do Stuff" />}
          {view === 'contact' && <StructuredData pageType="about" title="Contact Us - Do Stuff" />}

          {view === 'home' && (
              <>
                  <Hero onGetStarted={() => {
                      setView('download');
                      scrollToTop();
                  }} />
                  <Features />
                  <ChoosePath onNavigate={handleNavigation} />
              </>
          )}
          
          {view === 'download' && <DownloadPage onBack={() => handleNavigation('home')} />}
          {view === 'how-it-works' && <HowItWorks onBack={() => handleNavigation('home')} onNavigate={handleNavigation} />}
          {view === 'pricing' && <PricingPage onBack={() => handleNavigation('home')} />}
          
          {view === 'privacy' && <PrivacyPolicy onBack={() => handleNavigation('home')} />}
          {view === 'terms' && <TermsOfService onBack={() => handleNavigation('home')} />}
          {view === 'support' && <Support onBack={() => handleNavigation('home')} />}
          {view === 'contact' && <ContactUs onBack={() => handleNavigation('home')} />}

        </main>
        <Footer onNavigate={handleNavigation} />
        
        {/* Decorative noise texture overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        
        {/* SEO Validator for development */}
        <SEOValidator enabled={process.env.NODE_ENV === 'development'} reportLevel="warning" />
      </div>
    </HelmetProvider>
  );
}