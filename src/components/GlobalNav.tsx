
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Globe, Settings, CreditCard, Wallet } from 'lucide-react';

const GlobalNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { title: 'Home', icon: Home, path: '/dashboard' },
    { title: 'Plans', icon: Globe, path: '/plans' },
    { title: 'eSIMs', icon: CreditCard, path: '/esims' },
    { title: 'Wallet', icon: Wallet, path: '/wallet' },
    { title: 'Settings', icon: Settings, path: '/settings' },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-md border-t border-border z-50">
      <nav className="container mx-auto px-2">
        <ul className="flex justify-between items-center py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="w-full">
                <button
                  onClick={() => navigate(item.path)}
                  className={`flex flex-col items-center justify-center w-full py-2 px-1 rounded-md transition-all ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <item.icon size={20} className={isActive ? 'animate-pulse' : ''} />
                  <span className="text-xs mt-1">{item.title}</span>
                  {isActive && (
                    <div className="absolute -top-1 w-1 h-1 rounded-full bg-primary animate-pulse" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default GlobalNav;
