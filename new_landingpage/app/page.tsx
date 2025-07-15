"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Moon,
  Sun,
  Globe,
  Smartphone,
  CreditCard,
  Shield,
  Wallet,
  Mail,
  Zap,
  ArrowRight,
  Users,
  Building2,
  Award,
  Star,
  Wifi,
  Radio,
  Network,
  BookOpen,
} from "lucide-react"
import Image from "next/image"

export default function GeSIMLanding() {
  const [isDark, setIsDark] = useState(false)
  const [email, setEmail] = useState("")
  const [walletConnected, setWalletConnected] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)
  const connectWallet = () => setWalletConnected(!walletConnected)

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const partners = [
    {
      name: "Airalo",
      logo: "/airalo_logo.png",
      color: "from-blue-500 to-blue-600",
      description: "Global eSIM marketplace leader",
    },
    {
      name: "eSIM Access",
      logo: "/esimaccess_logo.png",
      color: "from-green-500 to-green-600",
      description: "Enterprise eSIM solutions",
    },
    {
      name: "Telnyx",
      logo: "/telnyx_logo.png",
      color: "from-purple-500 to-purple-600",
      description: "Telecom infrastructure platform",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}
    >
      {/* Header */}
      <header className="relative z-50 px-6 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 p-0.5 bg-gradient-to-br from-slate-800 to-slate-900   overflow-hidden">
              <Image src={isDark ? "/gesim-logo.png" : "/gesim_light.png"} alt="GeSIM" fill className={`object-cover ${isDark ? "scale-150" : "scale-125"}`} />
            </div>
            <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#features"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <Zap className="w-4 h-4" />
              Features
            </a>
            <a
              href="#partners"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <Building2 className="w-4 h-4" />
              Partners
            </a>
            <a
              href="#app"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <Smartphone className="w-4 h-4" />
              App
            </a>
            <a
              href="https://gesim.gitbook.io/gesim"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <BookOpen className="w-4 h-4" />
              Docs
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"} rounded-xl`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              onClick={scrollToWaitlist}
              className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
            >
              <Mail className="w-4 h-4" />
              Join Waitlist
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-20 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-20 left-10 w-72 h-72 ${isDark ? "bg-slate-800/20" : "bg-slate-200/30"} rounded-full blur-3xl`}
          ></div>
          <div
            className={`absolute bottom-20 right-20 w-96 h-96 ${isDark ? "bg-slate-700/20" : "bg-slate-300/30"} rounded-full blur-3xl`}
          ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Tag Line */}
              <div className="flex items-center gap-3 mb-8">
                <Zap className={`w-6 h-6 flex-shrink-0 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
                <span className={`text-lg font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  One eSIM for the world
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Global
                <br />
                <span className={`${isDark ? "text-slate-300" : "text-slate-700"} font-light italic`}>
                  Connectivity
                </span>
                <br />
                <span className="relative">
                  Reimagined
                  <div
                    className={`absolute -top-4 -right-8 w-8 h-8 ${isDark ? "bg-slate-800" : "bg-slate-900"} rounded-full flex items-center justify-center text-xs font-bold text-white transform rotate-12 shadow-lg`}
                  >
                    <Globe className="w-4 h-4" />
                  </div>
                </span>
              </h1>

              {/* Subheading */}
              <p
                className={`text-xl md:text-2xl font-medium mb-12 ${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl leading-relaxed`}
              >
               Smart, borderless eSIM — connect globally, pay locally.
              </p>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button
                  size="lg"
                  onClick={() => window.open('https://t.me/charchit_web3', '_blank')}
                  className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-12 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3`}
                >
                  <ArrowRight className="w-5 h-5" />
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={`px-12 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                    isDark
                      ? "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Smartphone className="w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Animation - Telecom x Web3 Intersection */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-96 h-96">
                {/* Central Intersection Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Core Hub */}
                    <div
                      className={`w-24 h-24 ${isDark ? "bg-gradient-to-br from-slate-700 to-slate-800" : "bg-gradient-to-br from-slate-800 to-slate-900"} rounded-full shadow-2xl flex items-center justify-center border-4 ${isDark ? "border-slate-600" : "border-white"} overflow-hidden`}
                    >
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        <Image 
                          src={isDark ? "/gesim-logo.png" : "/gesim_light.png"} 
                          alt="GeSIM" 
                          fill 
                          className="object-cover scale-[1.7]" 
                          style={{ objectPosition: 'center' }}
                        />
                      </div>
                    </div>

                    {/* Pulsing Rings */}
                    <div
                      className={`absolute inset-0 w-24 h-24 border-2 ${isDark ? "border-slate-600/40" : "border-slate-400/40"} rounded-full animate-ping`}
                    ></div>
                    <div
                      className={`absolute -inset-2 w-28 h-28 border-2 ${isDark ? "border-slate-600/30" : "border-slate-400/30"} rounded-full animate-ping`}
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>

                {/* Telecom Satellites (Traditional Telecom) */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="relative w-full h-full">
                    {/* Telecom Node 1 */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                      <div
                        className={`w-16 h-16 ${isDark ? "bg-blue-600" : "bg-blue-700"} rounded-2xl p-3 shadow-xl border-2 ${isDark ? "border-blue-500" : "border-blue-600"}`}
                      >
                        <Radio className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Telecom Node 2 */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
                      <div
                        className={`w-16 h-16 ${isDark ? "bg-green-600" : "bg-green-700"} rounded-2xl p-3 shadow-xl border-2 ${isDark ? "border-green-500" : "border-green-600"}`}
                      >
                        <Wifi className="w-full h-full text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Web3 Satellites (Blockchain/Crypto) */}
                <div className="absolute inset-0 animate-spin-reverse">
                  <div className="relative w-full h-full">
                    {/* Web3 Node 1 */}
                    <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2">
                      <div
                        className={`w-14 h-14 ${isDark ? "bg-purple-600" : "bg-purple-700"} rounded-xl p-2.5 shadow-xl border-2 ${isDark ? "border-purple-500" : "border-purple-600"}`}
                      >
                        <CreditCard className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Web3 Node 2 */}
                    <div className="absolute right-0 top-1/2 transform translate-x-6 -translate-y-1/2">
                      <div
                        className={`w-14 h-14 ${isDark ? "bg-cyan-600" : "bg-cyan-700"} rounded-xl p-2.5 shadow-xl border-2 ${isDark ? "border-cyan-500" : "border-cyan-600"}`}
                      >
                        <Shield className="w-full h-full text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute inset-0">
                  {/* Telecom Orbit Ring */}
                  <div
                    className={`absolute inset-8 border-2 border-dashed ${isDark ? "border-blue-500/30" : "border-blue-600/30"} rounded-full`}
                  ></div>

                  {/* Web3 Orbit Ring */}
                  <div
                    className={`absolute inset-12 border-2 border-dashed ${isDark ? "border-purple-500/30" : "border-purple-600/30"} rounded-full`}
                  ></div>
                </div>

                {/* Floating Network Nodes */}
                <div className="absolute top-16 right-16 animate-bounce">
                  <div
                    className={`w-8 h-8 ${isDark ? "bg-orange-600" : "bg-orange-700"} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <Network className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-16 left-16 animate-bounce" style={{ animationDelay: "1s" }}>
                  <div
                    className={`w-6 h-6 ${isDark ? "bg-pink-600" : "bg-pink-700"} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product number stats */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div
              className={`p-10 rounded-2xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white/70 border-slate-200"} border shadow-lg`}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Globe className={`w-8 h-8 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
                <div className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>150+</div>
              </div>
              <div className={`text-center ${isDark ? "text-slate-400" : "text-slate-600"} font-medium`}>Countries</div>
            </div>
            <div
              className={`p-10 rounded-2xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white/70 border-slate-200"} border shadow-lg`}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className={`w-8 h-8 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
                <div className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>3+
            </div>
              </div>
              <div className={`text-center ${isDark ? "text-slate-400" : "text-slate-600"} font-medium`}>Integration Partners</div>
            </div>
            <div
              className={`p-10 rounded-2xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white/70 border-slate-200"} border shadow-lg`}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Users className={`w-8 h-8 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
                <div className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>2,000+
                </div>
              </div>
              <div className={`text-center ${isDark ? "text-slate-400" : "text-slate-600"} font-medium`}>Waitlist Signups</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className={`py-24 px-6 ${isDark ? "bg-slate-900/30" : "bg-slate-50"}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building2 className={`w-8 h-8 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                Strategic Partners
              </h2>
            </div>
            <p
              className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"} flex items-baseline justify-center gap-2`}
            >
              <Star className="w-5 h-5 translate-y-0.5" />
              Leading the telecom revolution together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`group p-8 rounded-3xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50" : "bg-white/70 border-slate-200 hover:bg-white"} border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center flex items-center justify-center`}
              >
                <div className="w-32 h-32 relative group-hover:scale-110 transition-transform">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className={`object-contain ${
                      (partner.name === "Telnyx" && !isDark) || (partner.name === "eSIM Access" && isDark) ? "invert" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              onClick={() => window.open('https://t.me/charchit_web3', '_blank')}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 mx-auto ${
                isDark
                  ? "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Building2 className="w-5 h-5" />
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-32 px-6 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className={`w-8 h-8 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
              <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                Revolutionary Features
              </h2>
            </div>
            <p className={`text-xl ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              The future of global connectivity is here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 min-w-[4rem] min-h-[4rem] ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Globe className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Global Pay-Per-Use Connectivity</h3>
              </div>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Smart billing, no changing eSIM, 150+ countries
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 min-w-[4rem] min-h-[4rem] ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Network className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Operator Switch Logic</h3>
              </div>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Seamless Effortless Travel Connectivity
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 min-w-[4rem] min-h-[4rem] ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <CreditCard className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Buy Regional Data</h3>
              </div>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
              Roam Free with Stablecoin – Local Prices, Pre/Postpaid, Full Control            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section id="app" className={`py-20 px-6 ${isDark ? "bg-slate-900/30" : "bg-slate-50"}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Smartphone className={`w-8 h-8 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
              Your Digital Passport
            </h2>
          </div>

          <p
            className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"} flex items-baseline justify-center gap-2`}
          >
            <Globe className="w-5 h-5 flex-shrink-0 translate-y-0.5" />
            Empower Global Connectivity, Local Access, and Micro-Billing Standardization with One Sleek Mobile App
          </p>

          <div className="relative w-72 h-96 mx-auto mb-8">
            <div
              className={`w-full h-full rounded-3xl p-4 shadow-2xl ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} border`}
            >
              <div
                className={`w-full h-full rounded-2xl flex items-center justify-center ${isDark ? "bg-slate-700/50" : "bg-slate-100/50"}`}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div
                      className={`w-20 h-20 ${isDark ? "bg-slate-600" : "bg-slate-800"} rounded-3xl flex items-center justify-center shadow-xl`}
                    >
                      <Smartphone className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>Mint GeSIM</h3>
                  <p
                    className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"} mb-4 flex items-baseline justify-center gap-2`}
                  >
                    <Zap className="w-4 h-4 translate-y-0.5" />
                    Coming Q4 2025
                  </p>
                  <div
                    onClick={scrollToWaitlist}
                    className={`inline-flex items-center gap-2 ${isDark ? "bg-slate-600 hover:bg-slate-500" : "bg-slate-800 hover:bg-slate-700"} text-white px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 hover:scale-105`}
                  >
                    <Star className="w-3 h-3" />
                    Beta Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className={`py-32 px-6 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className={`w-8 h-8 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
              Join the Revolution
            </h2>
          </div>

          <p
            className={`text-xl mb-12 ${isDark ? "text-slate-400" : "text-slate-600"} flex items-baseline justify-center gap-2`}
          >
            <Users className="w-5 h-5 translate-y-0.5" />
            Join a Thriving Global Community of Digital Nomads with GeSIM
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`flex-1 h-14 px-6 rounded-xl text-lg ${isDark ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-400" : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-500"} shadow-lg`}
              />
            </div>

            <Button
              className={`w-full max-w-2xl ${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} h-14 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3`}
              disabled={!email}
            >
              <ArrowRight className="w-5 h-5" />
              Join the Revolution
            </Button>
          </div>

          <p
            className={`text-sm mt-8 ${isDark ? "text-slate-500" : "text-slate-600"} flex items-baseline justify-center gap-2`}
          >
            <Shield className="w-4 h-4 translate-y-0.5" />
            No spam, ever. Be the first to know when we launch.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-16 px-6 ${isDark ? "bg-slate-900 border-t border-slate-800" : "bg-slate-50 border-t border-slate-200"}`}
      >
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative w-8 h-8 p-0.5 bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg overflow-hidden">
              <Image src={isDark ? "/gesim-logo.png" : "/gesim_light.png"} alt="GeSIM" fill className="object-cover scale-150" />
            </div>
            <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</span>
          </div>
          <p
            className={`${isDark ? "text-slate-500" : "text-slate-600"} text-sm flex items-baseline justify-center gap-2`}
          >
           © 2025 GeSIM. Revolutionizing global connectivity with blockchain technology.
          </p>
        </div>
      </footer>
    </div>
  )
}
