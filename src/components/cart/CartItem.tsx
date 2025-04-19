
import React from 'react';
import { CartItem as CartItemType } from '@/types/types';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex items-center py-4 border-b">
      <div className="w-20 h-20 mr-4 overflow-hidden bg-gray-100 rounded-md">
        <img 
          src={product.image || 'https://via.placeholder.com/80?text=Product'} 
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">${product.price.toFixed(2)}/{product.unit}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="w-8 h-8" 
          onClick={() => updateQuantity(product.id, quantity - 1)}
        >
          <Minus size={14} />
        </Button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="w-8 h-8" 
          onClick={() => updateQuantity(product.id, quantity + 1)}
          disabled={quantity >= product.stock}
        >
          <Plus size={14} />
        </Button>
      </div>
      
      <div className="flex items-center ml-4 space-x-4">
        <span className="font-medium">${(product.price * quantity).toFixed(2)}</span>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-red-500" 
          onClick={() => removeFromCart(product.id)}
        >
          <Trash size={18} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
