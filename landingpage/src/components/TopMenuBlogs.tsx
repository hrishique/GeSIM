import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react"; // or use Heroicons, FontAwesome, etc.
import { useNavigate } from "react-router-dom";

export default function TopMenuBlogs({ setIsModalOpen }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/?user=invited");
  }

  return (
    <nav
      className="select-none text-white px-6 py-2 bg-[#0F1729] ounded-full flex items-center justify-between w-full
     sticky top-0 right-0 left-0 z-50"
    >
      {/* Logo */}
      <div onClick={() => navigate("/")} className="flex items-end cursor-pointer">
        <img src="/images/logo.png" width={50} alt="" />
        <span className="text-3xl relative bottom-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
          eSIM
        </span>
      </div>

      {/* CTA Button */}
      <div>
        <button
          onClick={handleClick}
          className="group uppercase hover:bg-purple-700 border-[1px] border-solid border-gray-00 px-4 text-purple-500 hover:text-white py-2 rounded-xl font-medium text-sm transition-all duration-300 md:flex items-center gap-2 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
        >
          Get Early Access
          {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
        </button>
      </div>
    </nav>
  );
}
