import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  Calendar, 
  Database, 
  Wallet,
  AlertTriangle,
  CreditCard,
  CheckCircle,
  X
} from 'lucide-react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useToast } from '@/hooks/use-toast';

type Plan = {
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

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

const PlanModal: React.FC<PlanModalProps> = ({ isOpen, onClose, plan }) => {
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [isLoadingBalance, setIsLoadingBalance] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);
  
  const { authenticated, user } = usePrivy();
  const { wallets, ready: walletsReady } = useWallets();
  const { toast } = useToast();

  // Mock wallet balance - in real app, this would fetch from blockchain
  useEffect(() => {
    if (authenticated && walletsReady && wallets.length > 0) {
      setIsLoadingBalance(true);
      // Simulate API call to get wallet balance
      setTimeout(() => {
        // Mock USDC balance - replace with actual balance fetching
        const mockBalance = Math.random() * 100; // Random balance between 0-100 USDC
        setWalletBalance(mockBalance);
        setIsLoadingBalance(false);
      }, 1000);
    }
  }, [authenticated, walletsReady, wallets]);

  if (!plan) return null;

  const hasEnoughBalance = walletBalance >= plan.price;
  const walletInfo = walletsReady && wallets.length > 0 ? wallets[0] : null;

  const getPlanTypeLabel = (type: number) => {
    switch (type) {
      case 101: return 'Global';
      case 102: return 'Regional';
      case 103: return 'Local';
      default: return 'Unknown';
    }
  };

  const handlePurchase = async () => {
    if (!hasEnoughBalance) return;
    
    setIsPurchasing(true);
    
    // Simulate purchase process
    setTimeout(() => {
      setIsPurchasing(false);
      toast({
        title: "Purchase Successful!",
        description: `You have successfully purchased ${plan.plan_name}`,
      });
      onClose();
    }, 2000);
  };

  const handleBuyCrypto = () => {
    toast({
      title: "Buy Crypto",
      description: "Redirecting to crypto purchase...",
    });
    // In real app, redirect to crypto purchase flow
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-background/95 backdrop-blur-md border border-border/50">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">{plan.plan_name}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={16} />
            </Button>
          </div>
          <DialogDescription>
            Plan Details & Purchase Options
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Plan Details Card */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Globe size={12} />
                  {getPlanTypeLabel(plan.plan_type)}
                </Badge>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">${plan.price}</div>
                  <div className="text-xs text-muted-foreground">USDC</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Database size={16} className="text-muted-foreground" />
                  <div>
                    <div className="font-medium">{plan.data_limit}GB</div>
                    <div className="text-xs text-muted-foreground">Data</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-muted-foreground" />
                  <div>
                    <div className="font-medium">{plan.validity} days</div>
                    <div className="text-xs text-muted-foreground">Validity</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t">
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Wallet Balance Card */}
          {authenticated && (
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Wallet size={16} className="text-muted-foreground" />
                    <span className="font-medium">Wallet Balance</span>
                  </div>
                  {walletInfo && (
                    <div className="text-xs text-muted-foreground font-mono">
                      {walletInfo.address.slice(0, 4)}...{walletInfo.address.slice(-4)}
                    </div>
                  )}
                </div>
                
                {isLoadingBalance ? (
                  <div className="text-sm text-muted-foreground">Loading balance...</div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">${walletBalance.toFixed(2)} USDC</div>
                    {hasEnoughBalance ? (
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <CheckCircle size={14} />
                        Sufficient
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-red-600 text-sm">
                        <AlertTriangle size={14} />
                        Insufficient
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Purchase Buttons */}
          <div className="space-y-3">
            {authenticated ? (
              <>
                <Button
                  onClick={handlePurchase}
                  disabled={!hasEnoughBalance || isPurchasing || isLoadingBalance}
                  className="w-full"
                  size="lg"
                >
                  {isPurchasing ? (
                    "Processing Purchase..."
                  ) : hasEnoughBalance ? (
                    "Buy Now"
                  ) : (
                    "Insufficient Balance"
                  )}
                </Button>
                
                {!hasEnoughBalance && !isLoadingBalance && (
                  <Button
                    onClick={handleBuyCrypto}
                    variant="outline"
                    className="w-full"
                    size="lg"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Buy Crypto
                  </Button>
                )}
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-muted-foreground mb-3">Please connect your wallet to purchase</p>
                <Button onClick={onClose} variant="outline">
                  Connect Wallet
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlanModal; 