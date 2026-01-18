import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { toast } from "react-toastify";

interface FullImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  serviceType: string;
  price: string;
  onImageLoad: () => void;
  isLoading: boolean;
}

const FullImageModal: React.FC<FullImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  serviceType,
  price,
  onImageLoad,
  isLoading,
}) => {
  const handleDownloadImage = async () => {
    try {
      if (!imageUrl) return;

      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `vv-event-theme-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("Image downloaded successfully!");
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to download image");
    }
  };

  if (!imageUrl) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all"
          >
            <X size={28} className="text-white" />
          </button>

          <div className="absolute top-4 left-4 z-50 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownloadImage();
              }}
              className="p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all group"
              title="Download Image"
            >
              <Download
                size={24}
                className="text-white group-hover:text-yellow-500"
              />
            </button>
          </div>

          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <div className="relative max-h-[90vh] max-w-full">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={imageUrl}
                alt="Selected Theme - Full View"
                className={`max-h-[90vh] max-w-full object-contain transition-opacity duration-300 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={onImageLoad}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full text-sm">
            <span className="text-yellow-500 font-semibold mr-4">
              {serviceType}
            </span>
            <span className="text-white">{price}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullImageModal;
