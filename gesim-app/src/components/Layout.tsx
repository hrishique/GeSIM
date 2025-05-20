
import React, { useState, useEffect } from 'react';
import GlobalNav from './GlobalNav';
import { onAuthStateChanged } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ShieldCheck, Wallet, User  } from 'lucide-react';
import Dashboard from '@/pages/Dashboard';
import WalletConnect from '../pages/WalletConnect';
import { auth } from '../firebase.ts';
import { MdOutlineLogout } from "react-icons/md";
import { signOut } from 'firebase/auth';
import Kyc from '@/pages/Kyc.tsx';




interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginOrNot, setLoginOrNot] = useState<boolean>(false)
  // const isLandingPage = location.pathname === '/';
  const showGlobalNav =  location.pathname !== '/connect-wallet';
  const [submitKYC, setSubmitKyc] = useState(false); // Initially show KYC if logged in

    const logOut = ()=> {
    signOut(auth)
  .then(() => {
    console.log('Signed out');
    setLoginOrNot(false)
  })
  .catch((error) => console.error('Sign-out error:', error));
  }

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is logged in:', user);
      setLoginOrNot(true)
    } else {
      console.log('User is logged out');
    }
  });

  return () => unsubscribe();
}, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
     <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-background/80 -z-10" />
      
      {
        !loginOrNot ? (
          <WalletConnect />
        ) : !submitKYC ? (
          <Kyc setSubmitKyc={setSubmitKyc} />
        ) : (
           <>
          <div className="fixed top-4 right-4 z-50 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border-border/50"
            onClick={() => logOut()}
          >
            <MdOutlineLogout size={16} />
            Logout
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border-border/50"
            onClick={() => navigate('/admin')}
          >
            <ShieldCheck size={16} />
            Admin Access
          </Button>
        </div>
      
      <main className={`flex-grow container mx-auto ${showGlobalNav ? 'pb-20' : 'pb-0'} pt-6 relative z-0`}>
        {children}
      </main>
      
      {showGlobalNav && <GlobalNav />}
        </>
        )
      }

    </div>
  );
};

export default Layout;

