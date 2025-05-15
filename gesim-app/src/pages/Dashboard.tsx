
import React from 'react';
import Layout from '@/components/Layout';
import UsageGraph from '@/components/UsageGraph';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Globe, PlusCircle, ShieldCheck, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock data
  const userData = {
    name: 'Alex',
    walletAddress: '2Ych8...pGQy4Nw',
    kycVerified: true,
  };
  
  const activeEsim = {
    id: 'esim-123456',
    name: 'Global Travel',
    dataUsed: 2.5,
    dataTotal: 10,
    daysLeft: 12,
    validUntil: 'April 21, 2025',
    regions: ['Global'],
  };
  
  return (
    <Layout>
      <div className="max-w-lg mx-auto fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">
              Hey, {userData.name}
            </h1>
            <div className="flex items-center mt-1">
              <div className="text-xs text-muted-foreground">
                {userData.walletAddress}
              </div>
              {userData.kycVerified && (
                <div className="flex items-center ml-2 text-xs text-primary">
                  <ShieldCheck size={12} className="mr-1" />
                  Verified
                </div>
              )}
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => navigate('/settings')}>
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Profile"
              className="rounded-full w-9 h-9 object-cover border border-border"
            />
          </Button>
        </div>
        
        <section className="mb-6">
          <UsageGraph
            dataUsed={activeEsim.dataUsed}
            dataTotal={activeEsim.dataTotal}
            daysLeft={activeEsim.daysLeft}
            validUntil={activeEsim.validUntil}
          />
        </section>
        
        <section className="space-y-4">
          <Card className="glass-card border border-border/50">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                  <Globe size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Data Plans</h3>
                  <p className="text-xs text-muted-foreground">Browse available eSIM plans</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => navigate('/plans')}>
                <ChevronRight size={20} />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="glass-card border border-border/50">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                  <Smartphone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">My eSIMs</h3>
                  <p className="text-xs text-muted-foreground">Manage your active eSIMs</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => navigate('/esims')}>
                <ChevronRight size={20} />
              </Button>
            </CardContent>
          </Card>
        </section>
        
        {/* <div className="mt-8 text-center">
          <Button variant="outline" className="border-dashed border-border flex items-center gap-2">
            <PlusCircle size={16} />
            Add New Device
          </Button>
          <p className="text-xs text-muted-foreground mt-2">Add a new device to your Gesim account</p>
        </div> */}
      </div>
    </Layout>
  );
};

export default Dashboard;
