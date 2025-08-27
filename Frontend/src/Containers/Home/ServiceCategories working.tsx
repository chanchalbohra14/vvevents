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

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 hidden md:block w-12 h-12 rounded-full gold-gradient p-2 shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex justify-start gap-4 md:gap-8 lg:gap-12 pb-6 md:pb-8 lg:pb-10 overflow-x-auto no-scrollbar scroll-smooth px-4 md:px-0"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={servicesInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-shrink-0 text-center"
              >
                <Link
                  to={`/services/${createSlug(service.name)}`}
                  className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden premium-card inline-block transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative group"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                </Link>
                <h3 className="text-sm sm:text-base md:text-xl font-semibold text-white mt-4 font-playfair leading-tight">
                  {service.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 hidden md:block w-12 h-12 rounded-full gold-gradient p-2 shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-black" />
          </button>
        </div>

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
