import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";
import heroBurger from "@/assets/hero-burger.jpg";
import happycustomer from "@/assets/happy customer.jpg";
import ingredients from "@/assets/ingredients.jpg";
import shop from "@/assets/shop.jpg";
import worker from "@/assets/worker.jpg";
import chef from "@/assets/chef works.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: heroBurger,
      title: "A Burger Experience Like No Other",
      category: "Featured",
      description: "beef patty crafted to perfection",
      likes: 247
    },
    {
      id: 2,
      image: classicBurger,
      title: "The Classic Masterpiece",
      category: "Menu",
      description: "Traditional flavors that never go out of style",
      likes: 189
    },
    {
      id: 3,
      image: bbqBurger,
      title: "BBQ Bacon Deluxe",
      category: "Menu",
      description: "Smoky BBQ goodness with crispy bacon",
      likes: 312
    },
    {
      id: 4,
      image: veggieBurger,
      title: "Fresh Veggie",
      category: "Menu",
      description: "Plant-based perfection for conscious eaters",
      likes: 156
    },
    {
      id: 5,
      image: chef,
      title: "Chefs",
      category: "Behind the Scenes",
      description: "Our chefs at work creating culinary art",
      likes: 98
    },
    {
      id: 6,
      image: ingredients,
      title: "Fresh Ingredients",
      category: "Behind the Scenes",
      description: "Only the finest, locally sourced ingredients",
      likes: 143
    },
    {
      id: 7,
      image: shop,
      title: "Shop Main",
      category: "Restaurant",
      description: "Clean and clear impressive are",
      likes: 201
    },
    {
      id: 8,
      image: happycustomer,
      title: "Happy Customers",
      category: "Restaurant",
      description: "Smiles all around at BurgerShop",
      likes: 278
    },
    {
      id: 9,
      image: worker,
      title: "Buger Worker",
      category: "Featured",
      description: "Every burger is a work of art",
      likes: 167
    }
  ];

  const categories = ["All", "Featured", "Menu", "Behind the Scenes", "Restaurant"];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <Camera className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take a visual journey through BurgerShop. From our mouth-watering burgers to behind-the-scenes moments, discover what makes us special.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/20">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/20">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4">
                    {item.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Heart className="h-4 w-4" />
                      <span>{item.likes} likes</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Photos
            </Button>
          </div>

          <section className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Follow Us on Instagram</h2>
            <p className="text-muted-foreground mb-8">
              Tag us @burgerShop for a chance to be featured in our gallery!
            </p>
            <Button className="bg-gradient-primary hover:shadow-warm">
              @BurgerShop
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;