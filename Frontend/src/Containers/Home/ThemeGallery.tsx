import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Star,
  ChevronRight,
  ChevronLeft,
  X,
  Shuffle,
  Filter,
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
  
  // Track the index for sliding functionality
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

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
        state: { selectedService: name, selectedPrice: price, selectedImage: image },
      });
    }
  };

  // Helper functions for navigation
  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % galleryItems.length);
    }
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        {showHeader && (
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-6 py-2 mb-6">
                <Star size={14} className="text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">Featured Gallery</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
                Our <span className="gold-text">Theme Gallery</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Explore our curated collection of theme decorations. Each theme is professionally designed and installed.
              </p>
            </motion.div>
          </div>
        )}

        <div className="mb-6 flex justify-end">
          <button onClick={handleShuffle} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isShuffled ? "border-green-500 text-green-500 bg-green-500/10" : "border-zinc-700 text-zinc-400 hover:border-yellow-500 hover:text-yellow-500"} transition-all`}>
            <Shuffle size={16} className={isShuffled ? "animate-spin" : ""} />
            {isShuffled ? "Shuffled!" : "Shuffle"}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
            >
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 bg-black/80 text-xs text-yellow-500 font-semibold rounded-full border border-yellow-500/30">
                  {item.category}
                </span>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button onClick={() => setCurrentIndex(index)} className="w-full py-3 bg-black/70 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all flex items-center justify-center gap-2">
                    <ExternalLink size={18} /> View Full Image
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white line-clamp-1">{item.name}</h3>
                  <p className="text-yellow-500 font-bold whitespace-nowrap">{item.price}</p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-400">{item.category}</span>
                  <button
                    onClick={() => handleBookService(item.name, item.price, item.image)}
                    className="flex items-center gap-1 text-yellow-500 hover:text-yellow-400 text-sm font-medium"
                  >
                    Book <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Slider Preview */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setCurrentIndex(null)}
          >
            {/* Navigation Controls */}
            <button className="absolute top-6 right-6 text-white/70 hover:text-yellow-500 z-[110]" onClick={() => setCurrentIndex(null)}>
              <X size={40} />
            </button>
            
            <button onClick={goToPrev} className="absolute left-4 p-3 bg-white/5 hover:bg-yellow-500 rounded-full text-white hover:text-black transition-all z-[110]">
              <ChevronLeft size={32} />
            </button>
            
            <button onClick={goToNext} className="absolute right-4 p-3 bg-white/5 hover:bg-yellow-500 rounded-full text-white hover:text-black transition-all z-[110]">
              <ChevronRight size={32} />
            </button>

            {/* Content Container */}
            <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                src={galleryItems[currentIndex].image}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
              
              {/* Info Overlay at Bottom of Preview */}
              <div className="mt-6 text-center">
                <h4 className="text-2xl font-bold text-white mb-1">{galleryItems[currentIndex].name}</h4>
                <div className="flex items-center justify-center gap-4">
                  <p className="text-yellow-500 font-bold text-xl">{galleryItems[currentIndex].price}</p>
                  <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                  <p className="text-zinc-400 uppercase tracking-widest text-sm">{galleryItems[currentIndex].category}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ThemeGallery;