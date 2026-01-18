import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Eye,
  X,
  Maximize2,
} from "lucide-react";
import { createSlug } from "./Data";

interface GalleryItem {
  image: string;
  price: string;
  name?: string;
}

interface HorizontalGalleryProps {
  name: string;
  description?: string;
  galleryPricing: GalleryItem[];
  onBookService: (serviceName: string, price: string, imageUrl: string) => void;
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({
  name,
  description,
  galleryPricing,
  onBookService,
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);

  const handleQuickView = (image: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewImage(image);
    setPreviewLoading(true);
  };

  const handleBookService = (
    price: string,
    imageUrl: string,
    e?: React.MouseEvent
  ) => {
    if (e) e.stopPropagation();
    onBookService(name, price, imageUrl);
  };

  return (
    <>
      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setPreviewImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPreviewImage(null);
              }}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all"
            >
              <X size={28} className="text-white" />
            </button>

            <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
              <div className="relative max-h-[90vh] max-w-full">
                {previewLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={previewImage}
                  alt="Preview"
                  className={`max-h-[90vh] max-w-full object-contain transition-opacity duration-300 ${
                    previewLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => setPreviewLoading(false)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="py-16 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER SECTION - Enhanced */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-2">
                  <Sparkles size={12} className="text-yellow-500" />
                  <span className="text-yellow-500 text-xs font-semibold uppercase tracking-wider">
                    {name}
                  </span>
                  <span className="gold-text text-xs font-playfair italic">
                    Designs
                  </span>
                </div>
                {/* <Link
                  to={`/services/${createSlug(name)}`}
                  className="group flex items-center gap-2 bg-zinc-900/50 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 border border-zinc-800 hover:border-yellow-500 px-5 py-2.5 rounded-full text-white hover:text-black transition-all duration-500 font-body text-xs"
                >
                  <span>Explore All</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={10}
                  />
                </Link> */}
              </div>
              {/* <div className="flex items-center gap-3">
                <h3 className="text-3xl md:text-4xl font-bold font-playfair text-white">
                  {name}
                </h3>
                <span className="gold-text text-3xl font-playfair italic">
                  Designs
                </span>
              </div> */}
              {description && (
                <p className="text-zinc-400 max-w-2xl leading-relaxed text-sm">
                  {description}
                </p>
              )}
            </div>

            <Link
              to={`/services/${createSlug(name)}`}
              className="group flex items-center gap-2 bg-zinc-900/50 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 border border-zinc-800 hover:border-yellow-500 px-5 py-2.5 rounded-full text-white hover:text-black transition-all duration-500 font-semibold text-xs"
            >
              <span>Explore All</span>
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </Link>
          </div>

          {/* Gallery Stats */}
          <div className="flex items-center gap-4 mb-6 text-zinc-500 text-sm">
            <span>{galleryPricing.length} designs available</span>
            <span className="text-yellow-500">•</span>
            <span>
              Starting from ₹
              {galleryPricing[0]?.price.replace("₹", "") || "1500"}
            </span>
          </div>

          {/* SCROLLABLE GALLERY - Compact */}
          <div className="relative group/container">
            {/* Edge Gradients */}
            {/* <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" /> */}
            <div className="absolute left-0 top-0 bottom-0 w-12  from-black via-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12  from-black via-black/90 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide px-1">
              {galleryPricing.slice(0, 8).map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="relative flex-shrink-0 w-[140px] md:w-[180px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 group/card"
                  onClick={(e) => handleBookService(item.price, item.image, e)}
                >
                  {/* Quick View Button */}
                  <button
                    onClick={(e) => handleQuickView(item.image, e)}
                    className="absolute top-2 right-2 z-20 p-1.5 bg-black/60 backdrop-blur-sm hover:bg-black/90 rounded-lg opacity-0 group-hover/card:opacity-100 transition-all duration-300"
                    title="Quick View"
                  >
                    <Eye size={14} className="text-white" />
                  </button>

                  {/* Image with Zoom Effect */}
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${name} Design ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Price Badge */}
                    <div className="absolute bottom-2 right-2 z-10">
                      <div className="px-2.5 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg">
                        <span className="text-yellow-500 font-bold text-sm">
                          {item.price}
                        </span>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <ShoppingBag size={14} className="text-yellow-500" />
                          <span className="text-white text-xs font-medium">
                            Book This Design
                          </span>
                        </div>
                        <div className="text-center">
                          <button className="text-xs text-zinc-400 hover:text-yellow-500 transition-colors">
                            Quick View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Design Number */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="text-xs font-bold text-white/70 bg-black/40 px-2 py-1 rounded-md">
                      #{idx + 1}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* VIEW ALL CARD - Enhanced */}
              <Link
                to={`/services/${createSlug(name)}`}
                className="relative flex-shrink-0 w-[140px] md:w-[180px] aspect-[3/4] rounded-2xl snap-start overflow-hidden group/viewall border border-dashed border-zinc-700 hover:border-yellow-500 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black flex flex-col items-center justify-center gap-3 p-4 transition-all duration-300 group-hover/viewall:bg-gradient-to-br group-hover/viewall:from-yellow-500/10 group-hover/viewall:to-yellow-600/10">
                  <div className="w-12 h-12 rounded-full border-2 border-zinc-600 group-hover/viewall:border-yellow-500 group-hover/viewall:bg-gradient-to-r group-hover/viewall:from-yellow-500 group-hover/viewall:to-yellow-600 flex items-center justify-center transition-all duration-500 group-hover/viewall:scale-110">
                    <ArrowRight
                      size={20}
                      className="text-zinc-400 group-hover/viewall:text-black transition-colors"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-base font-bold text-white block">
                      View All
                    </span>
                    <span className="text-zinc-500 text-xs mt-1 group-hover/viewall:text-yellow-400 transition-colors">
                      {galleryPricing.length - 8}+ More
                    </span>
                  </div>
                  <div className="text-zinc-600 text-xs text-center mt-2 group-hover/viewall:text-zinc-400">
                    Explore full collection
                  </div>
                </div>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center items-center gap-1 mt-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover/container:bg-zinc-700 transition-colors"
                />
              ))}
              <span className="text-xs text-zinc-600 mx-2">Scroll →</span>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover/container:bg-zinc-700 transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-zinc-800/50">
            <div className="text-sm text-zinc-500">
              All designs include professional setup and customization options
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  handleBookService(
                    galleryPricing[0]?.price || "₹1500",
                    galleryPricing[0]?.image || ""
                  )
                }
                className="px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-300 text-sm flex items-center gap-2"
              >
                <ShoppingBag size={14} />
                Book Starting from {galleryPricing[0]?.price || "₹1500"}
              </button>
              <Link
                to={`/services/${createSlug(name)}`}
                className="px-5 py-2.5 border border-zinc-700 text-zinc-400 hover:text-white hover:border-yellow-500 rounded-full transition-all duration-300 text-sm"
              >
                View Details
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HorizontalGallery;
