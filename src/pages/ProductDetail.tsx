
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { ShoppingCart, Heart, Share2, MapPin, Calendar, Star, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get similar products based on category
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
    
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const handleSaveToWishlist = () => {
    toast({
      title: "Saved to wishlist",
      description: `${product.name} has been saved to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumbs */}
          <div className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:underline">Home</Link>
            {" / "}
            <Link to="/products" className="hover:underline">Products</Link>
            {" / "}
            <Link to={`/products?category=${product.category}`} className="hover:underline">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            {" / "}
            <span>{product.name}</span>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-muted rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <Badge variant="outline" className="mr-2">
                  {product.condition}
                </Badge>
                <p className="text-muted-foreground text-sm flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {product.location}
                </p>
              </div>
              
              <div className="text-3xl font-bold text-primary mb-6 flex items-center">
                <IndianRupee className="h-6 w-6 mr-1" />
                {(product.price * 83).toFixed(0)}
              </div>
              
              <p className="text-gray-700 mb-6">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Button onClick={handleAddToCart} className="flex-1 active:scale-95 transition-transform">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="outline" onClick={handleSaveToWishlist} className="active:scale-95 transition-transform">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="active:scale-95 transition-transform">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              {/* Seller Info */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Seller Information</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold">
                    {product.seller.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{product.seller.name}</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400 mr-1" />
                      <span className="text-sm">{product.seller.rating} Rating</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="ml-auto active:scale-95 transition-transform">
                    Contact Seller
                  </Button>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-md p-3">
                  <div className="text-sm text-muted-foreground">Category</div>
                  <div className="font-medium">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </div>
                </div>
                <div className="border rounded-md p-3">
                  <div className="text-sm text-muted-foreground">Condition</div>
                  <div className="font-medium">{product.condition}</div>
                </div>
                <div className="border rounded-md p-3">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium flex items-center">
                    <MapPin className="h-3 w-3 mr-1" /> {product.location}
                  </div>
                </div>
                <div className="border rounded-md p-3">
                  <div className="text-sm text-muted-foreground">Date Posted</div>
                  <div className="font-medium flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> {product.datePosted}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
