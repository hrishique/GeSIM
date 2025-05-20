import React from 'react';
import Layout from '@/components/Layout';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import PlanManagementCard from '@/components/PlanManagementCard';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();
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
 
  const mockPlans = [
    {
      planName: "Global Premium",
      validity: "30",
      packageDetails: "Unlimited data in over 170 countries",
      country: "Global",
      price: "49.99",
    },
    {
      planName: "Europe Travel",
      validity: "15",
      packageDetails: "20GB data in all European countries",
      country: "Europe",
      price: "29.99",
    },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Plan Added",
      description: "The eSIM plan has been successfully added.",
    });
    form.reset();
  }

  const handleEdit = (planName: string) => {
    console.log(`Editing plan: ${planName}`);
    toast({
      title: "Edit Plan",
      description: `Editing ${planName}`,
    });
  };

  const handleDelete = (planName: string) => {
    console.log(`Deleting plan: ${planName}`);
    toast({
      title: "Delete Plan",
      description: `Plan ${planName} has been deleted.`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto pt-8 px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-2xl font-bold mb-6">Add eSIM Plan</h1>
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
                
                {/* <FormField
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
                /> */}

                <Button type="submit" className="w-full">Add Plan</Button>
              </form>
            </Form>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-6">All Plans</h1>
            <div className="space-y-4">
              {mockPlans.map((plan) => (
                <PlanManagementCard
                  key={plan.planName}
                  {...plan}
                  onEdit={() => handleEdit(plan.planName)}
                  onDelete={() => handleDelete(plan.planName)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
