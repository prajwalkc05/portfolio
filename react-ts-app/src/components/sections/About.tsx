import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Code, Users, Lightbulb } from "lucide-react";


const About = () => {
  const highlights = [
    {
      icon: Smartphone,
      title: "Android-Focused Development",
      description:
        "Hands-on experience building native Android applications with a strong focus on performance and usability.",
    },
    {
      icon: Code,
      title: "Clean & Scalable Code",
      description:
        "Follow best practices, modular architecture, and readable code to ensure long-term maintainability.",
    },
    {
      icon: Users,
      title: "User-Centric Approach",
      description:
        "Design and develop applications by understanding real user needs and practical use cases.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description:
        "Actively learning new technologies, tools, and patterns to stay relevant in modern development.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate Android developer focused on building practical,
            user-friendly applications with modern technologies.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left – Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl glass-card border border-glass-border flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-neon-cyan shadow-neon">
                  <img
                    src="/profile.jpg"
                    alt="Prajwal K C"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-neon-cyan font-semibold text-lg">
                  Prajwal K C
                </p>
                <p className="text-muted-foreground text-sm">
                  Android Application Developer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right – About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm{" "}
              <span className="text-neon-cyan font-semibold">
                Prajwal K C
              </span>
              , a BCA student and Android Application Developer with a strong
              interest in building real-world mobile and web applications. I
              enjoy converting ideas into working products through clean code
              and thoughtful design.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My primary focus is native Android development using{" "}
              <span className="text-neon-cyan font-semibold">Java</span> and{" "}
              <span className="text-neon-cyan font-semibold">Kotlin</span>. I
              have built applications such as a Weather App, Chat Application,
              Expense Tracker, Calculator, and management systems using Firebase,
              REST APIs, and Material Design.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Alongside Android, I explore React, Node.js, MySQL, and Python to
              understand full-stack workflows. I also leverage AI tools to
              improve productivity, UI design, debugging, and problem-solving
              during development.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I’m continuously learning through projects, certifications, and
              hands-on experimentation, and I’m open to opportunities that help
              me grow as a developer while contributing meaningful value.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-1">
                  8+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Built
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-1">
                  2+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years of Learning
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-1">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Certifications
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full hover:shadow-neon transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-fit mx-auto p-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Education & Career Goal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gradient text-center">
              Education
            </h3>
            <div className="glass-card border border-neon-cyan/20 rounded-2xl p-6 
                        hover:border-neon-cyan hover:shadow-neon transition-all duration-300">
              <div className="flex flex-col gap-3 text-center">
                <span className="text-neon-cyan font-semibold text-lg">
                  Bachelor of Computer Applications (BCA)
                </span>

                <span className="text-muted-foreground">
                  Currently Pursuing
                </span>

                <div className="flex justify-center gap-6 mt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-cyan">7.15</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-cyan">2023 – 2026</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Goal */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gradient text-center">
              Career Goal
            </h3>
            <div className="glass-card border border-neon-purple/20 rounded-2xl p-6 
                        hover:border-neon-purple hover:shadow-neon transition-all duration-300">
              <div className="flex flex-col gap-4 text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To become a skilled Android Developer and contribute to innovative mobile solutions that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I aim to work in a dynamic environment where I can grow professionally, collaborate with talented teams, and continuously learn cutting-edge technologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
