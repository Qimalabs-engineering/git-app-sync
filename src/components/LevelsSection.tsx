import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Brain, Sparkles, Award, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const levels = [
  {
    level: 1,
    title: "Foundations of Clinical Hypnotherapy",
    icon: Brain,
    price: "₦100,000",
    altPrice: "₦180,000 / $99",
    duration: "12 contact hours – 2 Saturdays",
    format: "Online or Physical",
    topics: [
      "Basics & science of hypnosis",
      "Ethics & clinical safety",
      "Hypnotic states & suggestibility",
      "Inductions & deepening techniques",
      "Ego-strengthening & confidence work",
    ],
    outcome: "Safe & effective hypnotic induction",
  },
  {
    level: 2,
    title: "Advanced Hypnotic Techniques",
    icon: Sparkles,
    price: "₦180,000",
    altPrice: "₦430,000 / $349 (Option B)",
    duration: "24 contact hours – 4 Saturdays",
    format: "Online or Physical",
    topics: [
      "Ericksonian hypnosis",
      "Rapid & advanced inductions",
      "Parts (Ego State) therapy",
      "Hypnosis for anxiety & trauma",
      "Hypnosis for infertility & psychosomatic conditions",
      "Hypnosis for addiction & compulsive behaviours",
    ],
    outcome: "Therapeutic use of hypnosis in practice",
    popular: true,
  },
  {
    level: 3,
    title: "Master Clinical Hypnotherapist & Supervisor",
    icon: Award,
    price: "₦350,000 / $349",
    altPrice: "₦400,000 (+20hrs supervised practice)",
    duration: "24 contact hours – 4 Saturdays",
    format: "Physical",
    topics: [
      "Regression therapy (ethical & structured)",
      "Advanced trauma-informed work",
      "Complex & resistant cases",
      "Integrating hypnosis with psychotherapy",
      "Professional practice & documentation",
    ],
    outcome: "Advanced clinical competence",
  },
];

const LevelsSection = () => {
  return (
    <section id="levels" className="py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Our Curriculum</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            3-Level Certification Programme
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Progress through our structured curriculum designed for helping professionals seeking clinical excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {levels.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card ${level.popular ? 'ring-2 ring-accent shadow-accent/20' : ''}`}
              >
                {level.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="gradient-accent-bg text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                {/* Level badge */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                    <level.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                
                <CardHeader className="pt-24 pb-6">
                  <Badge variant="outline" className="w-fit mb-3 text-primary border-primary/30">
                    Level {level.level}
                  </Badge>
                  <h3 className="font-serif text-xl font-bold text-foreground leading-tight">
                    {level.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="pb-6 border-b border-border">
                    <p className="text-3xl font-bold text-foreground">{level.price}</p>
                    <p className="text-sm text-muted-foreground mt-1">{level.altPrice}</p>
                  </div>
                  
                  {/* Meta info */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{level.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{level.format}</span>
                    </div>
                  </div>
                  
                  {/* Topics */}
                  <div className="pt-2">
                    <p className="font-semibold text-sm mb-4 text-foreground">Curriculum:</p>
                    <ul className="space-y-3">
                      {level.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Outcome */}
                  <div className="bg-muted rounded-xl p-4 mt-6">
                    <p className="text-sm">
                      <span className="font-semibold text-primary">Outcome: </span>
                      <span className="text-foreground">{level.outcome}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bundle offer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent shadow-xl overflow-hidden">
            <CardContent className="p-10 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <Badge className="gradient-accent-bg text-accent-foreground border-0 mb-6 text-sm px-6 py-2 font-bold">
                BEST VALUE
              </Badge>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                Full 3-Level Bundle
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Complete your entire certification journey with maximum savings
              </p>
              <p className="text-5xl font-bold text-primary mb-3">
                ₦550,000 – ₦650,000
              </p>
              <p className="text-muted-foreground">
                All three levels included with comprehensive resources
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LevelsSection;
