import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Gift, Copy, ExternalLink, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MintSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MintSuccessModal = ({ isOpen, onClose }: MintSuccessModalProps) => {
  const { toast } = useToast();

  // Generate a mock transaction hash and eSIM ID
  const txHash = "0x" + Math.random().toString(16).substr(2, 40);
  const esimId = "ESIM-" + Math.random().toString(36).substr(2, 8).toUpperCase();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-purple-600">
            GeSIM Successfully Minted!
          </DialogTitle>
          <DialogDescription className="text-slate-300 mt-2">
            Your decentralized GeSIM has been minted successfully. <br /> You can now use it globally!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-6">
          {/* eSIM Details */}
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
            <div className="flex items-center mb-3">
              <Smartphone className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-semibold text-purple-600">GeSIM Details</span>
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
            </div>
          </div>

          {/* Transaction Details */}
          {/* <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
            <div className="flex items-center mb-3">
              <ExternalLink className="w-5 h-5 text-purple-400 mr-2" />
              <span className="font-semibold text-purple-400">Transaction</span>
            </div>
            
             <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Tx Hash:</span>
              <div className="flex items-center">
                <code className="text-purple-400 mr-2 text-xs">
                  {txHash.substring(0, 10)}...{txHash.substring(txHash.length - 8)}
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(txHash, "Transaction hash")}
                  className="h-6 w-6 p-0 hover:bg-slate-700"
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
            </div> 
          </div> */}

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <Button
              onClick={onClose}
              className="flex-1 bg-purple-600 hover:bg-purple-700"
            >
              Done
            </Button>
            <Button
              variant="outline"
              onClick={() => copyToClipboard(esimId, "eSIM ID")}
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy ID
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MintSuccessModal;
