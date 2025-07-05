import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import {
  X,
  Star,
  Clock,
  Users,
  MapPin,
  Camera,
  Music,
  Utensils,
  Palette,
  Gift,
  Shield,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [processRef, processInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [packagesRef, packagesInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const navigate = useNavigate();

  const handleBookService = (serviceName, packageName = "") => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/booking", {
      state: {
        selectedService: serviceName,
        selectedPackage: packageName,
      },
    });
  };

  const nextGalleryImage = () => {
    if (selectedService) {
      setCurrentGalleryIndex(
        (prev) => (prev + 1) % selectedService.gallery.length
      );
    }
  };

  const prevGalleryImage = () => {
    if (selectedService) {
      setCurrentGalleryIndex(
        (prev) =>
          (prev - 1 + selectedService.gallery.length) %
          selectedService.gallery.length
      );
    }
  };

  const services = [
    {
      id: 1,
      name: "Birthday Party",
      image:
        "https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Celebrate another year of life with joy, laughter, and unforgettable memories.",
      pricing: "Starting from ₹500",
    },
    {
      id: 2,
      name: "Baby Shower Event",
      image:
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Welcome the newest family member with a beautiful and memorable celebration.",
      pricing: "Starting from ₹500",
    },
    {
      id: 3,
      name: "Anniversary Celebration",
      image:
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Honor your love story with an elegant celebration of your journey together.",
      pricing: "Starting from ₹500",
    },
    {
      id: 4,
      name: "Naming Ceremony",
      image:
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Celebrate the blessing of your child's name with a sacred and joyful ceremony.",
      pricing: "Starting from ₹500",
    },
    {
      id: 5,
      name: "Bride-To-Be Party",
      image:
        "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Celebrate the bride-to-be with an unforgettable pre-wedding celebration.",
      pricing: "Starting from ₹500",
    },
    {
      id: 6,
      name: "Office Inauguration",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Mark your business milestone with a professional and memorable inauguration.",
      pricing: "Starting from ₹500",
    },
    {
      id: 7,
      name: "House Warming Ceremony",
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Bless your new home with a warm and welcoming celebration.",
      pricing: "Starting from ₹500",
    },
    {
      id: 8,
      name: "Retirement Party",
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Honor a lifetime of dedication with a memorable retirement celebration.",
      pricing: "Starting from ₹500",
    },
    {
      id: 9,
      name: "Graduation Celebration",
      image:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Celebrate academic achievements with pride and joy.",
      pricing: "Starting from ₹500",
    },
  ];

  const packages = [
    {
      name: "Essential Package",
      price: "₹500 - ₹1,000",
      description: "Perfect for intimate gatherings and smaller celebrations",
      features: [
        "Basic decoration and styling",
        "Event coordination on the day",
        "Photography (2 hours)",
        "Basic catering coordination",
        "Setup and cleanup",
      ],
      popular: false,
    },
    {
      name: "Premium Package",
      price: "₹1,000 - ₹2,500",
      description: "Comprehensive planning for memorable celebrations",
      features: [
        "Custom theme and decoration",
        "Full event planning and coordination",
        "Professional photography (4 hours)",
        "Entertainment coordination",
        "Premium catering options",
        "Guest coordination",
        "Setup and cleanup",
      ],
      popular: true,
    },
    {
      name: "Luxury Package",
      price: "₹2,500+",
      description: "Ultimate luxury experience with premium services",
      features: [
        "Bespoke event design and styling",
        "Complete event management",
        "Professional photography & videography",
        "Live entertainment coordination",
        "Gourmet catering and bar service",
        "VIP guest management",
        "Luxury transportation coordination",
        "Complete setup and cleanup",
        "Post-event follow-up",
      ],
      popular: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-black"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-8 font-playfair"
          >
            Our Premium <span className="gold-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
          >
            From intimate gatherings to grand celebrations, we specialize in
            creating unforgettable experiences for every milestone in your life
            with luxury and elegance.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-gray-300"
          >
            <div className="flex items-center">
              <Clock className="text-yellow-400 mr-2" size={20} />
              <span>500+ Events Completed</span>
            </div>
            <div className="flex items-center">
              <Users className="text-yellow-400 mr-2" size={20} />
              <span>1000+ Happy Clients</span>
            </div>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-2" size={20} />
              <span>5-Star Rated Service</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Explore Our <span className="gold-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Each service is meticulously crafted to exceed your expectations
              and create lasting memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl premium-card hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3 font-playfair">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-400 font-semibold">
                      <span className="text-sm">Know More</span>
                      <Star
                        className="ml-2 group-hover:rotate-12 transition-transform duration-300"
                        size={18}
                      />
                    </div>
                    <div className="text-yellow-400 text-sm font-semibold">
                      {service.pricing}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 gold-gradient rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Star className="text-black" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages - Fixed equal heights */}
      <section
        ref={packagesRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={packagesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Service <span className="gold-text">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our carefully crafted packages designed to meet
              different needs and budgets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ y: 50, opacity: 0 }}
                animate={packagesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`premium-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 hover:shadow-2xl relative flex flex-col h-full ₹{
                  pkg.popular ? "border-2 border-yellow-400" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="gold-gradient text-black px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold text-white mb-4 font-playfair">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold gold-text mb-6 font-playfair">
                    {pkg.price}
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {pkg.description}
                  </p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <Star
                          className="text-yellow-400 mr-3 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleBookService("", pkg.name)}
                  className="premium-button w-full px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 mt-auto"
                >
                  Choose Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="premium-card rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-3 bg-black/70 rounded-full text-white hover:bg-black/90 transition-colors border border-yellow-400/30 hover:scale-110 transition-transform duration-300"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair">
                    {selectedService.name}
                  </h2>
                  <div className="flex items-center gap-6 mt-4 text-gray-300">
                    <div className="flex items-center">
                      <Clock className="text-yellow-400 mr-2" size={20} />
                      <span>{selectedService.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="text-yellow-400 mr-2" size={20} />
                      <span>{selectedService.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 mr-2" size={20} />
                      <span>{selectedService.pricing}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10">
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-semibold gold-text mb-6 font-playfair">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {selectedService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center text-gray-300"
                        >
                          <Star
                            className="text-yellow-400 mr-4 flex-shrink-0"
                            size={18}
                          />
                          <span className="text-lg">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold gold-text mb-6 font-playfair">
                      Gallery
                    </h3>

                    {/* Enhanced Gallery with Navigation */}
                    <div className="relative">
                      <motion.img
                        key={currentGalleryIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        src={selectedService.gallery[currentGalleryIndex]}
                        alt={`₹{selectedService.name} ₹{
                          currentGalleryIndex + 1
                        }`}
                        className="w-full h-80 object-cover rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                      />

                      {/* Navigation Arrows */}
                      <button
                        onClick={prevGalleryImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/70 rounded-full text-white hover:bg-black/90 transition-all duration-300 hover:scale-110 border border-yellow-400/30"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextGalleryImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/70 rounded-full text-white hover:bg-black/90 transition-all duration-300 hover:scale-110 border border-yellow-400/30"
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedService.gallery.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentGalleryIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ₹{
                              index === currentGalleryIndex
                                ? "bg-yellow-400 scale-125"
                                : "bg-white/50 hover:bg-white/70"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-6 gap-2 mt-4">
                      {selectedService.gallery.map((image, index) => (
                        <motion.img
                          key={index}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          src={image}
                          alt={`₹{selectedService.name} thumbnail ₹{index + 1}`}
                          className={`h-16 w-full object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ₹{
                            index === currentGalleryIndex
                              ? "border-yellow-400"
                              : "border-yellow-400/20 hover:border-yellow-400/40"
                          }`}
                          onClick={() => setCurrentGalleryIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-yellow-400/20">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleBookService(selectedService.name)}
                    className="w-full premium-button px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                  >
                    Book This Service
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;
