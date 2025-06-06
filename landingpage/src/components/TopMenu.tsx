import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use Heroicons, FontAwesome, etc.

export default function TopMenu({ setIsModalOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen(false);
    setIsModalOpen(true);
  }

  return (
    <nav className="select-none text-white px-6 py-2 bg-slate-950 rounded-full flex items-center justify-between w-full
     sticky top-2 right-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-">
       
        <img src="/images/logo.png" width={50} alt="" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
          eSIM
        </span> 
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8 text-base">
        <a href="#features" className="hover:text-gray-300 transition">
          Features
        </a>
        {/* <a href="https://app.gesim.xyz/plans" target="_blank" className="hover:text-gray-300 transition">Plans</a> */}
        <a
          href="https://gesim.gitbook.io/gesim"
          target="_blank"
          className="hover:text-gray-300 transition"
        >
          Docs
        </a>
        <a
          href="https://gesim.gitbook.io/gesim/kpi-and-growth-plan/milestones-month-1-3"
          target="_blank"
          className="hover:text-gray-300 transition"
        >
          Roadmap
        </a>
        <a href="#contact" className="hover:text-gray-300 transition">
          Contact
        </a>

          {/* CTA Button */}
      <a
        onClick={handleClick}
        className="hidden cursor-pointer md:inline bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-green-600 transition"
      >
        Get Early Access
      </a>
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
            className="bg-green-500 text-white w-auto text-sm font-medium px-4 py-2 rounded-full hover:bg-green-600 transition"
            onClick={handleClick}
          >
            Get Early Access
          </button>
        </div>
      )}
    </nav>
  );
}
