import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Corrected import path for the createSlug function from your data file
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

        {/* Grid for categories - Fully responsive, now showing only 6 items */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-8 justify-items-center">
          {services.slice(0, 6).map(
            (
              service,
              index // Sliced to show only the first 6 services
            ) => (
              <motion.div
                key={service.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={servicesInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-shrink-0 text-center"
              >
                <Link
                  to={`/services/${createSlug(service.name)}`}
                  className="w-20 h-20 sm:w-48 sm:h-48 rounded-full overflow-hidden premium-card inline-block transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative group"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                </Link>
                <h5 className="text-xs sm:text-sm md:text-base lg:text-xl text-white mt-4">
                  {service.name}
                </h5>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
