import { motion } from "framer-motion";
import { Monitor, BookOpen, Brain, Users, Award } from "lucide-react";

const items = [
  { icon: Monitor, label: "Computer Lab Training" },
  { icon: BookOpen, label: "Classroom Sessions" },
  { icon: Brain, label: "AI Project Work" },
  { icon: Users, label: "Student Activities" },
  { icon: Award, label: "Certificate Distribution" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2 font-semibold">Life at ISIT</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Institute & Student Activities</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-[4/3] bg-muted rounded-2xl flex flex-col items-center justify-center gap-3 border border-border card-glow"
            >
              <item.icon className="text-primary" size={36} />
              <span className="text-sm font-medium text-muted-foreground text-center px-2">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
