import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Star,
  Maximize2,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { themeDecorationGalleryPricing } from "../Containers/Services/Data";
import { useNavigate } from "react-router-dom";

const ThemeDecorationPage = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

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
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex + 1) % themeDecorationGalleryPricing.length
      );
    }
  };

  const prevSlide = (e?: React.MouseEvent | any) => {
    e?.stopPropagation?.();
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + themeDecorationGalleryPricing.length) %
          themeDecorationGalleryPricing.length
      );
    }
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) nextSlide();
    else if (info.offset.x > swipeThreshold) prevSlide();
  };

  const currentItem =
    selectedIndex !== null
      ? themeDecorationGalleryPricing[selectedIndex]
      : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black pt-10"
    >
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative py-20 overflow-hidden min-h-[50vh] flex items-center"
        style={{
          backgroundImage: "url(/Th/th3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 mt-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={heroInView ? { scale: 1, opacity: 1 } : {}}
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1 mb-6"
          >
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
              Premium Collection
            </span>
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-bold mb-8 font-playfair text-white"
          >
            Theme <span className="gold-text italic">Decorations</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your special moments into unforgettable memories.
          </motion.p>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themeDecorationGalleryPricing.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-900 hover:border-yellow-500/50 transition-all duration-500 shadow-2xl cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                    <Maximize2 size={24} className="text-white" />
                    <span className="text-white text-xs font-bold uppercase tracking-widest">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white font-playfair">
                      {item.name}
                    </h3>
                    <span className="text-xl gold-text font-black">
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950 w-full h-full md:h-auto md:max-w-7xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 z-[120] p-3 bg-black/50 text-white rounded-full border border-white/10 hover:bg-zinc-800 transition-colors"
              >
                <X size={24} />
              </button>

              {/* IMAGE SIDE - FULL WIDTH SETTING */}
              <div
                className="relative w-full md:w-3/5 lg:w-2/3 h-[50vh] md:h-[80vh] bg-zinc-900 overflow-hidden cursor-zoom-in"
                onClick={() => setIsFullScreen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedIndex}
                    src={currentItem.image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    className="w-full h-full object-contain touch-none" // object-cover ensures no black bars
                  />
                </AnimatePresence>

                {/* Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/40 text-white hover:bg-yellow-500 hover:text-black transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/40 text-white hover:bg-yellow-500 hover:text-black transition-all"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-[8px] text-white/70 border border-white/10 pointer-events-none uppercase tracking-widest font-bold">
                  click to expand
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="w-full md:w-2/5 lg:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-zinc-950 border-t md:border-t-0 md:border-l border-zinc-800">
                <div className="mb-auto">
                  <p className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    Design {selectedIndex + 1} of{" "}
                    {themeDecorationGalleryPricing.length}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-playfair leading-tight">
                    {currentItem.name}
                  </h2>
                  <p className="text-3xl font-black text-yellow-500 mb-6">
                    {currentItem.price}
                  </p>
                  <div className="space-y-4 mb-4">
                    {[
                      "Complete Theme Setup",
                      "Custom Props",
                      "On-site Coordinator",
                    ].map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 text-zinc-400 text-xs"
                      >
                        <CheckCircle2 size={15} className="text-yellow-400" />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleBookService(
                      currentItem.name || "",
                      currentItem.price || "",
                      currentItem.image || ""
                    )
                  }
                  className="w-full py-5 gold-gradient text-black font-black rounded-2xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-yellow-500/20 uppercase tracking-widest"
                >
                  Book This Theme <ExternalLink size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EXPANDED FULL VIEW */}
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
              className="w-full h-full object-contain md:object-cover cursor-zoom-out" // Use object-cover for full width fill
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ThemeDecorationPage;
