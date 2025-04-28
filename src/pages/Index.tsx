
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Why choose us section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose GadgetGroove?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <ShoppingBag className="h-10 w-10 text-primary" />,
                  title: "Quality Products",
                  description: "All items are verified and checked for quality before listing."
                },
                {
                  icon: <Truck className="h-10 w-10 text-primary" />,
                  title: "Fast Shipping",
                  description: "Most sellers offer quick shipping options to get your items fast."
                },
                {
                  icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                  title: "Buyer Protection",
                  description: "Our buyer protection program ensures a safe purchase every time."
                },
                {
                  icon: <HeartHandshake className="h-10 w-10 text-primary" />,
                  title: "Community Trust",
                  description: "Join our trusted community of music and tech enthusiasts."
                }
              ].map((item, index) => (
                <div key={index} className="p-6 border rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CategorySection />
        <FeaturedProducts />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-accent text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Ready to sell your gear?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of users who have successfully sold their electronics and instruments on our platform.
              It's quick, easy, and free to list your items.
            </p>
            <Button size="lg" variant="secondary">
              Start Selling Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
