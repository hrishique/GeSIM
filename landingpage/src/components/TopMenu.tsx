import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react"; // or use Heroicons, FontAwesome, etc.
import { useNavigate } from "react-router-dom";

export default function TopMenu({ setIsModalOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  function handleClick() {
    setMenuOpen(false);
    setIsModalOpen(true);
  }

  return (
    <nav
      className="select-none text-white px-6 py-2 bg[#0F1729] ounded-full flex items-center justify-between w-full
     sticky top-0 right-0 left-0 z-50"
    >
      {/* Logo */}
      <div onClick={()=> navigate("/")} className="flex items-end cursor-pointer">
        <img src="/images/logo.png" width={50} alt="" />
        <span className="text-3xl relative bottom-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
          eSIM
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8 text-base">
        <a
          href="#features"
          className="hover:text-gray-300 text-gray-400 transition"
        >
          Features
        </a>
        {/* <a href="https://app.gesim.xyz/plans" target="_blank" className="hover:text-gray-300 transition">Plans</a> */}
        <a
          href="https://gesim.gitbook.io/gesim"
          target="_blank"
          className="hover:text-gray-300 text-gray-400 transition"
        >
          Docs
        </a>
        <a
          href="https://gesim.gitbook.io/gesim/kpi-and-growth-plan/milestones-month-1-3"
          target="_blank"
          className="hover:text-gray-300 text-gray-400 transition"
        >
          Roadmap
        </a>
        <a
          onClick={()=> navigate("/blog")}
          target="_blank"
          className="hover:text-gray-300 cursor-pointer text-gray-400 transition"
        >
          Blog
        </a>
        <a
          href="#contact"
          className="hover:text-gray-300 text-gray-400 transition"
        >
          Contact
        </a>
      </div>

      {/* CTA Button */}
      <div>
        <button
          onClick={handleClick}
          className="group uppercase hidden hover:bg-purple-700 border-[1px] border-solid border-gray-00 px-4 text-purple-500 hover:text-white py-2 rounded-xl font-medium text-sm transition-all duration-300 md:flex items-center gap-2 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
        >
          Get Early Access
          {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black rounded-md shadow-lg p-6 mt-2 flex flex-col space-y-4 md:hidden z-40">
          <a
            href="#features"
            className="hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          {/* <a href="https://app.gesim.xyz/plans" target="_blank" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Plans</a> */}
          <a
            href="https://gesim.gitbook.io/gesim"
            target="_blank"
            className="hover:text-gray-300 transition"
            onClick={handleClick}
          >
            Docs
          </a>
          <a
            href="https://gesim.gitbook.io/gesim/kpi-and-growth-plan/milestones-month-1-3"
            target="_blank"
            className="hover:text-gray-300 transition"
            onClick={handleClick}
          >
            Roadmap
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition"
            onClick={handleClick}
          >
            Contact
          </a>
         <button
          onClick={handleClick}
          className="group uppercase hidden hover:bg-purple-700 border-[1px] border-solid border-gray-00 px-4 text-purple-500 hover:text-white py-2 rounded-xl font-medium text-sm transition-all duration-300 md:flex items-center gap-2 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
        >
          Get Early Access
          {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
        </button>
        </div>
      )}
    </nav>
  );
}
