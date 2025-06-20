import React from "react";
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
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MintButton from "@/components/MintButton";

const ESims: React.FC = () => {
  const navigate = useNavigate();
  // Mock data for eSIMs
  const esims = [
    {
      id: "esim-1",
      iccid: "8944123456789012345",
      nickname: "Travel eSIM",
      status: "Active",
      dataRemaining: 3.2,
      dataUnit: "GB",
      validUntil: "2025-05-11",
      region: "Global",
    },
    {
      id: "esim-2",
      iccid: "8944987654321098765",
      nickname: "Business Trip",
      status: "Expired",
      dataRemaining: 0,
      dataUnit: "GB",
      validUntil: "2025-03-20",
      region: "Europe",
    },
    {
      id: "esim-3",
      iccid: "8944567890123456789",
      nickname: "Vacation eSIM",
      status: "Inactive",
      dataRemaining: 5,
      dataUnit: "GB",
      validUntil: "2025-06-30",
      region: "Asia Pacific",
    },
    {
      id: "esim-4",
      iccid: "8944567890123456789",
      nickname: "Vacation eSIM",
      status: "Inactive",
      dataRemaining: 5,
      dataUnit: "GB",
      validUntil: "2025-06-30",
      region: "Asia Pacific",
    },
    {
      id: "esim-5",
      iccid: "8944567890123456789",
      nickname: "Vacation eSIM",
      status: "Expired",
      dataRemaining: 5,
      dataUnit: "GB",
      validUntil: "2025-06-30",
      region: "Asia Pacific",
    },
  ];

  return (
    <Layout>
      <div className="max-w-lg mx-auto fade-in">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">My eSIMs</h1>
          <p className="text-muted-foreground">Manage your purchased eSIMs</p>
        </div>

        <Tabs defaultValue="active" className="mb-6">
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
                    Mint your own blockchain-powered GeSIM and connect globally
                    without borders. Experience true digital freedom with Web3
                    connectivity.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <MintButton />
            </CardFooter>
          </Card>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ESims;
