
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ESims: React.FC = () => {
  // Mock data for eSIMs
  const esims = [
    {
      id: 'esim-1',
      iccid: '8944123456789012345',
      nickname: 'Travel eSIM',
      status: 'Active',
      dataRemaining: 3.2,
      dataUnit: 'GB',
      validUntil: '2025-05-11',
      region: 'Global',
    },
    {
      id: 'esim-2',
      iccid: '8944987654321098765',
      nickname: 'Business Trip',
      status: 'Expired',
      dataRemaining: 0,
      dataUnit: 'GB',
      validUntil: '2025-03-20',
      region: 'Europe',
    },
    {
      id: 'esim-3',
      iccid: '8944567890123456789',
      nickname: 'Vacation eSIM',
      status: 'Inactive',
      dataRemaining: 5,
      dataUnit: 'GB',
      validUntil: '2025-06-30',
      region: 'Asia Pacific',
    },
    {
      id: 'esim-4',
      iccid: '8944567890123456789',
      nickname: 'Vacation eSIM',
      status: 'Inactive',
      dataRemaining: 5,
      dataUnit: 'GB',
      validUntil: '2025-06-30',
      region: 'Asia Pacific',
    },
    {
      id: 'esim-5',
      iccid: '8944567890123456789',
      nickname: 'Vacation eSIM',
      status: 'Expired',
      dataRemaining: 5,
      dataUnit: 'GB',
      validUntil: '2025-06-30',
      region: 'Asia Pacific',
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
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-4 space-y-4">
            {esims
              .filter(esim => esim.status === 'Active')
              .map(esim => (
                <Card key={esim.id} className="mb-4">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>{esim.nickname}</CardTitle>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {esim.status}
                      </span>
                    </div>
                    <CardDescription>ICCID: {esim.iccid}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Data Remaining</p>
                        <p className="font-medium">{esim.dataRemaining} {esim.dataUnit}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Valid Until</p>
                        <p className="font-medium">{esim.validUntil}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Region</p>
                        <p className="font-medium">{esim.region}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">View QR Code</Button>
                    <Button size="sm">Top Up</Button>
                  </CardFooter>
                </Card>
              ))}
              
            {esims.filter(esim => esim.status === 'Active').length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p>No active eSIMs found.</p>
                <Button className="mt-4" onClick={() => window.location.href = '/plans'}>
                  Browse Plans
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="inactive" className="mt-4 space-y-4">
            {esims
              .filter(esim => esim.status === 'Inactive')
              .map(esim => (
                <Card key={esim.id} className="mb-4">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>{esim.nickname}</CardTitle>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {esim.status}
                      </span>
                    </div>
                    <CardDescription>ICCID: {esim.iccid}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Data Available</p>
                        <p className="font-medium">{esim.dataRemaining} {esim.dataUnit}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Valid Until</p>
                        <p className="font-medium">{esim.validUntil}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Region</p>
                        <p className="font-medium">{esim.region}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button size="sm">Activate</Button>
                  </CardFooter>
                </Card>
              ))}
              
            {esims.filter(esim => esim.status === 'Inactive').length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p>No inactive eSIMs found.</p>
                <Button className="mt-4" onClick={() => window.location.href = '/plans'}>
                  Browse Plans
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="expired" className="mt-4 space-y-4">
            {esims
              .filter(esim => esim.status === 'Expired')
              .map(esim => (
                <Card key={esim.id} className="mb-4">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>{esim.nickname}</CardTitle>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {esim.status}
                      </span>
                    </div>
                    <CardDescription>ICCID: {esim.iccid}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Region</p>
                        <p className="font-medium">{esim.region}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expired On</p>
                        <p className="font-medium">{esim.validUntil}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button variant="outline" size="sm">Reactivate</Button>
                  </CardFooter>
                </Card>
              ))}
              
            {esims.filter(esim => esim.status === 'Expired').length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p>No expired eSIMs found.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-8">
          <Button onClick={() => window.location.href = '/plans'}>
            Browse New Plans
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ESims;
