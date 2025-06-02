import React from "react";

const TopMenu = () => {
  return (
    <div>
<nav className="select-none text-white px-6 py-4 flex items-center justify-between w-full sticky top-2 -md z-50">
        {/* <!-- Logo --> */}
        <div className="flex items-center space-x-2">
          {/* <span className="text-green-500 text-xl">⌘</span> */}
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">GeSIM</span>
        </div>

        {/* <!-- Navigation Links --> */}
        <div className="hidden md:flex items-center space-x-8 text-base">
          <a href="#features" className="hover:text-gray-300 transition">
            Features
          </a>
          <a href="https://app.gesim.xyz/plans" target="_blank" className="hover:text-gray-300 transition">
            Plans
          </a>
          <a href="https://gesim.gitbook.io/gesim" target="_blank" className="hover:text-gray-300 transition">
            Docs
          </a>
          <a href="https://gesim.gitbook.io/gesim/kpi-and-growth-plan/milestones-month-1-3" target="_blank" className="hover:text-gray-300 transition">
            Roadmap
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>
        </div>

      {/* <!-- CTA Button --> */}
        <a
          href="#start"
          className="bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-green-600 transition"
        >
         Get Early Access
        </a> 
      </nav>
    </div>
  );
};

export default TopMenu;
