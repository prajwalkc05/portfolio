import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

 const timeline = [
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Soundarya Institute of Management and Science, Bengaluru",
    location: "Bengaluru, Karnataka",
    period: "2023 – 2026",
    highlights: ["CGPA: 7.13", "Bangalore University"],
    current: true,
  },
  {
    type: "education",
    title: "Pre-University Course (PUC – CEBA)",
    organization: "Soundarya Composite PU College",
    location: "Bengaluru, Karnataka",
    period: "2021 – 2023",
    highlights: ["Percentage: 89%"],
    current: false,
  },
  {
    type: "education",
    title: "Secondary Education (SSLC)",
    organization: "Shree Ram Public School",
    location: "Karnataka, India",
    period: "2021",
    highlights: ["Percentage: 52%"],
    current: false,
  },
  {
    type: "internship",
    title: "Android Application Developer Intern",
    organization: "Saiket Systems",
    location: "Remote",
    period: "2025 – Present",
    highlights: ["Android Development", "Java", "Firebase"],
    current: true,
  },
  {
    type: "internship",
    title: "Android Application Developer Intern",
    organization: "Coding Samurai",
    location: "Remote",
    period: "2025 – Present",
    highlights: ["Android Development", "Java", "Project-Based Learning"],
    current: true,
  },
];

  return (
    <section id="education" className="py-32 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/3 rounded-full blur-[150px]" />
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
            Journey
          </span>
          <h2 className="font-sora text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            My academic journey and professional experiences that have shaped my skills
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-4 h-4 rounded-full ${
                    item.current 
                      ? "bg-neon-cyan shadow-[0_0_20px_hsl(186_100%_50%/0.5)]" 
                      : "bg-muted border-2 border-glass-border"
                  }`}
                />
              </div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 hover:border-neon-cyan/30 transition-all duration-500"
                >
                  {/* Type Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    item.type === "education" 
                      ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30" 
                      : "bg-neon-purple/10 text-neon-purple border border-neon-purple/30"
                  }`}>
                    {item.type === "education" ? (
                      <GraduationCap className="w-3.5 h-3.5" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5" />
                    )}
                    {item.type === "education" ? "Education" : "Internship"}
                  </div>

                  <h3 className="font-sora text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-neon-cyan font-medium mb-2">{item.organization}</p>
                  
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 rounded-md text-xs bg-muted/50 text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Current Badge */}
                  {item.current && (
                    <div className={`mt-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <span className="inline-flex items-center gap-1 text-xs text-neon-cyan">
                        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                        Currently Pursuing
                      </span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
