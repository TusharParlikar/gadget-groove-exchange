
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { categories } from '@/data/categories';
import { 
  Camera, Guitar, Headphones, Laptop, 
  Music, Music2, Smartphone, Tv
} from "lucide-react";

const getCategoryIcon = (icon: string) => {
  switch (icon) {
    case 'phone':
      return <Smartphone className="h-6 w-6" />;
    case 'laptop':
      return <Laptop className="h-6 w-6" />;
    case 'guitar':
      return <Guitar className="h-6 w-6" />;
    case 'headphones':
      return <Headphones className="h-6 w-6" />;
    case 'music':
      return <Music className="h-6 w-6" />;
    case 'tv':
      return <Tv className="h-6 w-6" />;
    case 'camera':
      return <Camera className="h-6 w-6" />;
    case 'music-2':
      return <Music2 className="h-6 w-6" />;
    default:
      return <Music className="h-6 w-6" />;
  }
};

const CategorySection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group"
            >
              <Card className="h-full card-hover transition-all border-2 hover:border-primary">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {category.count} listings
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
