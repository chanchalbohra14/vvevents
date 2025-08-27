import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "./Data";
import HorizontalGallery from "./HorizontalGallery";

interface ServicesContentProps {
  onBookService: (serviceName: string, price: string, imageUrl: string) => void;
  showDescriptions?: boolean; // New prop to control description visibility
}

const ServicesContent: React.FC<ServicesContentProps> = ({
  onBookService,
  showDescriptions = false, // Default to false (hide descriptions)
}) => {
  return (
    <section className="py-12 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
            Explore Our <span className="gold-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Each service is meticulously crafted to exceed your expectations and
            create lasting memories.
          </p>
        </motion.div>
      </div>

      {servicesData.map((service) => (
        <HorizontalGallery
          key={service.id}
          name={service.name}
          description={showDescriptions ? service.description : undefined}
          galleryPricing={service.galleryPricing}
          onBookService={onBookService}
        />
      ))}
    </section>
  );
};

export default ServicesContent;
