import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  Users,
  Star,
  ArrowRight,
  Award,
  Heart,
  Sparkles,
  Play,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [introRef, introInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [videoRef, videoInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // const handleServiceClick = (serviceName) => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   navigate("/services", { state: { selectedService: serviceName } });
  // };

  const services = [
    {
      name: "Birthday Party",
      image:
        "https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Magical birthday celebrations with custom themes, decorations, and entertainment",
    },
    {
      name: "Baby Shower Event",
      image:
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Elegant baby shower celebrations welcoming your little bundle of joy",
    },
    {
      name: "Anniversary Celebration",
      image:
        "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Romantic anniversary celebrations honoring your love story and journey together",
    },
    {
      name: "Naming Ceremony",
      image:
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Sacred naming ceremonies blending tradition with modern celebration",
    },
    {
      name: "Bride-To-Be Party",
      image:
        "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Unforgettable bridal celebrations and bachelorette parties",
    },
    {
      name: "Office Inauguration",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Professional office inaugurations and corporate milestone celebrations",
    },
  ];

  const stats = [
    { number: "500+", label: "Events Organized", icon: Calendar },
    { number: "1000+", label: "Happy Clients", icon: Heart },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Team Members", icon: Users },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description:
        "Every event is crafted with premium attention to detail and luxury touches that make your celebration extraordinary.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced professionals bring creativity, precision, and passion to every aspect of your event planning.",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description:
        "We understand that every celebration is unique, and we tailor our services to reflect your personal style and vision.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black"
    >
      {/* Hero Section with Event-Themed Banner */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-mobile"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Floating Elements Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-4 md:left-10 w-8 h-8 md:w-16 md:h-16 gold-gradient rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-32 md:top-40 right-4 md:right-20 w-6 h-6 md:w-12 md:h-12 gold-gradient rounded-full opacity-15"
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 md:bottom-32 left-4 md:left-20 w-12 h-12 md:w-20 md:h-20 gold-gradient rounded-full opacity-10"
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 hero-content">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6"
          >
            <span className="gold-text font-playfair">Village Vacation</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-3xl text-gray-200 mb-3 md:mb-4 leading-relaxed font-light"
          >
            Premium Event Planning & Celebration Services
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Creating unforgettable moments for your most precious celebrations.
            From intimate gatherings to grand festivities, we bring your dreams
            to life with elegance and sophistication.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
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
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-8 md:py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 font-playfair">
              Our Premium <span className="gold-text">Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We specialize in creating magical experiences for every milestone
              in your life. Each service is tailored to your unique vision and
              executed with premium attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl premium-card hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3 font-playfair">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 gold-gradient rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Star className="text-black" size={12} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-8 md:mt-12 lg:mt-16"
          >
            <Link
              to="/services"
              className="premium-button inline-flex items-center px-4 sm:px-6 md:px-10 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              View All Services
              <ArrowRight className="ml-2 md:ml-3" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Introduction Section */}
      <section
        ref={introRef}
        className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={introInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 font-playfair">
              Why Choose <span className="gold-text">Village Vacation?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With over five years of experience in creating magical
              celebrations, we've mastered the art of turning ordinary moments
              into extraordinary memories. Our commitment to excellence and
              attention to detail sets us apart in the world of premium event
              planning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                animate={introInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="premium-card p-4 sm:p-6 md:p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 gold-gradient rounded-full mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon
                    size={24}
                    className="text-black sm:w-8 sm:h-8"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 font-playfair">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section ref={videoRef} className="py-8 md:py-16 lg:py-24 bg-gray-900">
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
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Mwxufn7vvgU?rel=0"
                title="Event Planning Showcase - Luxury Celebrations"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 font-playfair">
              Our <span className="gold-text">Achievements</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client
              satisfaction
            </p>
          </motion.div>

          <div className="grid stats-grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={statsInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center premium-card p-4 sm:p-6 md:p-8 rounded-2xl group hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 gold-gradient rounded-full mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={16} className="text-black sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold gold-text mb-1 sm:mb-2 md:mb-3 font-playfair">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </motion.div>
  );
};

export default Home;
