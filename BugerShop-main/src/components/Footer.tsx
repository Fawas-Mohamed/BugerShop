import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-4">
              BurgerShop
            </h3>
            <p className="text-background/70 mb-6 max-w-md">
             Each burger is a masterpiece — built with top-tier ingredients and passion you can taste. Every bite tells our story.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-primary transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/70 hover:text-primary transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-background/70 hover:text-primary transition-colors duration-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Contact Info</h4>
            <ul className="space-y-2 text-background/70">
              <li> Colombo road</li>
              <li>Kandy</li>
              <li>075387488</li>
              <li>Bugershop@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70">
            © 2025 Fawhzz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;