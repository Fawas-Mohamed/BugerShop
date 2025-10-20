import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Heart, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Flame className="h-8 w-8 text-primary" />,
      title: "Fire-Grilled",
      description: "Our burgers are cooked over an open flame for that authentic smoky flavor."
    },
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Made with Love",
      description: "Every burger is with passion and attention to detail by our expert chefs."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Healthy",
      description: "We source only the finest ingredients from local farms and trusted suppliers."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Buger Shop Since
            <span className="text-primary"> 2025</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Born from a passion for exceptional food and genuine hospitality, BurgerShop 
            We believe that every burger tells a story, and we're here to make yours unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center p-8 hover:shadow-warm transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Join Our Burger Revolution
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Experience the difference that quality ingredients and expert craftsmanship make. 
            Every bite is a testament to our commitment to excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-white/20 rounded-full px-4 py-2">Halal Chicken</span>
            <span className="bg-white/20 rounded-full px-4 py-2">Local Produce</span>
            <span className="bg-white/20 rounded-full px-4 py-2">House-Made Sauces</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;