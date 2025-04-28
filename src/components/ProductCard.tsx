
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from '@/data/products';
import { MapPin, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden card-hover h-full">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-secondary hover:bg-secondary">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
            <Badge variant="outline">{product.condition}</Badge>
          </div>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-3 w-3 mr-1" />
            {product.location}
          </div>
          <div className="flex items-center text-sm">
            <Star className="h-3 w-3 mr-1 fill-yellow-400 stroke-yellow-400" />
            {product.seller.rating}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
