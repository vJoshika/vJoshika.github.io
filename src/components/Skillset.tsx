import { 
  Code2, 
  Radio, 
  CircuitBoard, 
  Wrench,
  RadioTower,
  Wifi,
  Signal,
  Layers,
  Satellite,
  Cable,
  Cpu,
  Thermometer,
  MonitorSmartphone,
  Zap,
  Beaker,
  Award
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Skillset() {
  const fadeUp: Variants = { 
    hidden: { opacity: 0, y: 40 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } 
  };
  const popIn: Variants = { 
    hidden: { opacity: 0, scale: 0.9 }, 
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } 
  };

  const skillCategories = [
    {
      title: "Programming",
      description: "Core languages for building robust software and applications.",
      icon: <Code2 size={32} className="text-pink-500" />,
      skills: [
        { name: "Java", icon: "https://api.iconify.design/logos:java.svg" },
        { name: "C", icon: "https://api.iconify.design/logos:c.svg" },
        { name: "Python", icon: "https://api.iconify.design/logos:python.svg" },
        { name: "SQL", icon: "https://api.iconify.design/logos:mysql.svg" },
        { name: "HTML5", icon: "https://api.iconify.design/logos:html-5.svg" },
        { name: "CSS3", icon: "https://api.iconify.design/logos:css-3.svg" },
        { name: "JavaScript", icon: "https://api.iconify.design/logos:javascript.svg" },
      ]
    },
    {
      title: "Telecommunication",
      description: "Protocols, networking, and modern wireless architectures.",
      icon: <Radio size={32} className="text-pink-500" />,
      skills: [
        { name: "5G & Core", lucide: <RadioTower size={18} className="text-[#FF7A9C]" /> },
        { name: "WSN", lucide: <Wifi size={18} className="text-[#FF7A9C]" /> },
        { name: "CDMA/MIMO", lucide: <Signal size={18} className="text-[#FF7A9C]" /> },
        { name: "Optical Fiber", lucide: <Cable size={18} className="text-[#FF7A9C]" /> },
        { name: "Net Slicing", lucide: <Layers size={18} className="text-[#FF7A9C]" /> },
        { name: "NTN & LEO", lucide: <Satellite size={18} className="text-[#FF7A9C]" /> },
        { name: "Antennas", lucide: <Radio size={18} className="text-[#FF7A9C]" /> },
      ]
    },
    {
      title: "Embedded & IoT",
      description: "Hardware programming and smart connected devices.",
      icon: <CircuitBoard size={32} className="text-pink-500" />,
      skills: [
        { name: "Arduino", icon: "https://api.iconify.design/logos:arduino.svg" },
        { name: "Sensors", lucide: <Zap size={18} className="text-[#FF7A9C]" /> },
        { name: "DHT11", lucide: <Thermometer size={18} className="text-[#FF7A9C]" /> },
        { name: "IoT Monitor", lucide: <MonitorSmartphone size={18} className="text-[#FF7A9C]" /> },
        { name: "Embedded", lucide: <Cpu size={18} className="text-[#FF7A9C]" /> },
      ]
    },
    {
      title: "Software / Tools",
      description: "Essential utilities and platforms for development.",
      icon: <Wrench size={32} className="text-pink-500" />,
      skills: [
        { name: "VS Code", icon: "https://api.iconify.design/logos:visual-studio-code.svg" },
        { name: "Git", icon: "https://api.iconify.design/logos:git-icon.svg" },
        { name: "GitHub", icon: "https://api.iconify.design/logos:github-icon.svg" },
        { name: "Postman", icon: "https://api.iconify.design/logos:postman-icon.svg" },
      ]
    }
  ];

  return (
    <section id="skillset" className="relative w-full py-24 bg-[#fdf2f8] overflow-hidden font-sans">
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-pink-500 uppercase mb-3">
            Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85]">Expertise</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Horizontal Rows Layout */}
        <div className="flex flex-col gap-16 md:gap-24">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.15 }}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              
              {/* Category Info (Left) */}
              <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col items-start text-left">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center shrink-0 border border-pink-200/50 mb-6 shadow-sm">
                  {category.icon}
                </div>
                <h4 className="text-3xl font-extrabold text-neutral-900 leading-tight mb-3">
                  {category.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed text-[15px] max-w-sm">
                  {category.description}
                </p>
              </motion.div>

              {/* Skills Grid (Right) */}
              <div className="lg:col-span-8 flex flex-wrap gap-4 md:gap-6">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    variants={popIn}
                    className="flex flex-col items-center justify-center gap-3 w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-3xl bg-white border border-pink-100/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,122,156,0.15)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain drop-shadow-sm" />
                      ) : (
                        skill.lucide
                      )}
                    </div>
                    <span className="text-[12px] md:text-[13px] font-semibold text-neutral-700 text-center px-2 leading-tight group-hover:text-pink-600 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Sub-section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.3 }}
          className="mt-32 pt-16 border-t border-pink-200/40"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
              Certified & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A9C] to-[#FF5E85]">Validated</span>
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
              Industry-recognized credentials that demonstrate my commitment to professional standards and continuous technical growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Cert 1 */}
            <motion.div variants={fadeUp} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-pink-100/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,122,156,0.15)] transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-pink-200/50">
                <img src="https://api.iconify.design/logos:oracle.svg" alt="Oracle" className="w-8 h-8 object-contain drop-shadow-sm" />
              </div>
              <span className="inline-block px-3 py-1.5 bg-pink-50 text-pink-600 text-[11px] font-bold uppercase tracking-wider rounded-full mb-4 border border-pink-100">
                AI & Cloud
              </span>
              <h4 className="text-[17px] font-bold text-neutral-900 leading-snug">
                OCI Certified AI Foundations Associate
              </h4>
            </motion.div>

            {/* Cert 2 */}
            <motion.div variants={fadeUp} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-pink-100/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,122,156,0.15)] transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-pink-200/50">
                <img src="https://api.iconify.design/simple-icons:cisco.svg?color=%231ba0d7" alt="Cisco" className="w-8 h-8 object-contain drop-shadow-sm" />
              </div>
              <span className="inline-block px-3 py-1.5 bg-pink-50 text-pink-600 text-[11px] font-bold uppercase tracking-wider rounded-full mb-4 border border-pink-100">
                Networking
              </span>
              <h4 className="text-[17px] font-bold text-neutral-900 leading-snug">
                CCNA: Switching, Routing, and Wireless Essentials
              </h4>
            </motion.div>

            {/* Cert 3 */}
            <motion.div variants={fadeUp} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-pink-100/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,122,156,0.15)] transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-pink-200/50">
                <img src="https://api.iconify.design/simple-icons:blackberry.svg" alt="BlackBerry QNX" className="w-8 h-8 object-contain drop-shadow-sm opacity-80" />
              </div>
              <span className="inline-block px-3 py-1.5 bg-pink-50 text-pink-600 text-[11px] font-bold uppercase tracking-wider rounded-full mb-4 border border-pink-100">
                RTOS
              </span>
              <h4 className="text-[17px] font-bold text-neutral-900 leading-snug">
                Realtime Programming for the QNX Operating System
              </h4>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

