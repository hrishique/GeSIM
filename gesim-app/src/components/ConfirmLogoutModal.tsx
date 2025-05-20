// ConfirmLogoutModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button'; // or your button component
import { X } from 'lucide-react';

interface ConfirmLogoutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmLogoutModal({
  open,
  onClose,
  onConfirm,
}: ConfirmLogoutModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 w-[90%] max-w-sm relative"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
            >
              <X size={18} />
            </button>
            <h2 className="text-lg font-semibold text-blue-950 mb-4 text-center">Confirm Logout</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={onConfirm}>
                Logout
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
