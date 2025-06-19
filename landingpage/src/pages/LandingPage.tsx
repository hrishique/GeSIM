import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSwitch } from "react-icons/io";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Check, Zap, Play } from "lucide-react";
import { BsSim } from "react-icons/bs";


import {
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Smartphone,
  DollarSign,
  BarChart4,
  Mail,
  ExternalLink,
  Wallet,
  LockKeyhole,
  EarthLock,
  Banknote,
  CreditCard,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import TopMenu from "@/components/TopMenu";
import WaitlistForm from "@/components/WaitlistForm";
import { FeatureCard } from "@/components/FeatureCard";
import ESIMSection from "@/components/EsimSection";
import BenefitsSection from "@/components/BenifitsSection";
import BenefitsMobile from "@/components/BenefitsMobile";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const formParam = searchParams.get("user");
    if (formParam === "invited") {
      setIsModalOpen(true);
    }
  }, [searchParams]);

  return (
    <>

      <div>
        {/* Hero Section */}

              <TopMenu setIsModalOpen={setIsModalOpen} />


        <section className="relative bottom-20 min-h-screen my-auto px-4 py-10 mt- w-full overflow-hidden ">
          {/* Video Background */}
          <div className="absolute left-0 right-0 inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-20 rounded-md"
            >
              <source
                src="bg.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0"></div>
          </div>

          <div className="relative z-20 px-4 pt-20 pb-32 min-h-screen mx-auto flex flex-col justify-center items-center">
              
              {/* Animated Main Heading */}
              <h1 className="text-2xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
                {" "}
                One eSIM for the World
              </h1>

              {/* Animated Subtitle */}
              <p className="text-xl md:text-lg text-center text-slate-300 max-w-4xl mt-5 mx-auto leading-relaxed mb-12 animate-fade-in delay-1000">
              
                Smart, borderless eSIM — connect globally, pay locally.
              </p>

              {/* Animated CTA Buttons */}
              <div className="flex sm:flex-row gap-4 mb-16 justify-center animate-fade-in delay-1200">
                <button  onClick={() => setIsModalOpen(true)} className="group  hover:bg-purple-700 border-[1px] border-solid border-gray-00 text-white px-8 py-2 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                {/* <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button> */}
              </div>

                 
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Early Access Section - Moved to below hero section */}
        <section className="hidden py-12 px-4 md:px-6 bg-secondary/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Early Access
            </h2>
            <p className="text-muted-foreground mb-6">
              Join our Telegram to stay updated and be among the first to
              experience GeSIM when we launch.
            </p>

            <div
              // onSubmit={handleSubmitEmail}
              className="flex flex-col justify-center sm:flex-row gap-3 max-w-md mx-auto"
            >
              {/* <div className="flex-grow"> */}
              {/* <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
                required
              /> */}
              {/* </div> */}
              <Button variant="default" className="whitespace-nowrap">
                <a href="https://t.me/gesimxyz" target="_blank">
                  {" "}
                  Get Early Access
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What is eSIM Section - Enhanced with more description */}
        <section className="rounded-md px-4">
        
            {/* Mobile-specific extra content */}
          {isMobile && (
            <div className="mt-10 hidden p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-center mb-4">
                Why eSIM for Mobile?
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Smartphone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">No Physical SIM Required</h5>
                    <p className="text-sm text-muted-foreground">
                      Free up space in your device and never worry about losing
                      your SIM card again.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Globe size={20} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Instant Global Coverage</h5>
                    <p className="text-sm text-muted-foreground">
                      Switch between carriers in seconds when traveling
                      internationally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <ArrowRight size={20} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Remote Activation</h5>
                    <p className="text-sm text-muted-foreground">
                      Activate new plans from anywhere with just your phone and
                      an internet connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* </div> */}
          <ESIMSection />
          
        </section>

        {/* Benefits Section - Updated Card Design */}
        <section id="features" className="rounded-md">
          <div className="md:block hidden">
              <BenefitsSection />
            
          </div>

          <div className=" md:hidden block">
               <BenefitsMobile />
          </div>
          
        </section>

        {/* Current Locations Section - Updated with better images */}
    <section className="pt-16 pb-5 px-0 bg-secondary/50">
  <div className="max-w-6xl mx-auto px-6">
    <h1 className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
      Launching Soon
    </h1>
    <p className="text-center text-muted-foreground mb-6 max-w-xl mx-auto">
      Will be available soon
    </p>
  </div>

  {/* FULL-WIDTH IMAGE OUTSIDE CONTAINER */}
    <video
              autoPlay
              loop
              muted
              playsInline
              className="w-1/2 mx-auto h-full object-cover rounded-md"
            >
              <source
                src="under.mp4"
                type="video/mp4"
              />
            </video>
</section>


        {/* Final CTA Section */}
        <section className="py-20 px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready for Global Connectivity?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience borderless, blockchain-powered connectivity with GeSIM.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" className="px-8">
                <a href="https://gesim.gitbook.io/gesim" target="_blank">
                  View Docs
                </a>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                className="px-8"
              >
                Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="py-12 px-4 bg-card/50 border-t border-primary/10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">GeSIM</h3>
                <p className="text-sm text-muted-foreground">
                  Smart, borderless eSIM — connect globally, pay locally.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Quick Links</h4>
                <ul className="space-y-2">
                  {/* <li>
                    <a href="https://app.gesim.xyz/plans" target="_blank">
                      <Button
                        variant="link"
                        className="p-0 h-auto"
                        // onClick={() => navigate("/")}
                      >
                        Plan
                      </Button>
                    </a>
                  </li> */}
                  <li>
                    <Button className="p-0 h-auto" variant="link">
                      <a href="https://gesim.gitbook.io/gesim" target="_blank">
                        Explore Docs
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      <a
                        href="https://gesim.gitbook.io/gesim/kpi-and-growth-plan/milestones-month-1-3"
                        target="_blank"
                      >
                        Roadmap
                      </a>
                    </Button>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      Terms of Service
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      Privacy Policy
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      Refund Policy
                    </Button>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Contact</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <a
                      href="mailto:contact@gesim.xyz"
                      className="hover:text-gray-300"
                    >
                      contact@gesim.xyz
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4" />
                    www.gesim.xyz
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} GeSIM. All rights reserved.
              </p>

              <div className="mt-4 md:mt-0 flex gap-2 space-x-4">
                <Button
                  variant="ghost"
                  className="rounded-full hover:bg-[#634EBE] hover:scale-110 h-8 w-8"
                >
                  <a href="https://x.com/gesimxyz" target="_blank">
                    <FaXTwitter />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-full hover:bg-[#634EBE] hover:scale-110 h-8 w-8"
                >
                  <a href="https://t.me/gesimxyz" target="_blank">
                    <FaTelegramPlane />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </footer>

        {/* Witlist Form Popup */}
        <WaitlistForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
};

export default LandingPage;
