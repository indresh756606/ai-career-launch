import { motion } from "framer-motion";
import { Search, Linkedin, Workflow, MessageSquare, Palette, Video, BarChart3, Globe } from "lucide-react";

const modules = [
  { icon: Search, title: "Advance Mastery of AI Research", desc: "Learn how to perform advanced research using modern AI tools." },
  { icon: Linkedin, title: "LinkedIn Optimisation", desc: "Learn how to optimize your LinkedIn profile to get better job opportunities." },
  { icon: Workflow, title: "AI Automation Workflow", desc: "Learn how to build automated workflows using AI tools." },
  { icon: MessageSquare, title: "Advance AI Prompting", desc: "Learn how to create powerful prompts for AI tools like ChatGPT." },
  { icon: Palette, title: "Graphics Designing Using AI", desc: "Learn to create professional graphics using AI design tools." },
  { icon: Video, title: "Video Creation Using AI", desc: "Learn how to generate HD quality videos using AI tools." },
  { icon: BarChart3, title: "Data Analyst Using AI", desc: "Learn how to create professional dashboards and analyze data using AI." },
  { icon: Globe, title: "Web Designing Using AI", desc: "Learn how to build websites using AI-powered development tools." },
];

const CourseModules = () => {
  return (
    <section id="modules" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2 font-semibold">What You'll Learn</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Course Modules</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 card-glow border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <m.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{m.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;
