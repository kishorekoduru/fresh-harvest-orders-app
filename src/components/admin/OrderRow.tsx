
import React from 'react';
import { Order } from '@/types/types';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OrderStatusBadge from '../orders/OrderStatusBadge';
import { Eye } from 'lucide-react';

interface OrderRowProps {
  order: Order;
}

const OrderRow: React.FC<OrderRowProps> = ({ order }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <tr>
      <td className="px-4 py-3 text-sm">
        <Link to={`/admin/orders/${order.id}`} className="font-medium hover:underline text-harvest-primary">
          {order.id}
        </Link>
      </td>
      <td className="px-4 py-3 text-sm">{order.buyerName}</td>
      <td className="px-4 py-3 text-sm hidden md:table-cell">{formatDate(order.createdAt)}</td>
      <td className="px-4 py-3 text-sm hidden md:table-cell">${order.total.toFixed(2)}</td>
      <td className="px-4 py-3 text-sm">
        <OrderStatusBadge status={order.status} />
      </td>
      <td className="px-4 py-3 text-sm">
        <Link to={`/admin/orders/${order.id}`}>
          <Button variant="ghost" size="sm">
            <Eye size={16} className="mr-1" />
            View
          </Button>
        </Link>
      </td>
    </tr>
  );
};

export default OrderRow;
