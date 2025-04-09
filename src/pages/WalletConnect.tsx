
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletConnectButton from '@/components/WalletConnectButton';
import { ArrowLeft } from 'lucide-react';

const WalletConnect: React.FC = () => {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  
  const handleConnect = (address: string) => {
    setWalletAddress(address);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000); // Simulate a brief delay before redirecting
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 fade-in">
      <div className="w-full max-w-md">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-muted-foreground hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </button>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">Connect Your Wallet</h1>
          <p className="text-muted-foreground">
            Connect your Solana wallet to access global eSIM connectivity
          </p>
        </div>
        
        {walletAddress ? (
          <div className="p-6 glass-card border border-primary/30 rounded-lg text-center">
            <div className="text-sm text-muted-foreground mb-2">Wallet Connected</div>
            <div className="font-medium text-primary">{`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}</div>
            <div className="mt-4 text-sm text-muted-foreground">Redirecting to dashboard...</div>
            <div className="mt-4 flex justify-center">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <WalletConnectButton onConnect={handleConnect} />
        )}
        
        <div className="mt-8 text-xs text-center text-muted-foreground">
          By connecting your wallet, you agree to our
          <br />
          <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
