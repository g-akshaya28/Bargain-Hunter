import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetails } from './components/ProductDetails';
import { mockProducts } from './data/mockData';
import { Product } from './types/Product';

function App() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Filter products based on category and search query
  useEffect(() => {
    let filtered = products;

    // If there's a search query, show all matching products regardless of category
    if (searchQuery.trim()) {
      filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      // Only apply category filter when there's no search query
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery]);

  const handleSearch = (query: string) => {
    setLoading(true);
    setSearchQuery(query);
    
    // Reset category filter when searching to show all results
    if (query.trim()) {
      setSelectedCategory('All');
    }
    
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Clear search when changing category
    if (searchQuery.trim()) {
      setSearchQuery('');
    }
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} searchQuery={searchQuery} />
      
      {!searchQuery && <Hero />}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchQuery ? `Search results for "${searchQuery}"` : 'Featured Products'}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
        
        <ProductGrid 
          products={filteredProducts}
          loading={loading}
          onViewDetails={handleViewDetails}
        />
      </main>

      {selectedProduct && (
        <ProductDetails 
          product={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Bargain Hunter</h3>
              <p className="text-gray-400">Your trusted partner for smart shopping and price comparison.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Price Comparison</li>
                <li>Price History</li>
                <li>Deal Alerts</li>
                <li>Product Reviews</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platforms</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Amazon</li>
                <li>Flipkart</li>
                <li>Myntra</li>
                <li>Ajio</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bargain Hunter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;