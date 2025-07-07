import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { Calendar, Send, CheckCircle } from "lucide-react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const location = useLocation();
  const selectedServiceFromState = location.state?.selectedService || "";
  const selectedPriceFromState = location.state?.selectedPrice || "";
  const selectedImageFromState = location.state?.selectedImage || "";
  const [showSelectedService, setShowSelectedService] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    amount: "",
    eventDate: "",
    guestCount: "",
    message: "",
    image: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [formRef, formInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (selectedServiceFromState) {
      setFormData((prev) => ({
        ...prev,
        serviceType: selectedServiceFromState,
      }));
    }
    if (selectedPriceFromState) {
      setFormData((prev) => ({
        ...prev,
        amount: selectedPriceFromState,
      }));
    }
    if (selectedImageFromState) {
      setFormData((prev) => ({
        ...prev,
        image: selectedImageFromState, // <-- save image
      }));
    }
  }, [
    selectedServiceFromState,
    selectedPriceFromState,
    selectedImageFromState,
  ]);

  const services = [
    "Birthday Party",
    "Baby Shower Event",
    "Anniversary Celebration",
    "Naming Ceremony",
    "Bride-To-Be Party",
    "Office Inauguration",
    "House Warming Ceremony",
    "Retirement Party",
    "Graduation Celebration",
    "Other (Please specify in message)",
  ];

  // const packages = [
  //   "Essential Package (₹500 - ₹1,000)",
  //   "Premium Package (₹1,000 - ₹2,500)",
  //   "Luxury Package (₹2,500+)",
  //   "Custom Package (Please specify in message)",
  // ];

  // const budgetRanges = [
  //   "Under ₹1,000",
  //   "₹1,000 - ₹2,500",
  //   "₹2,500 - ₹5,000",
  //   "₹5,000 - ₹10,000",
  //   "₹10,000 - ₹25,000",
  //   "₹25,000+",
  //   "I need help determining budget",
  // ];

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Get date 1 year from now
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  const maxDate = oneYearFromNow.toISOString().split("T")[0];

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission and email sending
  //   await new Promise((resolve) => setTimeout(resolve, 3000));

  //   setIsSubmitted(true);
  //   setIsSubmitting(false);
  // };
  console.log("Sending data:", {
    name: formData.name,
    email: formData.email,
    image_url: formData.image,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_va8hz7f", // Your EmailJS service ID
        "template_w9ozm7n", // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          amount: formData.amount,
          eventDate: formData.eventDate,
          guestCount: formData.guestCount,
          message: formData.message,
          image_url: formData.image,
        },
        "wr_OvmqmdjHbctepn" // Your EmailJS public key
      );

      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        amount: "",
        eventDate: "",
        guestCount: "",
        message: "",
        image: "",
      });
      setShowSelectedService(false);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      amount: "",
      eventDate: "",
      guestCount: "",
      message: "",
      image: "", // also reset the image
    });

    // Clear URL state
    window.history.replaceState({}, document.title); // removes location.state
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-32 h-32 gold-gradient rounded-full mb-12"
          >
            <CheckCircle size={64} className="text-black" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
            Booking <span className="gold-text">Confirmed!</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Thank you for choosing Village Vacation! We've received your booking
            request and will contact you within 24 hours to discuss the details
            of your special event.
          </p>
          <div className="premium-card rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-semibold gold-text mb-6 font-playfair">
              What happens next?
            </h3>
            <ul className="text-left text-gray-300 space-y-4 text-lg">
              <li className="flex items-start">
                <span className="gold-text mr-3">•</span>
                You'll receive a confirmation email shortly
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-3">•</span>
                Our team will review your requirements
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-3">•</span>
                We'll schedule a consultation call within 24 hours
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-3">•</span>
                We'll provide a detailed proposal and timeline
              </li>
            </ul>
          </div>
          <button
            onClick={resetForm}
            className="premium-button inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Book Another Event
          </button>
        </div>
      </motion.div>
    );
  }
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-black"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1920)",
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
            Book Your <span className="gold-text">Event</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
          >
            Ready to start planning your perfect event? We'd love to hear from
            you and help bring your celebration dreams to life with our premium
            services.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {selectedServiceFromState && showSelectedService && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={heroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block gold-gradient text-black px-8 py-4 rounded-full font-semibold text-lg"
              >
                Selected Service: {selectedServiceFromState}
              </motion.div>
            )}
            {/* {selectedPackageFromState && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={heroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-block bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 px-8 py-4 rounded-full font-semibold text-lg"
              >
                Selected Package: {selectedPackageFromState}
              </motion.div>
            )} */}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section
        ref={formRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={formInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Let's Plan Your <span className="gold-text">Celebration</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Tell us about your vision and we'll make it a reality with our
              premium event planning services
            </p>
          </motion.div>

          <motion.form
            initial={{ y: 50, opacity: 0 }}
            animate={formInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="premium-card rounded-3xl p-10 shadow-2xl"
          >
            {/* Personal Information */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold gold-text mb-8 font-playfair">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="md:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-300 mb-3"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold gold-text mb-8 font-playfair">
                Event Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-lg font-medium text-gray-300 mb-3"
                  >
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="premium-input w-full px-6 py-4 rounded-xl text-white transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-gray-800"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="amount"
                    className="block text-lg font-medium text-gray-300 mb-3"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    readOnly
                    className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Amount"
                  />
                </div>
                {/* <div>
                  
                  <label
                    htmlFor="selectedPackage"
                    className="block text-lg font-medium text-gray-300 mb-3"
                  >
                    Select Package
                  </label>
                  <select
                    id="selectedPackage"
                    name="selectedPackage"
                    value={formData.selectedPackage}
                    onChange={handleChange}
                    className="premium-input w-full px-6 py-4 rounded-xl text-white transition-all duration-300"
                  >
                    <option value="">Select a package</option>
                    {packages.map((pkg) => (
                      <option key={pkg} value={pkg} className="bg-gray-800">
                        {pkg}
                      </option>
                    ))}
                  </select>
                </div> */}
                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-lg font-medium text-gray-300 mb-3"
                  >
                    Preferred Event Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      min={today}
                      max={maxDate}
                      className="premium-input w-full px-6 py-4 pr-12 rounded-xl text-white transition-all duration-300 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-3 [&::-webkit-calendar-picker-indicator]:w-6 [&::-webkit-calendar-picker-indicator]:h-6 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                    />
                    <Calendar
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-400 pointer-events-none"
                      size={24}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="guestCount"
                    className="block text-lg font-medium text-gray-300 mb-3"
                  >
                    Expected Guest Count
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    min="1"
                    className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Number of guests"
                  />
                </div>

                {/* <div className="md:col-span-2">
                  <label
                    htmlFor="budget"
                    className="block text-lg font-medium text-gray-300 mb-3"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="premium-input w-full px-6 py-4 rounded-xl text-white transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-gray-800">
                        {range}
                      </option>
                    ))}
                  </select>
                </div> */}
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold gold-text mb-8 font-playfair">
                Additional Information
              </h3>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-300 mb-3"
                >
                  Tell us about your vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Describe your event vision, special requirements, themes, or any other details that will help us create the perfect celebration for you..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="premium-button w-full flex items-center justify-center px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black" />
              ) : (
                <>
                  Submit Booking Request
                  <Send className="ml-3" size={24} />
                </>
              )}
            </button>

            <p className="text-gray-400 text-center mt-6 text-lg">
              * Required fields. We'll contact you within 24 hours to discuss
              your event details.
            </p>
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
      <ToastContainer position="top-right" autoClose={3000} />
    </motion.div>
  );
};

export default Contact;
