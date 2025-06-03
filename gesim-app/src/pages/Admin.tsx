import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { log } from 'console';
import UpdatePlans from '@/components/UpdatePlans';
import CardSkelton from '@/components/CardSkeleton';

type Plans = {

  id:string;
  plan_name: string;
  plan_type: number;
  price: number;
  data_limit: number;
  validity: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  
}

const formSchema = z.object({
  plan_name: z.string().min(2, {
    message: "Plan name must be at least 2 characters.",
  }),
  validity: z.coerce.number().min(1, {
    message: "Validity is required.",
  }),
  description: z.string().min(10, {
    message: "Package details must be at least 10 characters.",
  }),
  data_limit: z.coerce.number().min(1, {
    message: "Data limit must be at least 1 character",
  }),
  price: z.coerce.number().min(1, {
    message: "Price is required.",
  }),
})

const Admin = () => {
  const { toast } = useToast();
  const [plans, setPlans] = useState<Plans[]>();
  const [selectedPlan, setSelectedPlan] = useState<Plans | null>(null); // PlanType is your plan interface

  const [isLoading, setIsLoading] = useState(true);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan_name: "",
      validity: 0,
      description: "",
      data_limit: 0, 
      price: 0,
    },
  })

  const handleEdit = (plan: Plans) => {

       setOpenUpdate(true)
       setSelectedPlan(plan);

  };

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `https://gesim-r6h2.onrender.com/api/admin/plans/${id}`
      );

      // ✅ Remove the deleted plan from local state
      setPlans(prev => prev.filter(plan => plan.id !== id));
      console.log("Plan deleted successfully:", response.data);

      // Optional: show toast or update UI
    } catch (error: any) {
      console.error(
        "Error deleting plan:",
        error?.response?.data || error.message
      );
    }
  };

  
 

  
     const fetchUsers = async () => {
    try {
      const response = await axios.get<Plans[]>('https://gesim-r6h2.onrender.com/api/admin/plans');
      setPlans(response.data);
      setIsLoading(false)
    } catch (err) {
      console.error(err)
    } 
  };


  const handlePlanUpdate = () => {

    fetchUsers()

  }
  useEffect(() => {

  fetchUsers()

  }, [])

  

async function onSubmit(values: z.infer<typeof formSchema>) {
  setIsLoading(true);
  try {
    const payload = {
      plan_name: values.plan_name,
      validity: values.validity,
      description: values.description,
      data_limit: values.data_limit,
      price: values.price,
    };

    const response = await axios.post("https://gesim-r6h2.onrender.com/api/admin/plans", payload);
     const newPlan = response.data; // get the created plan (with id)
     console.log(newPlan);
     

    // ✅ Update local state to show it instantly
    setPlans(prev => [...prev, newPlan]);

    toast({
      title: "Plan Added",
      description: "The eSIM plan has been successfully added.",
    });

    form.reset();
  } catch (error: any) {
    toast({
      title: "Error",
      description:
        error?.response?.data?.message || "Something went wrong. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
}


  return (
    <Layout>
      <div className="container mx-auto pt-8 px-4">
        {
           openUpdate ?
           
        <UpdatePlans setOpenUpdate={setOpenUpdate} plan={selectedPlan}  onUpdate={handlePlanUpdate}/> 
        :
         <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-2xl font-bold mb-6">Add eSIM Plan</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="plan_name"
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
                  name="data_limit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data Limit</FormLabel>
                      <FormControl>
                        <Input type='number' placeholder="Enter data limit" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                   <FormField
                  control={form.control}
                  name="description"
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

                <Button type="submit" className="w-full">Add Plan</Button>
              </form>
            </Form>
          </div>

         {isLoading ? <CardSkelton cards={2}/> : <div>
            <h1 className="text-2xl font-bold mb-6">All Plans</h1>
            <div className="space-y-4">
              {plans?.map((plan) => (
                <PlanManagementCard
                  key={plan.id}
                  {...plan}
                   onEdit={() => handleEdit(plan)}
                  onDelete={() => handleDelete(plan.id)}
                />
              ))}
            </div>
          </div>}
        </div>
        }
      </div>
    </Layout>
  );
};

export default Admin;
