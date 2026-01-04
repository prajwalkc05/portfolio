import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(8, 12, 21, 0)", "rgba(8, 12, 21, 0.9)"]
  );
  
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  const navItems = useMemo(() => [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      style={{ 
        backgroundColor: navBackground,
        borderBottomColor: navBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 mx-auto">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-neon-cyan"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-cyan"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(186 100% 50% / 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground text-sm font-semibold transition-all duration-300"
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.05 }}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeSection === item.href.slice(1)
                    ? "text-neon-cyan bg-neon-cyan/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: navItems.length * 0.05 }}
              className="block w-full mt-4 px-4 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground text-center font-semibold"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
