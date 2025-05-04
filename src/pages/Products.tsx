
import { useState } from "react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { useProductFilters } from "@/hooks/useProductFilters";
import FilterSidebar from "@/components/products/FilterSidebar";
import ProductSort from "@/components/products/ProductSort";
import ActiveFilters from "@/components/products/ActiveFilters";
import ProductsGrid from "@/components/products/ProductsGrid";

const Products = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
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
  } = useProductFilters(products);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Browse Products</h1>
            <Button 
              variant="outline" 
              className="md:hidden flex items-center gap-2 active:scale-95 transition-transform"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <aside className={`w-full md:w-64 md:block ${filtersVisible ? 'block' : 'hidden'}`}>
              <FilterSidebar 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                condition={condition}
                setCondition={setCondition}
                clearFilters={clearFilters}
                handleSearchSubmit={handleSearchSubmit}
              />
            </aside>

            {/* Products */}
            <div className="flex-1">
              <ProductSort 
                sortBy={sortBy} 
                setSortBy={setSortBy} 
                productCount={sortedProducts.length} 
              />

              {/* Active Filters */}
              <ActiveFilters 
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
                condition={condition}
                priceRange={priceRange}
                clearSearchTerm={clearSearchTerm}
                clearCategory={clearCategory}
                clearCondition={clearCondition}
                resetPriceRange={resetPriceRange}
              />

              <ProductsGrid 
                products={sortedProducts} 
                clearFilters={clearFilters} 
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
