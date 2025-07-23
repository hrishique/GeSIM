
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletConnectButton from '@/components/WalletConnectButton';
import { ArrowLeft } from 'lucide-react';
import { IoLogoApple } from "react-icons/io5";
import { LuWalletCards } from "react-icons/lu";
import privy from '/privy.png'
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../firebase.ts';
import { boolean } from 'zod';
import { usePrivy } from '@privy-io/react-auth';

type Props = {
  setOpenLogin : (data: boolean)=> void
}

const WalletConnect: React.FC<Props> = ({setOpenLogin}) => {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  
  // Privy authentication
  const { ready, authenticated, user, login, logout } = usePrivy();

  // Comment out Firebase login logic
  // const handleLogin = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       setOpenLogin(false)
  //       console.log('User Info:', user);

  //       // Save user in state or localStorage if needed
  //     })
  //     .catch((error) => {
  //       console.error('Login error:', error);
  //     });
  // };

  // New Privy login logic
  const handleLogin = () => {
    login();
    setOpenLogin(false);
  };

  const handleSkip = () => {
     setOpenLogin(false)
     navigate("/")
  }

  // Show loading state while Privy is initializing
  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  // If user is already authenticated, close the login modal
  if (authenticated) {
    setOpenLogin(false);
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 fade-in">
      <div className="w-full max-w-md">
        {/* <button 
          onClick={() => navigate('/')}
          className="flex items-center text-muted-foreground hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </button> */}
        
        <div className="text-center mb-8">
         
        </div>
        
    
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
        <h2 className="text-gray-700 text-lg font-medium mb-6">Log in or Sign up</h2>

        <div className="flex justify-center mb-6">
          <img src={privy}  alt="" className="h-12" />

        </div>

        {/* Updated login button with Privy */}
        <button onClick={handleLogin} className="flex items-center justify-start w-full border border-gray-300 rounded-lg px-4 py-4 mb-3 hover:bg-gray-100">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-3" />
          <span className="text-sm font-medium text-gray-700">Sign in with Privy</span>
        </button>

        {/* <button className="flex items-center justify-start w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 hover:bg-gray-100">
        <IoLogoApple color='black' size={25} className='mr-3'/>
          <span className="text-sm font-medium text-gray-700">Apple</span>
        </button> */}

        {/* <button className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 mb-4">
          <div className="flex items-center">
            <LuWalletCards color='black' size={25} className='mr-3'/>
            <span className="text-sm font-medium text-gray-700">Continue with a wallet</span>
          </div>
          <span className="text-gray-400 text-xl">&rsaquo;</span>
        </button> */}

        {/* <a href="#" className="text-sm text-indigo-600 hover:underline mb-6 block">I have a passkey</a> */}

        <button onClick={() => handleSkip()} className='font-semibold py-2 px-2 w-20 text-center text-emerald-500 cursor-pointer hover:bg-emerald-100 hover:rounded-md hover:px-2 hover:py-2'>Skip</button>
        
        <div className="text-xs text-gray-600 mt-4 leading-relaxed">
          By clicking continue, you acknowledge that you have read and agree to Privy's{" "}
          <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and{" "}
          <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
        </div>
      </div>
    </div>

      </div>
    </div>
  );
};

export default WalletConnect;
