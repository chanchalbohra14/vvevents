import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { createSlug } from "./Data";

interface GalleryItem {
  image: string;
  price: string;
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
  return (
    <div className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]">
              <Sparkles size={14} />
              <span>Premium Collection</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold font-playfair text-white">
              {name} <span className="text-yellow-500 italic">Designs</span>
            </h3>
            {description && (
              <p className="text-zinc-400 max-w-2xl leading-relaxed text-lg">
                {description}
              </p>
            )}
          </div>

          <Link
            to={`/services/${createSlug(name)}`}
            className="group flex items-center gap-3 bg-zinc-900/50 hover:bg-yellow-500 border border-zinc-800 hover:border-yellow-500 px-6 py-3 rounded-full text-white hover:text-black transition-all duration-500 font-bold text-sm uppercase tracking-widest"
          >
            Explore All
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Link>
        </div>

        {/* SCROLLABLE CONTAINER */}
        <div className="relative group/container">
          {/* Edge Gradients to indicate more content */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none opacity-0 group-hover/container:opacity-100 transition-opacity" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none opacity-0 group-hover/container:opacity-100 transition-opacity" />

          <div className="flex gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-2">
            {galleryPricing.slice(0, 8).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative flex-shrink-0 w-[200px] md:w-[350px] aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer snap-start border border-zinc-800 group"
                onClick={() => onBookService(name, item.price, item.image)}
              >
                {/* Image with Zoom Effect */}
                <img
                  src={item.image}
                  alt={`${name} Design ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay: Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-yellow-500 text-2xl font-black block mb-2">
                      {item.price}
                    </span>

                    {/* Hidden "Book Now" text that appears on hover */}
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        <ShoppingBag size={14} className="text-yellow-500" />
                        Click to Book Design
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Border Glow on Hover */}
                <div className="absolute inset-0 border-2 border-yellow-500/0 group-hover:border-yellow-500/30 rounded-3xl transition-colors pointer-events-none" />
              </motion.div>
            ))}

            {/* ENHANCED VIEW ALL CARD */}
            <Link
              to={`/services/${createSlug(name)}`}
              className="relative flex-shrink-0 w-[280px] md:w-[350px] aspect-[3/4] rounded-3xl snap-start overflow-hidden group border border-dashed border-zinc-700 hover:border-yellow-500 transition-colors"
            >
              <div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center gap-4 transition-colors group-hover:bg-zinc-900">
                <div className="w-16 h-16 rounded-full border border-zinc-700 group-hover:border-yellow-500 group-hover:bg-yellow-500 flex items-center justify-center transition-all duration-500">
                  <ArrowRight
                    size={32}
                    className="text-zinc-500 group-hover:text-black transition-colors"
                  />
                </div>
                <div className="text-center">
                  <span className="text-xl font-bold text-white block">
                    View More
                  </span>
                  <span className="text-zinc-500 text-sm">{name} Designs</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
