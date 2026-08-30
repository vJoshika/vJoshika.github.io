import { ArrowRight, Download, User } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ffe4e8] via-[#fdf2f8] to-[#fce7f3] font-sans">
      
      {/* Decorative SVG Background Waves - Top Left */}
      <svg className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-40 -translate-x-[20%] -translate-y-[20%]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="#f472b6" strokeWidth="0.2" d="M -50,100 Q 50,20 150,100 T 350,100 M -50,110 Q 50,30 150,110 T 350,110 M -50,120 Q 50,40 150,120 T 350,120 M -50,130 Q 50,50 150,130 T 350,130 M -50,140 Q 50,60 150,140 T 350,140 M -50,150 Q 50,70 150,150 T 350,150" />
        <path fill="none" stroke="#f472b6" strokeWidth="0.2" d="M -50,100 C 0,50 100,50 150,100 C 200,150 300,150 350,100 M -50,110 C 0,60 100,60 150,110 C 200,160 300,160 350,110 M -50,120 C 0,70 100,70 150,120 C 200,170 300,170 350,120 M -50,130 C 0,80 100,80 150,130 C 200,180 300,180 350,130" />
      </svg>

      {/* Decorative SVG Background Waves - Bottom Right */}
      <svg className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-40 translate-x-[20%] translate-y-[20%]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="#f472b6" strokeWidth="0.2" d="M -50,100 C 0,50 100,50 150,100 C 200,150 300,150 350,100 M -50,110 C 0,60 100,60 150,110 C 200,160 300,160 350,110 M -50,120 C 0,70 100,70 150,120 C 200,170 300,170 350,120 M -50,130 C 0,80 100,80 150,130 C 200,180 300,180 350,130" />
      </svg>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[40%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,1)]"></div>
        <div className="absolute top-[80%] left-[45%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,1)]"></div>
        <div className="absolute top-[25%] right-[5%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,1)]"></div>
        <div className="absolute top-[70%] left-[10%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_1px_rgba(255,255,255,1)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-8 items-center h-full pt-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-[#2A2A2A] leading-[1.1] animate-fade-in-up delay-100">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85] pb-2 inline-block">
              Joshika V
            </span>
          </h1>
          
          <div className="text-sm lg:text-base font-semibold text-[#3A3A3A] tracking-wide mt-3 mb-2 animate-fade-in-up delay-200">
            ECE Student | IoT Enthusiast | Aspiring Software Engineer
          </div>
          
          <div className="w-12 h-[2px] bg-[#FF7A9C] mb-6 animate-fade-in-up delay-300"></div>
          
          <p className="text-sm lg:text-[15px] text-[#555] max-w-[450px] leading-relaxed mb-1 animate-fade-in-up delay-400">
            Passionate about building smart, real-world solutions by combining Electronics, Communication and Software.
          </p>
          <p className="text-sm lg:text-[15px] text-[#555] max-w-[450px] leading-relaxed mb-8 animate-fade-in-up delay-500">
            From ideas to impact – I love to code, create and innovate.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up delay-600">
            <a
              href="#project"
              className="px-8 py-3 bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85] text-white font-medium rounded-full hover:shadow-[0_8px_20px_rgba(255,122,156,0.4)] transition-all flex items-center gap-2 text-sm"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-white/40 text-[#2A2A2A] font-medium rounded-full hover:bg-white/80 transition-all flex items-center gap-2 border border-[#FFB6C6] text-sm"
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        </div>
        
        {/* Right Content - Tech Constellation */}
        <div className="relative w-full h-full hidden lg:flex items-center justify-center animate-fade-in-up delay-700">
          
          <div className="relative w-[600px] h-[600px] transform scale-[0.75] xl:scale-90 origin-center">
            
            {/* Constellation Lines and Circles */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0" viewBox="0 0 600 600">
              <g stroke="#f472b6" strokeWidth="1" fill="none">
                {/* Radial lines */}
                <line x1="300" y1="300" x2="160" y2="150" />
                <line x1="300" y1="300" x2="300" y2="110" />
                <line x1="300" y1="300" x2="440" y2="150" />
                <line x1="300" y1="300" x2="490" y2="300" />
                <line x1="300" y1="300" x2="400" y2="450" />
                <line x1="300" y1="300" x2="200" y2="450" />
                <line x1="300" y1="300" x2="110" y2="300" />
              </g>
              {/* Concentric circles */}
              <circle cx="300" cy="300" r="130" fill="none" stroke="#fbcfe8" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="300" cy="300" r="200" fill="none" stroke="#fbcfe8" strokeWidth="1" />
              <circle cx="300" cy="300" r="270" fill="none" stroke="#fbcfe8" strokeWidth="0.5" strokeDasharray="2 4" />
            </svg>

            {/* Central Core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-white rounded-full shadow-[0_0_40px_rgba(255,122,156,0.3)] flex items-center justify-center z-10 animate-fade-in-up delay-800">
              <span className="text-6xl font-bold text-[#FF7A9C] tracking-tighter animate-float-tilt">{"</>"}</span>
            </div>

            {/* Node: Python */}
            <div className="absolute top-[90px] left-[110px] z-10 animate-fade-in-up delay-[850ms]">
              <div className="flex flex-col items-center justify-center p-3 bg-white/90 backdrop-blur-md rounded-[20px] shadow-[0_4px_20px_rgba(255,192,203,0.3)] w-[95px] h-[105px] animate-float-tilt-delayed">
                <img src="https://api.iconify.design/logos:python.svg" alt="Python" className="w-7 h-7 mb-2" />
                <span className="text-[12px] font-medium text-[#444]">Python</span>
              </div>
            </div>

            {/* Node: IoT */}
            <div className="absolute top-[50px] left-[252px] z-10 animate-fade-in-up delay-900">
              <div className="flex flex-col items-center justify-center p-3 bg-white/90 backdrop-blur-md rounded-[20px] shadow-[0_4px_20px_rgba(255,192,203,0.3)] w-[95px] h-[105px] animate-float-tilt">
                <svg className="w-7 h-7 mb-2 text-[#FF7A9C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 20a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/>
                  <path d="M8.5 16.5a5 5 0 017 0" strokeLinecap="round"/>
                  <path d="M5 13a10 10 0 0114 0" strokeLinecap="round"/>
                  <path d="M12 4v4" strokeLinecap="round"/>
                  <path d="M6 6l2 2" strokeLinecap="round"/>
                  <path d="M18 6l-2 2" strokeLinecap="round"/>
                  <circle cx="12" cy="4" r="1" fill="currentColor"/>
                  <circle cx="6" cy="6" r="1" fill="currentColor"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor"/>
                </svg>
                <span className="text-[12px] font-medium text-[#444]">IoT</span>
              </div>
            </div>

            {/* Node: Java */}
            <div className="absolute top-[90px] left-[392px] z-10 animate-fade-in-up delay-[950ms]">
              <div className="flex flex-col items-center justify-center p-3 bg-white/90 backdrop-blur-md rounded-[20px] shadow-[0_4px_20px_rgba(255,192,203,0.3)] w-[95px] h-[105px] animate-float-tilt-delayed">
                <img src="https://api.iconify.design/logos:java.svg" alt="Java" className="w-7 h-7 mb-2" />
                <span className="text-[12px] font-medium text-[#444]">Java</span>
              </div>
            </div>

            {/* Node: 5G */}
            <div className="absolute top-[250px] left-[460px] z-10 animate-fade-in-up delay-1000">
              <div className="flex flex-col items-center justify-center p-3 bg-white/90 backdrop-blur-md rounded-[20px] shadow-[0_4px_20px_rgba(255,192,203,0.3)] w-[120px] h-[120px] text-center animate-float-tilt">
                <svg className="w-8 h-8 mb-2 text-[#FF7A9C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v20" strokeLinecap="round"/>
                  <path d="M8 22L12 6l4 16" strokeLinecap="round"/>
                  <path d="M5 8c2-2 12-2 14 0" strokeLinecap="round" strokeDasharray="2 2"/>
                  <path d="M2 5c4-3 16-3 20 0" strokeLinecap="round" strokeDasharray="2 2"/>
                  <circle cx="12" cy="2" r="1.5" fill="currentColor"/>
                </svg>
                <span className="text-[11px] font-medium text-[#444] leading-tight">5G & Wireless<br/>Communication</span>
              </div>
            </div>

            {/* Node: MySQL */}
            <div className="absolute bottom-[40px] left-[350px] z-10 animate-fade-in-up delay-[1050ms]">
              <div className="flex flex-col items-center justify-center p-3 bg-white/90 backdrop-blur-md rounded-[20px] shadow-[0_4px_20px_rgba(255,192,203,0.3)] w-[95px] h-[105px] animate-float-tilt-delayed">
                <img src="https://api.iconify.design/logos:mysql.svg" alt="MySQL" className="w-7 h-7 mb-2" />
                <span className="text-[12px] font-medium text-[#444]">MySQL</span>
              </div>
            </div>

            {/* Node: Arduino */}
            <div className="absolute bottom-[40px] left-[150px] z-10 animate-fade-in-up delay-[1100ms]">
              <div className="flex flex-col items-center justify-center p-3 bg-white/90 backdrop-blur-md rounded-[20px] shadow-[0_4px_20px_rgba(255,192,203,0.3)] w-[95px] h-[105px] animate-float-tilt">
                <img src="https://api.iconify.design/logos:arduino.svg" alt="Arduino" className="w-7 h-7 mb-2" />
                <span className="text-[12px] font-medium text-[#444]">Arduino</span>
              </div>
            </div>

            {/* Node: Embedded */}
            <div className="absolute top-[250px] left-[20px] z-10 animate-fade-in-up delay-[1150ms]">
              <div className="flex flex-col items-center justify-center p-3 bg-white/90 backdrop-blur-md rounded-[20px] shadow-[0_4px_20px_rgba(255,192,203,0.3)] w-[110px] h-[110px] text-center animate-float-tilt-delayed">
                <svg className="w-8 h-8 mb-2 text-[#FF7A9C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="6" y="6" width="12" height="12" rx="1" />
                  <rect x="9" y="9" width="6" height="6" fill="#FF7A9C" fillOpacity="0.2" />
                  <line x1="6" y1="9" x2="3" y2="9" strokeLinecap="round" />
                  <line x1="6" y1="12" x2="3" y2="12" strokeLinecap="round" />
                  <line x1="6" y1="15" x2="3" y2="15" strokeLinecap="round" />
                  <line x1="18" y1="9" x2="21" y2="9" strokeLinecap="round" />
                  <line x1="18" y1="12" x2="21" y2="12" strokeLinecap="round" />
                  <line x1="18" y1="15" x2="21" y2="15" strokeLinecap="round" />
                  <line x1="9" y1="6" x2="9" y2="3" strokeLinecap="round" />
                  <line x1="12" y1="6" x2="12" y2="3" strokeLinecap="round" />
                  <line x1="15" y1="6" x2="15" y2="3" strokeLinecap="round" />
                  <line x1="9" y1="18" x2="9" y2="21" strokeLinecap="round" />
                  <line x1="12" y1="18" x2="12" y2="21" strokeLinecap="round" />
                  <line x1="15" y1="18" x2="15" y2="21" strokeLinecap="round" />
                </svg>
                <span className="text-[11px] font-medium text-[#444] leading-tight">Embedded<br/>Systems</span>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

