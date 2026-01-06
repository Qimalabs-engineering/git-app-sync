import { BookOpen, Users, FileText, Award } from "lucide-react";
import { motion } from "framer-motion";

const includes = [
  {
    icon: BookOpen,
    title: "Training Slides",
    description: "Comprehensive visual materials curated for each module",
  },
  {
    icon: FileText,
    title: "Participant Manual",
    description: "Detailed reference guide for continuous learning",
  },
  {
    icon: Users,
    title: "Live Practical Sessions",
    description: "Hands-on practice with real-world clinical scenarios",
  },
  {
    icon: Award,
    title: "Professional Certification",
    description: "Internationally recognized certification at each level",
  },
];

const IncludesSection = () => {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Resources</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            What's Included
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every level comes with comprehensive resources designed for your professional success
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {includes.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg text-primary-foreground mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludesSection;
