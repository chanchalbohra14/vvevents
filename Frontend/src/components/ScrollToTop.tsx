import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          // className="fixed bottom-8 right-8 z-50 p-4 gold-gradient text-black rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-yellow-400/20"
          className="fixed right-4 bottom-20 sm:bottom-8 z-50 p-3 sm:p-4 gold-gradient text-black rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-yellow-400/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={28} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
