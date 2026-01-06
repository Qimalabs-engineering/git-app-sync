import { Button } from "@/components/ui/button";
import { Phone, ArrowDown, GraduationCap, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Academy Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <span className="px-6 py-3 bg-primary-foreground/10 backdrop-blur-md rounded-full text-primary-foreground text-sm font-medium tracking-wider border border-primary-foreground/20">
              AXIS HYPNOTHERAPY & PSYCHOTHERAPY ACADEMY
            </span>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1]"
          >
            Become a Certified
            <span className="block mt-3 text-accent drop-shadow-lg">Clinical Hypnotherapist</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light tracking-wide"
          >
            Professional 3-Level Certification Programme
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transform lives through the power of ethical, clinically-grounded hypnotherapy. 
            Train with leading experts in Lagos, Nigeria.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="gradient-accent-bg text-accent-foreground hover:opacity-90 text-lg px-10 py-7 rounded-full shadow-2xl transition-all hover:scale-105 font-semibold"
              asChild
            >
              <a href="https://wa.me/2348052806352" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Register Now
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground/5 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15 text-lg px-10 py-7 rounded-full backdrop-blur-sm"
              asChild
            >
              <a href="#levels">
                View Programmes
              </a>
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">3</div>
              <div className="text-sm text-primary-foreground/60">Certification Levels</div>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">60+</div>
              <div className="text-sm text-primary-foreground/60">Contact Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">100%</div>
              <div className="text-sm text-primary-foreground/60">Practical Training</div>
            </div>
          </motion.div>
          
          {/* Facilitator info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 inline-block border border-primary-foreground/20 shadow-xl"
          >
            <p className="text-primary-foreground/60 text-sm uppercase tracking-wider mb-3">Lead Facilitator</p>
            <p className="text-primary-foreground font-serif text-2xl font-bold mb-2">Dr. Leonard Okonkwo</p>
            <p className="text-primary-foreground/80 text-sm">Clinical Psychologist • Psychotherapist • Hypnotherapist</p>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#levels" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
