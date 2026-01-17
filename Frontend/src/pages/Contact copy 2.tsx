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
  }, [selectedServiceFromState, selectedPriceFromState]);

  useEffect(() => {
    if (selectedImageFromState) {
      const baseURL =
        import.meta.env.MODE === "development"
          ? "http://10.199.20.220:5173"
          : "https://www.vvevent.in";

      const fullImageURL = `${baseURL}${selectedImageFromState}`;
      console.log("📸 Final image URL for email:", fullImageURL);

      setFormData((prev) => ({
        ...prev,
        image: fullImageURL,
      }));
    }
  }, [selectedImageFromState]);

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   console.log("Image URL sent to EmailJS:", formData.image);
  //   console.log("Location State:", location.state);

  //   try {
  //     await emailjs.send(
  //       "service_va8hz7f", // Your EmailJS service ID
  //       "template_w9ozm7n", // Your EmailJS template ID
  //       {
  //         from_name: formData.name,
  //         from_email: formData.email,
  //         phone: formData.phone,
  //         serviceType: formData.serviceType,
  //         amount: formData.amount,
  //         eventDate: formData.eventDate,
  //         guestCount: formData.guestCount,
  //         message: formData.message,
  //         image_url: formData.image,
  //       },
  //       "wr_OvmqmdjHbctepn" // Your EmailJS public key
  //     );
  //     // console.log(formData.image);

  //     // Send confirmation to user
  //     await emailjs.send(
  //       "service_va8hz7f", // Service ID
  //       "template_krecbyj", // Template ID
  //       {
  //         from_name: formData.name, // ✅ Must be passed like this
  //         user_email: formData.email, // Use `user_email` if your template uses that
  //         serviceType: formData.serviceType,
  //         eventDate: formData.eventDate,
  //       },
  //       "wr_OvmqmdjHbctepn" // Public key
  //     );

  //     toast.success("Thank you for your message! We'll get back to you soon.");
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       serviceType: "",
  //       amount: "",
  //       eventDate: "",
  //       guestCount: "",
  //       message: "",
  //       image: "",
  //     });
  //     setShowSelectedService(false);
  //   } catch (error) {
  //     console.error("EmailJS error:", error);
  //     toast.error("Something went wrong. Please try again later.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Image URL sent to EmailJS:", formData.image);
    console.log("Location State:", location.state);

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
      // console.log(formData.image);

      // Send confirmation to user
      await emailjs.send(
        "service_va8hz7f", // Service ID
        "template_krecbyj", // Template ID
        {
          from_name: formData.name, // ✅ Must be passed like this
          user_email: formData.email, // Use `user_email` if your template uses that
          serviceType: formData.serviceType,
          eventDate: formData.eventDate,
        },
        "wr_OvmqmdjHbctepn" // Public key
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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
            Thank you for choosing vvevent! We've received your booking request
            and will contact you within 24 hours to discuss the details of your
            special event.
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
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url(/Top/c.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/95" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold mb-6 font-playfair text-white"
          >
            Book Your <span className="gold-text">Event</span>
          </motion.h1>

          <div className="flex flex-col items-center gap-6 mt-8">
            {/* Selected Service Tag */}
            {selectedServiceFromState && showSelectedService && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="gold-gradient text-black px-6 py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest shadow-lg"
              >
                {selectedServiceFromState}
              </motion.div>
            )}

            {/* FIXED SIZE IMAGE CONTAINER */}
            {showSelectedService &&
              (formData.image || selectedImageFromState) && (
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative group w-full flex justify-center"
                >
                  {/* Decorative Glow */}
                  <div className="absolute -inset-1 bg-yellow-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                  <div className="relative bg-zinc-900 p-2 rounded-2xl border border-zinc-800 shadow-2xl">
                    <div className="overflow-hidden rounded-xl bg-black">
                      <img
                        src={formData.image || selectedImageFromState}
                        alt="Selected Theme"
                        className="
                  /* Aspect Ratio matched to your Gallery [4/5] */
                  aspect-[4/5]
                  /* Mobile: Strictly fixed width to prevent overflow */
                  w-[260px] 
                  /* Desktop: Larger fixed width */
                  md:w-[320px] 
                  object-cover 
                  transition-transform 
                  duration-700 
                  group-hover:scale-105
                "
                      />
                    </div>

                    {/* Price Badge Overlay */}
                    {formData.amount && (
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-yellow-500/50">
                        <span className="text-yellow-500 font-bold text-sm">
                          {formData.amount}
                        </span>
                      </div>
                    )}

                    <div className="mt-2 py-1">
                      <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                        Selected Theme
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed italic"
            >
              "Ready to bring your celebration dreams to life? Fill out the form
              below to receive a personalized quote for your premium event."
            </motion.p>
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
                    onChange={handleChange}
                    value={formData.amount}
                    readOnly={!!selectedPriceFromState}
                    required
                    className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Amount"
                  />
                </div>

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
              Want to pre-pay or block a date? Scan the payment QR code below
              before submitting the form.
            </p>

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
      {/* Payment QR Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white"
          >
            Secure Your Booking
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10"
          >
            Scan the UPI QR code below to make your payment and confirm your
            booking.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-2xl"
          >
            <img
              src="QR CODE/qr.jpeg" // 🔁 Replace with your actual image path
              alt="vvevent UPI QR Code"
              className="w-64 h-64 object-contain"
            />
          </motion.div>

          <p className="text-gray-400 mt-6 text-lg">
            UPI ID:{" "}
            <span className="text-yellow-300 font-semibold">
              9164619328@ybl
            </span>
            <br />
            After payment, mention the transaction ID in the message box or send
            confirmation via WhatsApp.
          </p>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={3000} />
    </motion.div>
  );
};

export default Contact;
