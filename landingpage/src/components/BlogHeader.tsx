import React from 'react';

const BlogHeader = () => {
  return (
    <header className="text-center mb-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      <div className="relative">
        {/* Main title with creative typography */}
        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter relative">
          <span className="relative inline-block">
            blogs
            <div className="absolute inset-0 border-4 border-white/20 transform rotate-1 -z-10"></div>
            <div className="absolute inset-0 border-2 border-white/30 transform -rotate-1 -z-10" style={{ animationDelay: '0.1s' }}></div>
          </span>
        </h1>      
      </div>
      
      {/* <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
        Exploring the future of{' '}
        <span className="relative inline-block font-semibold">
          Web3
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/50"></div>
        </span>
        {', '}
        <span className="relative inline-block font-semibold">
          blockchain innovation
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/50"></div>
        </span>
        {', and '}
        <span className="relative inline-block font-semibold">
          decentralized technologies
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/50"></div>
        </span>
      </p> */}
      
      {/* Topic tags with creative layout */}
      {/* <div className="flex flex-wrap justify-center gap-6 items-center">
        {['Web3', 'Blockchain', 'DeFi', 'NFTs', 'dApps'].map((topic, index) => (
          <div key={topic} className="relative group">
            <span className="px-6 py-3 border border-white/30 text-sm font-mono tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-default block relative z-10">
              {topic}
            </span>
            <div className="absolute inset-0 border border-white/20 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
          </div>
        ))}
      </div> */}
    </header>
  );
};

export default BlogHeader;