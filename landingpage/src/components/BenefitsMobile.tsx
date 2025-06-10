import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
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
import { IoIosSwitch } from "react-icons/io";


const BenefitsMobile = () => {
  return (
    <div>
       <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Benefits of GeSIM
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Updated card design */}
              <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-2 bg-gradient-to-r from-primary to-primary/70"></div>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Globe size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Global Pay-Per-Use Connectivity
                  </h3>
                  <p className="text-muted-foreground">
                    Smart billing, no changing eSIM, 180+ countries (Coming
                    soon)
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-2 bg-gradient-to-r from-primary/70 to-primary"></div>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <IoIosSwitch size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Operater switch logic
                  </h3>
                  <p className="text-muted-foreground">
                    Seamless Effortless Travel Connectivity.
                  </p>
                </CardContent>
              </Card>

              {/* <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-2 bg-gradient-to-r from-primary to-primary/70"></div>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Globe size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Global Access</h3>
                  <p className="text-muted-foreground">
                    Connect in 180+ countries—no SIM cards, no roaming fees.
                  </p>
                </CardContent>
              </Card> */}

              <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-2 bg-gradient-to-r from-primary/70 to-primary"></div>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Shield size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">eSIM SBT Mint</h3>
                  <p className="text-muted-foreground">
                    On-Chain Identity for Travel Perks
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="h-2 bg-gradient-to-r from-primary/70 to-primary"></div>
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Banknote size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Buy regional data</h3>
                  <p className="text-muted-foreground">
                    Top up with USDC or fiat instantly via on-ramps.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mobile-specific wallet content */}
            {/* {isMobile && (
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
                        Pay for your data with cryptocurrencies for faster
                        global transactions.
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
                        Keep full control of your digital identity and eSIM
                        data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </div>
    </div>
  )
}

export default BenefitsMobile
