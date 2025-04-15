
import React from 'react';
import Layout from '@/components/Layout';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  planName: z.string().min(2, {
    message: "Plan name must be at least 2 characters.",
  }),
  validity: z.string().min(1, {
    message: "Validity is required.",
  }),
  packageDetails: z.string().min(10, {
    message: "Package details must be at least 10 characters.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  price: z.string().min(1, {
    message: "Price is required.",
  }),
})

const Admin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      planName: "",
      validity: "",
      packageDetails: "",
      country: "",
      price: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send this data to your backend
    form.reset()
  }

  return (
    <Layout>
      <div className="container max-w-2xl mx-auto pt-8">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard - Add eSIM Plan</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="planName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plan Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter plan name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="validity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Validity (in days)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="30" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price (USDC)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" placeholder="9.99" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="packageDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Package Details</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter package details (data limits, features, etc.)" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country/Region</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter country or region" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Add Plan</Button>
          </form>
        </Form>
      </div>
    </Layout>
  );
};

export default Admin;
