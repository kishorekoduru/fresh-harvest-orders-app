
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { createOrder } from '@/api/mockApi';
import { toast } from '@/components/ui/sonner';

const formSchema = z.object({
  buyerName: z.string().min(2, 'Name must be at least 2 characters'),
  buyerEmail: z.string().email('Please enter a valid email'),
  buyerPhone: z.string().min(6, 'Please enter a valid phone number'),
  deliveryAddress: z.string().min(5, 'Please enter a complete delivery address'),
});

type FormValues = z.infer<typeof formSchema>;

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      buyerName: '',
      buyerEmail: '',
      buyerPhone: '',
      deliveryAddress: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setLoading(true);
    
    try {
      // Send order data to API - ensure all required fields are present
      const order = await createOrder({
        buyerName: data.buyerName,
        buyerEmail: data.buyerEmail,
        buyerPhone: data.buyerPhone,
        deliveryAddress: data.deliveryAddress,
        items: cart,
      });
      
      // Clear the cart after successful order creation
      clearCart();
      
      // Show success message
      toast.success('Order placed successfully!');
      
      // Navigate to order confirmation page
      navigate(`/order-confirmation/${order.id}`);
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
      console.error('Order submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="buyerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="buyerEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="buyerPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="deliveryAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Address</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Street, City, State, ZIP Code" 
                  className="min-h-24" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="border-t pt-4">
          <div className="flex justify-between font-medium mb-2">
            <span>Order Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-harvest-primary hover:bg-harvest-dark"
            disabled={loading || cart.length === 0}
          >
            {loading ? 'Placing Order...' : 'Place Order'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;
