import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
} from "lucide-react";
import { Service } from "./Data";

interface ServiceGalleryProps {
  service: Service;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ service }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | undefined>(
    undefined
  );
  const [isFullScreen, setIsFullScreen] = useState(false);
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

  const nextSlide = (e?: React.MouseEvent | any) => {
    e?.stopPropagation?.();
    if (selectedImageIdx !== undefined) {
      setSelectedImageIdx(
        (selectedImageIdx + 1) % service.galleryPricing.length
      );
    }
  };

  const prevSlide = (e?: React.MouseEvent | any) => {
    e?.stopPropagation?.();
    if (selectedImageIdx !== undefined) {
      setSelectedImageIdx(
        (selectedImageIdx - 1 + service.galleryPricing.length) %
          service.galleryPricing.length
      );
    }
  };

  // Swipe Gesture Handler
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  const currentItem =
    selectedImageIdx !== undefined
      ? service.galleryPricing[selectedImageIdx]
      : null;

  return (
    <>
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <Maximize2 size={24} className="text-white" />
                    <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                      View Details
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

      {/* MODAL VIEW */}
      <AnimatePresence>
        {selectedImageIdx !== undefined && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-0 md:p-4"
            onClick={() => setSelectedImageIdx(undefined)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950 w-full h-full md:h-auto md:max-w-6xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIdx(undefined)}
                className="absolute top-6 right-6 z-[120] p-3 bg-black/50 text-white rounded-full border border-white/10 hover:bg-zinc-800 transition-colors"
              >
                <X size={24} />
              </button>

              {/* IMAGE SIDE - FULL WIDTH LOGIC */}
              <div
                className="relative w-full md:w-3/5 lg:w-2/3 h-[50vh] md:h-[75vh] bg-zinc-900 overflow-hidden cursor-zoom-in"
                onClick={() => setIsFullScreen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImageIdx}
                    src={currentItem.image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    className="w-full h-full object-contain touch-none"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/40 text-white hover:bg-yellow-500 hover:text-black transition-all md:flex hidden"
                >
                  <ChevronLeft size={30} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/40 text-white hover:bg-yellow-500 hover:text-black transition-all md:flex hidden"
                >
                  <ChevronRight size={30} />
                </button>

                {/* Mobile Arrows Overlay */}
                <div className="absolute inset-x-0 bottom-6 flex justify-between px-6 md:hidden z-20">
                  <button
                    onClick={prevSlide}
                    className="p-3 bg-black/60 rounded-full border border-white/10 text-white"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 bg-black/60 rounded-full border border-white/10 text-white"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* UX Hint */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] text-white/70 border border-white/10 pointer-events-none uppercase tracking-widest font-bold">
                  Swipe to browse
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="w-full md:w-2/5 lg:w-1/3 p-8 md:p-10 flex flex-col justify-between bg-zinc-950 border-t md:border-t-0 md:border-l border-zinc-800 overflow-y-scroll">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-px w-6 bg-yellow-500"></span>
                    <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">
                      Design {selectedImageIdx + 1} of{" "}
                      {service.galleryPricing.length}
                    </span>
                  </div>

                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-3 font-playfair">
                    {service.name}
                  </h4>

                  <div className="text-4xl font-black text-yellow-500 mb-8">
                    {currentItem.price}
                    {service.name === "House Warming Ceremony" && (
                      <span className="text-zinc-500 text-xs font-normal ml-2 italic">
                        / per length
                      </span>
                    )}
                  </div>

                  <div className="space-y-4 mb-6">
                    {service.name === "House Warming Ceremony" ? (
                      <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                        <p className="text-sm text-yellow-200/70 leading-relaxed italic">
                          💡 Each light length costs ₹500. Total requirement
                          depends on house dimensions.
                        </p>
                      </div>
                    ) : (
                      [
                        "Premium Setup",
                        "Signature Lighting",
                        "Custom Props",
                      ].map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-zinc-400 text-xs"
                        >
                          <CheckCircle2 size={16} className="text-yellow-500" />
                          {feat}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    className="w-full py-5 bg-yellow-500 text-black font-black rounded-2xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-yellow-500/20 uppercase tracking-widest text-sm"
                    onClick={() =>
                      handleBookService(
                        service.name,
                        currentItem.price,
                        currentItem.image
                      )
                    }
                  >
                    Confirm Booking <ExternalLink size={18} />
                  </button>
                  <p className="text-center text-zinc-600 text-[9px] uppercase tracking-[0.2em] mt-4 font-bold">
                    Premium Service • Best Price Guaranteed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL SCREEN EXPANDED VIEW */}
      <AnimatePresence>
        {isFullScreen && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
            onClick={() => setIsFullScreen(false)}
          >
            <button className="absolute top-8 right-8 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 z-[210]">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={currentItem.image}
              className="w-full h-full object-contain md:object-cover cursor-zoom-out"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceGallery;
