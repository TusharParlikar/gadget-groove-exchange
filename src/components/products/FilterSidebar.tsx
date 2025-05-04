
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "@/data/categories";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface FilterSidebarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  condition: string[];
  setCondition: (value: string[]) => void;
  clearFilters: () => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
}

const FilterSidebar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  condition,
  setCondition,
  clearFilters,
  handleSearchSubmit
}: FilterSidebarProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border mb-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Filters</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters} 
          className="h-8 text-xs active:scale-95 transition-transform"
        >
          Clear All
        </Button>
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="text-sm font-medium mb-2 block">Search</label>
          <form onSubmit={handleSearchSubmit} className="relative">
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <button type="submit" className="sr-only">Search</button>
          </form>
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium mb-2 block">Category</label>
          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <label className="text-sm font-medium mb-4 block">Price Range (₹)</label>
          <Slider
            defaultValue={priceRange}
            max={166000}
            step={4150}  // 50 * 83
            onValueChange={setPriceRange}
            className="my-6"
          />
          <div className="flex items-center justify-between text-sm">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>

        {/* Condition */}
        <div>
          <label className="text-sm font-medium mb-2 block">Condition</label>
          <div className="space-y-2">
            {["New", "Like New", "Good", "Fair", "Poor"].map((c) => (
              <div key={c} className="flex items-center space-x-2">
                <Checkbox
                  id={`condition-${c}`}
                  checked={condition.includes(c)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setCondition([...condition, c]);
                    } else {
                      setCondition(condition.filter(item => item !== c));
                    }
                  }}
                />
                <label htmlFor={`condition-${c}`} className="text-sm">
                  {c}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
