
import React from 'react';
import { Product } from '@/types/types';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Eye } from 'lucide-react';

interface ProductRowProps {
  product: Product;
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
  return (
    <tr>
      <td className="px-4 py-3 text-sm">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-100 mr-3">
            <img 
              src={product.image || "https://via.placeholder.com/40?text=Product"} 
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <Link to={`/admin/products/${product.id}`} className="font-medium hover:underline text-harvest-primary">
            {product.name}
          </Link>
        </div>
      </td>
      <td className="px-4 py-3 text-sm hidden md:table-cell">
        <Badge variant="outline" className="capitalize">
          {product.category}
        </Badge>
      </td>
      <td className="px-4 py-3 text-sm">${product.price.toFixed(2)}/{product.unit}</td>
      <td className="px-4 py-3 text-sm">
        {product.stock > 10 ? (
          <span className="text-green-600">{product.stock} in stock</span>
        ) : product.stock > 0 ? (
          <span className="text-orange-600">Low stock: {product.stock}</span>
        ) : (
          <span className="text-red-600">Out of stock</span>
        )}
      </td>
      <td className="px-4 py-3 text-sm">
        <div className="flex space-x-2">
          <Link to={`/admin/products/${product.id}`}>
            <Button variant="ghost" size="sm">
              <Eye size={16} className="mr-1" />
              View
            </Button>
          </Link>
          <Link to={`/admin/products/${product.id}/edit`}>
            <Button variant="ghost" size="sm">
              <Edit size={16} className="mr-1" />
              Edit
            </Button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
