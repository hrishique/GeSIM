import React, { useState } from 'react';

const Index = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const backgroundSections = [
  { id: 1, hoverColor: 'bg-pink-500' },
  { id: 2, hoverColor: 'bg-blue-500' },
  { id: 3, hoverColor: 'bg-green-500' },
];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background Sections */}
          
       <div className="absolute inset-0 grid grid-cols-3 gap-1 z-0 h-screen">
      {backgroundSections.map((section) => (
        <div
          key={section.id}
          onMouseEnter={() => alert(section.id)}
          onMouseLeave={() => setHoveredSection(null)}
          className={`transition-all duration-700 ease-in-out ${
            hoveredSection === section.id ? section.hoverColor : 'bg-black'
          }`}
        />
      ))}
    </div>



      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Logo/Brand Name */}
        <div className="mb-8">
         <div className="flex items-end cursor-pointer">
        <img src="/images/logo.png" width={50} alt="" />
        <span className="text-3xl relative bottom-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
          eSIM
        </span>
      </div>
        </div>

        {/* Under Construction Message */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Under Construction, but not for long.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're building something extraordinary in the Web3 space. 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">
              The future is being crafted...
            </span>
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mt-12 space-y-4">
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s',
                }}
              />
            ))}
          </div>
          
          <div className="text-sm text-gray-400 font-mono tracking-wider">
            BUILDING GeSIM...
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-80 max-w-full">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-pulse" style={{ width: '67%' }} />
          </div>
          <div className="text-xs text-gray-400 mt-2 font-mono">67% COMPLETE</div>
        </div>

        {/* Coming Soon Badge */}
        <div className="mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-purple-600/20 border border-purple-500/30 rounded-md backdrop-blur-sm">
            {/* <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3" /> */}
            <span className="text-white font-semibold tracking-wide">LAUNCHING SOON</span>
          </div>
        </div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>
    </div>
  );
};

export default Index;
