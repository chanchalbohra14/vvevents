import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  ExternalLink,
  Star,
  ChevronRight,
  ChevronLeft,
  X,
  Shuffle,
  Maximize2,
  CheckCircle2,
} from "lucide-react";
import { getRandomGalleryItems } from "../Services/Data";
import { useNavigate } from "react-router-dom";

interface ThemeGalleryProps {
  onBookService?: (name: string, price: string, image: string) => void;
  showHeader?: boolean;
  limit?: number;
}

const ThemeGallery: React.FC<ThemeGalleryProps> = ({
  onBookService,
  showHeader = true,
  limit,
}) => {
  const navigate = useNavigate();
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const items = getRandomGalleryItems();
    setGalleryItems(limit ? items.slice(0, limit) : items);
  }, [limit]);

  const handleShuffle = () => {
    const shuffled = [...galleryItems].sort(() => 0.5 - Math.random());
    setGalleryItems(shuffled);
    setIsShuffled(true);
    setTimeout(() => setIsShuffled(false), 2000);
  };

  const handleBookService = (name: string, price: string, image: string) => {
    if (onBookService) {
      onBookService(name, price, image);
    } else {
      navigate("/contact", {
        state: {
          selectedService: name,
          selectedPrice: price,
          selectedImage: image,
        },
      });
    }
  };

  const nextSlide = (e?: React.MouseEvent | any) => {
    e?.stopPropagation?.();
    if (selectedIndex !== undefined) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  };

  const prevSlide = (e?: React.MouseEvent | any) => {
    e?.stopPropagation?.();
    if (selectedIndex !== undefined) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryItems.length) % galleryItems.length
      );
    }
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) nextSlide();
    else if (info.offset.x > swipeThreshold) prevSlide();
  };

  const currentItem =
    selectedIndex !== undefined ? galleryItems[selectedIndex] : null;

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        {showHeader && (
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-6 py-2 mb-6">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest">
                  Featured Gallery
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair tracking-tight text-white">
                Our{" "}
                <span className="text-yellow-500 italic">Theme Gallery</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Explore our curated collection of professionally designed
                decorations.
              </p>
            </motion.div>
          </div>
        )}

        {/* SHUFFLE BUTTON */}
        <div className="mb-8 flex justify-end">
          <button
            onClick={handleShuffle}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 font-bold text-xs uppercase tracking-widest ${
              isShuffled
                ? "border-green-500 text-green-500 bg-green-500/10"
                : "border-zinc-800 text-zinc-400 hover:border-yellow-500 hover:text-yellow-500 bg-zinc-900/50"
            }`}
          >
            <Shuffle size={14} className={isShuffled ? "animate-spin" : ""} />
            {isShuffled ? "Shuffled!" : "Shuffle Gallery"}
          </button>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-900 hover:border-yellow-500/50 transition-all duration-500 shadow-2xl cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                  <Maximize2 size={24} className="text-white" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                    View Details
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] text-yellow-500 font-bold uppercase tracking-widest rounded-full border border-yellow-500/20">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white font-playfair line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="gold-text text-xl font-black">{item.price}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] uppercase font-bold tracking-wider">
                    <CheckCircle2 size={12} className="text-yellow-500/50" />{" "}
                    Premium
                  </div>
                  <span className="text-yellow-500 hover:text-yellow-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    Details <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CARD MODAL VIEW */}
      <AnimatePresence>
        {selectedIndex !== undefined && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-0 md:p-4"
            onClick={() => setSelectedIndex(undefined)}
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
                onClick={() => setSelectedIndex(undefined)}
                className="absolute top-6 right-6 z-[120] p-3 bg-black/50 text-white rounded-full border border-white/10 hover:bg-zinc-800 transition-colors"
              >
                <X size={24} />
              </button>

              {/* IMAGE SIDE */}
              <div
                className="relative w-full md:w-3/5 lg:w-2/3 h-[50vh] md:h-[75vh] bg-zinc-900 overflow-hidden cursor-zoom-in"
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
                    className="w-full h-full object-contain touch-none"
                  />
                </AnimatePresence>

                {/* Desktop Navigation Arrows */}
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

                {/* Swipe Hint */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-[8px] text-white/70 border border-white/10 pointer-events-none uppercase tracking-widest font-bold">
                  click to expand
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="w-full md:w-2/5 lg:w-1/3 p-8 md:p-10 flex flex-col justify-between bg-zinc-950 border-t md:border-t-0 md:border-l border-zinc-800 overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-px w-6 bg-yellow-500"></span>
                    <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">
                      Design {selectedIndex + 1} of {galleryItems.length}
                    </span>
                  </div>

                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
                    {currentItem.name}
                  </h4>

                  <div className="text-4xl font-black text-yellow-500 mb-6">
                    {currentItem.price}
                  </div>

                  <div className="space-y-4 mb-2">
                    {[
                      "Premium Setup",
                      "Signature Lighting",
                      "Custom Props",
                    ].map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 text-zinc-400 text-xs"
                      >
                        <CheckCircle2 size={15} className="text-yellow-500" />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    className="w-full py-5 bg-yellow-500 text-black font-black rounded-2xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-yellow-500/20 uppercase tracking-widest text-sm"
                    onClick={() =>
                      handleBookService(
                        currentItem.name,
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

      {/* FULL SCREEN ZOOM VIEW */}
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
    </section>
  );
};

export default ThemeGallery;
