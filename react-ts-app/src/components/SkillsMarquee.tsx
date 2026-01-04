import { motion } from "framer-motion";

const aiTools = [
  {
    name: "Claude AI",
    img: "https://avatars.githubusercontent.com/u/1525981?s=200&v=4",
  },
  {
    name: "GitHub Copilot",
    img: "https://github.githubassets.com/images/modules/site/copilot/copilot.png",
  },
  {
    name: "Vercel AI",
    img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  },
  {
    name: "Firebase AI",
    img: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png",
  },
  {
    name: "Figma AI",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "OpenAI API",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
  {
    name: "ChatGPT",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
];

export default function SkillsMarquee() {
  return (
    <section className="relative overflow-hidden bg-background py-14">
<div className="container mx-auto px-6 text-center -mt-10">

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-3 text-gradient"
        >
          AI Tools Used in Development
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mb-12"
        >
          I leverage modern AI tools to improve productivity, code quality,
          UI design, and problem-solving during project development.
        </motion.p>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee */}
      <motion.div
        className="flex gap-8 w-max px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {[...aiTools, ...aiTools].map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-8 py-4 rounded-full
            glass-card border border-white/10
            text-base font-medium whitespace-nowrap
            hover:border-neon-cyan hover:text-neon-cyan
            hover:shadow-neon transition-all duration-300"
          >
            <img
              src={tool.img}
              alt={tool.name}
              className="w-6 h-6 object-contain"
            />
            {tool.name}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
