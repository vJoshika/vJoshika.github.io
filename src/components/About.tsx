import { BookOpen, Cpu, Globe, Rocket, Download, User } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function About() {
  const fadeUp: Variants = { 
    hidden: { opacity: 0, y: 40 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } 
  };

  return (
    <section id="about" className="relative w-full min-h-screen py-24 bg-white overflow-hidden font-sans flex items-center">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.4 }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-pink-500 uppercase mb-3">
            Discover
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85]">Me</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Visual Profile */}
          <motion.div variants={fadeUp} className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-100 rounded-[40px] transform rotate-3 scale-[1.02] transition-transform duration-500 group-hover:rotate-6 opacity-60"></div>
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 p-8 rounded-[40px] shadow-[0_8px_32px_rgba(255,122,156,0.1)] flex flex-col items-center text-center overflow-hidden">
              
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#ffe4e8] to-[#fdf2f8] -z-10"></div>
              
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-xl flex items-center justify-center text-white mb-6 relative overflow-hidden mt-4">
                <img src="/profile.jpg" alt="Joshika V" className="w-full h-full object-cover" />
              </div>
              
              <h4 className="text-2xl font-bold text-neutral-900 mb-1">Joshika V</h4>
              <p className="text-pink-500 font-medium text-sm mb-4">Software Engineer</p>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent my-4"></div>
              
              <div className="flex flex-col gap-3 w-full text-left mt-2">
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                    <Globe size={16} />
                  </div>
                  <span className="font-medium">IoT & Networking</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                    <Cpu size={16} />
                  </div>
                  <span className="font-medium">Embedded Systems</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                    <BookOpen size={16} />
                  </div>
                  <span className="font-medium">Software Development</span>
                </div>
              </div>

              <a
                href="#"
                className="w-full mt-8 py-4 bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85] text-white rounded-2xl flex items-center justify-center gap-2 font-semibold hover:shadow-[0_8px_20px_rgba(255,122,156,0.4)] transition-all hover:-translate-y-1"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </motion.div>
          
          {/* Right Column - Text Story */}
          <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-6 pt-4">
            
            {/* Intro Card */}
            <div className="p-6 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 w-1 h-full bg-pink-400 transform origin-top transition-transform duration-300"></div>
              <p className="text-lg text-neutral-800 leading-relaxed font-medium">
                I’m a passionate <span className="text-pink-500 font-bold">ECE student</span> at R.M.D. Engineering College. I enjoy exploring how hardware and software can seamlessly work together to create smart, practical solutions for real-world problems.
              </p>
            </div>
            
            <p className="text-[15px] text-neutral-600 leading-[1.8] pl-2">
              My foundation was built through programming, electronics, communication systems, and hands-on project development. As I explored technologies such as <strong className="text-neutral-800 font-semibold px-1 py-0.5 bg-pink-50 rounded">Python, Java, C, SQL, Arduino, and IoT</strong>, I became increasingly interested in developing applications that connect intelligent software with physical devices. My academic journey has also introduced me to 5G, wireless communication, and networking.
            </p>
            
            <p className="text-[15px] text-neutral-600 leading-[1.8] pl-2">
              Today, I focus on building practical solutions that combine electronics and software. From IoT-based monitoring systems to exploring AI-powered applications, I enjoy turning ideas into working projects. Good engineering is not just about writing code or designing circuits—it is about understanding a problem and creating a solution that is useful, reliable, and scalable.
            </p>
            
            <div className="mt-4 p-6 rounded-3xl bg-gradient-to-r from-[#fdf2f8] to-white border border-pink-100 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-pink-500 shrink-0">
                <Rocket size={24} />
              </div>
              <div>
                <h5 className="font-bold text-neutral-900 mb-1">Beyond Academics</h5>
                <p className="text-[14px] text-neutral-600 leading-relaxed">
                  I continuously challenge myself through coding practice, technical projects, and certifications. Every project gives me an opportunity to strengthen my skills and understand how technology can be applied in the real world.
                </p>
              </div>
            </div>

          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
}
