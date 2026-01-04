import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";


const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // WhatsApp redirect
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919844492129"; // WhatsApp number
    const text = `Hello Prajwal 👋%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/prajwalkc05",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/prajwal-kc2005/",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:prajwalkc2005@gmail.com",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prajwalkc2005@gmail.com",
      href: "mailto:prajwalkc2005@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 9844492129",
      href: "tel:+919844492129",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka",
      href: "https://www.google.com/maps/search/?api=1&query=Buddha+Jyothi+Layout+Bagalakunte+Bengaluru",
    },
  ];

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open for internships, projects, and collaborations. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 space-y-6">
              {/* Profile Photo */}
              <div className="flex justify-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-neon-cyan shadow-neon">
                  <img
                    src="/profile.jpg"
                    alt="Prajwal K C"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contact Info Heading */}
              <h3 className="text-xl font-semibold text-center text-gradient mb-6">Contact Information</h3>

              {/* Contact Details */}
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                  className="flex gap-4 items-start hover:bg-white/5 p-3 rounded-xl transition cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground hover:text-neon-cyan transition font-medium">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl border border-glass-border flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:shadow-neon transition"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Your Name</label>
              <input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl glass-card border border-glass-border focus:border-neon-cyan outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl glass-card border border-glass-border focus:border-neon-cyan outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message here..."
                className="w-full px-4 py-3 rounded-xl glass-card border border-glass-border focus:border-neon-cyan outline-none resize-none text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl glass-card border border-neon-cyan/50 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold text-lg flex items-center justify-center gap-2 cursor-pointer hover:shadow-neon transition-all"
            >
              <Send className="w-5 h-5" />
              Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
