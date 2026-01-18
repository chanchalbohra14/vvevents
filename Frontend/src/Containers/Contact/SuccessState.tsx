import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SuccessStateProps {
  onReset: () => void;
}

const SuccessState: React.FC<SuccessStateProps> = ({ onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-3xl mx-auto text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-32 h-32 gold-gradient rounded-full mb-12"
        >
          <CheckCircle size={64} className="text-black" />
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
          Booking <span className="gold-text">Confirmed!</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Thank you for choosing vvevent! We've received your booking request
          and will contact you within 24 hours to discuss the details of your
          special event.
        </p>
        <div className="premium-card rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-semibold gold-text mb-6 font-playfair">
            What happens next?
          </h3>
          <ul className="text-left text-gray-300 space-y-4 text-lg">
            <li className="flex items-start">
              <span className="gold-text mr-3">•</span>
              You'll receive a confirmation email shortly
            </li>
            <li className="flex items-start">
              <span className="gold-text mr-3">•</span>
              Our team will review your requirements
            </li>
            <li className="flex items-start">
              <span className="gold-text mr-3">•</span>
              We'll schedule a consultation call within 24 hours
            </li>
            <li className="flex items-start">
              <span className="gold-text mr-3">•</span>
              We'll provide a detailed proposal and timeline
            </li>
          </ul>
        </div>
        <button
          onClick={onReset}
          className="premium-button inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Plan Another Event
        </button>
      </div>
    </motion.div>
  );
};

export default SuccessState;
