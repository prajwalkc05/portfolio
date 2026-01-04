import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/prajwalkc05", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prajwal-kc2005/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:prajwalkc2005@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-glass-border">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-neon-cyan/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.05 }}
              className="inline-block font-sora text-xl font-bold mb-2"
            >
            
            </motion.a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Prajwal kc. All rights reserved.
            </p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>using React & Tailwind</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-lg border border-glass-border bg-glass-bg/30 flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
