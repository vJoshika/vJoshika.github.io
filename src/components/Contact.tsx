import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Github = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Mail = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const MessageSquare = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const popIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

  return (
    <>
      <section id="contact" className="w-full min-h-screen pt-24 pb-8 bg-white font-sans flex flex-col justify-center items-center relative overflow-hidden">
        <div className="max-w-4xl w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col items-center text-center w-full"
        >
          <motion.h2 variants={fadeUp} className="text-sm font-bold tracking-[0.2em] text-[#e8a0c5] uppercase mb-6">
            Get In Touch
          </motion.h2>
          
          <motion.h3 variants={fadeUp} className="text-6xl md:text-8xl font-extrabold text-[#202020] tracking-tight leading-[1.1] mb-2">
            Let's Build
          </motion.h3>
          <motion.h3 variants={fadeUp} className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e8a0c5] to-[#d870a3] tracking-tight leading-[1.1] mb-12">
            Something.
          </motion.h3>

          <motion.p variants={fadeUp} className="text-[#646464] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-16">
            I'm currently open to internships, collaborations, and interesting projects. If you have something worth building, I want to hear about it.
            <br />
            You can also reach me directly at <a href="mailto:joshikavempati122@gmail.com" className="font-semibold text-[#202020] hover:text-[#e8a0c5] transition-colors">joshikavempati122@gmail.com</a>
          </motion.p>
        </motion.div>

        {/* Premium Form Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={popIn}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-2xl mx-auto mb-16 relative group"
        >
          {/* Subtle animated gradient glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-[#e8a0c5] to-purple-300 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] p-8 md:p-12 flex flex-col gap-8 text-left">
            <div className="text-center mb-2">
              <p className="text-xs font-bold tracking-[0.2em] text-[#e8a0c5] uppercase mb-3">
                Start the conversation
              </p>
              <h4 className="text-3xl font-bold text-neutral-900">How can I help you?</h4>
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Mail className="text-neutral-400 group-focus-within/input:text-[#e8a0c5] transition-colors" size={20} />
                </div>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full h-14 pl-14 pr-6 rounded-2xl bg-neutral-50/50 border border-neutral-200 text-neutral-800 placeholder:text-neutral-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none focus:ring-2 focus:ring-[#e8a0c5]/20 focus:border-[#e8a0c5] focus:bg-white transition-all"
                />
              </div>

              <div className="relative group/input">
                <div className="absolute top-5 left-0 pl-5 flex items-start pointer-events-none">
                  <MessageSquare className="text-neutral-400 group-focus-within/input:text-[#e8a0c5] transition-colors" size={20} />
                </div>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Drop your messages..."
                  rows={4}
                  className="w-full p-5 pl-14 rounded-2xl bg-neutral-50/50 border border-neutral-200 text-neutral-800 placeholder:text-neutral-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none focus:ring-2 focus:ring-[#e8a0c5]/20 focus:border-[#e8a0c5] focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="w-full sm:w-1/2 h-14 bg-gradient-to-r from-[#202020] to-[#3a3a3a] text-white rounded-2xl font-bold hover:from-[#e8a0c5] hover:to-[#d870a3] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(232,160,197,0.3)] flex items-center justify-center gap-2 group/btn">
                  Send Message <ArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" size={18} />
                </button>
                <button className="w-full sm:w-1/2 h-14 bg-white border border-neutral-200 text-[#202020] rounded-2xl font-bold hover:border-[#202020] hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                  <Download size={18} /> Download Resume
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </section>

      {/* Minimal Footer */}
      <footer className="w-full bg-white font-sans border-t border-neutral-100 pt-8 pb-8 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
        <p className="text-sm text-neutral-500 mb-4 md:mb-0 font-medium">
          © {new Date().getFullYear()} Joshika V. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-neutral-400">
          <a href="mailto:joshikavempati122@gmail.com" className="hover:text-[#e8a0c5] transition-colors"><Mail size={20} /></a>
          <a href="https://www.linkedin.com/in/joshika-vempati/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8a0c5] transition-colors"><Linkedin size={20} /></a>
          <a href="https://github.com/vJoshika" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8a0c5] transition-colors"><Github size={20} /></a>
          <a href="https://www.instagram.com/joshika_vempati/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8a0c5] transition-colors"><Instagram size={20} /></a>
        </div>
      </footer>
    </>
  );
}
