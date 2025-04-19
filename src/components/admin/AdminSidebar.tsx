
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Store, Package, ShoppingCart, User, Settings, Home } from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  
  const navItems = [
    { title: 'Dashboard', path: '/admin', icon: Home },
    { title: 'Orders', path: '/admin/orders', icon: Package },
    { title: 'Products', path: '/admin/products', icon: Store },
    { title: 'Customers', path: '/admin/customers', icon: User },
    { title: 'Settings', path: '/admin/settings', icon: Settings },
  ];
  
  return (
    <aside className="bg-white border-r h-screen sticky top-0 w-64 hidden md:block">
      <div className="flex items-center justify-center h-16 border-b">
        <Link to="/admin" className="flex items-center space-x-2">
          <ShoppingCart size={24} className="text-harvest-primary" />
          <span className="font-semibold text-lg">Admin Panel</span>
        </Link>
      </div>
      
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
              isActive(item.path)
                ? "bg-harvest-light text-harvest-primary"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            <item.icon size={18} className="mr-3" />
            {item.title}
          </Link>
        ))}
      </nav>
      
      <div className="absolute bottom-0 w-full p-4 border-t">
        <Link to="/" className="flex items-center text-sm text-gray-500 hover:text-harvest-primary">
          <Home size={18} className="mr-2" />
          Back to Store
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
