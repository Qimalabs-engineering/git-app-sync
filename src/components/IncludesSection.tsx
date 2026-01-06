import { BookOpen, Users, FileText, Award } from "lucide-react";

const includes = [
  {
    icon: BookOpen,
    title: "Training Slides",
    description: "Comprehensive visual materials for each module",
  },
  {
    icon: FileText,
    title: "Participant Manual",
    description: "Detailed reference guide for ongoing learning",
  },
  {
    icon: Users,
    title: "Live Practical Sessions",
    description: "Hands-on practice with real-world scenarios",
  },
  {
    icon: Award,
    title: "Professional Certification",
    description: "Recognized certification at each level",
  },
];

const IncludesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            What's Included
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every level comes with comprehensive resources for your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {includes.map((item, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-bg text-primary-foreground mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludesSection;
