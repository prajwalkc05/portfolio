import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const RevealText = ({ children, className = "", delay = 0 }: RevealTextProps) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}

export const SplitText = ({ text, className = "", wordClassName = "", delay = 0 }: SplitTextProps) => {
  const words = text.split(" ");

  return (
    <motion.p className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
            className={`inline-block ${wordClassName}`}
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
};

interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const CharacterReveal = ({ text, className = "", delay = 0 }: CharacterRevealProps) => {
  const characters = text.split("");

  return (
    <motion.span className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.03,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default RevealText;
