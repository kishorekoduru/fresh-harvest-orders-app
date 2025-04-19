
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const CartPage = () => {
  const { cart } = useCart();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
          
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="font-medium">Cart Items ({cart.length})</h2>
                  </div>
                  
                  <div className="divide-y">
                    {cart.map((item) => (
                      <div key={item.product.id} className="p-4">
                        <CartItem item={item} />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link to="/">
                    <Button variant="outline" className="flex items-center">
                      <ArrowLeft size={16} className="mr-2" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <CartSummary />
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm border">
              <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link to="/">
                <Button className="bg-harvest-primary hover:bg-harvest-dark">
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
