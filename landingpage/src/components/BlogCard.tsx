import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <article 
      className="group relative bg-white/5 border border-white/20 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-white/40"
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: 'fade-in 0.6s ease-out forwards'
      }}
    >
      {/* Card number */}
      <div className="absolute top-4 left-4 z-20">
        <span className="text-xs font-mono text-white/50 bg-black/50 px-2 py-1 border border-white/20">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
        
        {/* Geometric overlay */}
        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/60 transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
      </div>
      
      <div className="relative p-6 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-white/30 text-white/70 hover:bg-white hover:text-black transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title with creative styling */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 relative group-hover:text-white/90 transition-colors duration-300">
          {post.title}
          <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500"></div>
        </h3>
        
        <p className="text-white/70 mb-4 line-clamp-3 leading-relaxed font-light">
          {post.excerpt}
        </p>
        
        {/* Author and meta info with geometric elements */}
        <div className="flex items-center justify-between text-sm text-white/60 pt-4 border-t border-white/20">
          {/* <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 border border-white/60 flex items-center justify-center text-white font-mono text-xs">
                {post.author.charAt(0)}
              </div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></div>
            </div>
            <span className="font-mono">{post.author}</span>
          </div> */}
          <div className="flex items-center space-x-3 font-mono text-xs">
            <span>{post.date}</span>
            <div className="w-1 h-1 bg-white/60"></div>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none"></div>
    </article>
  );
};

export default BlogCard;
