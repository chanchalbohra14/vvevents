import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
// import "./styles/App.css";

const CallToAction: React.FC = () => {
  return (
    <section className="py-8 md:py-16 lg:py-24 gold-gradient">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 lg:mb-8 font-playfair">
            Ready to Create Magic?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/80 mb-6 md:mb-8 lg:mb-12 leading-relaxed">
            Let's turn your special occasion into an unforgettable experience
            that you and your guests will cherish forever
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-black text-yellow-400 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg"
          >
            Start Planning Your Event
            <Calendar className="ml-2 md:ml-3" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
