import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShoppingCart, ExternalLink, Star, Clock, Users } from "lucide-react";
import { themeDecorationGalleryPricing } from "../Containers/Services/Data";
import { useNavigate } from "react-router-dom";

const ThemeDecorationPage = () => {
  const navigate = useNavigate();

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" bg-black pt-10"
    >
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative py-2 overflow-hidden"
        style={{
          backgroundImage: "url(/Th/th3.jpg)", // change if needed
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 mt-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-8 font-playfair"
          >
            Theme <span className="gold-text">Decorations</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10"
          >
            Elevate your celebrations with our beautifully curated theme
            decorations.
          </motion.p>

          {/* <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-gray-300"
          >
            <div className="flex items-center">
              <Clock className="text-yellow-400 mr-2" size={20} />
              <span>Quick Setup</span>
            </div>
            <div className="flex items-center">
              <Users className="text-yellow-400 mr-2" size={20} />
              <span>Custom Designs</span>
            </div>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-2" size={20} />
              <span>Premium Finish</span>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* THEME CARDS SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {themeDecorationGalleryPricing.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() =>
                        handleBookService(item.name, item.price, item.image)
                      }
                      className="p-4 bg-yellow-500 rounded-full text-black hover:bg-yellow-400 transition"
                    >
                      <ShoppingCart size={22} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                    <span className="text-yellow-500 font-bold text-lg">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Complete themed decoration and elegant styling customized
                    for your occasion.
                  </p>
                  {/* <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Complete themed decoration including backdrop, balloons,
                    lighting, and elegant styling customized for your occasion.
                  </p> */}

                  <button
                    onClick={() =>
                      handleBookService(item.name, item.price, item.image)
                    }
                    className="w-full py-3 border border-yellow-500/30 text-yellow-500 rounded-lg group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Book This Theme <ExternalLink size={16} />
                  </button>
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
