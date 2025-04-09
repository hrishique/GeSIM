
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Wallet } from 'lucide-react';

interface WalletConnectButtonProps {
  onConnect: (walletAddress: string) => void;
}

const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({ onConnect }) => {
  const [open, setOpen] = useState(false);
  
  const wallets = [
    { id: 'phantom', name: 'Phantom', icon: '🟣' },
    { id: 'solflare', name: 'Solflare', icon: '🔥' },
    { id: 'backpack', name: 'Backpack', icon: '🎒' },
  ];
  
  const connectWallet = (walletId: string) => {
    // Simulate wallet connection
    const mockAddress = '2Ych8hGGC72eHFEhEQ1xgGY7M3E5vG7prKRbGpGQy4Nw';
    const shortenedAddress = `${mockAddress.slice(0, 6)}...${mockAddress.slice(-4)}`;
    console.log(`Connected to ${walletId} with address ${shortenedAddress}`);
    onConnect(mockAddress);
    setOpen(false);
  };
  
  return (
    <>
      <Button 
        onClick={() => setOpen(true)}
        className="w-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2 py-6"
      >
        <Wallet className="h-5 w-5" />
        Connect Wallet
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="glass-card sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium text-center">Connect Wallet</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            {wallets.map((wallet) => (
              <Button
                key={wallet.id}
                onClick={() => connectWallet(wallet.id)}
                variant="outline"
                className="w-full py-6 flex items-center justify-start gap-3 hover:bg-secondary hover:text-white transition-all border border-border/50"
              >
                <span className="text-xl">{wallet.icon}</span>
                <span>{wallet.name}</span>
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WalletConnectButton;
