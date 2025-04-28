
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Menu, X, Search, Guitar, Package2 } from "lucide-react";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Guitar className="h-6 w-6 text-secondary" />
              <Package2 className="h-6 w-6 text-primary ml-0.5" />
            </div>
            <span className="font-bold text-xl">GadgetGroove</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="font-medium hover:text-primary transition-colors">Browse</Link>
            <Link to="/products?category=electronics" className="font-medium hover:text-primary transition-colors">Electronics</Link>
            <Link to="/products?category=instruments" className="font-medium hover:text-primary transition-colors">Instruments</Link>
          </div>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-9 w-[200px] lg:w-[300px]" 
              />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button>Sign In</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out", 
        isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="container px-4 py-4 flex flex-col space-y-4">
          <div className="relative">
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-9 w-full" 
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-muted rounded-lg">Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-muted rounded-lg">Browse</Link>
          <Link to="/products?category=electronics" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-muted rounded-lg">Electronics</Link>
          <Link to="/products?category=instruments" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-muted rounded-lg">Instruments</Link>
          <div className="pt-2 flex flex-col space-y-2">
            <Button>Sign In</Button>
            <Button variant="outline" className="flex items-center">
              <ShoppingCart className="h-4 w-4 mr-2" /> View Cart
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
