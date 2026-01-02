import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckSquare, 
  Type, 
  Languages, 
  ToggleRight, 
  GitMerge, 
  BookOpen, 
  Timer, 
  Palette, 
  Share, 
  BarChart3 
} from 'lucide-react';

// Hook for detecting when element is in viewport
function useOnScreen(options: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold, root, rootMargin } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
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

const FeatureCard = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2, rootMargin: '-50px' });
  const delay = index * 100; // Stagger effect

  return (
    <div 
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={`relative p-6 rounded-2xl bg-white/5 border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group hover:scale-[1.02] hover:border-brand-purple/30 hover:shadow-[inset_0_0_30px_rgba(139,92,246,0.15),0_0_30px_rgba(139,92,246,0.1)] overflow-hidden h-full transform ${
            isVisible 
            ? 'opacity-100 translate-y-0 blur-0 scale-100' 
            : 'opacity-0 translate-y-12 blur-sm scale-95'
        }`}
    >
        {/* Internal gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-lg bg-brand-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-purple/30 transition-all duration-300 shrink-0">
                <Icon className="w-6 h-6 text-brand-glow" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
        </div>
    </div>
  );
};

const QuestionTypeItem = ({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2, rootMargin: '-50px' });
  const delay = index * 50; // Faster stagger for list items

  return (
    <div 
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={`group relative flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-brand-blue/30 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden cursor-default h-full transform ${
            isVisible 
            ? 'opacity-100 translate-x-0 blur-0' 
            : 'opacity-0 -translate-x-8 blur-sm'
        }`}
    >
        {/* Internal Gradient Glow - Fades in on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
        
        {/* Icon Container */}
        <div className="relative z-10 w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/20 transition-colors duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Icon className="w-5 h-5 text-brand-blue transition-transform duration-300" />
        </div>
        
        {/* Text Content */}
        <div className="relative z-10">
            <h4 className="font-semibold text-white group-hover:text-brand-blue/90 transition-colors duration-300">{title}</h4>
            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">{desc}</p>
        </div>
    </div>
  );
};

export const Features: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const getAnimClass = () => 
    `transition-all duration-1000 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] transform ${
      isVisible 
        ? 'opacity-100 translate-y-0 blur-0' 
        : 'opacity-0 translate-y-12 blur-sm'
    }`;

  return (
    <section className="py-24 px-6 relative" id="features" ref={ref} aria-labelledby="features-heading">
        {/* Scroll Anchor offset */}
        <div id="how-it-works" className="absolute top-0 left-0 w-full h-24 -mt-24 pointer-events-none opacity-0" />
        
        <div className="max-w-7xl mx-auto space-y-32">
            
            {/* Section 1: Question Types */}
            <article className="grid lg:grid-cols-5 gap-12 items-center" aria-labelledby="question-types-heading">
                <div className={`lg:col-span-2 space-y-6 text-center lg:text-left items-center lg:items-start ${getAnimClass()}`}>
                    <h2 id="question-types-heading" className="text-3xl lg:text-4xl font-bold">
                        Premium-Style <br />
                        <span className="text-brand-glow">Question Types</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Create engaging assessments with diverse question formats that keep students motivated and challenged.
                        No more boring exams. Our platform supports the most comprehensive range of question types in the industry.
                    </p>
                </div>
                <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4" role="list" aria-label="Question types list">
                    <QuestionTypeItem index={0} icon={CheckSquare} title="Multiple Choice" desc="Classic choose-the-correct-answer format with up to 6 options" />
                    <QuestionTypeItem index={1} icon={Type} title="Fill in the Blank" desc="Type the missing word or phrase with auto-grading support" />
                    <QuestionTypeItem index={2} icon={Languages} title="Translation" desc="Arabic ↔ English translation exercises with bidirectional support" />
                    <QuestionTypeItem index={3} icon={ToggleRight} title="True or False" desc="Simple right or wrong statements for quick knowledge checks" />
                    <QuestionTypeItem index={4} icon={GitMerge} title="Matching" desc="Connect items from two tables to test association skills" />
                    <QuestionTypeItem index={5} icon={BookOpen} title="Reading Comp" desc="Paragraph-based questions with comprehension analysis" />
                </div>
            </article>

            {/* Section 2: Teacher Tools */}
            <article className="relative" aria-labelledby="teacher-tools-heading">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-purple/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />
                
                <div className={`text-center max-w-2xl mx-auto mb-16 relative z-10 ${getAnimClass()}`} style={{ transitionDelay: '200ms' }}>
                    <h2 id="teacher-tools-heading" className="text-3xl lg:text-4xl font-bold mb-4">Powerful Teacher Tools</h2>
                    <p className="text-gray-400">Everything you need to create, customize, and track your exams with professional-grade features. Designed by educators for educators.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10" role="list">
                    <FeatureCard
                        index={0}
                        icon={Timer}
                        title="Timer Control"
                        description="Set exam duration and auto-submit to ensure fair testing environments. Prevents cheating and maintains exam integrity."
                    />
                    <FeatureCard
                        index={1}
                        icon={Palette}
                        title="Custom Styling"
                        description="Personalize colors and themes to match your school or subject branding. Create a professional learning environment."
                    />
                    <FeatureCard
                        index={2}
                        icon={Share}
                        title="Easy Sharing"
                        description="Generate shareable exam links that students can access with one click. No downloads or installations required."
                    />
                    <FeatureCard
                        index={3}
                        icon={BarChart3}
                        title="Analytics"
                        description="Track student performance with detailed dashboards and insights. Identify knowledge gaps and improve teaching strategies."
                    />
                </div>
            </article>

        </div>
    </section>
  );
};