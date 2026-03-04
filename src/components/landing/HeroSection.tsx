import { motion } from "framer-motion";
import { Brain, Rocket, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: Brain, text: "50+ AI Tools Training" },
  { icon: Rocket, text: "Live Projects Using AI" },
  { icon: Award, text: "Government Approved Certificate" },
  { icon: Users, text: "100% Placement Assistance" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-overlay opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/50" />

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-glow-blue font-heading text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-semibold">
            ISIT — Jhansi
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 glow-text">
            Advance Diploma in<br />
            <span className="gradient-text">AI Tools and ChatGPT</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
            Learn the most powerful AI tools and build real-world digital skills for modern careers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-4"
            >
              <h.icon className="text-glow-blue" size={28} />
              <span className="text-primary-foreground/90 text-xs md:text-sm font-medium text-center">
                {h.text}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-heading font-semibold btn-glow"
          >
            Apply Now
          </a>
          <a
            href="#modules"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl text-lg font-heading font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Download Course Details
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
