
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';

interface PlanManagementCardProps {
  planName: string;
  validity: string;
  packageDetails: string;
  country: string;
  price: string;
  onEdit: () => void;
  onDelete: () => void;
}

const PlanManagementCard = ({
  planName,
  validity,
  packageDetails,
  country,
  price,
  onEdit,
  onDelete,
}: PlanManagementCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{planName}</CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onEdit}
            className="h-8 w-8"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={onDelete}
            className="h-8 w-8"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Validity:</span>
            <span>{validity} days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Price:</span>
            <span>{price} USDC</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Country:</span>
            <span>{country}</span>
          </div>
          <div className="mt-2">
            <span className="text-muted-foreground">Package Details:</span>
            <p className="mt-1">{packageDetails}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanManagementCard;
