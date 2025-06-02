import React from "react";

const TopMenu = () => {
  return (
    <div>
      <nav className="bg-[#111] text-white px-6 py-4 flex items-center justify-between rounded-full max-w-5xl mx-auto mt-6 shadow-md">
        {/* <!-- Logo --> */}
        <div className="flex items-center space-x-2">
          <span className="text-green-500 text-xl">⌘</span>
          <span className="font-semibold text-lg">CryptoTrade</span>
        </div>

        {/* <!-- Navigation Links --> */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#features" className="hover:text-gray-300 transition">
            Features
          </a>
          <a href="#prices" className="hover:text-gray-300 transition">
            Prices
          </a>
          <a href="#testimonials" className="hover:text-gray-300 transition">
            Testimonials
          </a>
        </div>

        {/* <!-- CTA Button --> */}
        <a
          href="#start"
          className="bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-green-600 transition"
        >
          Start Trading
        </a>
      </nav>
    </div>
  );
};

export default TopMenu;
