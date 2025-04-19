
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Search } from 'lucide-react';

const formSchema = z.object({
  orderId: z.string().min(4, 'Order ID is too short'),
});

type FormValues = z.infer<typeof formSchema>;

const TrackOrderForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderId: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    
    try {
      // In a real app, we would validate the order ID here
      // For now, just navigate to the track page with the ID
      navigate(`/track/${data.orderId}`);
    } catch (error) {
      console.error('Error tracking order:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="orderId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order ID</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="e.g. ord-001" 
                  className="w-full" 
                />
              </FormControl>
              <FormDescription>
                Enter the order ID you received when placing your order
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-harvest-primary hover:bg-harvest-dark"
          disabled={loading}
        >
          {loading ? 'Tracking...' : (
            <>
              <Search size={16} className="mr-2" />
              Track Order
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default TrackOrderForm;
