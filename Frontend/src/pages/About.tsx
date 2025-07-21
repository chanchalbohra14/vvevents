import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Heart,
  Award,
  Users,
  Target,
  Shield,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const About = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [storyRef, storyInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [valuesRef, valuesInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [processRef, processInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [sliderRef, sliderInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Image slider state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const sliderImages = [
    {
      src: "Hb/hbd16.jpg",
      alt: "Birthday celebration with colorful decorations and happy guests",
      caption: "Birthday Party Celebrations",
      description:
        "Creating magical moments for every age with custom themes and joyful celebrations",
    },
    {
      src: "Bs/bs10.jpg",
      alt: "Baby shower with elegant pastel decorations and expecting parents",
      caption: "Baby Shower Events",
      description:
        "Welcoming new life with elegant celebrations and heartwarming moments",
    },
    {
      src: "WA/WA8.jpg",
      alt: "Anniversary celebration with romantic setup and couple",
      caption: "Anniversary Celebrations",
      description:
        "Honoring love stories with romantic and meaningful celebrations",
    },
    {
      src: "Br/br6.jpg",
      alt: "Bridal party celebration with bride and friends",
      caption: "Bride-To-Be Parties",
      description:
        "Celebrating the bride-to-be with unforgettable pre-wedding experiences",
    },
    {
      src: "Of/of5.jpg",
      alt: "Professional office inauguration ceremony with ribbon cutting",
      caption: "Office Inaugurations",
      description:
        "Professional milestone celebrations that make lasting impressions",
    },
    {
      src: "Nc/nc30.jpg",
      alt: "Traditional naming ceremony with family gathering",
      caption: "Naming Ceremonies",
      description:
        "Sacred traditions blended with modern celebration for meaningful moments",
    },
    {
      src: "Hw/hw8.jpg",
      alt: "House warming celebration with family and friends",
      caption: "House Warming Ceremonies",
      description:
        "Blessing new homes with warmth, joy, and community celebration",
    },
    {
      src: "Gc/gc2.jpg",
      alt: "Graduation celebration with academic theme and graduates",
      caption: "Graduation Celebrations",
      description:
        "Honoring academic achievements and celebrating bright futures ahead",
    },

    {
      src: "Rt/rt1.jpg",
      alt: "Retirement party celebration with colleagues and retiree",
      caption: "Retirement Parties",
      description:
        "Celebrating lifetime achievements and new beginnings with honor and joy",
    },
    {
      src: "Br/br3.jpg",
      alt: "Bridal party celebration with bride and friends",
      caption: "Bride-To-Be Parties",
      description:
        "Celebrating the bride-to-be with unforgettable pre-wedding experiences",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, sliderImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We pour our heart into every event, ensuring each celebration is filled with love and joy that resonates with every guest.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for perfection in every detail, delivering events that exceed expectations and set new standards in luxury.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We believe in bringing people together and creating lasting connections through meaningful celebrations.",
    },
    {
      icon: Target,
      title: "Vision",
      description:
        "We envision a world where every milestone is celebrated with the grandeur and elegance it deserves.",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "We build lasting relationships with our clients through transparency, reliability, and unwavering commitment to their vision.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "We constantly evolve our approach, incorporating the latest trends and technologies to create cutting-edge celebrations.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "We begin with a detailed consultation to understand your vision, preferences, and requirements.",
      icon: Users,
    },
    {
      step: "02",
      title: "Concept Development",
      description:
        "Our creative team develops a unique concept and theme that perfectly captures your celebration.",
      icon: Sparkles,
    },
    {
      step: "03",
      title: "Planning & Design",
      description:
        "We create detailed plans, timelines, and design mockups for your approval and feedback.",
      icon: Target,
    },
    {
      step: "04",
      title: "Vendor Coordination",
      description:
        "We manage all vendor relationships and ensure seamless coordination between all service providers.",
      icon: Shield,
    },
    {
      step: "05",
      title: "Event Execution",
      description:
        "On the day of your event, our team ensures flawless execution while you enjoy your celebration.",
      icon: Award,
    },
    {
      step: "06",
      title: "Follow-up",
      description:
        "We follow up to ensure your complete satisfaction and gather feedback for continuous improvement.",
      icon: Heart,
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
        className="relative py-28 overflow-hidden"
        style={{
          backgroundImage: "url(/Top/a.jpg)",

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
            Our <span className="gold-text">Story</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed"
          >
            Born from a passion for creating magical moments, vvevent has been
            transforming ordinary celebrations into extraordinary memories for
            over five years.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section
        ref={storyRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={storyInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
                Where Dreams Meet <span className="gold-text">Reality</span>
              </h2>
              <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
                <p>
                  vvevent began as a small dream in 2019 when our founder
                  realized that every celebration deserves to be extraordinary.
                  What started as organizing events for friends and family
                  quickly grew into a passion for creating unforgettable
                  experiences that touch hearts and create lasting memories.
                </p>
                <p>
                  Today, we're a team of dedicated professionals who understand
                  that behind every event is a story worth celebrating. Whether
                  it's a child's first birthday, a couple's golden anniversary,
                  or a corporate milestone, we believe every moment matters and
                  deserves to be honored with elegance and style.
                </p>
                <p>
                  Our approach combines creativity with meticulous planning,
                  ensuring that your vision comes to life exactly as you
                  imagined – or even better. We don't just plan events; we craft
                  experiences that become cherished memories for generations to
                  come.
                </p>
                <p>
                  Over the years, we've had the privilege of celebrating with
                  over 1,000 families and organizations, each bringing their
                  unique story and vision. From intimate gatherings of 10 to
                  grand celebrations of 500+, we've learned that the size of the
                  event doesn't matter – what matters is the love, joy, and
                  meaning behind it.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={storyInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="About/a2.jpg"
                alt="Birthday celebration planning"
                className="rounded-2xl shadow-2xl border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="About/a3.jpg"
                alt="Baby shower celebration"
                className="rounded-2xl shadow-2xl mt-12 border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="About/a4.jpg"
                alt="Anniversary party setup"
                className="rounded-2xl shadow-2xl -mt-12 border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="About/a1.jpg"
                alt="Bridal celebration moments"
                className="rounded-2xl shadow-2xl border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Enhanced Image Slider Section */}
      <section
        ref={sliderRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={sliderInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Our Event <span className="gold-text">Gallery</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of stunning celebrations and see the magic
              we create for every occasion
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={sliderInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Main Slider */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <img
                  src={sliderImages[currentImageIndex].src}
                  alt={sliderImages[currentImageIndex].alt}
                  className="w-full h-96 md:h-[600px] object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.h3
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair"
                  >
                    {sliderImages[currentImageIndex].caption}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl"
                  >
                    {sliderImages[currentImageIndex].description}
                  </motion.p>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 p-4 bg-black/70 rounded-full text-white hover:bg-black/90 transition-all duration-300 hover:scale-110 border border-yellow-400/30 backdrop-blur-sm"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 p-4 bg-black/70 rounded-full text-white hover:bg-black/90 transition-all duration-300 hover:scale-110 border border-yellow-400/30 backdrop-blur-sm"
              >
                <ChevronRight size={28} />
              </button>

              {/* Auto-play Control */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-6 right-6 p-3 bg-black/70 rounded-full text-white hover:bg-black/90 transition-all duration-300 hover:scale-110 border border-yellow-400/30 backdrop-blur-sm"
              >
                {isAutoPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                <motion.div
                  className="h-full bg-yellow-400"
                  initial={{ width: "0%" }}
                  animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  key={`₹{currentImageIndex}-₹{isAutoPlaying}`}
                />
              </div>

              {/* Dots Indicator */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ₹{
                      index === currentImageIndex
                        ? "bg-yellow-400 scale-125 shadow-lg"
                        : "bg-white/50 hover:bg-white/70 hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mt-8">
              {sliderImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative overflow-hidden rounded-lg cursor-pointer border-2 transition-all duration-300 ₹{
                    index === currentImageIndex
                      ? "border-yellow-400 scale-105 shadow-lg"
                      : "border-yellow-400/20 hover:border-yellow-400/40"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image.src}
                    alt={`Thumbnail ₹{index + 1}`}
                    className="h-16 md:h-20 w-full object-cover"
                  />
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-yellow-400/20" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-center mt-6">
              <span className="text-gray-400 text-lg">
                {currentImageIndex + 1} of {sliderImages.length}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={valuesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Our <span className="gold-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              These core principles guide everything we do and shape every event
              we create, ensuring that each celebration reflects our commitment
              to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="text-center group premium-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 gold-gradient rounded-full mb-8 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={40} className="text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-6 font-playfair">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section
        ref={processRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={processInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Our <span className="gold-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From initial consultation to final execution, our proven 6-step
              process ensures every detail is perfectly planned and flawlessly
              executed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 50, opacity: 0 }}
                animate={processInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="premium-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="text-6xl font-bold gold-text mb-4 font-playfair">
                  {step.step}
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 gold-gradient rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-playfair">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
