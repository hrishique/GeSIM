
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletConnectButton from '@/components/WalletConnectButton';
import { ArrowLeft } from 'lucide-react';
import { IoLogoApple } from "react-icons/io5";
import { LuWalletCards } from "react-icons/lu";
import privy from '/privy.png'



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
         
        </div>
        
        {/* {walletAddress ? (
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
        )} */}


    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
        <h2 className="text-gray-700 text-lg font-medium mb-6">Log in or Sign up</h2>

        <div className="flex justify-center mb-6">
          <img src={privy}  alt="" className="h-12" />

        </div>

        <button className="flex items-center justify-start w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 hover:bg-gray-100">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-3" />
          <span className="text-sm font-medium text-gray-700">Google</span>
        </button>

        <button className="flex items-center justify-start w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 hover:bg-gray-100">
        <IoLogoApple color='black' size={25} className='mr-3'/>
          <span className="text-sm font-medium text-gray-700">Apple</span>
        </button>

        <button className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 mb-4">
          <div className="flex items-center">
            <LuWalletCards color='black' size={25} className='mr-3'/>
            <span className="text-sm font-medium text-gray-700">Continue with a wallet</span>
          </div>
          <span className="text-gray-400 text-xl">&rsaquo;</span>
        </button>

        <a href="#" className="text-sm text-indigo-600 hover:underline mb-6 block">I have a passkey</a>

        <p className="text-sm text-gray-500 mt-6">
          Protected by{' '}
          <span className="inline-flex items-center gap-1 font-semibold text-gray-700">
            <span className="w-0 h-2 rounded-full inline-block"></span>   <img src={privy}  alt="" className="h-5" />
          </span>
        
        </p>
      </div>
    </div>
        
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
