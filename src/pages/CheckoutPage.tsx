
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartItem from '@/components/cart/CartItem';
import CheckoutForm from '@/components/checkout/CheckoutForm';

const CheckoutPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to cart if the cart is empty
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);
  
  if (cart.length === 0) {
    return null; // Don't render anything while redirecting
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-screen-lg mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/cart')}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Cart
          </Button>
          
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h2 className="font-medium mb-4">Delivery Information</h2>
                <CheckoutForm />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="font-medium">Order Summary ({cart.length} items)</h2>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.product.id} className="p-4 border-b">
                      <CartItem item={item} />
                    </div>
                  ))}
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${cart.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
