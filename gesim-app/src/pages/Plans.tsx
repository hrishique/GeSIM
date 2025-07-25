
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import PlanCard from '@/components/PlanCard';
import PlanModal from '@/components/PlanModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import CardSkeleton from '@/components/CardSkeleton';

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
}

const Plans: React.FC = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState<Plans[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<string>("")
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plans | null>(null);

  
  // Mock data
  // const plans = [
  //   {
  //     id: 'global-lite',
  //     name: 'Global Lite',
  //     price: 9.99,
  //     currency: 'USDC',
  //     dataAmount: 1,
  //     dataUnit: 'GB' as const,
  //     duration: 7,
  //     durationUnit: 'days' as const,
  //     regions: ['Global'],
  //   },
  //   {
  //     id: 'global-standard',
  //     name: 'Global Standard',
  //     price: 24.99,
  //     currency: 'USDC',
  //     dataAmount: 5,
  //     dataUnit: 'GB' as const,
  //     duration: 30,
  //     durationUnit: 'days' as const,
  //     regions: ['Global'],
  //     popularPlan: true,
  //   },
  //   {
  //     id: 'global-premium',
  //     name: 'Global Premium',
  //     price: 39.99,
  //     currency: 'USDC',
  //     dataAmount: 10,
  //     dataUnit: 'GB' as const,
  //     duration: 30,
  //     durationUnit: 'days' as const,
  //     regions: ['Global'],
  //   },
  //   {
  //     id: 'asia-pacific',
  //     name: 'Asia Pacific',
  //     price: 19.99,
  //     currency: 'USDC',
  //     dataAmount: 5,
  //     dataUnit: 'GB' as const,
  //     duration: 30,
  //     durationUnit: 'days' as const,
  //     regions: ['Asia', 'Pacific'],
  //   },
  //   {
  //     id: 'europe',
  //     name: 'Europe',
  //     price: 17.99,
  //     currency: 'USDC',
  //     dataAmount: 5,
  //     dataUnit: 'GB' as const,
  //     duration: 14,
  //     durationUnit: 'days' as const,
  //     regions: ['Europe'],
  //   },
  // ];


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<Plans[]>('https://gesim-r6h2.onrender.com/api/admin/plans');
        setPlans(response.data);
        setLoading(false)
      } catch (err) {
        setErrors('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers()
  }, [])
  
  const handleSelectPlan = (planId: string) => {
    const plan = plans?.find(p => p.id === planId);
    if (plan) {
      setSelectedPlan(plan);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };
  
  return (
    <Layout>
      <div className="max-w-lg mx-auto fade-in">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">eSIM Plans</h1>
          <p className="text-muted-foreground">Select a plan that fits your travel needs</p>
        </div>
        
        <Tabs defaultValue="global" className="mb-6">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="regional">Regional</TabsTrigger>
            <TabsTrigger value="local">Local</TabsTrigger>
          </TabsList>
          
         
           {loading ? <CardSkeleton cards={2}/> :
            <>
          <TabsContent value="global" className="mt-4 space-y-4">
            {plans
              ?.filter(plan => plan.plan_type === 101)
              .map(plan => (
                <PlanCard 
                  key={plan.id} 
                  {...plan} 
                  onClick={handleSelectPlan} 
                />
              ))}
          </TabsContent>
          
          <TabsContent value="regional" className="mt-4 space-y-4">
            { plans
              ?.filter(plan =>  plan.plan_type === 102)
              .map(plan => (
                <PlanCard 
                  key={plan.id} 
                  {...plan} 
                  onClick={handleSelectPlan} 
                />
              ))}
          </TabsContent>
          
          <TabsContent value="local" className="mt-4">
            <div className="text-center py-8 text-muted-foreground">
              <p>Local plans coming soon!</p>
            </div>
          </TabsContent>

           </>
}

        </Tabs>

        {/* Plan Modal */}
        <PlanModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          plan={selectedPlan}
        />
      </div>
    </Layout>
  );
};

export default Plans;
