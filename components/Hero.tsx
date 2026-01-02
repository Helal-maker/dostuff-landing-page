import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { OrbitalVisual } from './OrbitalVisual';
import { ArrowRight, Layout, Share2, Activity } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ContentOptimization } from './ContentOptimization';

// Hook for detecting when element is in viewport
function useOnScreen(options: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold, root, rootMargin } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Toggle visibility based on intersection status to allow re-animation on scroll up/down
      setIsVisible(entry.isIntersecting);
    }, { threshold, root, rootMargin });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin]);

  return [ref, isVisible] as const;
}

interface HeroProps {
    onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const [heroRef, isVisible] = useOnScreen({ threshold: 0.1 });
  const [forceShow, setForceShow] = useState(false);

  // Safety fallback: Ensure hero is visible after mount even if observer lags
  useEffect(() => {
    const timer = setTimeout(() => setForceShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const shouldShow = isVisible || forceShow;

  const getAnimClass = (delay: number) => 
    `transition-all duration-1000 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] transform ${
      shouldShow 
        ? 'opacity-100 translate-y-0 blur-0' 
        : 'opacity-0 translate-y-12 blur-sm'
    }`;

  const getOrbitalAnimClass = () =>
    `transition-all duration-[1200ms] ease-out transform ${
      shouldShow
        ? 'opacity-100 scale-100 blur-0'
        : 'opacity-0 scale-90 blur-xl'
    }`;

  const FeaturePill = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm whitespace-nowrap">
      <Icon className="w-3 h-3 md:w-4 md:h-4 text-brand-glow" />
      <span className="text-xs md:text-sm text-gray-300">{text}</span>
    </div>
  );

  return (
    <section id="home" ref={heroRef} className="relative min-h-[90vh] w-full flex flex-col justify-center px-6 pt-32 pb-10 overflow-hidden">
      <Helmet>
        <title>Do Stuff - The Ultimate Online Exam Platform & Quiz Builder</title>
        <meta name="description" content="Create professional online exams and quizzes with multiple question types, timers, and analytics. Make a test in minutes. No downloads required." />
        <meta name="keywords" content="online exam platform, quiz builder online, make a test, test maker, online assessment platform, exam software, educational technology, teacher tools, student assessments" />
        <meta name="author" content="Do Stuff Team" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://dostuff.com/" />
        <meta name="theme-color" content="#0B0B15" />
        
        {/* Enhanced Meta Tags */}
        <meta property="og:title" content="Do Stuff - The Ultimate Online Exam Platform" />
        <meta property="og:description" content="Professional online exam platform for teachers and students. Create engaging assessments with multiple question types." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dostuff.com/" />
        <meta property="og:image" content="https://dostuff.com/logo.png" />
        <meta property="og:site_name" content="Do Stuff" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Do Stuff - The Ultimate Online Exam Platform" />
        <meta name="twitter:description" content="Professional online exam platform for teachers and students." />
        <meta name="twitter:image" content="https://dostuff.com/logo.png" />
      </Helmet>

      {/* Background Mesh Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-purple/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand-blue/20 rounded-full blur-[90px] md:blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <ContentOptimization contentType="hero" keywords={['online exam platform', 'quiz builder', 'make a test', 'test maker', 'online assessment']}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 relative items-center">
            
            {/* Left Column: Text Content */}
            <div className="flex flex-col justify-center gap-6 relative z-20 text-center lg:text-left items-center lg:items-start">
            
            {/* Title - SEO Optimized H1 */}
            <div className={getAnimClass(0)} style={{ transitionDelay: shouldShow ? '100ms' : '0ms' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                The Ultimate <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Online Exam Platform</span> <br/>
                & Quiz Builder.
              </h1>
            </div>
            
            {/* Subtext - Keyword Rich */}
            <div className={getAnimClass(0)} style={{ transitionDelay: shouldShow ? '200ms' : '0ms' }}>
              <p className="text-base sm:text-lg text-gray-400 max-w-lg font-light leading-relaxed mx-auto lg:mx-0">
                Need to <strong>make a test</strong>? Our professional <strong>test makers</strong> allow you to create <strong>online exams</strong> with diverse question types in minutes.
              </p>
            </div>

            {/* Buttons */}
            <div className={`${getAnimClass(0)} flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto`} style={{ transitionDelay: shouldShow ? '300ms' : '0ms' }}>
              <div className="w-full sm:w-auto">
                <Button 
                    variant="primary" 
                    glow 
                    className="!px-8 !py-3.5 !rounded-full group w-full sm:w-auto"
                    onClick={onGetStarted}
                    aria-label="Start creating exams as a teacher"
                >
                  <span>Start as Teacher</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="w-full sm:w-auto">
                <Button 
                    variant="secondary" 
                    className="!px-8 !py-3.5 !rounded-full w-full sm:w-auto"
                    onClick={onGetStarted}
                    aria-label="Join as a student to take exams"
                >
                  <span>Join as Student</span>
                </Button>
              </div>
            </div>

            {/* Feature Pills */}
            <div className={`${getAnimClass(0)} flex flex-wrap justify-center lg:justify-start gap-3 mt-8`} style={{ transitionDelay: shouldShow ? '400ms' : '0ms' }}>
              <FeaturePill icon={Layout} text="Test Makers" />
              <FeaturePill icon={Share2} text="Easy Sharing" />
              <FeaturePill icon={Activity} text="Real-time Results" />
            </div>

          </div>

          {/* Right Column: Visual - Hidden on mobile, visible on tablet (md) and up */}
          <div className="hidden md:flex relative items-center justify-center lg:justify-end min-h-[500px]">
             <div
               className={`origin-center lg:origin-right w-full h-full flex items-center justify-center ${getOrbitalAnimClass()}`}
               style={{ transitionDelay: shouldShow ? '200ms' : '0ms' }}
             >
               <div className="scale-[0.8] lg:scale-100">
                  <OrbitalVisual />
               </div>
             </div>
          </div>
        </div>
        </ContentOptimization>
      </div>
    </section>
  );
};