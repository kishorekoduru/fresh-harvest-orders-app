
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-6">
            <span className="text-xl font-bold text-harvest-primary">Fresh Harvest</span>
          </Link>
          
          <nav className="hidden space-x-6 md:flex">
            <Link to="/" className="text-sm font-medium hover:text-harvest-primary">
              Products
            </Link>
            <Link to="/track" className="text-sm font-medium hover:text-harvest-primary">
              Track Order
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-harvest-primary">
              About Us
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} className="text-gray-700" />
            {itemCount > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-harvest-primary rounded-full -top-2 -right-2">
                {itemCount}
              </span>
            )}
          </Link>
          
          <Link to="/admin" className="hidden md:inline-flex">
            <Button variant="outline" size="sm">
              <User size={16} className="mr-2" />
              Admin
            </Button>
          </Link>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-6 mt-6">
                <Link to="/" className="text-lg font-medium">
                  Products
                </Link>
                <Link to="/track" className="text-lg font-medium">
                  Track Order
                </Link>
                <Link to="/about" className="text-lg font-medium">
                  About Us
                </Link>
                <Link to="/admin" className="text-lg font-medium">
                  Admin
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
