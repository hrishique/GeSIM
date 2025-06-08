import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { RiCloseCircleFill } from "react-icons/ri";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { CgSpinner } from "react-icons/cg";
import toast, { Toaster } from "react-hot-toast";

export default function WaitlistForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    twitter: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // setFormData((prevForm) => ({
    //   ...prevForm,
    //   [name]: value,
    // }));

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "waitlist"), {
        name: formData.name,
        email: formData.email,
        telegram: formData.telegram,
        twitter: formData.twitter,
        createdAt: new Date(),
      });
      toast.success("Successfully submitted!");
      setLoading(false);
      setFormData({ name: "", email: "", telegram: "", twitter: "" });
    } catch (error) {
      console.error("Error saving to Firestore:", error);
      alert("Failed to submit. Try again later.");
      setLoading(false);
    }
  };

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
            <div className="relative flex justify-center items-center mb-4">
              <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                  // Define default options
                  className: "",
                  duration: 5000,
                  removeDelay: 1000,
                  style: {
                    background: "#363636",
                    color: "#fff",
                  },

                  // Default options for specific types
                  success: {
                    duration: 3000,
                    iconTheme: {
                      primary: "green",
                      secondary: "black",
                    },
                  },
                }}
              />
              <div className="bg-blue-950 rounded-xl p-3">
                {/* <FiGlobe color="purple" size={25} /> */}
                <img src="/images/logo.png" className="w-16" alt="" />
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute hover:text-red-500 underline top-0 right-0 text-gray-400 text-xl font-bold"
              >
                <RiCloseCircleFill
                  size={25}
                  color=""
                  className="hover:text-red-500"
                />
              </button>
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              You’re invited!
            </h2>
            <p className="text-gray-500 mb-6">
              Sign up for early access to GeSIM movement
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 text-black">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="telegram"
                placeholder="Telegram handle*"
                value={formData.telegram}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="Twitter handle (optional)"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 flex items-center justify-center text-white py-2 rounded-md hover:bg-purple-700 transition"
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span> Join the Waitlist</span>
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              Want exclusive alpha? Buy your early NFT now to join our private
              Telegram
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
