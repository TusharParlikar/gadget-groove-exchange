
import { Link } from "react-router-dom";
import { Guitar, Package2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <Guitar className="h-5 w-5 text-secondary" />
                <Package2 className="h-5 w-5 text-primary ml-0.5" />
              </div>
              <span className="font-bold text-lg">GadgetGroove</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted marketplace for quality second-hand electronics and musical instruments. 
              Buy with confidence, sell with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Browse All
                </Link>
              </li>
              <li>
                <Link to="/products?category=electronics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=instruments" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Instruments
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sell an Item
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Market Street, San Francisco, CA</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@gadgetgroove.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest deals and updates.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GadgetGroove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
