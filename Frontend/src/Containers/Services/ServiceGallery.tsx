// src/components/ServiceGallery.tsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Service } from "./Data"; // Note: This import path might be incorrect. It should likely be from "../data/servicesData" as per previous instructions.

interface ServiceGalleryProps {
  service: Service;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ service }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | undefined>(
    undefined
  );
  const navigate = useNavigate();

  // Corrected function with explicit type annotations
  const handleBookService = (
    serviceName: string,
    price: string,
    imageUrl: string
  ) => {
    navigate("/contact", {
      state: {
        selectedService: serviceName,
        selectedPrice: price,
        selectedImage: imageUrl,
      },
    });
  };

  return (
    <>
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              {service.name} <span className="gold-text">Designs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
            {service.galleryPricing.map((item, idx) => (
              <div
                key={idx}
                className="bg-black/80 border border-yellow-400/20 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-[1.03]"
                onClick={() => setSelectedImageIdx(idx)}
              >
                <div className="relative w-full aspect-[5/6] bg-black">
                  <motion.img
                    src={item.image}
                    alt={`${service.name} Design ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  />
                </div>

                {/* Price Tag - Fixed height to keep grid items aligned */}
                {service.name !== "House Warming Ceremony" ? (
                  <div className="text-center text-yellow-400 text-sm md:text-base font-semibold py-3 bg-black">
                    {item.price}
                  </div>
                ) : (
                  /* Empty space to maintain alignment if price is hidden */
                  <div className="py-3 bg-black md:block hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Detail Modal */}
      <AnimatePresence>
        {typeof selectedImageIdx === "number" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImageIdx(undefined)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-black rounded-2xl shadow-xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 w-full flex items-center justify-center bg-black cursor-pointer">
                <motion.img
                  src={service.galleryPricing[selectedImageIdx].image}
                  alt={`${service.name} Design ${selectedImageIdx + 1}`}
                  className="object-contain w-full h-96 bg-black p-4 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                />
              </div>
              <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4 font-playfair">
                    {service.name}
                  </h4>
                  <p className="text-gray-300 mb-4">
                    {service.name === "House Warming Ceremony"
                      ? "Each light length costs ₹500, and the number of lengths required depends on the size of the house."
                      : " "}
                  </p>
                  {/* <p className="text-gray-300 mb-4">
                    {service.name === "House Warming Ceremony"
                      ? "Each light length costs ₹500, and the number of lengths required depends on the size of the house."
                      : "Experience this special moment with our premium service option."}
                  </p> */}
                  <div className="text-lg font-semibold gold-text mb-6">
                    {service.galleryPricing[selectedImageIdx].price}
                  </div>
                </div>
                <button
                  className="premium-button w-full px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    handleBookService(
                      service.name,
                      service.galleryPricing[selectedImageIdx].price,
                      service.galleryPricing[selectedImageIdx].image
                    );
                  }}
                >
                  Book Now
                </button>
              </div>
              <button
                onClick={() => setSelectedImageIdx(undefined)}
                className="absolute top-6 right-6 p-3 bg-black/70 rounded-full text-white hover:bg-black/90 border border-yellow-400/30 hover:scale-110 transition-transform duration-300"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceGallery;
