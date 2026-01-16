import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X, CheckCircle2 } from "lucide-react";
// import { Service } from "../Containers/Services/Data";
import { Service } from "./Data";
interface ServiceGalleryProps {
  service: Service;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ service }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | undefined>(
    undefined
  );
  const navigate = useNavigate();

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
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header Section - Reduced Margins */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair tracking-tight text-white">
                {service.name} <span className="text-yellow-500">Designs</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>

          {/* Grid Section - Tightened gaps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {service.galleryPricing.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-yellow-500/50 shadow-2xl"
                onClick={() => setSelectedImageIdx(idx)}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${service.name} Design ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white text-xs font-bold tracking-widest uppercase bg-yellow-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-500/30">
                      Quick View
                    </span>
                  </div>
                </div>

                {service.name !== "House Warming Ceremony" && (
                  <div className="text-center py-3 bg-zinc-900/80 backdrop-blur-sm border-t border-zinc-800">
                    <span className="text-yellow-500 text-sm md:text-base font-bold tracking-wide">
                      {item.price}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Detail Modal */}
      <AnimatePresence>
        {selectedImageIdx !== undefined && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImageIdx(undefined)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIdx(undefined)}
                className="absolute top-3 right-3 z-20 p-2 bg-black/40 hover:bg-zinc-800 text-white rounded-full transition-colors border border-zinc-700"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image */}
              <div className="md:w-1/2 bg-black flex items-center justify-center">
                <img
                  src={service.galleryPricing[selectedImageIdx].image}
                  alt="Theme Detail"
                  className="w-full h-[350px] md:h-[500px] object-contain p-2"
                />
              </div>

              {/* Right Side: Details */}
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-px w-6 bg-yellow-500"></span>
                    <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">
                      Curated Theme
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3">
                    {service.name}
                  </h4>

                  <div className="text-3xl font-black text-white mb-6">
                    {service.galleryPricing[selectedImageIdx].price}
                    {service.name === "House Warming Ceremony" && (
                      <span className="text-zinc-500 text-xs font-normal ml-2">
                        / per length
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.name === "House Warming Ceremony" ? (
                      <div className="p-2 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                        <p className="text-xs text-yellow-200/70 leading-relaxed italic">
                          💡 Each light length costs ₹500. Total requirement
                          depends on house dimensions.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          "Full Setup",
                          "Premium Decor",
                          "Delivery Included",
                        ].map((text) => (
                          <div
                            key={text}
                            className="flex items-center gap-2 text-zinc-400 text-xs"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-yellow-500"
                            />
                            {text}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 group"
                    onClick={() => {
                      handleBookService(
                        service.name,
                        service.galleryPricing[selectedImageIdx].price,
                        service.galleryPricing[selectedImageIdx].image
                      );
                    }}
                  >
                    Confirm Booking
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </button>
                  <p className="text-center text-zinc-600 text-[10px] uppercase tracking-tighter">
                    Best Price • Professional Decorators
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceGallery;
