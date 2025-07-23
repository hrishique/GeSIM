import React, { useState } from "react";
import { UploadCloud } from "lucide-react";

type Props = {
  setSubmitKyc: (data: string) => void;
};

const Kyc: React.FC<Props> = ({ setSubmitKyc }) => {
  const [frontPreview, setFrontPreview] = useState<string | null>(null);
  const [backPreview, setBackPreview] = useState<string | null>(null);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: "front" | "back"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    if (side === "front") setFrontPreview(imageURL);
    else setBackPreview(imageURL);
  };

  const handleSubmit = () => {
    console.log("Submitted KYC with:", { frontPreview, backPreview });
    setSubmitKyc("true"); // Mark KYC as done
    localStorage.setItem("kycSubmitted", "true");
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 md:p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl text-blue-950 font-semibold">Update KYC</h2>
          <h2 className="text-sm mt-4 text-black font-semibold">
            Upload Your Passport
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Please upload the front and back of your passport for <br /> KYC
            verification.
          </p>
        </div>

        {/* Upload Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["front", "back"].map((side) => {
            const preview = side === "front" ? frontPreview : backPreview;
            const label = side === "front" ? "Front Side" : "Back Side";
            return (
              <label
                key={side}
                className="hover:bg-blue-100 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center h-40 cursor-pointer relative overflow-hidden hover:border-indigo-400 transition"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageChange(e, side as "front" | "back")
                  }
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                />
                {preview ? (
                  <img
                    src={preview}
                    alt={`${label} preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center z-0 text-gray-400">
                    <UploadCloud className="w-8 h-8 mb-2" />
                    <span className="text-sm font-medium">{label}</span>
                    <span className="text-xs">Click to upload</span>
                  </div>
                )}
              </label>
            );
          })}
        </div>

        {/* Axtion Buttons...  */}
        <div className="flex justify-end space-x-4 pt-4">
          <button
            className="px-4 py-2 rounded-lg text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
            onClick={handleSubmit}
          >
            Skip
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
