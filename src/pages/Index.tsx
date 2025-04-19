
import React, { useEffect, useState } from 'react';
import { getProducts } from '@/api/mockApi';
import { Product } from '@/types/types';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative bg-harvest-light py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-harvest-dark">
                Fresh from our farms to your table
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-700">
                Order fresh, locally-grown produce in bulk for your business or family.
                Straight from our farms, picked at peak freshness.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#products" 
                  className="bg-harvest-primary hover:bg-harvest-dark text-white px-6 py-3 rounded-md font-medium"
                >
                  Shop Now
                </a>
                <a 
                  href="/about" 
                  className="bg-white hover:bg-gray-100 text-harvest-primary px-6 py-3 rounded-md font-medium border border-harvest-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-harvest-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-harvest-primary">
                    <path d="M12 22s8-4 8-10V6.5l-8-4-8 4V12c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Fresh & Organic</h3>
                <p className="text-gray-600">
                  All our produce is freshly harvested and 100% organic, with no pesticides or harmful chemicals.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-harvest-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-harvest-primary">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Bulk Savings</h3>
                <p className="text-gray-600">
                  Save money by ordering in bulk for your restaurant, store, or family.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-harvest-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-harvest-primary">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  We deliver right to your doorstep within 24 hours of harvesting for maximum freshness.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products section */}
        <section id="products" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Fresh Products</h2>
            
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-harvest-primary"></div>
              </div>
            ) : (
              <ProductGrid products={products} />
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
