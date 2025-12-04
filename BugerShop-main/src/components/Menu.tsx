import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";

const Menu = () => {
  const menuItems = [
    {
      id: "classic",
      name: "Beef Burger",
      description: "Juicy beef patty, crisp lettuce, fresh tomato, pickles, and our  sauce on a toasted bun.",
      price: "RS.450.00",
      image: classicBurger,
      popular: true,
      category: "Beef"
    },
    {
      id: "bbq",
      name: "BBQ Bacon Deluxe",
      description: "beef patty topped with crispy bacon, caramelized onions, tangy BBQ sauce, and melted cheddar on a brioche bun.",
      price: "RS.550.00",
      image: bbqBurger,
      popular: false,
      category: "Beef"
    },
    {
      id: "veggie",
      name: "Fresh Veggie",
      description: "sprouts, tomato, and herb aioli on a whole grain bun.",
      price: "RS.350.00",
      image: veggieBurger,
      popular: false,
      category: "Vegetarian"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Menu
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our
            <span className="text-primary"> Creations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every burger is a bold creation—made with top-quality ingredients and grilled just right to satisfy every craving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-warm transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.popular && (
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    Popular
                  </Badge>
                )}
                <Badge 
                  variant="outline" 
                  className="absolute top-4 right-4 bg-background/90 text-foreground border-border"
                >
                  {item.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {item.name}
                  </CardTitle>
                  <span className="text-2xl font-bold text-primary">
                    {item.price}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <Button 
                  asChild
                  className="w-full bg-gradient-primary hover:shadow-warm transition-all duration-300"
                >
                  <Link to={`/menu/${item.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see our full menu with sides, drinks, and desserts?
          </p>
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;