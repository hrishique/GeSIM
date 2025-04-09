
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Bell,
  Globe,
  HelpCircle,
  LogOut,
  MoonStar,
  ShieldCheck,
  User,
  Wallet,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const Settings: React.FC = () => {
  // Mock data
  const userData = {
    name: 'Alex Johnson',
    walletAddress: '2Ych8hGGC72eHFEhEQ1xgGY7M3E5vG7prKRbGpGQy4Nw',
    kycVerified: true,
    walletType: 'Phantom',
    notificationsEnabled: true,
  };
  
  return (
    <Layout>
      <div className="max-w-lg mx-auto fade-in">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences</p>
        </div>
        
        <section className="mb-6">
          <Card className="glass-card border border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Profile</CardTitle>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <User size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{userData.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {`${userData.walletAddress.slice(0, 6)}...${userData.walletAddress.slice(-4)}`}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight size={18} />
                </Button>
              </div>
              
              <Separator className="my-2 bg-border/50" />
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <ShieldCheck size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">KYC Verification</h3>
                    <p className="text-xs text-muted-foreground">
                      {userData.kycVerified ? 'Verified' : 'Not verified'}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight size={18} />
                </Button>
              </div>
              
              <Separator className="my-2 bg-border/50" />
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <Wallet size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Connected Wallet</h3>
                    <p className="text-xs text-muted-foreground">{userData.walletType}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-6">
          <Card className="glass-card border border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Preferences</CardTitle>
              <CardDescription>Customize your app experience</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <Bell size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Notifications</h3>
                    <p className="text-xs text-muted-foreground">
                      Receive alerts about your eSIMs
                    </p>
                  </div>
                </div>
                <Switch checked={userData.notificationsEnabled} />
              </div>
              
              <Separator className="my-2 bg-border/50" />
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <Globe size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Language</h3>
                    <p className="text-xs text-muted-foreground">English (US)</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight size={18} />
                </Button>
              </div>
              
              <Separator className="my-2 bg-border/50" />
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <MoonStar size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-xs text-muted-foreground">
                      Always enabled
                    </p>
                  </div>
                </div>
                <Switch checked={true} disabled />
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-6">
          <Card className="glass-card border border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Support</CardTitle>
              <CardDescription>Get help with Gesim</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <HelpCircle size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Help Center</h3>
                    <p className="text-xs text-muted-foreground">
                      FAQ and troubleshooting
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <div className="mt-10 mb-6 text-center">
          <Button variant="outline" className="text-muted-foreground hover:text-destructive flex items-center gap-2">
            <LogOut size={16} />
            Disconnect Wallet
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            You will need to reconnect your wallet to use the app
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
