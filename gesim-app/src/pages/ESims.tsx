import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Gift,
  Copy,
  ExternalLink,
  Smartphone, Trash2
} from "lucide-react";

import { Zap, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MintButton from "@/components/MintButton";
import { useToast } from "@/hooks/use-toast";

const ESims: React.FC = () => {
  const navigate = useNavigate();
  const [isMint, setIsMint] = useState("false");
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const mintStatus = localStorage.getItem("GeSim_Minted");
    if (mintStatus) {
      setIsMint(mintStatus);
    }
  }, []);

  const { toast } = useToast();

  // Generate a mock transaction hash and eSIM ID
  const txHash = "0x" + Math.random().toString(16).substr(2, 40);
  const esimId =
    "ESIM-" + Math.random().toString(36).substr(2, 8).toUpperCase();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const removeGesim = async() => {
      setIsRemoving(true)
      await new Promise(resolve => setTimeout(resolve, 2000));
     localStorage.removeItem("GeSim_Minted");
     setIsMint("false");
     setIsRemoving(false)
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto fade-in">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">My eSIMs</h1>
          <p className="text-muted-foreground">Manage your purchased eSIMs</p>
        </div>

        <Tabs defaultValue="active" className="mb-6">
          {isMint === "false" ? (
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Mint Your GeSim</h2>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div>
                    <p className="text-sm text-slate-300 mb-8 mx-auto">
                      Mint your own blockchain-powered GeSIM and connect
                      globally without borders. Experience true digital freedom
                      with Web3 connectivity.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <MintButton isMint={setIsMint} />
              </CardFooter>
            </Card>
          ) : (
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
              <div className="flex items-center mb-3">
                <Smartphone className="w-5 h-5 text-purple-600 mr-2" />
                <span className="font-semibold text-purple-600">
                  GeSIM Details
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">GeSIM ID:</span>
                  <div className="flex items-center">
                    <code className="text-green-400 mr-2">{esimId}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(esimId, "eSIM ID")}
                      className="h-6 w-6 p-0 hover:bg-slate-700"
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Network:</span>
                  <span className="text-white">Global 5G/4G</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Data:</span>
                  <span className="text-white">10GB</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Validity:</span>
                  <span className="text-white">30 days</span>
                </div>

                <div className="flex gap-6 justify-end mt-6">
                  <Button
                    variant="outline"
                    onClick={() => copyToClipboard(esimId, "eSIM ID")}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy ID
                  </Button>
                  {/* <Button
                  variant="outline"
                  onClick={() => removeGesim()}
                  className="bg-red-600 text-slate-300 hover:bg-slate-700"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Remove
                </Button> */}

                  <Button
                  variant="outline"
                    onClick={removeGesim}
                    disabled={isRemoving}
                    className=" bg-red-700 bg-opacity-40 text-white px-8 py-4 text-base rounded-xl hover:bg-red-700 transform  transition-all duration-200 disabled:transform-none disabled:opacity-70"
                  >
                    {isRemoving ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Removing GeSIM
                      </>
                    ) : (
                      <>
                        <Trash2 className="mr-2 h-5 w-5" />
                        Remove
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Tabs>
      </div>
    </Layout>
  );
};

export default ESims;
