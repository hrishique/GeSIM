
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Wifi } from 'lucide-react';

export interface PlanProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  dataAmount: number;
  dataUnit: 'GB' | 'MB';
  duration: number;
  durationUnit: 'days' | 'months';
  regions: string[];
  popularPlan?: boolean;
  onClick?: (id: string) => void;
}

const PlanCard: React.FC<PlanProps> = ({
  id,
  name,
  price,
  currency,
  dataAmount,
  dataUnit,
  duration,
  durationUnit,
  regions,
  popularPlan = false,
  onClick,
}) => {
  return (
    <Card className={`glass-card border overflow-hidden ${popularPlan ? 'border-primary' : 'border-border/50'}`}>
      {popularPlan && (
        <div className="bg-primary text-primary-foreground text-xs py-1 text-center font-medium">
          MOST POPULAR
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{name}</CardTitle>
          {regions.length > 0 && (
            <Badge variant="outline" className="flex items-center gap-1 bg-secondary/50">
              <Globe className="h-3 w-3" />
              {regions.length === 1 ? regions[0] : `${regions.length} Regions`}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pb-4 pt-0">
        <div className="flex items-end mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-lg ml-1 text-muted-foreground">{currency}</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm">
            <Wifi className="h-4 w-4 text-primary" />
            <span>
              <strong>{dataAmount} {dataUnit}</strong> data
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="h-4 w-4 rounded-full border border-muted-foreground flex items-center justify-center">
              <span className="text-xs">⏱️</span>
            </div>
            <span>Valid for <strong>{duration} {durationUnit}</strong></span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant={popularPlan ? "default" : "outline"} 
          className={`w-full ${popularPlan ? 'bg-primary hover:bg-primary/90' : ''}`}
          onClick={() => onClick && onClick(id)}
        >
          Select Plan
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
