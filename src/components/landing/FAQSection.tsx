import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is the Advance Diploma in AI Tools and ChatGPT?", a: "It is a comprehensive course designed to teach students how to use 50+ AI tools including ChatGPT for real-world professional applications across multiple domains." },
  { q: "Who can join this AI course?", a: "Anyone with basic computer knowledge can join — students, graduates, working professionals, and entrepreneurs looking to upgrade their digital skills." },
  { q: "What is the duration of the course?", a: "The course duration is designed to give you in-depth practical training. Please contact us for the latest schedule and batch timings." },
  { q: "Will I receive a certificate after completing the course?", a: "Yes, you will receive a government-approved certificate upon successful completion of the course." },
  { q: "Is the certificate government approved?", a: "Yes, the certificate is government approved and recognized by employers across industries." },
  { q: "Will I learn ChatGPT in this course?", a: "Absolutely! ChatGPT is a core part of the curriculum. You will learn advanced prompting, automation, and real-world applications of ChatGPT." },
  { q: "How many AI tools will be taught?", a: "You will learn 50+ AI tools covering research, design, video creation, data analytics, web development, and more." },
  { q: "Do you provide practical training?", a: "Yes, the course is heavily focused on practical, hands-on training with live AI projects and real-world scenarios." },
  { q: "Is there any placement assistance?", a: "Yes, we provide 100% placement assistance to help you secure a job after completing the course." },
  { q: "What projects will students create during the course?", a: "Students will work on live AI projects including automated workflows, AI-designed graphics, AI-generated videos, data dashboards, and AI-built websites." },
  { q: "Is the course suitable for beginners?", a: "Yes, the course is designed for beginners with step-by-step guidance and mentorship throughout." },
  { q: "Will I learn AI automation?", a: "Yes, AI Automation Workflow is a dedicated module where you'll learn to build automated systems using AI tools." },
  { q: "Do students get LMS portal access?", a: "Yes, every student gets access to our interactive LMS web portal with course materials, resources, and progress tracking." },
  { q: "Is there an Android app for students?", a: "Yes, students can access course content through our dedicated Android app for learning on the go." },
  { q: "Will we learn AI-based graphic design?", a: "Yes, there is a dedicated module on Graphics Designing Using AI where you'll create professional designs using AI tools." },
  { q: "Will we learn AI video creation?", a: "Yes, you will learn how to generate HD quality videos using cutting-edge AI video creation tools." },
  { q: "Can this course help me get a job?", a: "Absolutely! With 100% placement assistance, practical skills, and a government-approved certificate, this course significantly boosts your employability." },
  { q: "Will we learn data analytics using AI?", a: "Yes, the Data Analyst Using AI module covers creating professional dashboards and performing data analysis using AI tools." },
  { q: "Will we build websites using AI tools?", a: "Yes, the Web Designing Using AI module teaches you to build complete websites using AI-powered development tools." },
  { q: "How can I apply for admission?", a: "You can apply by filling the contact form on this page, calling us at 8543962191, or visiting our institute at Nanak Ganj, Sipri Bazar, Jhansi." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-2 font-semibold">Got Questions?</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Frequently Asked Questions</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-sm md:text-base py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
