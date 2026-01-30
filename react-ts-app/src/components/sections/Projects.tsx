import { motion } from "framer-motion";
import { Github, ExternalLink, Globe, Database, Smartphone, Cloud, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Weather Application",
    description:
      "Real-time weather application with current conditions, 7-day forecast, location search, and clean UI.",
    icon: Cloud,
    tech: ["Android", "API", "Java", "Weather API"],
    github: "https://github.com/prajwalkc05/CODING-SAMURAI-INTERNSHIP-TASK/tree/main/Task-03-Weather-App",
    download: "https://github.com/prajwalkc05/CODING-SAMURAI-INTERNSHIP-TASK/releases/download/weather-v1.0/weatherapp.apk",
    featured: true,
  },
  {
    title: "Calculator App",
    description:
      "Simple and efficient calculator application with clean design and accurate arithmetic operations.",
    icon: Smartphone,
    tech: ["Android", "Java", "UI Design"],
    github: "https://github.com/prajwalkc05/CODING-SAMURAI-INTERNSHIP-TASK/tree/main/Task-01-Calculator-App",
    download: "https://github.com/prajwalkc05/calculator-app/releases/download/v1.0/app-debug.apk",
    featured: false,
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with user authentication and instant messaging using cloud backend.",
    icon: Globe,
    tech: ["Android", "Firebase", "Realtime DB"],
    github: "https://github.com/prajwalkc05/CODING-SAMURAI-INTERNSHIP-TASK/tree/main/Task-05-Chat-App",
    download: "https://github.com/prajwalkc05/CODING-SAMURAI-INTERNSHIP-TASK/releases/download/chat-v1.0/chatapp.apk",
    featured: true,
  },
  {
    title: "Car Buy & Sell Platform",
    description:
      "Web platform for buying and selling cars with listings, filters, and user interaction features.",
    icon: Globe,
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/prajwalkc05/carbuyandsell",
    demo: "https://carbuyandsell.vercel.app/",
    featured: false,
  },
  {
    title: "ND Groups Events Management",
    description:
      "Catering and event management web application built with React and Node.js, featuring frontend–backend separation and production-ready deployment.",
    icon: Globe,
    tech: ["React", "Node.js", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/prajwalkc05/nd-groups-events",
    demo: "https://nd-groups-events.vercel.app",
    featured: true,
  },
  {
    title: "Career AI Recommendation System",
    description:
      "AI-based system that recommends career paths based on user skills, interests, and academic data.",
    icon: Database,
    tech: ["Python", "Machine Learning", "AI"],
    github: "https://github.com/prajwalkc05/carrer-ai",
    featured: false,
  },
  {
    title: "Timer App",
    description:
      "Countdown timer application with customizable time settings, notifications, and clean interface for productivity and time management.",
    icon: Smartphone,
    tech: ["Android", "Java", "Notifications", "Material Design"],
    github: "https://github.com/prajwalkc05/saiket-systems-internship-tasks/tree/main/Task-05-Timer-App",
    download: "https://github.com/prajwalkc05/saiket-systems-internship-tasks/releases/download/task-05/app-debug.apk",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of personal and academic projects showcasing my
            skills in Android, Web, and AI development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card group hover:shadow-neon transition-all duration-500">
                  <CardContent className="p-8 relative">
                    {/* Featured Badge */}
                    {project.featured && (
                      <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
                        bg-cyan-400/10 text-cyan-400 border border-cyan-400/30">
                        ★ Featured
                      </span>
                    )}

                    {/* Icon */}
                    <div className="w-14 h-14 mb-6 rounded-xl bg-white/5 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full 
                          bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 rounded-full 
                        border border-white/15 bg-white/5 hover:border-cyan-400 
                        transition text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>

                      {project.download && (
                        <a
                          href={project.download}
                          download
                          className="flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-gradient-to-r from-green-400 to-emerald-500 
                          text-black text-sm font-medium"
                        >
                          <Download className="w-4 h-4" />
                          APK
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-gradient-to-r from-cyan-400 to-purple-500 
                          text-black text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
