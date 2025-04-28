import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X } from "lucide-react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [condition, setCondition] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  // Filter products based on current filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCondition = condition.length > 0 ? condition.includes(product.condition) : true;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesCondition;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
      default:
        return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime();
    }
  });
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setPriceRange([0, 2000]);
    setCondition([]);
    setSortBy("newest");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Browse Products</h1>
            <Button 
              variant="outline" 
              className="md:hidden flex items-center gap-2"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <aside className={`w-full md:w-64 md:block ${filtersVisible ? 'block' : 'hidden'}`}>
              <div className="bg-white p-6 rounded-lg border mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs">
                    Clear All
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Search</label>
                    <div className="relative">
                      <Input
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                      />
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
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
                    <label className="text-sm font-medium mb-4 block">Price Range</label>
                    <Slider
                      defaultValue={priceRange}
                      max={2000}
                      step={50}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
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
            </aside>

            {/* Products */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} found
                </p>
                <div className="flex items-center">
                  <span className="text-sm mr-2">Sort by:</span>
                  <Select
                    value={sortBy}
                    onValueChange={setSortBy}
                  >
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

              {/* Active Filters */}
              {(searchTerm || selectedCategory || condition.length > 0 || 
                priceRange[0] > 0 || priceRange[1] < 2000) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {searchTerm && (
                    <div className="bg-muted text-xs py-1 px-3 rounded-full flex items-center gap-1">
                      Search: {searchTerm}
                      <button onClick={() => setSearchTerm("")}>
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  {selectedCategory && (
                    <div className="bg-muted text-xs py-1 px-3 rounded-full flex items-center gap-1">
                      Category: {categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
                      <button onClick={() => setSelectedCategory("")}>
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  {condition.length > 0 && (
                    <div className="bg-muted text-xs py-1 px-3 rounded-full flex items-center gap-1">
                      Condition: {condition.join(", ")}
                      <button onClick={() => setCondition([])}>
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 2000) && (
                    <div className="bg-muted text-xs py-1 px-3 rounded-full flex items-center gap-1">
                      Price: ${priceRange[0]} - ${priceRange[1]}
                      <button onClick={() => setPriceRange([0, 2000])}>
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
