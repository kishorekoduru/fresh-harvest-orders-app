
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getOrder } from '@/api/mockApi';
import { Order } from '@/types/types';
import OrderDetails from '@/components/orders/OrderDetails';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const OrderDetailsPage = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  
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
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/track">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to tracking
            </Button>
          </Link>
          
          <h1 className="text-2xl font-bold mb-6">Order Details</h1>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-harvest-primary"></div>
            </div>
          ) : order ? (
            <OrderDetails order={order} />
          ) : (
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <h2 className="text-xl font-medium mb-4">Order Not Found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find the order you're looking for. Please check the order ID and try again.
              </p>
              <Link to="/track">
                <Button className="bg-harvest-primary hover:bg-harvest-dark">
                  Try Another Order ID
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

export default OrderDetailsPage;
