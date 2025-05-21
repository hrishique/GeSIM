import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import UsageGraph from "@/components/UsageGraph";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronRight,
  ChevronDown,
  Globe,
  PlusCircle,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.ts";
import { onAuthStateChanged } from "firebase/auth";
import { TbCreditCardPay } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import clsx from "clsx";

type UserInfo = {
  name: string | null;
  email: string | null;
  uid: string;
  photo: string | null;
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photo: user.photoURL,
        });
        console.log("User is logged in:", user);
        // setLoginO/rNot(true)
      } else {
        console.log("User is logged out");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Mock data
  const userData = {
    name: "Alex",
    walletAddress: "2Ych8...pGQy4Nw",
    kycVerified: true,
  };

  const activeEsim = {
    id: "esim-123456",
    name: "Global Travel",
    dataUsed: 2.5,
    dataTotal: 10,
    daysLeft: 12,
    validUntil: "April 21, 2025",
    regions: ["Global"],
  };

  const plans = [
    { name: "GLOBAL LITE", price: "9.99 USDC" },
    { name: "GLOBAL STANDARD", price: "24.99 USDC" },
    { name: "GLOBAL PREMIUM", price: "39.99 USDC" },
  ];

  return (
    <Layout>
      <div className="max-w-lg mx-auto fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Hey, {user?.name || "User"}</h1>
            <div className="flex items-center mt-1">
              <div className="text-xs text-muted-foreground">
                {user?.email || "2Ych8hOPtr49332AKLHils"}
              </div>
              {userData.kycVerified && (
                <div className="flex items-center ml-2 text-xs text-primary">
                  <ShieldCheck size={12} className="mr-1" />
                  Verified
                </div>
              )}
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src={user?.photo || "/images/user.png"}
              alt="Profile"
              referrerPolicy="no-referrer"
              className="rounded-full w-9 h-9 object-cover border border-border"
            />
          </Button>
        </div>

        <section className="mb-6">
          <UsageGraph
            dataUsed={activeEsim.dataUsed}
            dataTotal={activeEsim.dataTotal}
            daysLeft={activeEsim.daysLeft}
            validUntil={activeEsim.validUntil}
          />
        </section>

        <section className="space-y-4">
          <Card className="glass-card border border-border/50">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                  <TbCreditCardPay size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Active Pay as you go</h3>
                  <p className="text-xs text-emerald-500 font-semibold text-muted-foreground">
                    Coming Soon!
                  </p>
                </div>
              </div>
              {/* <Button variant="ghost" size="icon">
                <ChevronRight size={20} />
              </Button> */}
            </CardContent>
          </Card>

          <Card className="glass-card border border-border/50">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-full"
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                    <Globe size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-left">Data Plans</h3>
                    <p className="text-xs text-muted-foreground">
                      Browse available eSIM plans
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-muted-foreground" />
                </motion.div>
              </CardContent>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="px-4 pt-0 pb-4 bg-muted/10"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm text-muted-foreground px-2 mb-4 mt-2">
                    Choose from our top global data plans for your needs:
                  </div>

                  {/* Plan Options */}
                  <div className="flex flex-col sm:flex-row gap-3 px-2 mb-4">
                    {plans.map((plan) => (
                      <div
                        key={plan.name}
                        onClick={() => setSelectedPlan(plan.name)}
                        className={clsx(
                          "flex-1 cursor-pointer rounded-lg border px-4 py-3 shadow-sm hover:shadow-md transition",
                          selectedPlan === plan.name
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background"
                        )}
                      >
                        <div className="font-semibold text-xs">{plan.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {plan.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end px-2 ">
                    <Button
                      onClick={() => navigate("/plans")}
                      size="sm"
                      className="text-sm"
                    >
                      View All
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>

          <Card className="glass-card border border-border/50">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                  <Smartphone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Manage eSIM</h3>
                  <p className="text-xs text-muted-foreground">
                    Manage your active eSIM
                  </p>
                </div>
              </div>
              {/* <Button variant="ghost" size="icon" onClick={() => navigate('/esims')}>
                <ChevronRight size={20} />
              </Button> */}
            </CardContent>
          </Card>
        </section>

        {/* <div className="mt-8 text-center">
          <Button variant="outline" className="border-dashed border-border flex items-center gap-2">
            <PlusCircle size={16} />
            Add New Device
          </Button>
          <p className="text-xs text-muted-foreground mt-2">Add a new device to your Gesim account</p>
        </div> */}
      </div>
    </Layout>
  );
};

export default Dashboard;
