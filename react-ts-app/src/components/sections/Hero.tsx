import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Folder, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import MagneticButton from "../../components/MagneticButton";
import TextScramble from "../../components/TextScramble";
import { CharacterReveal } from "../../components/RevealText";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const roles = ["Software Developer", "Full-Stack Enthusiast", "Problem Solver", "Tech Innovator", "Android Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Floating shapes data
  const floatingShapes = [
    { size: 100, x: "10%", y: "20%", delay: 0, color: "neon-cyan" },
    { size: 80, x: "85%", y: "15%", delay: 1, color: "neon-purple" },
    { size: 60, x: "75%", y: "70%", delay: 2, color: "neon-pink" },
    { size: 120, x: "5%", y: "75%", delay: 0.5, color: "neon-cyan" },
    { size: 40, x: "50%", y: "85%", delay: 1.5, color: "neon-purple" },
  ];

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{ 
            background: "radial-gradient(circle, hsl(186 100% 50% / 0.12) 0%, transparent 70%)",
            top: "10%", 
            left: "20%" 
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{ 
            background: "radial-gradient(circle, hsl(280 100% 70% / 0.1) 0%, transparent 70%)",
            bottom: "20%", 
            right: "10%" 
          }}
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{ 
            background: "radial-gradient(circle, hsl(330 100% 65% / 0.08) 0%, transparent 70%)",
            top: "50%", 
            right: "30%" 
          }}
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -60, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Floating Geometric Shapes */}
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className={`absolute border border-${shape.color}/20 rounded-lg`}
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Cursor Glow Effect */}
      <motion.div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(186 100% 50% / 0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "hsl(186 100% 50% / 0.5)" }}
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-neon-cyan"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-neon-cyan text-sm font-medium">Open to Opportunities</span>
          </motion.span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="font-sora text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground inline-block"
            >
              Hi, I'm{" "}
            </motion.span>
            <br className="md:hidden" />
            <span className="relative inline-block">
              <CharacterReveal 
                text="Prajwal K C" 
                className="text-gradient" 
                delay={0.5}
              />
            </span>
          </h1>
        </motion.div>

        {/* Role Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 h-16"
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            BCA Student | Aspiring
          </p>
          <div className="h-10 flex items-center justify-center">
            <TextScramble 
              key={currentRole}
              text={roles[currentRole]}
              className="text-2xl md:text-3xl font-semibold text-glow text-neon-cyan"
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 leading-relaxed"
        >
          Passionate about building innovative solutions and transforming ideas into 
          elegant, user-centric applications. Currently pursuing BCA and exploring 
          the endless possibilities of software development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton
            onClick={scrollToProjects}
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground font-semibold text-lg shadow-lg"
          >
            <Folder className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>View Projects</span>
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-glass-border bg-glass-bg/50 backdrop-blur-sm text-foreground font-semibold text-lg hover:border-neon-cyan/50 transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </MagneticButton>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <p className="text-sm text-muted-foreground mb-4">Tech I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Node.js", "Android", "Python", "MySQL"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: "hsl(186 100% 50% / 0.5)",
                  boxShadow: "0 0 20px hsl(186 100% 50% / 0.3)",
                }}
                className="px-4 py-2 rounded-full border border-glass-border bg-glass-bg/30 backdrop-blur-sm text-sm text-muted-foreground cursor-default transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 10px hsl(186 100% 50% / 0.3)",
                  "0 0 20px hsl(186 100% 50% / 0.5)",
                  "0 0 10px hsl(186 100% 50% / 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full border border-neon-cyan/30"
            >
              <ArrowDown className="w-5 h-5 text-neon-cyan" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Side Decorations */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-[2px] h-8 rounded-full bg-gradient-to-b from-neon-cyan/50 to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-[2px] h-8 rounded-full bg-gradient-to-b from-neon-purple/50 to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
