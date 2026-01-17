import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ExternalLink,
  Star,
  ChevronRight,
  Shuffle,
  Filter,
} from "lucide-react";
import { getRandomGalleryItems, galleryByCategory } from "../Services/Data";
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
  const [selectedCategory] = useState<string>("all");
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Initialize gallery items
  useEffect(() => {
    const items = getRandomGalleryItems();
    setGalleryItems(limit ? items.slice(0, limit) : items);
  }, [limit]);

  // Shuffle gallery items
  const handleShuffle = () => {
    const shuffled = [...galleryItems].sort(() => 0.5 - Math.random());
    setGalleryItems(shuffled);
    setIsShuffled(true);
    setTimeout(() => setIsShuffled(false), 2000);
  };

  const handleBookService = (
    serviceName: string,
    price: string,
    imageUrl: string
  ) => {
    if (onBookService) {
      onBookService(serviceName, price, imageUrl);
    } else {
      navigate("/contact", {
        state: {
          selectedService: serviceName,
          selectedPrice: price,
          selectedImage: imageUrl,
        },
      });
    }
  };

  // Filter items
  const filteredItems = galleryItems;

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
                Explore our curated collection of theme decorations from all
                categories. Each theme is professionally designed and installed.
              </p>
            </motion.div>
          </div>
        )}

        {/* Shuffle Button */}
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

        {/* Results Count */}
        <div className="mb-6">
          <span className="text-zinc-500 text-sm">
            Showing{" "}
            <span className="text-yellow-500 font-bold">
              {filteredItems.length}
            </span>{" "}
            themes
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
            >
              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 bg-black/80 text-xs text-yellow-500 font-semibold rounded-full border border-yellow-500/30">
                  {item.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button
                    onClick={() => setPreviewImage(item.image)}
                    className="w-full py-3 bg-black/70 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Full Image
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                  {item.name}
                </h3>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-400">{item.category}</span>
                  <button
                    onClick={() =>
                      handleBookService(
                        item.name || item.category,
                        item.price,
                        item.image
                      )
                    }
                    className="flex items-center gap-1 text-yellow-500 hover:text-yellow-400 text-sm font-medium"
                  >
                    Book
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              No themes found
            </h3>
            <p className="text-zinc-500">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Fullscreen Preview Modal */}
      {previewImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <motion.img
            src={previewImage}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-yellow-500 transition"
          >
            ×
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default ThemeGallery;
