import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            animate={{
              x: [Math.random() * 800, Math.random() * 800],
              y: [Math.random() * 600, Math.random() * 600],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Logo and Loading Animation */}
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="text-6xl font-bold text-gradient">PK</div>
          
          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-neon-cyan/30 rounded-full w-20 h-20 -m-2"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-neon-purple/20 rounded-full w-24 h-24 -m-4"
          />
          
          {/* Orbiting Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon-cyan rounded-full"
              animate={{
                rotate: 360,
                x: [30 * Math.cos(i * 60 * Math.PI / 180), 30 * Math.cos((i * 60 + 360) * Math.PI / 180)],
                y: [30 * Math.sin(i * 60 * Math.PI / 180), 30 * Math.sin((i * 60 + 360) * Math.PI / 180)],
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: "50%",
                top: "50%",
                marginLeft: "-4px",
                marginTop: "-4px",
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="text-lg font-medium text-muted-foreground mb-4">
            Loading Portfolio...
          </div>
          
          {/* Progress Bar */}
          <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <div className="text-sm text-muted-foreground mt-2">
            {progress}%
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;