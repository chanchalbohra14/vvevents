import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Clock, Users } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { servicesData, createSlug } from "../Containers/Services/Data"; // Correct import path
import ServiceGallery from "../Containers/Services/ServiceGallery";
import ServicesContent from "../Containers/Services/ServicesContent"; // Import the new component

const faqs = [
  {
    question: "How can I book a decoration service?",
    answer:
      "You can book directly through our website’s Contact or Booking page. Just fill out the form with your event details, and we’ll get back to you within 24 hours.",
  },
  {
    question: "Do you offer decoration services at home?",
    answer:
      "Yes, we provide home decoration services for various occasions like birthdays, anniversaries, baby showers, and more. Setup is done at your preferred location.",
  },
  {
    question: "Do I need to provide any materials for the decoration?",
    answer:
      "No. We bring everything required — including props, flowers, balloons, lights, and other decor essentials. If you want something custom added, let us know in advance.",
  },
  {
    question: "How do I contact vvevents for support?",
    answer:
      "You can reach out via phone at +91 9164619328 or email us at vvevents681@gmail.com. You can also message us through Instagram or the contact form on our site.",
  },
];

const Services = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const selectedService = servicesData.find(
    (service) => createSlug(service.name) === slug
  );

  useEffect(() => {
    if (slug && !selectedService) {
      navigate("/services");
    }
  }, [slug, selectedService, navigate]);

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
      className="min-h-screen pt-10 bg-black"
    >
      {/* Conditionally render the Hero Section only on the main services page */}
      {!selectedService && (
        <section
          ref={heroRef}
          className="relative py-28 overflow-hidden"
          style={{
            backgroundImage: "url(/Top/s.jpg)",
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
              Our Premium <span className="gold-text">Services</span>
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
            >
              From intimate gatherings to grand celebrations, we specialize in
              creating unforgettable experiences for every milestone in your
              life with luxury and elegance.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 text-gray-300"
            >
              <div className="flex items-center">
                <Clock className="text-yellow-400 mr-2" size={20} />
                <span>300+ Events Completed</span>
              </div>
              <div className="flex items-center">
                <Users className="text-yellow-400 mr-2" size={20} />
                <span>300+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-2" size={20} />
                <span>4.3-Star Rated Service</span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {selectedService ? (
        <ServiceGallery service={selectedService} />
      ) : (
        <ServicesContent onBookService={handleBookService} />
      )}

      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Frequently Asked <span className="gold-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Got questions? We’re here to help you plan the perfect event.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-xl p-6 bg-black/80 backdrop-blur-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg md:text-xl text-white font-semibold font-playfair">
                    {faq.question}
                  </span>
                  <span className="text-yellow-400">
                    {openFAQ === index ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="mt-4 text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
