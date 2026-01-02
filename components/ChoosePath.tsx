import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { UserCog, Users, ArrowRight, CheckCircle2, HelpCircle, PenTool, BarChart3, GraduationCap, Trophy, Star, Layout, Clock, Calendar } from 'lucide-react';

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

const BackgroundThumbnail = ({ type }: { type: 'Teacher' | 'Student' }) => {
    if (type === 'Teacher') {
        return (
            <div className="absolute -right-10 -bottom-6 opacity-20 hover:opacity-30 transition-opacity duration-700 pointer-events-none select-none overflow-hidden mix-blend-screen">
                <div className="relative w-[380px] h-[340px] transform rotate-[-6deg] translate-x-10 translate-y-10">
                     {/* Main Dashboard Panel */}
                     <div className="w-full h-full bg-[#151515] rounded-tl-2xl border-t border-l border-white/20 p-5 flex flex-col gap-4 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                         
                         {/* Header */}
                         <div className="flex items-center justify-between pb-4 border-b border-white/5">
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center border border-brand-purple/30">
                                     <Layout className="w-5 h-5 text-brand-glow" />
                                 </div>
                                 <div className="space-y-1.5">
                                     <div className="w-24 h-2 bg-white/30 rounded-full" />
                                     <div className="w-16 h-1.5 bg-white/10 rounded-full" />
                                 </div>
                             </div>
                             <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold">ACTIVE</div>
                         </div>

                         {/* Analytics Grid */}
                         <div className="grid grid-cols-2 gap-3">
                             <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                 <div className="text-[10px] text-gray-400 mb-1">Avg. Score</div>
                                 <div className="text-xl font-bold text-white">84%</div>
                             </div>
                             <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                 <div className="text-[10px] text-gray-400 mb-1">Completion</div>
                                 <div className="text-xl font-bold text-white">92%</div>
                             </div>
                         </div>

                         {/* Chart Section */}
                         <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-4 relative overflow-hidden flex flex-col">
                             <div className="flex justify-between items-center mb-4">
                                 <div className="w-20 h-2 bg-white/20 rounded-full" />
                                 <BarChart3 className="w-4 h-4 text-gray-600" />
                             </div>
                             <div className="flex-1 flex items-end gap-2 px-1">
                                 {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                     <div key={i} className="flex-1 relative group/bar">
                                         <div 
                                            className="w-full bg-brand-purple/40 rounded-t-sm transition-all duration-1000 group-hover/bar:bg-brand-glow"
                                            style={{ height: `${h}%` }}
                                         />
                                     </div>
                                 ))}
                             </div>
                         </div>
                     </div>

                     {/* Floating "New Exam" Button Decoration */}
                     <div className="absolute -left-6 top-20 bg-[#1a1a1a] border border-white/20 p-3 rounded-xl shadow-xl flex items-center gap-3 transform -rotate-3" role="img" aria-label="Create new exam button">
                         <div className="w-8 h-8 rounded-full bg-brand-glow flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-purple/50" aria-hidden="true">+</div>
                         <div className="space-y-1 pr-2">
                             <div className="w-16 h-2 bg-white/40 rounded-full" />
                             <div className="w-10 h-1.5 bg-white/10 rounded-full" />
                         </div>
                     </div>
                </div>
            </div>
        );
    }

    // Student Thumbnail
    return (
        <div className="absolute -right-10 -bottom-6 opacity-20 hover:opacity-30 transition-opacity duration-700 pointer-events-none select-none overflow-hidden mix-blend-screen">
             <div className="relative w-[360px] h-[400px] transform rotate-[-6deg] translate-x-12 translate-y-12">
                 
                 {/* Main Exam Interface Panel */}
                 <div className="w-full h-full bg-[#151515] rounded-tl-2xl border-t border-l border-white/20 p-6 flex flex-col gap-5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                     
                     {/* Timer & Progress */}
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-brand-blue">
                            <Clock className="w-4 h-4" />
                            <span className="font-mono text-sm font-bold">14:20</span>
                        </div>
                        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[60%] h-full bg-brand-blue rounded-full" />
                        </div>
                     </div>

                     {/* Question Card */}
                     <div className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 space-y-3 shadow-inner">
                         <div className="w-full h-3 bg-white/30 rounded-full" />
                         <div className="w-5/6 h-3 bg-white/20 rounded-full" />
                         <div className="w-4/6 h-3 bg-white/20 rounded-full" />
                     </div>

                     {/* Answer Options */}
                     <div className="space-y-3">
                         {[1, 2, 3].map((i) => (
                             <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                                 i === 2 
                                 ? 'bg-brand-blue/20 border-brand-blue/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                                 : 'bg-white/5 border-white/10'
                             }`}>
                                 <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                     i === 2 ? 'border-brand-blue bg-brand-blue' : 'border-white/30'
                                 }`}>
                                     {i === 2 && <div className="w-2 h-2 bg-white rounded-full" />}
                                 </div>
                                 <div className={`h-2 rounded-full ${i===2 ? 'w-24 bg-white' : 'w-32 bg-white/10'}`} />
                             </div>
                         ))}
                     </div>
                 </div>

                 {/* Floating Grade Badge */}
                 <div className="absolute -left-2 top-1/3 bg-black border border-brand-blue/50 p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(59,130,246,0.5)] transform -rotate-12 flex flex-col items-center">
                     <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-brand-blue">A+</div>
                     <div className="flex gap-1 mt-1">
                         <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                         <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                         <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                     </div>
                 </div>
             </div>
        </div>
    );
}

const PathCard = ({ 
    type, 
    title, 
    description, 
    features, 
    buttonText, 
    isPrimary,
    index,
    onNavigate
}: { 
    type: 'Teacher' | 'Student';
    title: string; 
    description: string; 
    features: string[]; 
    buttonText: string; 
    isPrimary?: boolean;
    index: number;
    onNavigate: (id: string) => void;
}) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.15, rootMargin: '-50px' });
    const delay = index * 200;

    return (
        <div 
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`group relative p-8 rounded-3xl border flex flex-col h-full overflow-hidden transform transition-all duration-1000 ease-[cubic-bezier(0.17,0.55,0.55,1)] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] ${
                isVisible 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-16 blur-sm'
            } ${isPrimary ? 'bg-white/10 border-brand-purple/50 shadow-[0_0_40px_rgba(139,92,246,0.15)]' : 'bg-black/40 border-white/10'}`}
        >
            
            {/* Background Visual Thumbnail */}
            <BackgroundThumbnail type={type} />
            
            <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-700 ease-out delay-300 ${isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 -rotate-12'} ${isPrimary ? 'bg-brand-purple text-white' : 'bg-white/10 text-gray-300'}`}>
                    {type === 'Teacher' ? <UserCog className="w-8 h-8" /> : <Users className="w-8 h-8" />}
                </div>

                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed relative z-10">{description}</p>

                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                    {features.map((feature, idx) => (
                        <li 
                            key={idx} 
                            className="flex items-start gap-3 text-sm text-gray-300 transition-all duration-500"
                            style={{ 
                                transitionDelay: `${delay + (idx * 100) + 300}ms`,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)'
                            }}
                        >
                            <CheckCircle2 className={`w-5 h-5 shrink-0 ${isPrimary ? 'text-brand-glow' : 'text-gray-500'}`} />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className={`mt-auto space-y-3 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} relative z-10`}>
                    <Button 
                        variant={isPrimary ? 'primary' : 'secondary'} 
                        glow={isPrimary} 
                        className="w-full"
                        onClick={() => onNavigate('download')}
                    >
                        <span>{buttonText}</span>
                        {isPrimary && <ArrowRight className="w-4 h-4" />}
                    </Button>
                </div>
            </div>
        </div>
    );
}

interface ChoosePathProps {
    onNavigate: (id: string) => void;
}

export const ChoosePath: React.FC<ChoosePathProps> = ({ onNavigate }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="pricing" className="py-24 px-6 relative bg-gradient-to-b from-transparent to-black/80" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-sm'}`}>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Choose Your Path</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Whether you're creating exams or taking them, we've got you covered with specialized workflows.
            </p>
            <button 
                onClick={() => onNavigate('how-it-works')} 
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-purple/30 text-gray-300 hover:text-white transition-all group"
                aria-label="Learn how Do Stuff works"
            >
                <HelpCircle className="w-4 h-4 text-brand-purple" aria-hidden="true" />
                <span className="text-sm font-medium">New here? Learn how Do Stuff works</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-gray-500 group-hover:text-white" aria-hidden="true" />
            </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <PathCard 
                index={0}
                type="Teacher"
                title="For Teachers"
                description="Create engaging, customizable exams with powerful analytics to track student progress."
                features={[
                    "Create diverse question types",
                    "Customize exam appearance",
                    "Set timers and attempt limits",
                    "Track detailed analytics",
                    "Share with one-click links"
                ]}
                buttonText="Start Creating Exams"
                isPrimary={true}
                onNavigate={onNavigate}
            />
            
            <PathCard 
                index={1}
                type="Student"
                title="For Students"
                description="Take engaging exams and track your progress with instant feedback and detailed results."
                features={[
                    "Join exams with simple links",
                    "Interactive question formats",
                    "Instant result feedback",
                    "Progress tracking dashboard",
                    "Detailed exam history"
                ]}
                buttonText="Start Taking Exams"
                isPrimary={false}
                onNavigate={onNavigate}
            />
        </div>
      </div>
    </section>
  );
};