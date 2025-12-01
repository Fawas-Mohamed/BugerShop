import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, ShoppingCart, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";

const Order = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const { toast } = useToast();

  const menuItems = [
    {
      id: "classic",
      name: "The Classic",
      price: 450,
      image: classicBurger,
      description: "Our beef patty with crisp lettuce, ripe tomatoes, pickles, and our special sauce on a toasted brioche bun.",
      category: "Classic",
      popular: true
    },
    {
      id: "bbq",
      name: "BBQ Bacon Deluxe",
      price: 550,
      image: bbqBurger,
      description: "beef patty topped with crispy bacon, caramelized onions, tangy BBQ sauce, and melted cheddar on a brioche bun.",
      category: "BBQ",
      popular: true
    },
    {
      id: "veggie",
      name: "Fresh Veggie",
      price: 350,
      image: veggieBurger,
      description: "plant-based patty with avocado, sprouts, tomato, and herb aioli on a whole grain bun.",
      category: "Vegetarian",
      popular: false
    }
  ];

  const addToCart = (itemId: string) => {
    const item = menuItems.find(i => i.id === itemId);
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
    
    if (item) {
      toast({
        title: "Added to Cart",
        description: `RS.{item.name} has been added to your cart`,
      });
    }
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) - 1)
    }));
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(i => i.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getCartItemsCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Order Online
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Fresh burgers delivered to your door or ready for pickup
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                variant={orderType === 'pickup' ? 'default' : 'outline'}
                onClick={() => setOrderType('pickup')}
                className="bg-gradient-primary"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Pickup
              </Button>
              <Button 
                variant={orderType === 'delivery' ? 'default' : 'outline'}
                onClick={() => setOrderType('delivery')}
                className="bg-gradient-primary"
              >
                <Clock className="h-4 w-4 mr-2" />
                Delivery
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
              <div className="space-y-6">
                {menuItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                        {item.popular && (
                          <Badge className="absolute top-4 left-4">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                            <Badge variant="secondary" className="mb-2">
                              {item.category}
                            </Badge>
                          </div>
                          <span className="text-2xl font-bold text-primary">
                            RS.{item.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-6">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              disabled={!cart[item.id]}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">
                              {cart[item.id] || 0}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => addToCart(item.id)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button onClick={() => addToCart(item.id)}>
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Order Summary ({getCartItemsCount()} items)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {Object.entries(cart)
                      .filter(([, quantity]) => quantity > 0)
                      .map(([itemId, quantity]) => {
                        const item = menuItems.find(i => i.id === itemId);
                        if (!item) return null;
                        return (
                          <div key={itemId} className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-muted-foreground">
                                RS.{item.price} x {quantity}
                              </div>
                            </div>
                            <div className="font-medium">
                              RS.{(item.price * quantity).toFixed(2)}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  
                  {getCartItemsCount() > 0 && (
                    <>
                      <Separator className="my-4" />
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-primary">RS.{getCartTotal().toFixed(2)}</span>
                      </div>
                      <Separator className="my-4" />
                    </>
                  )}

                  <div className="space-y-4">
                    <h3 className="font-semibold">Customer Information</h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      {orderType === 'delivery' && (
                        <div>
                          <Label htmlFor="address">Delivery Address</Label>
                          <Textarea id="address" placeholder="Enter your delivery address" />
                        </div>
                      )}
                      <div>
                        <Label htmlFor="notes">Special Instructions</Label>
                        <Textarea id="notes" placeholder="Any special requests?" />
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-6 bg-gradient-primary hover:shadow-warm"
                    disabled={getCartItemsCount() === 0}
                  >
                    Place Order - RS.{getCartTotal().toFixed(2)}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Order;