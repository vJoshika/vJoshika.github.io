"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skillset from "../components/Skillset";
import Clients from "../components/Clients";
import Experience from "../components/Experience";
import HowItWorks from "../components/HowItWorks";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });
    
    // Expose lenis globally for the Navbar to use
    (window as any).lenis = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <div className="w-full flex flex-col overflow-x-clip">
      <Navbar />
      {/* New Hero Section */}
      <Hero />

      {/* Custom About Section */}
      <About />

      {/* Custom Skillset Section */}
      <Skillset />

      {/* Clients Marquee Section */}
      <Clients />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* How It Works Timeline */}
      <HowItWorks />

      {/* Contact Section */}
      <Contact />

    </div>
  );
}
