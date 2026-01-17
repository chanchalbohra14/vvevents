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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Initialize gallery items
  useEffect(() => {
    const items = getRandomGalleryItems();
    if (limit) {
      setGalleryItems(items.slice(0, limit));
    } else {
      setGalleryItems(items);
    }
  }, [limit]);

  // Shuffle gallery items
  const handleShuffle = () => {
    const shuffled = [...galleryItems].sort(() => 0.5 - Math.random());
    setGalleryItems(shuffled);
    setIsShuffled(true);

    // Reset after 2 seconds
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

  // Filter items by category
  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Get categories for filter
  const categories = ["all", ...Object.keys(galleryByCategory)];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        {showHeader && (
          <div className="text-center mb-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-6 py-2 mb-6">
                <Star size={14} className="text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">
                  Featured Gallery
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
                Our <span className="gold-text">Theme Gallery</span>
              </h2>

              <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
                Explore our curated collection of theme decorations from all
                categories. Each theme is professionally designed and installed.
              </p>

              {/* Stats */}
              {/* <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">
                    {galleryItems.length}
                  </div>
                  <div className="text-sm text-zinc-500">Total Themes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">
                    {Object.keys(galleryByCategory).length}
                  </div>
                  <div className="text-sm text-zinc-500">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">500+</div>
                  <div className="text-sm text-zinc-500">Events Done</div>
                </div>
              </div> */}
            </motion.div>
          </div>
        )}

        {/* Filter & Controls */}
        {/* <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>

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
        </div> */}

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

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <span className="text-zinc-500 text-sm">
            Showing{" "}
            <span className="text-yellow-500 font-bold">
              {filteredItems.length}
            </span>{" "}
            themes
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
            >
              {/* Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-xs text-yellow-500 font-semibold rounded-full border border-yellow-500/30">
                  {item.category}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                {/* Price Overlay */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="px-3 py-2 bg-black/80 backdrop-blur-sm rounded-lg">
                    <span className="text-yellow-500 font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-full">
                    <button
                      onClick={() =>
                        handleBookService(
                          item.name || item.category,
                          item.price,
                          item.image
                        )
                      }
                      className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Book This Theme
                    </button>
                  </div>
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
                    className="flex items-center gap-1 text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors"
                  >
                    Book
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/theme-decoration")}
            className="group inline-flex items-center gap-2 px-8 py-3 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            <span>View All Theme Decorations</span>
            <ChevronRight
              className="group-hover:translate-x-2 transition-transform"
              size={20}
            />
          </button>
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
    </section>
  );
};

export default ThemeGallery;
