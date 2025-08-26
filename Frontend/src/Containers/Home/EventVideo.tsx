import React from "react";
import { motion } from "framer-motion";
// import "./styles/App.css";

interface EventVideoProps {
  videoInView: boolean;
}

const EventVideo: React.FC<EventVideoProps> = ({ videoInView }) => {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={videoInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 font-playfair">
            See Our <span className="gold-text">Magic</span> in Action
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how we transform spaces and create unforgettable experiences
            for our clients
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={videoInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/video/main-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              onError={(e) => console.error("Video failed to load:", e)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventVideo;
