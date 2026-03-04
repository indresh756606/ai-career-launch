import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 section-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-blue rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-glow-purple rounded-full blur-[100px] animate-pulse-glow" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 glow-text">
            Start Your Career in<br />
            <span className="gradient-text">Artificial Intelligence</span> Today
          </h2>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 opacity-80">
            Join the most practical AI course and learn industry-ready skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-heading font-semibold btn-glow"
            >
              Apply for Admission
            </a>
            <a
              href="#contact"
              className="border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-heading font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
