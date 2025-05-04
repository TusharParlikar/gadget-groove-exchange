
import { X } from "lucide-react";
import { categories } from "@/data/categories";

interface ActiveFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  condition: string[];
  priceRange: number[];
  clearSearchTerm: () => void;
  clearCategory: () => void;
  clearCondition: () => void;
  resetPriceRange: () => void;
}

const ActiveFilters = ({
  searchTerm,
  selectedCategory,
  condition,
  priceRange,
  clearSearchTerm,
  clearCategory,
  clearCondition,
  resetPriceRange,
}: ActiveFiltersProps) => {
  if (
    !searchTerm && 
    !selectedCategory && 
    condition.length === 0 && 
    priceRange[0] === 0 && 
    priceRange[1] === 166000
  ) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {searchTerm && (
        <div className="bg-muted text-xs py-1 px-3 rounded-full flex items-center gap-1">
          Search: {searchTerm}
          <button onClick={clearSearchTerm}>
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
      {selectedCategory && (
        <div className="bg-muted text-xs py-1 px-3 rounded-full flex items-center gap-1">
          Category: {categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
          <button onClick={clearCategory}>
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
      {condition.length > 0 && (
        <div className="bg-muted text-xs py-1 px-3 rounded-full flex items-center gap-1">
          Condition: {condition.join(", ")}
          <button onClick={clearCondition}>
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
      {(priceRange[0] > 0 || priceRange[1] < 166000) && (
        <div className="bg-muted text-xs py-1 px-3 rounded-full flex items-center gap-1">
          Price: ₹{priceRange[0]} - ₹{priceRange[1]}
          <button onClick={resetPriceRange}>
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ActiveFilters;
