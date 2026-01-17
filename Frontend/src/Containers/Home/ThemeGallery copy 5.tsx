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

  // State for sliding preview
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
        state: {
          selectedService: name,
          selectedPrice: price,
          selectedImage: image,
        },
      });
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex(
        (currentIndex - 1 + galleryItems.length) % galleryItems.length
      );
    }
  };

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        {showHeader && (
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-6 py-2 mb-6">
                <Star size={14} className="text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">
                  Featured Gallery
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
                Our <span className="gold-text">Theme Gallery</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Explore our curated collection of theme decorations. Each theme
                is professionally designed and installed.
              </p>
            </motion.div>
          </div>
        )}

        <div className="mb-6 flex justify-end">
          <button
            onClick={handleShuffle}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              isShuffled
                ? "border-green-500 text-green-500 bg-green-500/10"
                : "border-zinc-700 text-zinc-400 hover:border-yellow-500 hover:text-yellow-500"
            } transition-all`}
          >
            <Shuffle size={16} className={isShuffled ? "animate-spin" : ""} />
            {isShuffled ? "Shuffled!" : "Shuffle"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
            >
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 bg-black/80 text-xs text-yellow-500 font-semibold rounded-full border border-yellow-500/30">
                  {item.category}
                </span>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button
                    onClick={() => setCurrentIndex(index)}
                    className="w-full py-3 bg-black/70 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} /> View Full Image
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                  {item.name}
                </h3>

                {/* Enhancement: Price added above Book Button */}
                <div className="flex flex-col items-end gap-1">
                  <span className="text-yellow-500 font-bold text-lg">
                    {item.price}
                  </span>
                  <button
                    onClick={() =>
                      handleBookService(item.name, item.price, item.image)
                    }
                    className="flex items-center gap-1 text-zinc-400 hover:text-yellow-500 text-sm font-medium transition-colors"
                  >
                    Book Now
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Sliding Preview Modal */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/fb flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setCurrentIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-yellow-500 z-[110]"
              onClick={() => setCurrentIndex(null)}
            >
              <X size={32} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 p-2 bg-white/10 hover:bg-yellow-500 rounded-full text-white hover:text-black transition-all z-[110]"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 p-2 bg-white/10 hover:bg-yellow-500 rounded-full text-white hover:text-black transition-all z-[110]"
            >
              <ChevronRight size={32} />
            </button>

            <div
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                src={galleryItems[currentIndex].image}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Enhancement: Preview Info Overlay */}
              <div className="mt-4 text-center">
                <h4 className="text-xl font-bold text-white">
                  {galleryItems[currentIndex].name}
                </h4>
                <p className="text-yellow-500 font-bold text-2xl">
                  {galleryItems[currentIndex].price}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ThemeGallery;
