
import React from 'react';
import { Product } from '@/types/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, 1);
  };
  
  return (
    <Card className="product-card overflow-hidden">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <img 
          src={product.image || 'https://via.placeholder.com/300?text=Product'} 
          alt={product.name}
          className="object-cover w-full h-full"
        />
        {product.stock <= 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white font-medium">
            Out of Stock
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between mb-1">
          <h3 className="font-medium">{product.name}</h3>
          <span className="font-semibold text-harvest-primary">${product.price.toFixed(2)}/{product.unit}</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          disabled={product.stock <= 0}
          className="w-full bg-harvest-primary hover:bg-harvest-dark"
        >
          <Plus size={16} className="mr-1" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
