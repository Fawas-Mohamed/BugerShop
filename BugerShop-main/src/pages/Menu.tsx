import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";
import heroBurger from "@/assets/hero-burger.jpg";
import sodas from "@/assets/sodas.jpg";
import fries from "@/assets/chips.jpg";
import potato from "@/assets/Potato Fries.jpg";
import milkshake from "@/assets/Milkshakes.jpg";
import rings from "@/assets/onian ring.jpg";
import brownee from "@/assets/brownee (1).jpg";

const Menu = () => {
  const menuItems = [

    {
      id: "classic",
      name: "Beef Burger",
      description: "Our signature beef patty with crisp lettuce, ripe tomatoes, pickles, and our special sauce on a toasted bun.",
      price: 450,
      image: classicBurger,
      popular: true,
      category: "Burgers"
    },
    {
      id: "bbq",
      name: "BBQ Bacon Deluxe",
      description: "beef patty topped with crispy bacon, caramelized onions, tangy BBQ sauce, and melted cheddar on a brioche bun.",
      price: 550,
      image: bbqBurger,
      popular: true,
      category: "Burgers"
    },
    {
      id: "veggie",
      name: "Fresh Veggie",
      description: " sprouts, tomato, and herb aioli on a whole grain bun.",
      price: 350,
      image: veggieBurger,
      popular: false,
      category: "Burgers"
    },
    {
      id: "",
      name: "Rostat Chicken",
      description: "Tender roasted chicken breast with garlic herb aioli, fresh arugula, and aged cheddar on a toasted brioche bun.",
      price: 550,
      image: heroBurger,
      popular: false,
      category: "Burgers"
    },
    {
      id: "fries",
      name: "Crispy Fries",
      description: "Hand-cut golden fries seasoned with sea salt and herbs.",
      price: 200,
      image: fries,
      popular: true,
      category: "Sides"
    },
    {
      id: "onion-rings",
      name: "Beer Battered Onion Rings",
      description: "Thick-cut onions in crispy beer batter served with ranch dip.",
      price: 250,
      image: rings,
      popular: false,
      category: "Sides"
    },
    {
      id: "sweet-potato",
      name: "Sweet Potato Fries",
      description: "Crispy sweet potato fries with chipotle mayo.",
      price: 250,
      image: potato,
      popular: false,
      category: "Sides"
    },
    {
      id: "soda",
      name: "Sodas",
      description: "sodas in cola, orange, and root beer flavors.",
      price: 200,
      image: sodas,
      popular: true,
      category: "Drinks"
    },
    {
      id: "milkshake",
      name: "Milkshakes",
      description: "Thick and creamy shakes in vanilla, chocolate, and strawberry.",
      price: 200,
      image: milkshake,
      popular: true,
      category: "Drinks"
    },
    {
      id: "brownie",
      name: "Chocolate Brownie",
      description: "Warm fudge brownie with vanilla ice cream and caramel sauce.",
      price: 250,
      image: brownee,
      popular: false,
      category: "Desserts"
    }
  ];

  const categories = ["All", "Burgers", "Sides", "Drinks", "Desserts"];

  const filterByCategory = (category: string) => {
    if (category === "All") return menuItems;
    return menuItems.filter(item => item.category === category);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Full Menu
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our complete selection of burgers, crispy sides, refreshing drinks, and decadent desserts.
            </p>
            <div className="max-w-md mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search menu items..." className="pl-10" />
            </div>
            <Button asChild className="bg-gradient-primary hover:shadow-warm">
              <Link to="/order">Start Your Order</Link>
            </Button>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-5 w-full max-w-2xl">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filterByCategory(category).map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {item.popular && (
                          <Badge className="absolute top-4 left-4">
                            Popular
                          </Badge>
                        )}
                        <Badge 
                          variant="outline" 
                          className="absolute top-4 right-4 bg-background/90"
                        >
                          {item.category}
                        </Badge>
                      </div>
                      
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl font-bold">
                            {item.name}
                          </CardTitle>
                          <span className="text-2xl font-bold text-primary">
                            RS.{item.price}
                          </span>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex gap-2">
                          {item.category === "Burgers" ? (
                            <Button 
                              asChild
                              variant="outline"
                              className="flex-1"
                            >
                              <Link to={`/menu/${item.id}`}>View Details</Link>
                            </Button>
                          ) : (
                            <Button 
                              variant="outline"
                              className="flex-1"
                            >
                              View Details
                            </Button>
                          )}
                          <Button className="flex-1 bg-gradient-primary hover:shadow-warm">
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <section className="mt-20 text-center bg-gradient-to-br from-muted to-background rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose from pickup or delivery options. All our items are freshly prepared to order with the finest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-warm">
                <Link to="/order">Order Online</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/reservations">Reserve a Table</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;