
import React from 'react';
import { Order } from '@/types/types';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Order #{order.id}</h2>
          <p className="text-gray-500 mt-1">Placed on {formatDate(order.createdAt)}</p>
        </div>
        
        <Badge className={`mt-2 md:mt-0 ${getStatusColor(order.status)}`}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </Badge>
      </div>
      
      <Separator className="my-4" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-2">Shipping Information</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{order.buyerName}</p>
            <p>{order.buyerEmail}</p>
            <p>{order.buyerPhone}</p>
            <p>{order.deliveryAddress}</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Order Summary</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div>
        <h3 className="font-medium mb-3">Order Items</h3>
        <div className="space-y-4">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <div className="bg-gray-100 rounded-md w-12 h-12 overflow-hidden mr-3">
                <img 
                  src={item.product.image || "https://via.placeholder.com/48?text=Product"} 
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.product.name}</h4>
                <p className="text-xs text-gray-500">${item.product.price.toFixed(2)} × {item.quantity}</p>
              </div>
              <div className="font-medium">
                ${(item.product.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
