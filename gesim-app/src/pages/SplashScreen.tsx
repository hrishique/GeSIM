
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-background z-0 opacity-80" />
      
      <div 
        className="absolute w-[500px] h-[500px] rounded-full border border-primary/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ boxShadow: '0 0 100px rgba(110, 86, 207, 0.1)' }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full border border-primary/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse"
        style={{ animationDuration: '6s', boxShadow: '0 0 80px rgba(110, 86, 207, 0.1)' }}
      />
      <div 
        className="absolute w-[300px] h-[300px] rounded-full border border-primary/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse"
        style={{ animationDuration: '4s', boxShadow: '0 0 60px rgba(110, 86, 207, 0.1)' }}
      />
      
      <div className="relative z-10 text-center fade-in">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8 relative overflow-hidden">
          <Globe size={48} className="text-primary animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
        </div>
        
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Gesim</h1>
        <p className="text-muted-foreground mb-12 max-w-xs mx-auto">One eSIM for the World. Powered by Solana.</p>
        
        <Button 
          onClick={() => navigate('/connect-wallet')}
          className="px-8 py-6 bg-primary hover:bg-primary/90 text-white"
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;
