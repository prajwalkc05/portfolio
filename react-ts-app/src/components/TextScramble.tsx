import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = "!<>-_\\/[]{}—=+*^?#________";

const TextScramble = ({ text, className = "", delay = 0 }: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return letter;
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsAnimating(false);
        }

        iteration += 1 / 3;
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
      className={className}
    >
      {isAnimating ? displayText : text}
    </motion.span>
  );
};

export default TextScramble;
