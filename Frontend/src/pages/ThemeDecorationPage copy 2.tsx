import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ShoppingCart,
  ExternalLink,
  Star,
  Clock,
  Users,
  CheckCircle,
  Sparkles,
  Heart,
  Zap,
  Info,
  ChevronRight,
  Search,
  Filter,
} from "lucide-react";
import { themeDecorationGalleryPricing } from "../Containers/Services/Data";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ThemeDecorationPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("featured");

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Filter and sort items
  const filteredItems = themeDecorationGalleryPricing
    .filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low")
        return (
          parseFloat(a.price.replace(/[^0-9]/g, "")) -
          parseFloat(b.price.replace(/[^0-9]/g, ""))
        );
      if (sortBy === "price-high")
        return (
          parseFloat(b.price.replace(/[^0-9]/g, "")) -
          parseFloat(a.price.replace(/[^0-9]/g, ""))
        );
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0; // featured - maintain original order
    });

  // Extract unique categories from data
  const categories = [
    "all",
    ...new Set(
      themeDecorationGalleryPricing.map((item) => item.category || "general")
    ),
  ];

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

  const handleQuickView = (item: any) => {
    // For future enhancement - could open a modal with more details
    console.log("Quick view:", item);
  };

  // Parallax effect for hero
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElement = document.querySelector(".parallax-bg");
      if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen"
    >
      {/* HERO SECTION - Enhanced */}
      <section
        ref={heroRef}
        className="relative py-16 md:py-28 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="parallax-bg absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black opacity-90"
            style={{
              backgroundImage: `url(/Th/th3.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              transform: "translateY(0px)",
              willChange: "transform",
            }}
          />

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/90" />

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
                initial={{
                  x: Math.random() * 100 + "vw",
                  y: Math.random() * 100 + "vh",
                  scale: 0,
                }}
                animate={{
                  x: [null, Math.random() * 100 + "vw"],
                  y: [null, Math.random() * 100 + "vh"],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles size={16} className="text-yellow-500" />
            <span className="text-yellow-500 text-sm font-semibold">
              Premium Themes • Expert Installation
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-5xl md:text-8xl font-bold mb-6 font-playfair tracking-tight"
          >
            <span className="text-white">Theme </span>
            <span className="gold-text bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Decorations
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Transform your celebrations with our{" "}
            <span className="text-yellow-400 font-semibold">
              exquisitely curated
            </span>{" "}
            theme decorations. Every detail crafted for unforgettable moments.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
          >
            {[
              { icon: Star, label: "Premium Quality", value: "100+" },
              { icon: Clock, label: "Quick Setup", value: "2-4 Hours" },
              { icon: Users, label: "Events Done", value: "500+" },
              { icon: CheckCircle, label: "Client Satisfaction", value: "98%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-zinc-800"
              >
                <stat.icon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("themes")?.offsetTop,
                  behavior: "smooth",
                })
              }
              className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Explore Themes
              <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* FILTER & SEARCH SECTION */}
      <section className="py-8 bg-zinc-900/50 border-y border-zinc-800 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex-1 max-w-lg w-full">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search themes (Birthday, Wedding, Baby Shower...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-zinc-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-black/50 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-zinc-400 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-black/50 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-center">
            <span className="text-zinc-400">
              Showing{" "}
              <span className="text-yellow-500 font-bold">
                {filteredItems.length}
              </span>{" "}
              of {themeDecorationGalleryPricing.length} themes
            </span>
          </div>
        </div>
      </section>

      {/* THEME CARDS SECTION - Enhanced */}
      <section id="themes" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                No themes found
              </h3>
              <p className="text-zinc-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-500 shadow-2xl shadow-black/50"
                >
                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-bold px-3 py-1.5 rounded-full">
                        <Star size={10} />
                        <span>POPULAR</span>
                      </div>
                    </div>
                  )}

                  {/* Quick View Button */}
                  <button
                    onClick={() => handleQuickView(item)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/60 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Quick View"
                  >
                    <Info size={18} className="text-white" />
                  </button>

                  {/* Image with Enhanced Hover */}
                  <div className="relative h-80 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
                      animate={{ opacity: hoveredCard === index ? 0.8 : 0.6 }}
                    />

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                      <div className="space-y-2">
                        {item.features?.map((feature: string, idx: number) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-white"
                          >
                            <CheckCircle
                              size={14}
                              className="text-yellow-500"
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                          {item.name}
                        </h3>
                        {/* {item.category && (
                          <span className="text-xs text-zinc-500 uppercase tracking-wider">
                            {item.category}
                          </span>
                        )} */}
                      </div>
                      <div className="text-right">
                        <span className="text-yellow-500 font-bold text-2xl">
                          {item.price}
                        </span>
                        {/* <div className="text-xs text-zinc-500">
                          {item.duration || "Full Day Setup"}
                        </div> */}
                      </div>
                    </div>

                    {/* <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {item.description ||
                        "Complete themed decoration and elegant styling customized for your occasion."}
                    </p> */}

                    {/* Features Icons */}
                    <div className="flex gap-3 mb-6">
                      {[
                        {
                          icon: Zap,
                          label: "Quick Setup",
                          tooltip: "Fast installation",
                        },
                        {
                          icon: Users,
                          label: `${item.capacity || "50+"} Guests`,
                          tooltip: "Recommended capacity",
                        },
                        {
                          icon: Heart,
                          label: "Customizable",
                          tooltip: "Fully customizable",
                        },
                      ].map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-yellow-500 transition-colors"
                          title={feature.tooltip}
                        >
                          <feature.icon size={12} />
                          <span>{feature.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          handleBookService(item.name, item.price, item.image)
                        }
                        className="flex-1 group/btn bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={18} />
                        Book Now
                        <ExternalLink
                          className="group-hover/btn:translate-x-1 transition-transform"
                          size={16}
                        />
                      </button>

                      <button
                        onClick={() =>
                          handleBookService(item.name, item.price, item.image)
                        }
                        className="px-4 border border-yellow-500/30 text-yellow-500 rounded-xl hover:bg-yellow-500/10 transition-colors flex items-center justify-center"
                        title="Inquire"
                      >
                        <span className="text-sm">Inquire</span>
                      </button>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 rounded-3xl blur-3xl" />

            <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-12 backdrop-blur-sm">
              <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Need a Custom Theme?
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                We specialize in creating bespoke theme decorations tailored to
                your unique vision and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    navigate("/contact", {
                      state: { selectedService: "Custom Theme Design" },
                    })
                  }
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all"
                >
                  Request Custom Design
                </button>
                <button
                  onClick={() => (window.location.href = "tel:+919164619328")}
                  className="px-8 py-4 border border-zinc-700 text-white rounded-full hover:border-yellow-500 hover:bg-yellow-500/10 transition-all"
                >
                  Call: +91 9164619328
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Quick */}
      <section className="py-16 px-4 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How long does setup take?",
                answer:
                  "Most theme setups take 2-4 hours depending on complexity. We ensure timely completion.",
              },
              {
                question: "Can themes be customized?",
                answer:
                  "Yes! All themes can be customized to match your specific requirements and preferences.",
              },
              {
                question: "What's included in the price?",
                answer:
                  "Price includes all decoration materials, setup, basic lighting, and takedown after the event.",
              },
              {
                question: "Do you provide lighting?",
                answer:
                  "Yes, basic ambient lighting is included. Premium lighting packages are available.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 hover:border-yellow-500/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-500 font-bold">Q</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-zinc-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ThemeDecorationPage;
