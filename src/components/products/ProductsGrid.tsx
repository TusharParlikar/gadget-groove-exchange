
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

interface ProductsGridProps {
  products: Product[];
  clearFilters: () => void;
}

const ProductsGrid = ({ products, clearFilters }: ProductsGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium mb-2">No products found</h3>
        <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
        <Button onClick={clearFilters} className="active:scale-95 transition-transform">
          Clear All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
