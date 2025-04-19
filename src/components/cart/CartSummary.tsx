
import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const { cart, cartTotal } = useCart();
  
  // Calculate totals
  const subtotal = cartTotal;
  const shipping = subtotal > 50 ? 0 : 7.99;
  const total = subtotal + shipping;
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  
  if (cart.length === 0) {
    return null;
  }
  
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="mb-4 text-lg font-medium">Order Summary</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Items ({itemCount})</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-600">Free</span>
          ) : (
            <span>${shipping.toFixed(2)}</span>
          )}
        </div>
        
        {shipping > 0 && (
          <p className="text-xs text-gray-500 mt-1">
            Add ${(50 - subtotal).toFixed(2)} more to qualify for free shipping
          </p>
        )}
        
        <div className="border-t my-3 pt-3"></div>
        
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="mt-6">
        <Link to="/checkout">
          <Button className="w-full bg-harvest-primary hover:bg-harvest-dark">
            Proceed to Checkout
          </Button>
        </Link>
        
        <p className="mt-4 text-xs text-center text-gray-500">
          Secure payment processing. No additional fees.
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
