import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Award, Heart, LucideIcon } from "lucide-react";
// import "./styles/App.css";

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

interface EventStatsProps {
  stats: Stat[];
  statsInView: boolean;
}

const EventStats: React.FC<EventStatsProps> = ({ stats, statsInView }) => {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
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
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"> */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={statsInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center premium-card p-4 sm:p-6 md:p-8 rounded-2xl group hover:scale-105 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 gold-gradient rounded-full mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.createElement(stat.icon, {
                  size: 16,
                  className: "text-black sm:w-6 sm:h-6",
                })}
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
  );
};

export default EventStats;
