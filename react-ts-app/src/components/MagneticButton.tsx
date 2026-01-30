import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: string;
}

const MagneticButton = ({ children, className = "", onClick, href, download }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-50, 50], [10, -10]);
  const rotateY = useTransform(xSpring, [-50, 50], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Component
        href={href}
        download={download}
        onClick={onClick}
        style={{
          x: xSpring,
          y: ySpring,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative overflow-hidden ${className}`}
        data-cursor="Click"
      >
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)",
            backgroundSize: "200% 100%",
          }}
          whileHover={{
            backgroundPosition: ["200% 0%", "-200% 0%"],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        {children}
      </Component>
    </div>
  );
};

export default MagneticButton;
