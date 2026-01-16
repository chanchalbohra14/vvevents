// src/pages/Home.tsx

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Users, Award, Heart, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Import your components
import HeroSlider from "../Containers/Home/Hero";
import ServiceCategories from "../Containers/Home/ServiceCategories";
import EventVideo from "../Containers/Home/EventVideo";
import EventStats from "../Containers/Home/EventStats";
// import CallToAction from "../Containers/Home/CallToAction";
import CallToAction from "../Containers/Home/CallToAction";
import ServicesContent from "../Containers/Services/ServicesContent"; // Import the new component

// Import data from the central source
import { homeServices } from "../Containers/Services/Data";

// Define interfaces for types
interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

const Home: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate here

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [videoRef, videoInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats: Stat[] = [
    { number: "300+", label: "Events Organized", icon: Calendar },
    { number: "300+", label: "Happy Clients", icon: Heart },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "10+", label: "Team Members", icon: Users },
  ];

  // This function is required to be passed to the ServicesContent component
  const handleBookService = (
    serviceName: string,
    price: string,
    imageUrl: string
  ) => {
    navigate("/contact", {
      state: {
        selectedService: serviceName,
        selectedPrice: price,
        selectedImage: imageUrl,
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black"
    >
      <div ref={heroRef}>
        <HeroSlider heroInView={heroInView} />
      </div>

      <div ref={servicesRef}>
        <ServiceCategories
          services={homeServices}
          servicesInView={servicesInView}
        />
      </div>

      {/* This is the correct way to include the services section */}
      {/* <ServicesContent onBookService={handleBookService} /> */}

      <div ref={videoRef}>
        <EventVideo videoInView={videoInView} />
      </div>

      <div ref={statsRef}>
        <EventStats stats={stats} statsInView={statsInView} />
      </div>

      <CallToAction />
    </motion.div>
  );
};

export default Home;
