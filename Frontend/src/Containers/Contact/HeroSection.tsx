import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Maximize2 } from "lucide-react";

interface HeroSectionProps {
  showSelectedService: boolean;
  imageUrl: string;
  serviceType: string;
  price: string;
  onViewFullSize: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  showSelectedService,
  imageUrl,
  serviceType,
  price,
  onViewFullSize,
}) => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={heroRef}
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage: "url(/Top/c.jpg)",
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
          Book Your <span className="gold-text">Event</span>
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
        >
          We’d love to help bring your celebration to life.
        </motion.p>

        <AnimatePresence>
          {showSelectedService && imageUrl && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group mb-8 inline-block"
            >
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative bg-zinc-900 p-4 rounded-3xl border border-zinc-800 shadow-2xl max-w-2xl mx-auto">
                {/* Expand Button */}
                <button
                  onClick={onViewFullSize}
                  className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 transition-all group"
                  title="View full size"
                >
                  <Maximize2
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </button>

                <div className="overflow-hidden rounded-xl bg-black">
                  <img
                    src={imageUrl}
                    alt="Selected Theme"
                    className="w-full h-auto max-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                    onClick={onViewFullSize}
                  />
                </div>
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-center px-2 gap-2">
                  <div className="text-left">
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block">
                      Selected Theme
                    </span>
                    <span className="text-yellow-500 font-bold text-lg">
                      {serviceType}
                    </span>
                  </div>
                  <div className="text-center sm:text-right">
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block">
                      Package Price
                    </span>
                    <span className="text-yellow-500 font-bold text-lg">
                      {price}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  Click the image or expand button to view full size
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
