import React from "react";
import { Globe, ToggleRight, Shield, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const BenefitsSection = () => {

    const cardsRef = useRef<HTMLDivElement | null>(null);

// old
 useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".benefit-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 90%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, cardsRef);

    return () => ctx.revert();
  }, []);




  const benefits = [
    {
      icon: Globe,
      title: "Global Pay-Per-Use Connectivity",
      description: "Smart billing, no changing eSIM, 180+ countries",
      status: "(Coming soon)",
      position: "top-left",
    },
    {
      icon: ToggleRight,
      title: "Operator switch logic",
      description: "Seamless Effortless Travel Connectivity.",
      position: "top-right",
    },
    {
      icon: Shield,
      title: "eSIM SBT Mint",
      description: "On-Chain Identity for Travel Perks",
      position: "bottom-left",
    },
    {
      icon: BadgeDollarSign,
      title: "Buy regional data",
      description: "Top up with USDC or fiat instantly via on-ramps.",
      position: "bottom-right",
    },
  ];

  const getBenefitStyle = (position: string) => {
    switch (position) {
      case "top-left":
        return "absolute top-8 left-8";
      case "top-right":
        return "absolute top-8 right-8";
      case "bottom-left":
        return "absolute bottom-8 left-8";
      case "bottom-right":
        return "absolute bottom-8 right-8";
      default:
        return "";
    }
  };

  const getWaveStyle = (position: string) => {
    const baseClasses = "absolute opacity-60";
    switch (position) {
      case "top-left":
        return `${baseClasses} top-1/2 left-1/2 w-80 h-0.5 origin-left transform -translate-y-1/2 rotate-[-135deg] animate-pulse`;
      case "top-right":
        return `${baseClasses} top-1/2 left-1/2 w-80 h-0.5 origin-left transform -translate-y-1/2 rotate-[-45deg] animate-pulse`;
      case "bottom-left":
        return `${baseClasses} top-1/2 left-1/2 w-80 h-0.5 origin-left transform -translate-y-1/2 rotate-[135deg] animate-pulse`;
      case "bottom-right":
        return `${baseClasses} top-1/2 left-1/2 w-80 h-0.5 origin-left transform -translate-y-1/2 rotate-[45deg] animate-pulse`;
      default:
        return "";
    }
  };

  return (
    <section className="relative pb-10 rounded-md px-4 overflow-hidden flex items-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
            {" "}
            Benefits of GeSIM
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Experience seamless connectivity through our GeSIM
            ecosystem
          </p>
        </div>

        {/* Central Network Container */}
        <div  
          className="relative flex justify-center items-center"
          style={{ height: "700px" }}
        >
          {/* Central eSIM Chip */}
          <div className="relative z-20">
            {/* Main eSIM Body */}
            <div className="relative w-32 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl border border-slate-600">
              {/* eSIM Circuit Pattern */}
              <div className="absolute inset-2 border border-slate-500 rounded-md">
                {/* Circuit Lines */}
                <div className="absolute top-2 left-2 w-6 h-0.5 bg-indigo-400"></div>
                <div className="absolute top-2 right-2 w-6 h-0.5 bg-indigo-400"></div>
                <div className="absolute bottom-2 left-2 w-6 h-0.5 bg-indigo-400"></div>
                <div className="absolute bottom-2 right-2 w-6 h-0.5 bg-indigo-400"></div>
                <div className="absolute top-2 left-2 w-0.5 h-6 bg-indigo-400"></div>
                <div className="absolute top-2 right-2 w-0.5 h-6 bg-indigo-400"></div>
                <div className="absolute bottom-2 left-2 w-0.5 h-6 bg-indigo-400"></div>
                <div className="absolute bottom-2 right-2 w-0.5 h-6 bg-indigo-400"></div>

                {/* Central Processor */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-500 rounded-sm animate-pulse">
                  <div className="absolute inset-1 bg-indigo-400 rounded-sm opacity-80"></div>
                </div>
              </div>

              {/* eSIM Label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <span className="text-sm font-bold text-white bg-slate-800 px-3 py-1 rounded-full border border-slate-600">
                  GeSIM
                </span>
              </div>
            </div>

            {/* Electrical Wave Rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="w-48 h-48 border border-indigo-400/30 rounded-full animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-indigo-400/20 rounded-full animate-ping"
                style={{ animationDuration: "3s", animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-indigo-400/10 rounded-full animate-ping"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Electrical Wave Lines */}
          {benefits.map((benefit, index) => (
            <div
              key={`wave-${index}`}
              className={getWaveStyle(benefit.position)}
            >
              <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-transparent relative overflow-hidden">
                {/* Animated electrical current */}
                <div
                  className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"
                  style={{
                    animationDuration: "2s",
                    animationDelay: `${index * 0.5}s`,
                    transform: "translateX(-100%)",
                    animation: `electrical-flow 2s linear infinite ${
                      index * 0.5
                    }s`,
                  }}
                ></div>
              </div>
            </div>
          ))}


        <div ref={cardsRef}>
            {/* Benefits Cards */}
          {benefits.map((benefit, index) => (
             
            <div key={index} className={`benefit-card ${getBenefitStyle(benefit.position)}`}>
              <div className="group relative w-80 max-w-sm">
                {/* Connection Point */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-indigo-400 rounded-full animate-pulse z-10"></div>

                {/* Benefit Card */}
                <div className="relative p-6 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:border-indigo-500/30 ml-4 mt-4">
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className="inline-flex p-3 bg-slate-800 rounded-xl border border-slate-600 group-hover:border-indigo-500/50 transition-colors duration-300">
                      <benefit.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3 font-medium">
                      {benefit.description}
                    </p>
                    {benefit.status && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-300 bg-indigo-900/30 rounded-full border border-indigo-700/50">
                        {benefit.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

          {/* Additional Electrical Particles */}
          <div
            className="absolute top-20 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-60"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-32 right-1/4 w-1 h-1 bg-indigo-300 rounded-full animate-pulse opacity-60"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-40 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-60"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute bottom-32 right-1/3 w-1 h-1 bg-indigo-300 rounded-full animate-pulse opacity-60"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-20">
          <button className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold text-white shadow-lg hover:shadow-indigo-500/25 transform hover:scale-105 transition-all duration-300 border border-indigo-500">
            <span className="relative z-10">Connect to the Network</span>
          </button>
        </div> */}
      </div>

      {/* Custom CSS for electrical flow animation */}
      <style>{`
        @keyframes electrical-flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;
