import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import PhoneModal from "./PhoneModal";

const FooterSection = () => {
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const phoneNumber = "+234 805 280 6352";
  const address = "33, Oluwaleimu Street, Off Allen Avenue, Ikeja, Lagos";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="gradient-bg py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              AXIS HYPNOTHERAPY & PSYCHOTHERAPY ACADEMY
            </h2>
            <p className="text-primary-foreground/80 text-lg italic">
              Training Ethical & Clinically Grounded Hypnotherapists
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
            <button
              onClick={() => setPhoneModalOpen(true)}
              className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-primary-foreground/10">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm">Phone / WhatsApp</p>
                <p className="text-primary-foreground font-semibold">{phoneNumber}</p>
              </div>
            </button>
            
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="p-3 rounded-xl bg-primary-foreground/10">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm">Location</p>
                <p className="text-primary-foreground font-semibold">Ikeja, Lagos</p>
              </div>
            </a>
            
            <a
              href="mailto:axismentalhealthservices@gmail.com"
              className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="p-3 rounded-xl bg-primary-foreground/10">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm">Email</p>
                <p className="text-primary-foreground font-semibold">axismentalhealthservices@gmail.com</p>
              </div>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm mb-12">
            <a href="#levels" className="hover:text-primary-foreground transition-colors font-medium">Programmes</a>
            <a href="https://wa.me/2348052806352" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors font-medium">Register</a>
            <a href="#levels" className="hover:text-primary-foreground transition-colors font-medium">Pricing</a>
          </div>
          
          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Axis Hypnotherapy & Psychotherapy Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      <PhoneModal
        open={phoneModalOpen}
        onOpenChange={setPhoneModalOpen}
        phoneNumber={phoneNumber}
      />
    </footer>
  );
};

export default FooterSection;
