
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, ArrowDown, Plus } from 'lucide-react';
import eth from '/ethereum.png'

const Wallet: React.FC = () => {
  // Mock data for wallet and transactions
  const walletBalance = {
    usdc: 125.75,
    eth: 0.042,
  };
  
  const transactions = [
    {
      id: 'tx-1',
      type: 'Purchase',
      description: 'Global Standard Plan',
      amount: -24.99,
      currency: 'USDC',
      date: '2025-04-10',
    },
    {
      id: 'tx-2',
      type: 'Deposit',
      description: 'Added from **** 4567',
      amount: 100.00,
      currency: 'USDC',
      date: '2025-04-05',
    },
    {
      id: 'tx-3',
      type: 'Purchase',
      description: 'Global Lite Plan',
      amount: -9.99,
      currency: 'USDC',
      date: '2025-03-28',
    },
    {
      id: 'tx-4',
      type: 'Deposit',
      description: 'Added from wallet',
      amount: 50.00,
      currency: 'USDC',
      date: '2025-03-15',
    },
  ];

  return (
    <Layout>
      <div className="max-w-lg mx-auto fade-in">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Wallet</h1>
          <p className="text-muted-foreground">Manage your crypto balance</p>
        </div>
        
        <div className="grid gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Balance</CardTitle>
              <CardDescription>Address : adhbuavdcuygweuycbkjnd45uhvdjhc</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <img src='/images/usdc.png' className="text-blue-600 font-semibold text-xs" />
                    </div>
                    <span>USDC</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{walletBalance.usdc.toFixed(2)} USDC</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <img src='/images/ethereum.png' className="text-purple-600 font-semibold text-xs" />
                    </div>
                    <span>Ethereum</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{walletBalance.eth.toFixed(4)} ETH</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="flex-1" size="sm">
                <ArrowUp className="mr-1 h-4 w-4" />
                Send
              </Button>
              <Button className="flex-1" size="sm">
                <ArrowDown className="mr-1 h-4 w-4" />
                Receive
              </Button>
              <Button className="flex-1" variant="outline" size="sm">
                <Plus className="mr-1 h-4 w-4" />
                Buy
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="purchases">Purchases</TabsTrigger>
            <TabsTrigger value="deposits">Deposits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Your recent transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map(tx => (
                    <div key={tx.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          tx.type === 'Purchase' ? 'bg-red-100' : 'bg-green-100'
                        }`}>
                          {tx.type === 'Purchase' ? (
                            <ArrowUp className="h-4 w-4 text-red-600" />
                          ) : (
                            <ArrowDown className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{tx.description}</p>
                          <p className="text-xs text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          tx.amount < 0 ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {tx.amount > 0 ? '+' : ''}{tx.amount} {tx.currency}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="purchases" className="mt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Purchases</CardTitle>
                <CardDescription>Your recent purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions
                    .filter(tx => tx.type === 'Purchase')
                    .map(tx => (
                      <div key={tx.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                            <ArrowUp className="h-4 w-4 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium">{tx.description}</p>
                            <p className="text-xs text-muted-foreground">{tx.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-red-600">{tx.amount} {tx.currency}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="deposits" className="mt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Deposits</CardTitle>
                <CardDescription>Your recent deposits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions
                    .filter(tx => tx.type === 'Deposit')
                    .map(tx => (
                      <div key={tx.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <ArrowDown className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">{tx.description}</p>
                            <p className="text-xs text-muted-foreground">{tx.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">+{tx.amount} {tx.currency}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Wallet;
