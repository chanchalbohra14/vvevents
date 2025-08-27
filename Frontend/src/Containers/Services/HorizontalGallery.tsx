import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { createSlug } from "./Data";

interface GalleryItem {
  image: string;
  price: string;
}

interface HorizontalGalleryProps {
  name: string;
  description?: string; // Made optional
  galleryPricing: GalleryItem[];
  // Add the new prop
  onBookService: (serviceName: string, price: string, imageUrl: string) => void;
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({
  name,
  description,
  galleryPricing,
  onBookService,
}) => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold font-playfair mb-2 gold-text">
              {name}
            </h3>
            {/* Conditionally render description only if it exists */}
            {description && (
              <p className="text-xl text-gray-300 max-w-2xl">{description}</p>
            )}
          </div>
          <Link
            to={`/services/${createSlug(name)}`}
            className="hidden md:flex items-center text-yellow-400 font-semibold transition-transform duration-300 hover:translate-x-1"
          >
            Explore All <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="horizontal-scroll-container">
          {galleryPricing.slice(0, 8).map((item, idx) => (
            <motion.div
              key={idx}
              className="horizontal-gallery-card cursor-pointer" // Add cursor-pointer
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              // Add the onClick handler here
              onClick={() => onBookService(name, item.price, item.image)}
            >
              <img
                src={item.image}
                alt={`${name} Design ${idx + 1}`}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-lg font-semibold text-white">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
          <Link
            to={`/services/${createSlug(name)}`}
            className="horizontal-gallery-card view-all-card"
          >
            <div className="text-center">
              <span className="text-2xl font-bold text-white mb-2">
                View All
              </span>
              <ArrowRight size={36} className="text-white mt-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
