
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductSortProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  productCount: number;
}

const ProductSort = ({ sortBy, setSortBy, productCount }: ProductSortProps) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <p className="text-muted-foreground">
        {productCount} {productCount === 1 ? 'product' : 'products'} found
      </p>
      <div className="flex items-center">
        <span className="text-sm mr-2">Sort by:</span>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductSort;
