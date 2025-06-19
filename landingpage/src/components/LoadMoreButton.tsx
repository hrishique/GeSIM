import React from 'react';

interface LoadMoreButtonProps {
  onClick: () => void;
  loading: boolean;
  hasMore: boolean;
}

const LoadMoreButton = ({ onClick, loading, hasMore }: LoadMoreButtonProps) => {
  if (!hasMore) {
    return (
      <div className="text-center py-12">
        <div className="relative inline-block">
          <p className="text-white/60 font-mono tracking-wider">END OF TRANSMISSION</p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div className="w-1 h-1 bg-white/40"></div>
            <div className="w-1 h-1 bg-white/40"></div>
            <div className="w-1 h-1 bg-white/40"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-16">
      <button
        onClick={onClick}
        disabled={loading}
        className="group relative px-12 py-4 border-2 border-white text-white font-mono uppercase tracking-widest overflow-hidden transition-all duration-300 hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {/* Background animation */}
        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        
        {/* Button content */}
        <div className="relative flex items-center justify-center space-x-3">
          {loading ? (
            <>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-current animate-pulse"></div>
                <div className="w-2 h-2 bg-current animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-current animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span>Loading</span>
            </>
          ) : (
            <>
              <span>Load More</span>
              <div className="flex flex-col space-y-px">
                <div className="w-3 h-px bg-current transform group-hover:translate-x-1 transition-transform duration-300"></div>
                <div className="w-3 h-px bg-current transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: '0.05s' }}></div>
                <div className="w-3 h-px bg-current transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: '0.1s' }}></div>
              </div>
            </>
          )}
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current"></div>
      </button>
    </div>
  );
};

export default LoadMoreButton;
