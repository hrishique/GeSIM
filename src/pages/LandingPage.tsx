import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const isMobile = useIsMobile();

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for your interest!",
      description: "We'll notify you when early access is available.",
    });

    setEmail("");
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
              One eSIM for the World
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Connect seamlessly across borders with a single decentralized eSIM
              powered by Blockchain technology.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2"
              >
                Explore App
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] w-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
            <div className="absolute h-[300px] w-[300px] rounded-full border border-primary/20 animate-pulse"></div>
            <div className="absolute h-[200px] w-[200px] rounded-full border border-primary/30 animate-pulse"></div>
            <div className="relative z-10 w-[180px] h-[280px] bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-md border border-white/10 shadow-xl rounded-3xl flex items-center justify-center floating">
              <Globe size={80} className="text-primary" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Smartphone size={24} className="text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section - Moved to below hero section */}
      <section className="py-12 px-4 md:px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get Early Access
          </h2>
          <p className="text-muted-foreground mb-6">
            Be among the first to experience Gesim when we launch. Sign up for
            early access updates.
          </p>

          <form
            onSubmit={handleSubmitEmail}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-grow">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
                required
              />
            </div>
            <Button type="submit" className="whitespace-nowrap">
              Get Early Access
            </Button>
          </form>
        </div>
      </section>

      {/* What is eSIM Section - Enhanced with more description */}
      <section className="py-16 px-4 md:px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What is eSIM?</h2>

          <div className="max-w-3xl mx-auto mb-12">
  <p className="text-lg text-muted-foreground mb-4">
    An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan without having to use a physical SIM card. Instead of inserting a physical card, eSIM technology is built directly into your device.
  </p>
  
  <ul className="text-lg text-muted-foreground list-disc pl-6 space-y-2">
    <li>
      <span className="font-medium">eSIM (embedded SIM):</span> Digital SIM embedded in devices, eliminating the need for a physical card.
    </li>
    <li>
      <span className="font-medium">Gesim's blockchain integration:</span> Enables secure global connectivity, easy carrier switching, and digital identity protection.
    </li>
    <li>
      <span className="font-medium">Multi-profile support:</span> Store and switch between multiple cellular profiles instantly.
    </li>
    <li>
      <span className="font-medium">Remote activation:</span> No physical SIM delivery or in-store visits needed—plans activate digitally.
    </li>
  </ul>
</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">eSIM vs Physical SIM</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-medium mb-4">
                      Traditional SIM
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-muted-foreground mr-2">•</span>
                        <span>Physical card to insert</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-muted-foreground mr-2">•</span>
                        <span>Need multiple SIMs for different countries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-muted-foreground mr-2">•</span>
                        <span>Easily lost or damaged</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-muted-foreground mr-2">•</span>
                        <span>Limited to one carrier</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-medium text-primary mb-4">
                      Gesim eSIM
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Digital profile - no physical card</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>One eSIM works globally</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Instant activation via QR code</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Blockchain-secured connectivity</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative h-[350px] flex items-center justify-center">
              <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10 w-full max-w-md">
                <img
                  src="/images/esim-comparison.svg"
                  alt="eSIM comparison"
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/600x400/6E56CF/fff?text=eSIM+Comparison";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile-specific extra content */}
          {isMobile && (
            <div className="mt-10 p-6 bg-primary/10 rounded-lg border border-primary/20">
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
        </div>
      </section>

      {/* Benefits Section - Updated Card Design */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Benefits of Gesim
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Updated card design */}
            <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/70"></div>
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <DollarSign size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Dynamic Pricing</h3>
                <p className="text-muted-foreground">
                  Get the best rates automatically based on your location and
                  usage patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-primary/70 to-primary"></div>
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <BarChart4 size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Pay-As-You-Use</h3>
                <p className="text-muted-foreground">
                  No need for extra recharges. Only pay for what you actually
                  use.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/70"></div>
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <ArrowRight size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Resell Unused Data</h3>
                <p className="text-muted-foreground">
                  Turn your unused data into value by reselling it on our
                  marketplace.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-primary/70 to-primary"></div>
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Shield size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Secure & Encrypted</h3>
                <p className="text-muted-foreground">
                  Your data is fully secure and encrypted on the blockchain.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mobile-specific wallet content */}
          {isMobile && (
            <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-center mb-4">
                Manage With Your Wallet
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Wallet size={20} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Blockchain Security</h5>
                    <p className="text-sm text-muted-foreground">
                      Your eSIM identity is secured by Blockchain blockchain
                      technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <DollarSign size={20} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Crypto Payments</h5>
                    <p className="text-sm text-muted-foreground">
                      Pay for your data with cryptocurrencies for faster global
                      transactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <ArrowRight size={20} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Self-Custody</h5>
                    <p className="text-sm text-muted-foreground">
                      Keep full control of your digital identity and eSIM data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Current Locations Section - Updated with better images */}
      <section className="py-16 px-4 md:px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Where We're Active
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Currently operating in these locations with many more coming soon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="glass-card overflow-hidden">
              <div className="h-64 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Dubai"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/600x400/6E56CF/fff?text=Dubai";
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Dubai</h3>
                <p className="text-muted-foreground">
                  Seamless connectivity across the United Arab Emirates, perfect
                  for business travelers and tourists alike.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card overflow-hidden">
              <div className="h-64 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Singapore"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/600x400/6E56CF/fff?text=Singapore";
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Singapore</h3>
                <p className="text-muted-foreground">
                  Stay connected in one of Asia's most dynamic business and
                  technology hubs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => navigate("/plans")} className="px-8">
              View All Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Global Connectivity?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience borderless, blockchain-powered connectivity with Gesim.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate("/plans")} className="px-8">
              View Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="px-8"
            >
              Explore App <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card/50 border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Gesim</h3>
              <p className="text-sm text-muted-foreground">
                Global eSIM connectivity powered by blockchain technology.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => navigate("/plans")}
                  >
                    Plans
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
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
                  contact@gesim.xyz
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
              © {new Date().getFullYear()} GeSim. All rights reserved.
            </p>

            <div className="mt-4 md:mt-0 flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-8 h-8"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-8 h-8"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-8 h-8"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
