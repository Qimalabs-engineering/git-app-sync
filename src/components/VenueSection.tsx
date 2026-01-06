import { MapPin, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const VenueSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Venue Info */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Training Venue
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Physical Classes</h3>
                    <p className="text-muted-foreground">
                      Axis Mental Health Services Ltd<br />
                      33, Oluwaleimu Street,<br />
                      Off Allen Avenue, Ikeja, Lagos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Start Dates</h3>
                    <p className="text-muted-foreground">
                      To be communicated to successful candidates
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ready to Transform Lives?
              </h3>
              <p className="text-muted-foreground mb-6">
                Registration is now open with limited seats available. Secure your spot today.
              </p>
              
              <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl mb-6">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Call / WhatsApp</p>
                  <p className="font-semibold text-foreground">+234 805 280 6352</p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full gradient-accent-bg text-accent-foreground hover:opacity-90 rounded-xl py-6 text-lg"
                asChild
              >
                <a href="https://wa.me/2348052806352" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
