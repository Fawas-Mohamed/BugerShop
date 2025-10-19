import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious gourmet burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          More Than a Meal
          <span className="block bg-gradient-warm bg-clip-text text-transparent">
            It’s Your Burger Journey
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-fade-in">
          Crafted with love, made from the finest ingredients, and served with heart since 2025.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
          >
            <Link to="/order">Order Now</Link>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-4"
          >
            <Link to="/menu">View Menu</Link>
          </Button>
        </div>

        <div className="hidden lg:block absolute -top-10 -left-10 w-20 h-20 bg-accent rounded-full opacity-20 animate-float"></div>
        <div className="hidden lg:block absolute top-1/3 -right-20 w-16 h-16 bg-primary rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="hidden lg:block absolute -bottom-10 left-1/4 w-12 h-12 bg-secondary rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;