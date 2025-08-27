// src/components/ServiceCategories.tsx

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// Correct import path for the createSlug function from your data file
import { createSlug } from "../Services/Data";

interface Service {
  name: string;
  image: string;
}

interface ServiceCategoriesProps {
  services: Service[];
  servicesInView: boolean;
}

const ServiceCategories: React.FC<ServiceCategoriesProps> = ({
  services,
  servicesInView,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // Limit to first 6 services for desktop grid layout
  const displayedServices = services.slice(0, 6);

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={servicesInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 font-playfair">
            Our Premium <span className="gold-text">Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We specialize in creating magical experiences for every milestone in
            your life. Each service is tailored to your unique vision and
            executed with premium attention to detail.
          </p>
        </motion.div>

        {/* Desktop Horizontal Scroll Layout - Show All Categories */}
        <div className="hidden md:block relative">
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full gold-gradient p-2 shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex justify-start gap-8 lg:gap-12 pb-8 lg:pb-10 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name || index}
                initial={{ scale: 0, opacity: 0 }}
                animate={servicesInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-shrink-0 text-center"
              >
                <Link
                  to={`/services/${createSlug(service.name)}`}
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden premium-card inline-block transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative group"
                >
                  <img
                    src={service.image || "/placeholder.jpg"}
                    alt={service.name || "Service image"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                </Link>
                <p className="text-base lg:text-lg font-semibold text-white mt-4 font-inter">
                  {service.name}
                </p>
              </motion.div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full gold-gradient p-2 shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-black" />
          </button>
        </div>

        {/* Mobile Grid Layout - 3 columns, 2 rows (6 categories) */}
        <div className="md:hidden">
          <div className="grid grid-cols-3 gap-5 max-w-sm mx-auto px-2 sm:px-0">
            {displayedServices.map((service, index) => (
              <motion.div
                key={service.name || index}
                initial={{ scale: 0, opacity: 0 }}
                animate={servicesInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <Link
                  to={`/services/${createSlug(service.name)}`}
                  aria-label={`View details for ${service.name}`}
                  className="w-24 h-24 sm:w-28 sm:h-28 aspect-square rounded-full overflow-hidden bg-black/10 shadow-md premium-card inline-block transition-transform duration-300 hover:scale-105 hover:shadow-lg relative group"
                >
                  <img
                    src={service.image || "/Br/br3.jpg"}
                    alt={service.name || "Service image"}
                    // className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                    className="w-full h-full object-cover rounded-full scale-[1.15] transition-transform duration-700 group-hover:scale-[1.25]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                </Link>
                <p className="text-[11px] sm:text-sm font-semibold text-white mt-2 font-inter leading-tight line-clamp-2">
                  {service?.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional: View All Services Button */}
        {/* <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={servicesInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 md:mt-12 lg:mt-16"
        >
          <Link
            to="/services"
            className="premium-button inline-flex items-center px-4 sm:px-6 md:px-10 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            View All Services
            <ArrowRight className="ml-2 md:ml-3" size={16} />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ServiceCategories;
