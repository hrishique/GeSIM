import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Loader2 } from 'lucide-react';
import MintSuccessModal from './MintSuccessModal';
import confetti from 'canvas-confetti';

const MintButton = ({isMint}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  const fireConfetti = async () => {
    // Multiple confetti bursts
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
      }));
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
      }));
    }, 250);
  };

  const handleMint = async () => {
    setIsMinting(true);
    
    // Immediate confetti on click
    await confetti({
      origin: {
        x: 0.5,
        y: 0.5,
      },
      spread: 45,
      particleCount: 100,
      colors: ['#9333ea', '#a855f7', '#c084fc', '#e879f9']
    });
    
    // Simulate blockchain transaction time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsMinting(false);
    setIsModalOpen(true);
    localStorage.setItem("GeSim_Minted", 'true');
    
    // Celebration confetti after successful minting
    setTimeout(() => {
      fireConfetti();
    }, 500);
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
        onClose={() =>{ setIsModalOpen(false); isMint(false)}}
        isMint={isMint} 
      />
    </>
  );
};

export default MintButton;
