
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Product } from "@/data/products";

export const useProductFilters = (products: Product[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const searchParam = searchParams.get("search") || "";
  
  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState([0, 166000]);  // Using rupee equivalent (2000 * 83)
  const [condition, setCondition] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Update search term when URL parameter changes
  useEffect(() => {
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [searchParam]);
  
  // Filter products based on current filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const rupeesPrice = product.price * 83;
    const matchesPrice = rupeesPrice >= priceRange[0] && rupeesPrice <= priceRange[1];
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
    setPriceRange([0, 166000]);
    setCondition([]);
    setSortBy("newest");
    setSearchParams({});
  };

  // Clear individual filters
  const clearSearchTerm = () => {
    setSearchTerm("");
    setSearchParams(params => {
      params.delete("search");
      return params;
    });
  };

  const clearCategory = () => {
    setSelectedCategory("");
    setSearchParams(params => {
      params.delete("category");
      return params;
    });
  };

  const clearCondition = () => {
    setCondition([]);
  };

  const resetPriceRange = () => {
    setPriceRange([0, 166000]);
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(params => {
      if (searchTerm) {
        params.set("search", searchTerm);
      } else {
        params.delete("search");
      }
      return params;
    });
  };

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSearchParams(params => {
      if (value && value !== "all") {
        params.set("category", value);
      } else {
        params.delete("category");
      }
      return params;
    });
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory: handleCategoryChange,
    priceRange,
    setPriceRange,
    condition,
    setCondition,
    sortBy,
    setSortBy,
    filtersVisible,
    setFiltersVisible,
    sortedProducts,
    clearFilters,
    clearSearchTerm,
    clearCategory,
    clearCondition,
    resetPriceRange,
    handleSearchSubmit,
  };
};
