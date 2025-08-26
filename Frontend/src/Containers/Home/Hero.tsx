import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "./styles/App.css";

interface HeroSliderProps {
  heroInView: boolean;
}

interface Slide {
  image: string;
  title: string;
  tagline: string;
  description: string;
}

const heroSlides: Slide[] = [
  {
    image:
      "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Village Vacation",
    tagline: "Premium Event Planning & Celebration Services",
    description:
      "Creating unforgettable moments for your most precious celebrations. From intimate gatherings to grand festivities, we bring your dreams to life with elegance and sophistication.",
  },
  {
    image:
      "https://images.pexels.com/photos/1578351/pexels-photo-1578351.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Elegant Weddings",
    tagline: "Your Love Story, Beautifully Crafted",
    description:
      "We design and execute flawless weddings that reflect your unique style and vision. Let us handle every detail while you cherish every moment.",
  },
  {
    image:
      "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Corporate Events",
    tagline: "Professionalism Meets Perfection",
    description:
      "Elevate your corporate gatherings with our expert planning services. We ensure your event is a resounding success, from conferences to gala dinners.",
  },
  {
    image:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Memorable Milestones",
    tagline: "Celebrate Every Chapter",
    description:
      "From birthdays to anniversaries, we turn every special occasion into a cherished memory. Personalized planning for your unique journey.",
  },
];

const Hero: React.FC<HeroSliderProps> = ({ heroInView }) => {
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
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image and Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

            {/* Content for the slide */}
            <div className="relative z-10 text-center max-w-6xl mx-auto px-4 hero-content w-full h-full flex flex-col justify-center items-center">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6"
              >
                <span className="gold-text font-playfair">{slide.title}</span>
              </motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-3xl text-gray-200 mb-3 md:mb-4 leading-relaxed font-light"
              >
                {slide.tagline}
              </motion.p>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-12 leading-relaxed max-w-4xl mx-auto"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center"
              >
                <Link
                  to="/services"
                  className="premium-button inline-flex items-center justify-center px-4 sm:px-6 md:px-10 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
                >
                  Explore Services
                  <ArrowRight className="ml-2 md:ml-3" size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 sm:px-6 md:px-10 py-3 md:py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm sm:text-base md:text-lg hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* This div is for the floating, animated gold circles. It remains outside the Swiper to appear on top of all slides. */}
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
