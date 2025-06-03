import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { log } from "console";
import { IoMdCloseCircle } from "react-icons/io";

type Plans = {
  id: string;
  plan_name: string;
  plan_type: number;
  price: number;
  data_limit: number;
  validity: number;
  description: string;
  createdAt: string;
  updatedAt: string;
};

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
});

const UpdatePlans = ({ setOpenUpdate, plan, onUpdate }) => {
  const { toast } = useToast();
  const [plans, setPlans] = useState<Plans[]>();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan_name: "",
      validity: 0,
      description: "",
      data_limit: 0,
      price: 0,
    },
  });

  useEffect(() => {
    if (plan) {
      console.log("edit data ", plan);

      // Reset form with plan data
      form.reset({
        plan_name: plan.plan_name || "",
        validity: plan.validity || 0,
        price: plan.price || 0,
        data_limit: plan.data_limit || 0,
        description: plan.description || "",
      });
    }
  }, [plan, form]);

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

      const response = await axios.put(
        `https://gesim-r6h2.onrender.com/api/admin/edit-plan/${plan.id}`,
        payload
      );
      const updatedPlan = response.data; // get the created plan (with id)
      setOpenUpdate(false)
       onUpdate();
      console.log("Plan updated successfully ", updatedPlan);

    
      toast({
        title: "Plan updated successfully",
        description: "The eSIM plan has been successfully updated.",
      });

      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className="container mx-auto pt-8 px-4 w-1/2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-6">Update eSIM Plan</h1>
          {/* <IoMdCloseCircle color='red' size={25}/> */}
          <div
            onClick={() => setOpenUpdate(false)}
            className="font-semibold hover:underline cursor-pointer text-red-600"
          >
            CLOSE
          </div>
        </div>
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
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="9.99"
                      {...field}
                    />
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
                    <Input
                      type="number"
                      placeholder="Enter data limit"
                      {...field}
                    />
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

            <Button type="submit" className="w-full">
              Update Plan
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePlans;
