import React, { useEffect, useRef, useState } from 'react';
import { PhoneCall, PenTool, Puzzle, HandHeart, Clock } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: PhoneCall,
      title: "Book a call",
      desc: "We begin with a focused conversation to understand your goals, context, and direction.",
    },
    {
      icon: PenTool,
      title: "Design",
      desc: "Ideas are shaped into clear structures and thoughtful visuals, guided by purpose and precision.",
    },
    {
      icon: Puzzle,
      title: "Develop",
      desc: "Designs are translated into reliable, functional experiences with attention to detail.",
    },
    {
      icon: HandHeart,
      title: "Deliver",
      desc: "The final product is refined, tested, and delivered with clarity and readiness.",
    },
    {
      icon: Clock,
      title: "Support",
      desc: "We provide ongoing maintenance, updates, and assistance to ensure long-term success.",
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start filling the line when the top of the container hits the middle of the screen
      const startTrigger = windowHeight * 0.6;
      const totalDistance = rect.height;
      
      const progress = Math.max(0, Math.min(1, (startTrigger - rect.top) / totalDistance));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full py-24 bg-[#fdf2f8] font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-widest text-[#e8a0c5] uppercase mb-3">
            The Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#202020] tracking-tight">
            How we will <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8a0c5] to-[#d870a3]">work together</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e8a0c5] to-[#d870a3] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Vertical Line Background */}
          <div className="absolute left-0 md:left-[23px] lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#f0e6e6] rounded-full"></div>
          
          {/* Animated Vertical Line Fill */}
          <div 
            className="absolute left-0 md:left-[23px] lg:left-1/2 transform lg:-translate-x-1/2 top-0 w-1 bg-gradient-to-b from-[#e8a0c5] to-[#d870a3] rounded-full"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>

          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => {
              const activationPoint = (idx + 0.5) / steps.length;
              const isLit = scrollProgress >= activationPoint;
              const Icon = step.icon;

              return (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-center ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''} group`}>
                  
                  {/* Timeline Dot with Icon */}
                  <div className={`absolute left-0 lg:left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white border-[4px] shadow-sm flex items-center justify-center z-10 transition-all duration-700 ${isLit ? 'border-[#fdf2f8] scale-110' : 'border-white scale-100'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 ${isLit ? 'bg-gradient-to-br from-[#e8a0c5] to-[#d870a3] text-white scale-100' : 'bg-[#f0e6e6] text-[#e8a0c5] scale-90 opacity-50'}`}>
                       <Icon size={20} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full lg:w-1/2 pl-20 lg:pl-0 ${idx % 2 === 0 ? 'lg:pr-20 text-left lg:text-right' : 'lg:pl-20 text-left'}`}>
                    <div className={`bg-white p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(232,160,197,0.15)] transition-all duration-700 relative transform ${isLit ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-30'} hover:-translate-y-1`}>
                      
                      <div className={`flex items-center gap-2 mb-4 text-[#e8a0c5] ${idx % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>
                        <span className="text-sm font-bold tracking-wide uppercase">Phase 0{idx + 1}</span>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-[#202020] mb-4">{step.title}.</h4>

                      <p className="text-[#646464] leading-relaxed text-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
