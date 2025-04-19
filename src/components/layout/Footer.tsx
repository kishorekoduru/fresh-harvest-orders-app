
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-8 mx-auto md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-harvest-primary mb-4">Fresh Harvest</h3>
            <p className="text-sm text-gray-600 mb-4">
              We deliver farm-fresh produce directly from our fields to your doorstep.
              Healthy, sustainable, and affordable.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Fresh Harvest. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-harvest-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-sm text-gray-600 hover:text-harvest-primary">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-harvest-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-sm text-gray-600 hover:text-harvest-primary">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: contact@freshharvest.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Farm Road, Harvest Valley, CA 95123</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
