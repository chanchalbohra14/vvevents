import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ExternalLink } from "lucide-react";
import { themeDecorationGalleryPricing } from "../Services/Data";

interface ThemeDecorationProps {
  onBookService: (name: string, price: string, image: string) => void;
}

const ThemeDecoration: React.FC<ThemeDecorationProps> = ({ onBookService }) => {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Premium Theme Decorations
          </motion.h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themeDecorationGalleryPricing.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button
                    onClick={() =>
                      onBookService(item.name, item.price, item.image)
                    }
                    className="p-3 bg-yellow-500 rounded-full text-black hover:bg-yellow-400 transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <span className="text-yellow-500 font-bold text-lg">
                    {item.price}
                  </span>
                </div>
                {/* <p className="text-zinc-400 text-sm mb-6">
                  Professional theme setup including balloons, backdrop, and
                  props.
                </p> */}

                <button
                  onClick={() =>
                    onBookService(item.name, item.price, item.image)
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
  );
};

export default ThemeDecoration;
