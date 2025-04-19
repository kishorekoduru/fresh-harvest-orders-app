import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '@/api/mockApi';
import { Product } from '@/types/types';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ArrowLeft, Minus, Plus } from 'lucide-react';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) return;
        
        const allProducts = await getProducts();
        const foundProduct = allProducts.find(p => p.id === productId);
        setProduct(foundProduct || null);
      } catch (error) {
        console.error('Failed to load product:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-harvest-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={goBack}>Go Back</Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 pl-0" 
          onClick={goBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={product.image || 'https://via.placeholder.com/500?text=Product'} 
              alt={product.name}
              className="object-cover w-full h-full aspect-square"
            />
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-harvest-primary mb-4">
              ${product.price.toFixed(2)}/{product.unit}
            </p>
            
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Category</h2>
              <p className="capitalize text-gray-600">{product.category}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                {product.stock > 0 
                  ? `${product.stock} ${product.unit}s available` 
                  : 'Out of stock'}
              </p>
            </div>
            
            {product.stock > 0 ? (
              <>
                <div className="flex items-center mb-6">
                  <span className="mr-4">Quantity:</span>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="h-8 w-8"
                    >
                      <Minus size={16} />
                    </Button>
                    <span className="w-8 text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                      className="h-8 w-8"
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
                
                <Button 
                  className="bg-harvest-primary hover:bg-harvest-dark w-full md:w-auto"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </>
            ) : (
              <Button disabled className="w-full md:w-auto">
                Out of Stock
              </Button>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
