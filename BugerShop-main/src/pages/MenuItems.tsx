import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Zap } from "lucide-react";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";

const MenuItems = () => {
  const { id } = useParams();

  const menuItems = {
    classic: {
      name: "The Classic",
      price: 14.99,
      image: classicBurger,
      description: "Our signature beef patty with crisp lettuce, ripe tomatoes, pickles, and our special sauce on a toasted brioche bun.",
      category: "Classic",
      prepTime: "8-12 mins",
      servings: "1 person",
      calories: 650,
      ingredients: ["Beef Patty (6oz)", "Brioche Bun", "Lettuce", "Tomato", "Pickles", "Special Sauce", "Cheese"],
      nutritionFacts: {
        protein: "35g",
        carbs: "45g",
        fat: "32g",
        fiber: "4g"
      }
    },
    bbq: {
      name: "BBQ Bacon Deluxe",
      price: 17.99,
      image: bbqBurger,
      description: "Premium beef patty topped with crispy bacon, caramelized onions, tangy BBQ sauce, and melted cheddar on a brioche bun.",
      category: "Premium",
      prepTime: "10-15 mins",
      servings: "1 person",
      calories: 780,
      ingredients: ["Beef Patty (6oz)", "Crispy Bacon", "Brioche Bun", "Cheddar Cheese", "Caramelized Onions", "BBQ Sauce"],
      nutritionFacts: {
        protein: "42g",
        carbs: "48g",
        fat: "41g",
        fiber: "3g"
      }
    },
    veggie: {
      name: "Garden Fresh Veggie",
      price: 13.99,
      image: veggieBurger,
      description: "House-made plant-based patty with avocado, sprouts, tomato, and herb aioli on a whole grain bun.",
      category: "Vegetarian",
      prepTime: "6-10 mins",
      servings: "1 person",
      calories: 520,
      ingredients: ["Plant-Based Patty", "Whole Grain Bun", "Avocado", "Sprouts", "Tomato", "Herb Aioli"],
      nutritionFacts: {
        protein: "22g",
        carbs: "52g",
        fat: "18g",
        fiber: "12g"
      }
    }
  };

  const item = menuItems[id as keyof typeof menuItems];

  if (!item) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Menu Item Not Found</h1>
            <p className="text-muted-foreground mb-8">The menu item you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/menu">Back to Menu</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    {item.category}
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                    {item.name}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm">{item.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">{item.servings}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span className="text-sm">{item.calories} cal</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary">
                    ${item.price}
                  </span>
                  <Button size="lg" className="bg-gradient-primary hover:shadow-warm">
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Ingredients */}
              <Card>
                <CardHeader>
                  <CardTitle>Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Nutrition Facts */}
              <Card>
                <CardHeader>
                  <CardTitle>Nutrition Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">{item.nutritionFacts.protein}</div>
                      <div className="text-sm text-muted-foreground">Protein</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">{item.nutritionFacts.carbs}</div>
                      <div className="text-sm text-muted-foreground">Carbs</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">{item.nutritionFacts.fat}</div>
                      <div className="text-sm text-muted-foreground">Fat</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">{item.nutritionFacts.fiber}</div>
                      <div className="text-sm text-muted-foreground">Fiber</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MenuItems;