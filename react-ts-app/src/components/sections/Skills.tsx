import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      gradient: "from-cyan-400 to-blue-500",
      skills: [
        { name: "HTML5", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3 / Tailwind", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      ]
    },
    {
      title: "Backend Development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      gradient: "from-purple-400 to-pink-500",
      skills: [
        { name: "Node.js", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "PHP", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Python", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "REST APIs", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      ]
    },
    {
      title: "Android Development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      gradient: "from-green-400 to-emerald-500",
      skills: [
        { name: "Java", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Kotlin", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "Android Studio", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
        { name: "XML Layouts", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg" },
        { name: "Firebase", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ]
    },
    {
      title: "Database",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      gradient: "from-orange-400 to-yellow-500",
      skills: [
        { name: "MySQL", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "SQLite", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      ]
    },
    {
      title: "Tools & Technologies",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      gradient: "from-red-400 to-orange-500",
      skills: [
        { name: "Git & GitHub", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Figma", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Docker", level: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Linux", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      ]
    }
  ];

  const techLogos = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ];

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="font-sora text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A comprehensive toolkit I've developed through coursework, projects, and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid - 3 columns on large, 2 on medium */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.6 }}
              className="glass-card p-6 group hover:border-neon-cyan/30 transition-all duration-500"
            >
              {/* Category Header with Image */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} p-[2px] flex-shrink-0`}
                >
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center p-2">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </motion.div>
                <h3 className="font-sora text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills List with Icons */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-foreground font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="progress-bar h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className="progress-bar-fill"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Marquee with Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="relative overflow-hidden py-8"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-6"
          >
            {[...techLogos, ...techLogos].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-full border border-glass-border bg-glass-bg/30 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-muted-foreground font-medium hover:text-neon-cyan transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
