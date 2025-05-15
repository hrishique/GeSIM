
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface UsageGraphProps {
  dataUsed: number;
  dataTotal: number;
  daysLeft: number;
  validUntil: string;
}

const UsageGraph: React.FC<UsageGraphProps> = ({
  dataUsed,
  dataTotal,
  daysLeft,
  validUntil,
}) => {
  const usagePercentage = Math.min(100, Math.round((dataUsed / dataTotal) * 100));
  const dataRemaining = dataTotal - dataUsed;
  
  return (
    <Card className="glass-card border border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Data Usage</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-end text-sm">
            <div>
              <span className="text-2xl font-bold">{dataUsed.toFixed(1)}</span>
              <span className="text-muted-foreground ml-1">GB</span>
            </div>
            <div className="text-right">
              <span className="text-muted-foreground">of </span>
              <span>{dataTotal} GB</span>
            </div>
          </div>
          
          <Progress value={usagePercentage} className="h-2" />
          
          <div className="flex justify-between items-center text-sm">
            <div className="text-muted-foreground">
              {dataRemaining.toFixed(1)} GB remaining
            </div>
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${daysLeft <= 3 ? 'bg-destructive animate-pulse' : 'bg-primary'}`}></div>
              <span className={daysLeft <= 3 ? 'text-destructive font-medium' : 'text-muted-foreground'}>
                {daysLeft} days left
              </span>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground pt-2 text-center">
            Valid until {validUntil}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsageGraph;
