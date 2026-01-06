import { MapPin, Calendar, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const VenueSection = () => {
  return (
    <section className="py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Venue Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Location</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10">
                Training Venue
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-primary/10 shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Physical Classes</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Axis Mental Health Services Ltd<br />
                      33, Oluwaleimu Street,<br />
                      Off Allen Avenue, Ikeja, Lagos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-primary/10 shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Start Dates</h3>
                    <p className="text-muted-foreground">
                      To be communicated to successful candidates upon registration
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-3xl p-10 shadow-2xl border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Ready to Transform Lives?
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Registration is now open with limited seats available. Secure your spot today.
                  </p>
                  
                  <div className="flex items-center gap-4 p-5 bg-muted rounded-2xl mb-8">
                    <div className="p-3 rounded-xl bg-accent/20">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call / WhatsApp</p>
                      <p className="font-bold text-xl text-foreground">+234 805 280 6352</p>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full gradient-accent-bg text-accent-foreground hover:opacity-90 rounded-2xl py-7 text-lg font-semibold shadow-lg"
                    asChild
                  >
                    <a href="https://wa.me/2348052806352" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Contact Us on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
