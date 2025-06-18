
import React from 'react';
import GlobalNav from './GlobalNav';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ShieldCheck, Wallet, User  } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === '/';
  const showGlobalNav = !isLandingPage && location.pathname !== '/connect-wallet';
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-background/80 -z-10" />
      
      {/* Admin Access and Wallet Connect Buttons */}
      {!isLandingPage && (
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border-border/50"
            onClick={() => navigate('/connect-wallet')}
          >
            <User size={16} />
            Login
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
      )}
      
      <main className={`flex-grow container mx-auto ${showGlobalNav ? 'pb-20' : 'pb-0'} pt-1 relative z-0`}>
        {children}
      </main>
      
      {showGlobalNav && <GlobalNav />}
    </div>
  );
};

export default Layout;

