import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/sections/Hero";
import SkillsMarquee from "../components/SkillsMarquee";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import CustomCursor from "../components/CustomCursor";
import ParticleBackground from "../components/ParticleBackground";
import FloatingShapes from "../components/FloatingShapes"


const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add mouse tracking for glass card effects
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <ParticleBackground />
      <FloatingShapes />
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <SkillsMarquee />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
