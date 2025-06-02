import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import axios from "axios";

interface PlanManagementCardProps {
  plan_name: string;
  validity: number;
  description: string;
  data_limit: number;
  price: number;
  id: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const PlanManagementCard = ({
  plan_name,
  validity,
  description,
  data_limit,
  price,
  id,
  onEdit,
  onDelete
}: PlanManagementCardProps) => {
 

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{plan_name}</CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onEdit(id)}
            className="h-8 w-8"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => onDelete(id)}
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
            <span className="text-muted-foreground">Data Limit:</span>
            <span>{data_limit}</span>
          </div>
          <div className="mt-2">
            <span className="text-muted-foreground">Package Details:</span>
            <p className="mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanManagementCard;
