
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative bg-harvest-light py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-harvest-dark">
                About Fresh Harvest
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Bringing farm-fresh produce directly to your doorstep since 2018.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose lg:prose-lg mx-auto">
                <p>
                  Fresh Harvest began with a simple idea: make it easier for people to access 
                  fresh, locally-grown produce without the hassle of frequent grocery store visits.
                </p>
                <p>
                  Founded by a group of agricultural enthusiasts, our mission is to create a 
                  sustainable food system that benefits local farmers while providing customers 
                  with the freshest seasonal produce possible.
                </p>
                <p>
                  We partner directly with farms within a 100-mile radius to ensure that all our 
                  produce is harvested at peak ripeness and delivered to your doorstep within 24 hours. 
                  This not only ensures maximum freshness and flavor but also reduces food waste and 
                  supports the local economy.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-harvest-light flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-harvest-primary">
                    <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to environmentally-friendly farming practices and packaging,
                  reducing food waste, and supporting local agriculture.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-harvest-light flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-harvest-primary">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality, selecting only the freshest, most flavorful
                  produce for our customers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-harvest-light flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-harvest-primary">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Community</h3>
                <p className="text-gray-600">
                  We believe in building strong relationships with local farmers and the
                  communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our products or services? We'd love to hear from you!
              </p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>contact@freshharvest.com</p>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p>123 Farm Road, Harvest Valley, CA 95123</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
