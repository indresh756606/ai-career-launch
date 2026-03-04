import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/918543962191" },
];

const SocialSection = () => {
  return (
    <section className="py-16 section-dark">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center gap-6">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-glow-blue/20 hover:border-glow-blue/40 transition-all group"
                aria-label={s.label}
              >
                <s.icon size={24} className="group-hover:text-glow-blue transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
