import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Trophy } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
  {
    title: "Accenture Nordics – Software Engineering Job Simulation",
    issuer: "Forage",
    date: "July 2025",
    credentialId: "k95h9qKzxpDE84AHM",
    credentialUrl: "https://www.theforage.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_zvzqDroP9KuS8Rsd9_1751696664337_completion_certificate.pdf",
    icon: Award,
    color: "from-neon-cyan to-blue-500",
  },
  {
    title: "Tata – GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "July 2025",
    credentialId: "6GhZYDb24diTr7Qz5",
    credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_zvzqDroP9KuS8Rsd9_1751696665048_completion_certificate.pdf",
    icon: Award,
    color: "from-neon-purple to-pink-500",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    date: "2024",
    credentialUrl: "https://www.credly.com/badges/2dd8c440-35dd-4dc0-8859-3fb7924e1be3",
    icon: Award,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialUrl: "https://www.credly.com/badges/cc55eb6e-edc4-4f73-ab6a-4981e8414a4c",
    icon: Award,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco",
    date: "2024",
    credentialUrl: "https://www.credly.com/org/cisco/badge/python-essentials-2",
    icon: Award,
    color: "from-green-400 to-emerald-500",
  },
];

  const achievements = [
    {
      title: "Omorfia Fest – Free Fire Competition",
      description: "Won 3rd Prize in the Free Fire gaming competition conducted during the Omorfia college fest.",
      icon: Trophy,
    },
    {
      title: "Real-World Project Development",
      description: "Designed and developed multiple real-world Android and web applications, focusing on usability, performance, and real-life problem solving.",
      icon: Award,
    },
  ];

  return (
    <section id="certifications" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neon-purple/5 to-transparent" />
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
            Recognition
          </span>
          <h2 className="font-sora text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Continuous learning and participation in tech communities
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 group cursor-pointer hover:border-neon-cyan/30 transition-all duration-500 block"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} p-0.5 mb-4`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <cert.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-sora font-semibold text-lg mb-2 group-hover:text-neon-cyan transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-neon-cyan text-sm font-medium mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-4">{cert.date}</p>

                  {/* Credential Link */}
                  <span className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-purple transition-colors mt-2">
                    Show Credential
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
              ) : (
                <div className="glass-card p-6 group cursor-default hover:border-neon-cyan/30 transition-all duration-500">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} p-0.5 mb-4`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <cert.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-sora font-semibold text-lg mb-2 group-hover:text-neon-cyan transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-neon-cyan text-sm font-medium mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-4">{cert.date}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="font-sora text-2xl font-semibold text-center mb-8">
            Achievements & <span className="text-gradient">Practical Work</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 group"
              >
                <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                  <achievement.icon className="w-7 h-7 text-neon-cyan" />
                </div>

                <h4 className="font-sora font-semibold mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
