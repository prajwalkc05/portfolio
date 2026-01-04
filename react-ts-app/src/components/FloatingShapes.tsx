import { motion } from "framer-motion";

const FloatingShapes = () => {
  const shapes = [
    { size: 60, delay: 0, duration: 20, x: "10%", y: "20%" },
    { size: 40, delay: 2, duration: 25, x: "80%", y: "10%" },
    { size: 80, delay: 4, duration: 30, x: "70%", y: "70%" },
    { size: 50, delay: 1, duration: 22, x: "20%", y: "80%" },
    { size: 35, delay: 3, duration: 28, x: "90%", y: "50%" },
    { size: 45, delay: 5, duration: 26, x: "5%", y: "60%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {index % 3 === 0 && (
            <div className="w-full h-full border-2 border-neon-cyan rounded-full" />
          )}
          {index % 3 === 1 && (
            <div className="w-full h-full border-2 border-neon-purple rotate-45" />
          )}
          {index % 3 === 2 && (
            <div className="w-full h-full border-2 border-neon-pink" 
                 style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
          )}
        </motion.div>
      ))}
      
      {/* Gradient Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingShapes;