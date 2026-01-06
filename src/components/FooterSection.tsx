const FooterSection = () => {
  return (
    <footer className="gradient-bg py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          AXIS HYPNOTHERAPY & PSYCHOTHERAPY ACADEMY
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Training Ethical & Clinically Grounded Hypnotherapists
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/60 text-sm">
          <a href="#levels" className="hover:text-primary-foreground transition-colors">Programmes</a>
          <span>•</span>
          <a href="https://wa.me/2348052806352" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Contact</a>
          <span>•</span>
          <span>+234 805 280 6352</span>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Axis Hypnotherapy & Psychotherapy Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
