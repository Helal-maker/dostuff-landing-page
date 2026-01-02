import React, { useState, useEffect } from 'react';
import { Apple, Smartphone, ArrowLeft, CheckCircle2, Loader2, User, BookOpen, Bell, Wifi, Battery, Signal, Globe, Laptop, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { Helmet } from 'react-helmet-async';

const MockupScreen = ({ type }: { type: 'ios' | 'android' | 'web' }) => {
    return (
        <div className="w-full h-full bg-[#0A0A0A] overflow-hidden flex flex-col relative">
            {/* Status Bar / Browser Bar */}
            {type === 'web' ? (
                <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/20" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                    <div className="w-2 h-2 rounded-full bg-green-500/20" />
                    {/* Domain link removed as per request */}
                    <div className="ml-2 flex-1 h-3 bg-white/5 rounded text-[8px] flex items-center px-2 text-gray-600"></div>
                </div>
            ) : (
                <div className="flex justify-between items-center px-4 pt-3 pb-2">
                    <span className="text-[10px] font-medium text-gray-400">9:41</span>
                    <div className="flex items-center gap-1">
                        <Signal className="w-2.5 h-2.5 text-gray-400" />
                        <Wifi className="w-2.5 h-2.5 text-gray-400" />
                        <Battery className="w-2.5 h-2.5 text-gray-400" />
                    </div>
                </div>
            )}

            {/* App Content */}
            <div className="flex-1 p-4 relative">
                 {/* Header */}
                 <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full p-0.5 ${type === 'ios' ? 'bg-gradient-to-tr from-brand-purple to-blue-500' : type === 'android' ? 'bg-gradient-to-tr from-brand-blue to-teal-500' : 'bg-gradient-to-tr from-white/20 to-white/5'}`}>
                            <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-white"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[8px] text-gray-500 uppercase tracking-wider">Welcome</div>
                            <div className="text-xs font-bold text-white">Alex Doe</div>
                        </div>
                    </div>
                </div>

                {/* Main Card */}
                <div className={`rounded-xl p-4 mb-4 border border-white/5 ${type === 'ios' ? 'bg-brand-purple/10' : type === 'android' ? 'bg-brand-blue/10' : 'bg-white/5'}`}>
                    <div className="text-[10px] text-gray-400 mb-1">Current Progress</div>
                    <div className="flex items-end gap-2 mb-2">
                         <span className="text-2xl font-bold text-white">85%</span>
                         <span className="text-[10px] text-green-400 mb-1">↑ 12%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full w-[85%] ${type === 'ios' ? 'bg-brand-purple' : type === 'android' ? 'bg-brand-blue' : 'bg-white'}`} />
                    </div>
                </div>

                {/* List Items */}
                <div className={`space-y-2 ${type === 'web' ? 'grid grid-cols-2 gap-4 space-y-0' : ''}`}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={`flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 ${type === 'web' && i === 3 ? 'hidden' : ''}`}>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i===1 ? 'bg-orange-500/10 text-orange-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                <BookOpen className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                                <div className="h-1.5 w-16 bg-gray-700 rounded-full mb-1" />
                                <div className="h-1 w-10 bg-gray-800 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Floating Action Button (Android only) */}
                {type === 'android' && (
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-brand-blue text-black flex items-center justify-center shadow-lg shadow-blue-900/20">
                        <div className="w-4 h-4 text-xl leading-none">+</div>
                        <span className="sr-only">Add new exam</span>
                    </div>
                )}
            </div>
            
             {/* Bottom Nav / Dock */}
             <div className="h-12 border-t border-white/5 bg-black/50 backdrop-blur flex items-center justify-around px-2">
                {[1,2,3,4].map(i => (
                    <div key={i} className={`w-8 h-1 rounded-full ${i===1 ? (type === 'ios' ? 'bg-brand-purple' : type === 'android' ? 'bg-brand-blue' : 'bg-white') : 'bg-white/10'}`} />
                ))}
             </div>
        </div>
    );
}

const PlatformCard = ({ 
    type, 
    icon: Icon, 
    title, 
    subtitle, 
    delay,
    className = ""
}: { 
    type: 'ios' | 'android' | 'web'; 
    icon: any; 
    title: string; 
    subtitle: string; 
    delay: number;
    className?: string;
}) => {
    return (
        <div 
            className={`group relative h-[450px] rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-black border border-white/10 hover:border-white/20 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col pt-8 animate-fade-in ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Glow */}
            <div className={`absolute top-0 right-0 w-[300px] h-[300px] blur-[100px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700 ${
                type === 'ios' ? 'bg-brand-purple/40' : type === 'android' ? 'bg-brand-blue/40' : 'bg-white/20'
            }`} />

            <div className="text-center px-6 relative z-10 mb-8">
                <h3 className="text-2xl font-bold mb-1 flex items-center justify-center gap-2 text-white">
                    <Icon className="w-6 h-6" /> {title}
                </h3>
                <p className="text-sm text-gray-500">{subtitle}</p>
            </div>

            {/* Device Mockup Container */}
            <div className="flex-1 relative flex justify-center perspective-1000">
                <div className={`relative transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 group-hover:-translate-y-2 ${
                    type === 'web' 
                    ? 'w-[95%] h-full rounded-t-xl border-t border-x border-white/10 bg-[#050505] shadow-2xl'
                    : 'w-[240px] h-full rounded-t-[2.5rem] border-t-8 border-x-8 border-gray-900 bg-gray-900 shadow-2xl'
                }`}>
                    {/* Screen */}
                    <div className={`w-full h-full overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity ${
                        type === 'web' ? 'rounded-t-lg' : 'rounded-t-[2rem]'
                    }`}>
                        <MockupScreen type={type} />
                    </div>

                    {/* Notch/Camera */}
                    {type === 'ios' && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-xl z-20" />
                    )}
                    {type === 'android' && (
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rounded-full z-20" />
                    )}
                </div>
            </div>

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <div className="px-6 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white font-medium tracking-wide scale-90 group-hover:scale-100 transition-transform">
                    Coming Soon
                </div>
            </div>
        </div>
    )
}

export const DownloadPage = ({ onBack }: { onBack: () => void }) => {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNotify = async (e: React.FormEvent) => {
      e.preventDefault();
      if(!email) return;
      setStatus('loading');
      
      try {
        const response = await fetch("https://formspree.io/f/xaqyrnll", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            setStatus('success');
            setEmail('');
        } else {
            setStatus('idle');
            // Allow retry silently or log error
            console.error("Failed to submit form");
        }
      } catch (error) {
          setStatus('idle');
          console.error("Error submitting form:", error);
      }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 relative overflow-hidden flex flex-col items-center w-full">
        <Helmet>
          <title>Download Mobile Exam App - Best Online Assessment Platform</title>
          <meta name="description" content="Download the Do Stuff app. The best online assessment platform and exam software online for iOS and Android." />
          <meta name="keywords" content="online assessment platform, exam software online, online exam app, mobile exam platform, exam website, exam testing" />
          <link rel="canonical" href="https://dostuff.com/download" />
        </Helmet>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className={`max-w-7xl w-full mx-auto relative z-10 transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            <button 
                onClick={onBack}
                className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-full hover:bg-white/5"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Home</span>
            </button>

            <div className="text-center mb-16 px-4">
                {/* SEO H1 */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                    Take your <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-glow to-brand-blue">Online Assessment</span> <br/>
                    Anywhere.
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Access your <strong>online exams</strong> and analytics seamlessly across all your devices. Native apps for performance, web for convenience.
                </p>
            </div>

            {/* Platform Availability Section */}
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Choose Your Platform</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Download our mobile apps or access the full web experience. All platforms sync seamlessly.
                </p>
            </div>

            {/* Adjusted Grid Layout: 2 Columns on MD+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-2">
                <PlatformCard 
                    type="ios"
                    icon={Apple}
                    title="iOS"
                    subtitle="iPhone & iPad"
                    delay={100}
                />
                <PlatformCard 
                    type="android"
                    icon={Smartphone}
                    title="Android"
                    subtitle="Phones & Tablets"
                    delay={200}
                />
                {/* Web card spans 2 columns on medium screens and up to look wider */}
                <PlatformCard 
                    type="web"
                    icon={Laptop}
                    title="Web"
                    subtitle="Browser Dashboard"
                    delay={300}
                    className="md:col-span-2"
                />
            </div>

            {/* Newsletter - Changed to Email */}
            <div className="mt-24 text-center max-w-md mx-auto px-4">
                 <p className="text-xs text-gray-500 mb-4 uppercase tracking-[0.2em] font-bold">Get notified when we launch</p>
                 
                 {status === 'success' ? (
                     <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center gap-2 animate-fade-in">
                         <CheckCircle2 className="w-5 h-5" />
                         <span>You're on the list!</span>
                     </div>
                 ) : (
                    <form onSubmit={handleNotify} className="flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/10 focus-within:border-brand-purple/50 focus-within:bg-white/10 transition-all">
                        <Mail className="w-5 h-5 text-gray-500 ml-3" />
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address" 
                            className="flex-1 bg-transparent px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none min-w-0"
                            disabled={status === 'loading'}
                        />
                        <Button 
                            type="submit" 
                            variant="primary" 
                            glow 
                            className="!py-2.5 !px-6 whitespace-nowrap min-w-[100px]"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Notify Me'}
                        </Button>
                    </form>
                 )}
            </div>
        </div>
    </div>
  );
};