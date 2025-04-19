
import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Search, User } from 'lucide-react';

// Mock customer data since we don't have a real API endpoint for customers yet
const mockCustomers = [
  { id: '1', name: 'Jane Smith', email: 'jane@example.com', orders: 3, totalSpent: 125.75 },
  { id: '2', name: 'John Doe', email: 'john@example.com', orders: 5, totalSpent: 210.50 },
  { id: '3', name: 'Alice Johnson', email: 'alice@example.com', orders: 2, totalSpent: 87.20 },
  { id: '4', name: 'Bob Williams', email: 'bob@example.com', orders: 1, totalSpent: 45.99 },
  { id: '5', name: 'Emma Davis', email: 'emma@example.com', orders: 8, totalSpent: 345.75 },
];

const AdminCustomersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [customers, setCustomers] = useState(mockCustomers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter customers based on search query
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Customers</h1>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-harvest-primary"></div>
            </div>
          ) : (
            <Card>
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      placeholder="Search customers..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Total Spent</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCustomers.length > 0 ? (
                      filteredCustomers.map((customer) => (
                        <TableRow key={customer.id} className="hover:bg-gray-50">
                          <TableCell className="flex items-center gap-2">
                            <div className="bg-gray-100 rounded-full p-1">
                              <User size={16} className="text-gray-500" />
                            </div>
                            {customer.name}
                          </TableCell>
                          <TableCell>{customer.email}</TableCell>
                          <TableCell>{customer.orders}</TableCell>
                          <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                          No customers found matching your search
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCustomersPage;
