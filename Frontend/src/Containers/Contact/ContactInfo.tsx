import React from "react";
import { motion } from "framer-motion";

// import { Calendar, Send, CheckCircle } from "lucide-react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9164619328",
      subtitle: "Mon-Fri 9AM-6PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: "vvevents681@gmail.com",
      subtitle: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Gandhi Nagar",
      subtitle: "Ballari, Karnataka, India",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM",
      subtitle: "Sat-Sun: 10AM-4PM",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group premium-card p-8 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 gold-gradient rounded-full mb-8 group-hover:scale-110 transition-transform duration-300">
                <info.icon size={40} className="text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 font-playfair">
                {info.title}
              </h3>

              {/* ✅ Clickable phone and email */}
              <p className="text-gray-300 font-medium mb-2 text-sm whitespace-nowrap overflow-hidden text-ellipsis text-center">
                {info.title === "Phone" ? (
                  <a
                    href={`tel:${info.details.replace(/\s+/g, "")}`}
                    className="text-inherit hover:text-yellow-400 transition-colors duration-200"
                  >
                    {info.details}
                  </a>
                ) : info.title === "Email" ? (
                  <a
                    href={`mailto:${info.details}`}
                    className="text-inherit hover:text-yellow-400 transition-colors duration-200"
                  >
                    {info.details}
                  </a>
                ) : (
                  info.details
                )}
              </p>

              <p className="text-gray-400">{info.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
