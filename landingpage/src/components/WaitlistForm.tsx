import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe } from "react-icons/fi";


export default function WaitlistForm({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl max-w-md w-full p-6 text-center shadow-xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 rounded-xl p-3">
                <FiGlobe color="purple" size={25}/>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">You’re invited!</h2>
            <p className="text-gray-500 mb-6">Sign up for early access to GeSIM movement</p>

            <form className="space-y-3">
              <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="text" placeholder="Twitter handle (optional)" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="text" placeholder="Telegram handle (optional)" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                Join the Waitlist
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              Want exclusive alpha? Buy your early NFT now to join our private Telegram
            </p>

            {/* Close button */}
            <button onClick={onClose} className="absolute hover:text-red-500 underline top-4 right-4 text-gray-400 text-xl font-bold">
              CLOSE
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
