
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-accent text-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 slide-in">
            Your One-Stop Marketplace for Tech & Musical Gear
          </h1>
          <p className="text-lg mb-6 opacity-90 slide-in">
            Buy and sell pre-loved electronics and musical instruments. 
            Find amazing deals or give your gear a second life.
          </p>
          <div className="flex flex-wrap gap-4 slide-in">
            <Link to="/products">
              <Button size="lg" variant="secondary">
                Browse Products
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Sell an Item
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=500" 
              alt="Electric guitar" 
              className="rounded-lg shadow-lg transform translate-y-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?q=80&w=500" 
              alt="Laptop" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4 pt-8">
            <img 
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=500" 
              alt="Audio equipment" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1609921141835-710b7fa6e438?q=80&w=500" 
              alt="Keyboard" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
