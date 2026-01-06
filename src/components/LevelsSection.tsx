import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Brain, Sparkles, Award } from "lucide-react";

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
    color: "from-blue-500 to-indigo-600",
  },
  {
    level: 2,
    title: "Advanced Hypnotic Techniques",
    icon: Sparkles,
    price: "₦180,000",
    altPrice: "₦430,000 / $349 (Option B)",
    duration: "24 contact hours – 4 Saturdays",
    format: "Online or Physical (Online includes Sunday practice day)",
    topics: [
      "Ericksonian hypnosis",
      "Rapid & advanced inductions",
      "Parts (Ego State) therapy",
      "Hypnosis for anxiety & trauma",
      "Hypnosis for infertility & psychosomatic conditions",
      "Hypnosis for addiction & compulsive behaviours",
    ],
    outcome: "Therapeutic use of hypnosis in practice",
    color: "from-purple-500 to-pink-600",
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
    color: "from-amber-500 to-orange-600",
  },
];

const LevelsSection = () => {
  return (
    <section id="levels" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            3-Level Certification
            <span className="block text-primary mt-2">Programme</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Progress through our structured curriculum designed for helping professionals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {levels.map((level) => (
            <Card 
              key={level.level} 
              className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${level.popular ? 'ring-2 ring-accent' : ''}`}
            >
              {level.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="gradient-accent-bg text-accent-foreground border-0">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${level.color}`} />
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${level.color}`}>
                    <level.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    Level {level.level}
                  </Badge>
                </div>
                <CardTitle className="font-serif text-xl leading-tight">
                  {level.title}
                </CardTitle>
                <CardDescription className="text-base">
                  <span className="text-2xl font-bold text-foreground">{level.price}</span>
                  <span className="block text-sm mt-1 text-muted-foreground">{level.altPrice}</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>⏱ {level.duration}</p>
                  <p>📍 {level.format}</p>
                </div>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm mb-3 text-foreground">What you'll learn:</p>
                  <ul className="space-y-2">
                    {level.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-3 mt-4">
                  <p className="text-sm">
                    <span className="font-semibold text-primary">Outcome:</span>{" "}
                    <span className="text-foreground">{level.outcome}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bundle offer */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="border-2 border-accent bg-accent/5 shadow-lg">
            <CardContent className="p-8 text-center">
              <Badge className="gradient-accent-bg text-accent-foreground border-0 mb-4 text-sm px-4 py-1">
                Best Value
              </Badge>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                Full 3-Level Bundle
              </h3>
              <p className="text-muted-foreground mb-4">Complete your entire certification journey</p>
              <p className="text-4xl font-bold text-primary mb-2">
                ₦550,000 – ₦650,000
              </p>
              <p className="text-sm text-muted-foreground">
                Save significantly with the complete bundle package
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
