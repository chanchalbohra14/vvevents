import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [formRef, formInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [mapRef, mapInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9353750459",
      subtitle: "Mon-Fri 9AM-6PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: "chanchal@gmail.com",
      subtitle: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Ballari, Karnataka, India",
      subtitle: "Visit our showroom",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM",
      subtitle: "Sat-Sun: 10AM-4PM",
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
          backgroundImage:
            "url(https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=1920)",
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
            Get In <span className="gold-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed"
          >
            Ready to start planning your perfect event? We'd love to hear from
            you and help bring your celebration dreams to life with our premium
            services.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={formInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Send Us a <span className="gold-text">Message</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions or ready to start planning? Drop us a line and
              we'll get back to you promptly with personalized assistance.
            </p>
          </motion.div>

          <motion.form
            initial={{ y: 50, opacity: 0 }}
            animate={formInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="premium-card rounded-3xl p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-300 mb-3"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-300 mb-3"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-300 mb-3"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300 resize-none"
                placeholder="Tell us about your event or ask any questions..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="premium-button w-full flex items-center justify-center px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black" />
              ) : (
                <>
                  Send Message
                  <Send className="ml-3" size={24} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>
      {/* Contact Info */}
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
                <p className="text-gray-300 font-medium mb-2 text-lg">
                  {info.details}
                </p>
                <p className="text-gray-400">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        ref={mapRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={mapInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Visit Our <span className="gold-text">Showroom</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Come see our event setups and meet our team in person to discuss
              your celebration vision
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={mapInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-400/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d76.76356365820312!3d15.143166700000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77fd95d4be823%3A0x9c5cfa9c2c0b8b5a!2sBallari%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
