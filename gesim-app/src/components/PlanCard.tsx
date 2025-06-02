
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Wifi } from 'lucide-react';

export interface PlanProps {
   id:string;
  plan_name: string;
  plan_type: number;
  price: number;
  data_limit: number;
  validity: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const PlanCard: React.FC<PlanProps> = ({
  id,
  plan_name,
  plan_type,
  price,
  data_limit,
  validity,
  description,
  createdAt,
  updatedAt,
  
}) => {
  return (
    <Card className={`glass-card border overflow-hidden`}>
      

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{plan_name}</CardTitle>
          {plan_type && (
            <Badge variant="outline" className="flex items-center gap-1 bg-secondary/50">
              <Globe className="h-3 w-3" />
              {plan_type === 101 ? "Global" : "Regional"}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pb-4 pt-0">
        <div className="flex items-end mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-lg ml-1 text-muted-foreground">USDC</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm">
            <Wifi className="h-4 w-4 text-primary" />
            <span>
              <strong>{data_limit}GB</strong> data
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="h-4 w-4 rounded-full border border-muted-foreground flex items-center justify-center">
              <span className="text-xs">⏱️</span>
            </div>
            <span>Valid for <strong>{validity} days</strong></span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant="outline" 
          className='w-full'
          onClick={() => onClick && onClick(id)}
        >
          Select Plan
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
