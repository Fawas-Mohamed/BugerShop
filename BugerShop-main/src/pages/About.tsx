import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "First Owned",
      description: "Decades of burger tradition, built on family recipes and perfected through generations"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Award Winning",
      description: "Recognized as the c best burger shop for three consecutive years running."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Made with Love",
      description: "Every burger is with passion, using only the finest local ingredients.."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fresh Daily",
      description: "Our beef is ground fresh daily and our buns are baked every morning."
    }
  ];

  const team = [
    {
      name: "Kumara",
      role: "Head Chef & Owner",
      description: "30+ years of culinary experience and the mastermind behind our recipes."
    },
    {
      name: "Sarath",
      role: "Co-Owner & Manager",
      description: "Ensures every customer has an exceptional dining experience from start to finish."
    },
    {
      name: "Shiva",
      role: "Grill Master",
      description: "15 years of grilling expertise, perfecting every patty to absolute perfection."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Perfect Burgers Since 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             What started as a small family dream has grown into Buger Shop. We believe that great food brings people together, and every burger we serve is a testament to our commitment to quality, flavor, and community
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Meet the Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The People in Behind 
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our passionate team works together to create an unforgettable dining experience for every customer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Our Values</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                What We Stand For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Quality First</h3>
                  <p className="text-muted-foreground">
                    We source the finest ingredients and never compromise on quality. Every burger 
                    is made fresh to order with premium beef and locally sourced produce.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Community Focus</h3>
                  <p className="text-muted-foreground">
                    We're proud to be part of this community. From supporting local suppliers to 
                    hosting charity events, we believe in giving back.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Customer Experience</h3>
                  <p className="text-muted-foreground">
                    Every customer is family to us. We strive to create memorable experiences 
                    that keep you coming back for more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;