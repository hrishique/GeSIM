import React, { useState, useEffect } from "react";
import GlobalNav from "./GlobalNav";
// import { onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ShieldCheck, Wallet, User } from "lucide-react";
import Dashboard from "@/pages/Dashboard";
import WalletConnect from "../pages/WalletConnect";
// import { auth } from "../firebase.ts";
import { MdOutlineLogout } from "react-icons/md";
// import { signOut } from "firebase/auth";
import Kyc from "@/pages/Kyc.tsx";
import ConfirmLogoutModal from "./ConfirmLogoutModal.tsx";
import { FaRegUser } from "react-icons/fa";
import { usePrivy, useWallets } from '@privy-io/react-auth';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Privy authentication
  const { ready, authenticated, user, login, logout } = usePrivy();
  
  // Privy wallets
  const { wallets, ready: walletsReady } = useWallets();
  
  // const [loginOrNot, setLoginOrNot] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  // const isLandingPage = location.pathname === '/';
  const showGlobalNav = location.pathname !== "/connect-wallet";

  const [submitKYC, setSubmitKyc] = useState(() => {
    const stored = localStorage.getItem("kycSubmitted");
    return stored === "true"; // true if already submitted
  });

  const handleSetSubmitKyc = (data: string) => {
    setSubmitKyc(data === "true");
  };

  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

  const handleLogout = () => {
    if (authenticated) {
      logout();
      setShowLogoutModal(false);
      localStorage.removeItem("kycSubmitted");
    } else {
      login();
    }
  };

  // Comment out Firebase auth state listener
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("User is logged in:", user);
  //       setLoginOrNot(true);
  //     } else {
  //       console.log("User is logged out");
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  // Show loading state while Privy is initializing
  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  // Get wallet info for display
  const getWalletInfo = () => {
    if (!walletsReady || wallets.length === 0) return null;
    const wallet = wallets[0]; // Most users have 1 wallet
    return {
      address: wallet.address,
      type: wallet.walletClientType,
      shortAddress: `${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}`
    };
  };

  const walletInfo = getWalletInfo();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-background/80 -z-10" />

      {openLogin && !authenticated ? (
        <WalletConnect setOpenLogin={setOpenLogin}/>
      ) : !submitKYC && authenticated ? 
        <Kyc setSubmitKyc={handleSetSubmitKyc} /> :   (
        <>
          <div className="fixed top-4 right-4 z-50 flex gap-2">
            {authenticated && walletInfo && (
              <div className="flex items-center gap-2">
                {/* Wallet Info Display */}
                <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-md px-3 py-2 text-sm">
                  <Wallet size={14} />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">{walletInfo.type}</span>
                    <span className="font-mono text-xs">{walletInfo.shortAddress}</span>
                  </div>
                </div>
              </div>
            )}
            
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border-border/50"
              onClick={() => handleLogout()}
            >
              {authenticated ? (
                <div className="flex items-center gap-2">
                  <MdOutlineLogout size={16} />
                  <div className="flex flex-col text-left">
                    <span className="text-xs">
                      {user?.email?.address || user?.phone?.number || user?.wallet?.address?.slice(0, 8) + '...' || 'User'}
                    </span>
                    <span className="text-xs text-muted-foreground">Logout</span>
                  </div>
                </div>
              ) : (
                <>
                  <FaRegUser size={16} />
                  Login
                </>
              )}
            </Button>
            
            {/* <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border-border/50"
              onClick={() => navigate("/admin")}
            >
              <ShieldCheck size={16} />
              Admin Access
            </Button> */}
          </div>

          <main
            className={`flex-grow container mx-auto ${
              showGlobalNav ? "pb-20" : "pb-0"
            } pt-6 relative z-0`}
          >
            {children}
          </main>

          {showGlobalNav && <GlobalNav />}
        </>
      )}

      {showLogoutModal && (
        <ConfirmLogoutModal
          open={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />
      )}
    </div>
  );
};

export default Layout;
