import {
  Check,
  Smartphone,
  CreditCard,
  Globe,
  Zap,
  Shield,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import { ComparisonCard } from "./ComparisonCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ESIMSection = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);
    const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !leftRef.current || !rightRef.current) return;

      // Animate in (when entering)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
        onEnter: () => {
          gsap.to(leftRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          });
          gsap.to(rightRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        },
        onLeave: () => {
          // Animate out when scrolling down
          gsap.to(leftRef.current, {
            x: -200,
            opacity: 0,
            duration: 0.6,
            ease: "power3.in",
          });
          gsap.to(rightRef.current, {
            x: 200,
            opacity: 0,
            duration: 0.6,
            ease: "power3.in",
          });
        },
        onLeaveBack: () => {
          // Animate out when scrolling up
          gsap.to(leftRef.current, {
            x: -200,
            opacity: 0,
            duration: 0.6,
            ease: "power3.in",
          });
          gsap.to(rightRef.current, {
            x: 200,
            opacity: 0,
            duration: 0.6,
            ease: "power3.in",
          });
        },
        onEnterBack: () => {
          // Re-animate in on scroll back
          gsap.to(leftRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          });
          gsap.to(rightRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        },
        markers: false, // turn to true for debugging
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const traditionalFeatures = [
    "Physical card to insert",
    "Need multiple SIMs for different countries",
    "Easily lost or damaged",
    "Limited to one carrier",
  ];

  const esimFeatures = [
    { text: "Digital profile - no physical card", icon: Smartphone },
    { text: "One eSIM works globally", icon: Globe },
    { text: "Instant activation via QR code", icon: Zap },
    { text: "Blockchain-secured connectivity", icon: Shield },
  ];

  return (
    <section className="rounded-md py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl  font-bold text-white mb-8">
            What is{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              GeSIM?
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            GeSIM is a decentralized platform for buying and managing eSIM data
            plans using the power of smart contracts. It connects global users
            to the nearest local telecom networks through on-chain identity,
            enabling flexible switching to better operators — all while using
            tokenized payments with a pay-as-you-go model.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Physical SIM vs GeSIM
          </h2>

          <div ref={containerRef} className="flex md:flex-row flex-col justify-center gap-8 max-w-6xl mx-auto">
            {/* Traditional SIM Card */}
            <ComparisonCard 
              title="Traditional SIM"
              type="traditional"
              features={traditionalFeatures}
              leftRef={leftRef}
              rightRef={rightRef}
            />

            {/* GeSIM Card */}
            <ComparisonCard leftRef={leftRef} rightRef={rightRef} title="GeSIM" type="esim" features={esimFeatures} />
          </div>
        </div>
      </div>

      <div className=" text-5xl font-semibold text-gray-500 opacity-30 marquee absolute top-1/2 -z-10">
        <span>
          GeSIM GeSIM GeSIM GeSIM GeSIM GeSIM
        </span>
      </div>
    </section>
  );
};

export default ESIMSection;
