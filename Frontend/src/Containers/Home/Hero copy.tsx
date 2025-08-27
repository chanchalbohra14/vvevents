import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface HeroSliderProps {
  heroInView: boolean;
}

interface Slide {
  image: string;
  title?: string;
  tagline?: string;
  description?: string;
}

const heroSlides: Slide[] = [
  {
    image: "/Hero/hero4.jpg", // Grand opening
    title: "Grand Openings",
    // tagline: "Start Strong, Shine Bright",
    // description:
    //   "Mark the beginning of your business journey with a standout event. We bring flair, excitement, and professionalism to every grand opening.",
  },
  {
    image: "/Hero/hero2.jpg", // Bride-to-be
    title: "Bride To Be",
    // tagline: "Celebrating the Journey to ‘I Do’",
    // description:
    //   "From dreamy bridal showers to unforgettable bachelorette parties, we craft every detail to honor the bride-to-be in style and joy.",
  },
  {
    image: "/Hero/hero1.jpg", // Wedding
    title: "Elegant Weddings",
    // tagline: "Your Love Story, Beautifully Crafted",
    // description:
    //   "We design and execute flawless weddings that reflect your unique style and vision. Let us handle every detail while you cherish every moment.",
  },
  {
    image: "/Hero/hero3.jpg", // Baby shower
    title: "Baby Showers",
    // tagline: "Welcoming New Life with Love",
    // description:
    //   "Celebrate the arrival of your little one with a heartwarming baby shower. We create moments filled with love, laughter, and lasting memories.",
  },

  {
    image: "/Hero/hero5.jpg", // Graduation
    title: "Graduation Celebrations",
    // tagline: "Honoring Achievements, Embracing Futures",
    // description:
    //   "Celebrate academic milestones with a touch of class. Our graduation events are designed to reflect pride, accomplishment, and new beginnings.",
  },
];

const Hero: React.FC<HeroSliderProps> = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full absolute inset-0"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full py-5">
            {/* Background Image */}
            <div
              className="absolute inset-1 bg-cover bg-center transition-transform duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-1 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />

            {/* Bottom Buttons */}
            <div className="absolute bottom-6 sm:bottom-24 left-0 right-0 z-10 flex justify-center px-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-row flex-wrap justify-center gap-2 sm:gap-3"
              >
                <Link
                  to="/services"
                  className="premium-button inline-flex items-center justify-center px-3 py-[6px] sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-black bg-white"
                >
                  Explore Services
                  <ArrowRight className="ml-1 sm:ml-2" size={12} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-3 py-[6px] sm:px-4 sm:py-2 border border-yellow-400 text-yellow-400 font-medium rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-[10px] sm:text-sm hover:scale-105 hover:shadow-xl"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating animated gold circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-4 md:left-10 w-8 h-8 md:w-16 md:h-16 gold-gradient rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-32 md:top-40 right-4 md:right-20 w-6 h-6 md:w-12 md:h-12 gold-gradient rounded-full opacity-15"
        />
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 md:bottom-32 left-4 md:left-20 w-12 h-12 md:w-20 md:h-20 gold-gradient rounded-full opacity-10"
        />
      </div>
    </section>
  );
};

export default Hero;
