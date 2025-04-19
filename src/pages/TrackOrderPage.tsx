
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TrackOrderForm from '@/components/orders/TrackOrderForm';

const TrackOrderPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center mb-6">Track Your Order</h1>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <p className="text-gray-600 mb-6 text-center">
              Enter your order ID to track the status of your delivery.
            </p>
            
            <TrackOrderForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrackOrderPage;
