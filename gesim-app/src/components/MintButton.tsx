import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Loader2 } from 'lucide-react';
import MintSuccessModal from './MintSuccessModal';

const MintButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  const handleMint = async () => {
    setIsMinting(true);
    
    // Simulate blockchain transaction time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsMinting(false);
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleMint}
        disabled={isMinting}
        className="bg-purple-600 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:transform-none disabled:opacity-70"
      >
        {isMinting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Minting GeSIM...
          </>
        ) : (
          <>
            <Zap className="mr-2 h-5 w-5" />
            Mint GeSIM
          </>
        )}
      </Button>
      
      <MintSuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default MintButton;
