import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-95" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium border border-primary-foreground/20">
              AXIS HYPNOTHERAPY & PSYCHOTHERAPY ACADEMY
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Become a Certified
            <span className="block mt-2 text-accent">Clinical Hypnotherapist</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-light">
            Professional 3-Level Certification Programme
          </p>
          
          <p className="text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
            Transform lives through the power of ethical, clinically-grounded hypnotherapy. 
            Train with leading experts in Lagos, Nigeria.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="gradient-accent-bg text-accent-foreground hover:opacity-90 text-lg px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105"
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
              className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-full"
              asChild
            >
              <a href="#levels">
                View Programmes
              </a>
            </Button>
          </div>
          
          {/* Facilitator info */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 inline-block border border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm mb-2">Facilitator</p>
            <p className="text-primary-foreground font-serif text-xl font-semibold">Dr. Leonard Okonkwo</p>
            <p className="text-primary-foreground/80 text-sm">Clinical Psychologist | Psychotherapist | Hypnotherapist</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#levels" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
