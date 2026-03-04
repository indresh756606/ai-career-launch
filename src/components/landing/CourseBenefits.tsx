import { motion } from "framer-motion";
import { Brain, Monitor, Smartphone, Award, Users, Briefcase, Rocket, GraduationCap } from "lucide-react";

const benefits = [
  { icon: Brain, title: "Learn 50+ AI Tools" },
  { icon: Monitor, title: "Interactive LMS Web Portal" },
  { icon: Smartphone, title: "Android App Access" },
  { icon: Award, title: "Government Approved Certificate" },
  { icon: Users, title: "One-on-One Mentorship" },
  { icon: Briefcase, title: "100% Placement Assistance" },
  { icon: Rocket, title: "Live AI Projects" },
  { icon: GraduationCap, title: "Practical Hands-On Learning" },
];

const CourseBenefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-glow-blue font-heading text-sm uppercase tracking-[0.2em] mb-2 font-semibold">Advantages</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Why Choose This Course</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-glow-blue/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-glow-blue/10 flex items-center justify-center">
                <b.icon className="text-glow-blue" size={28} />
              </div>
              <span className="font-heading text-sm md:text-base font-semibold">{b.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseBenefits;
