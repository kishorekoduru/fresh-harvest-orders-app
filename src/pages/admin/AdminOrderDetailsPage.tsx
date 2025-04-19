
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { getOrder, updateOrderStatus } from '@/api/mockApi';
import { Order, OrderStatus } from '@/types/types';
import OrderDetails from '@/components/orders/OrderDetails';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const AdminOrderDetailsPage = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  
  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return;
      
      try {
        const data = await getOrder(orderId);
        if (data) {
          setOrder(data);
        }
      } catch (error) {
        console.error('Failed to load order:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrder();
  }, [orderId]);
  
  const handleStatusChange = async (status: OrderStatus) => {
    if (!orderId || !order) return;
    
    setUpdating(true);
    
    try {
      const updatedOrder = await updateOrderStatus(orderId, status);
      setOrder(updatedOrder);
      toast.success(`Order status updated to ${status}`);
    } catch (error) {
      console.error('Failed to update order status:', error);
      toast.error('Failed to update order status');
    } finally {
      setUpdating(false);
    }
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1">
        <div className="p-6">
          <Link to="/admin/orders">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to Orders
            </Button>
          </Link>
          
          <h1 className="text-2xl font-bold mb-6">Order Details</h1>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-harvest-primary"></div>
            </div>
          ) : order ? (
            <>
              <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="font-medium">Update Order Status</h2>
                    <p className="text-sm text-gray-500">
                      Current status: <span className="capitalize">{order.status}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Select 
                      defaultValue={order.status} 
                      onValueChange={(value) => handleStatusChange(value as OrderStatus)}
                      disabled={updating}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <OrderDetails order={order} />
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <h2 className="text-xl font-medium mb-4">Order Not Found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find the order you're looking for. Please check the order ID and try again.
              </p>
              <Link to="/admin/orders">
                <Button className="bg-harvest-primary hover:bg-harvest-dark">
                  Return to Orders List
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetailsPage;
