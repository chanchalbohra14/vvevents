import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Send,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  XCircle,
  X,
  Maximize2,
  Download,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const location = useLocation();
  const selectedServiceFromState = location.state?.selectedService || "";
  const selectedPriceFromState = location.state?.selectedPrice || "";
  const selectedImageFromState = location.state?.selectedImage || "";

  const [showSelectedService, setShowSelectedService] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFullImageModal, setShowFullImageModal] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

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

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [formRef, formInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Sync state from navigation
  useEffect(() => {
    if (selectedServiceFromState || selectedPriceFromState) {
      setFormData((prev) => ({
        ...prev,
        serviceType: selectedServiceFromState,
        amount: selectedPriceFromState,
      }));
    }
  }, [selectedServiceFromState, selectedPriceFromState]);

  // Handle image URL logic
  useEffect(() => {
    if (selectedImageFromState) {
      const baseURL =
        import.meta.env.MODE === "development"
          ? "http://10.199.20.220:5173"
          : "https://www.vvevent.in";

      setFormData((prev) => ({
        ...prev,
        image: `${baseURL}${selectedImageFromState}`,
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
    "Other",
  ];

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Main Notification to Business
      await emailjs.send(
        "service_va8hz7f",
        "template_w9ozm7n",
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
        "wr_OvmqmdjHbctepn"
      );

      // Confirmation to User
      await emailjs.send(
        "service_va8hz7f",
        "template_krecbyj",
        {
          from_name: formData.name,
          user_email: formData.email,
          serviceType: formData.serviceType,
          eventDate: formData.eventDate,
        },
        "wr_OvmqmdjHbctepn"
      );

      toast.success("Booking request sent successfully!");
      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
      image: "",
    });
    setShowSelectedService(false);
    setIsSubmitted(false);
    window.history.replaceState({}, document.title);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9164619328",
      subtitle: "Mon-Fri 9AM-6PM",
      link: "tel:+919164619328",
    },
    {
      icon: Mail,
      title: "Email",
      details: "vvevents681@gmail.com",
      subtitle: "Replies within 24h",
      link: "mailto:vvevents681@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Gandhi Nagar",
      subtitle: "Ballari, Karnataka",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "9AM - 6PM",
      subtitle: "Sat-Sun: 10AM-4PM",
      link: "#",
    },
  ];

  const handleDownloadImage = async () => {
    try {
      const imageUrl = formData.image || selectedImageFromState;
      if (!imageUrl) return;

      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `vv-event-theme-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("Image downloaded successfully!");
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to download image");
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full text-center"
        >
          <div className="w-24 h-24 gold-gradient rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
            <CheckCircle size={48} className="text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-white">
            Booking <span className="gold-text">Confirmed!</span>
          </h1>
          <p className="text-zinc-400 mb-8">
            Our team will reach out to you within 24 hours to finalize your
            celebration details.
          </p>
          <button
            onClick={resetForm}
            className="premium-button px-8 py-3 rounded-full font-bold"
          >
            Plan Another Event
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black text-white"
    >
      {/* Full Image Modal */}
      <AnimatePresence>
        {showFullImageModal && (formData.image || selectedImageFromState) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setShowFullImageModal(false)}
          >
            <button
              onClick={() => setShowFullImageModal(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all"
            >
              <X size={28} className="text-white" />
            </button>

            <div className="absolute top-4 left-4 z-50 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownloadImage();
                }}
                className="p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all group"
                title="Download Image"
              >
                <Download
                  size={24}
                  className="text-white group-hover:text-yellow-500"
                />
              </button>
            </div>

            <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
              <div className="relative max-h-[90vh] max-w-full">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={formData.image || selectedImageFromState}
                  alt="Selected Theme - Full View"
                  className={`max-h-[90vh] max-w-full object-contain transition-opacity duration-300 ${
                    imageLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => setImageLoading(false)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full text-sm">
              <span className="text-yellow-500 font-semibold mr-4">
                {formData.serviceType}
              </span>
              <span className="text-white">{formData.amount}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-4"
      >
        <div className="absolute inset-0 bg-[url('/Top/c.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <div className="relative z-10 max-w-6xl w-full">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            className="text-5xl md:text-7xl font-bold font-playfair mb-8"
          >
            Book Your <span className="gold-text">Event</span>
          </motion.h1>

          <AnimatePresence>
            {showSelectedService &&
              (formData.image || selectedImageFromState) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group mb-8 inline-block"
                >
                  <div className="absolute -inset-4 bg-yellow-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>

                  <div className="relative bg-zinc-900 p-4 rounded-3xl border border-zinc-800 shadow-2xl max-w-2xl mx-auto">
                    {/* Remove Selection Button */}
                    {/* <button
                      onClick={() => setShowSelectedService(false)}
                      className="absolute -top-3 -right-3 z-20 bg-black text-yellow-500 rounded-full hover:text-white transition-colors p-1"
                    >
                      <XCircle size={24} />
                    </button> */}

                    {/* Expand Button */}
                    <button
                      onClick={() => setShowFullImageModal(true)}
                      className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 transition-all group"
                      title="View full size"
                    >
                      <Maximize2
                        size={20}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </button>

                    <div className="overflow-hidden rounded-xl bg-black">
                      <img
                        src={formData.image || selectedImageFromState}
                        alt="Selected Theme"
                        className="w-full h-auto max-h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                        onClick={() => setShowFullImageModal(true)}
                      />
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-center px-2 gap-2">
                      <div className="text-left">
                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block">
                          Selected Theme
                        </span>
                        <span className="text-yellow-500 font-bold text-lg">
                          {formData.serviceType}
                        </span>
                      </div>
                      <div className="text-center xs:text-center sm:text-right">
                        {/* <div className="text-right xs-text-center text-center xs:text-center sm:text-right"> */}
                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block">
                          Package Price
                        </span>
                        <span className="text-yellow-500 font-bold text-lg">
                          {formData.amount}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-500 mt-2">
                      Click the image or expand button to view full size
                    </p>
                  </div>
                </motion.div>
              )}
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto italic"
          >
            "Ready to bring your celebration dreams to life? Fill out the form
            below to receive a personalized quote."
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-20 px-4 md:px-8 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Let's Plan Your <span className="gold-text">Celebration</span>
            </h2>
            <p className="text-zinc-500">
              Premium event planning tailored to your vision.
            </p>
          </motion.div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-900/50 p-6 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl"
          >
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400">
                Full Name *
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="premium-input w-full p-4 rounded-xl bg-black/50 border border-zinc-800"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="premium-input w-full p-4 rounded-xl bg-black/50 border border-zinc-800"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="premium-input w-full p-4 rounded-xl bg-black/50 border border-zinc-800"
                placeholder="+91 ..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400">
                Event Date *
              </label>
              <input
                type="date"
                name="eventDate"
                min={today}
                max={maxDateStr}
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="premium-input w-full p-4 rounded-xl bg-black/50 border border-zinc-800 text-zinc-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400">
                Service Type *
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="premium-input w-full p-4 rounded-xl bg-black/50 border border-zinc-800 text-zinc-300"
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400">
                Package Amount
              </label>
              <input
                name="amount"
                value={formData.amount}
                readOnly
                className="premium-input w-full p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 text-yellow-500 font-bold"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-zinc-400">
                Number of Guests *
              </label>
              <input
                type="number"
                name="guestCount"
                min="1"
                value={formData.guestCount}
                onChange={handleChange}
                required
                className="premium-input w-full p-4 rounded-xl bg-black/50 border border-zinc-800"
                placeholder="Enter number of guests"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-zinc-400">
                Message / Special Requirements
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="premium-input w-full p-4 rounded-xl bg-black/50 border border-zinc-800"
                placeholder="Tell us more about your event..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 premium-button w-full py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-black border-t-transparent animate-spin rounded-full" />
              ) : (
                <>
                  <Send size={20} /> Submit Request
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.link}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center group"
            >
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <info.icon className="text-black" size={28} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">
                {info.title}
              </h3>
              <p className="text-zinc-300 text-sm mb-1">{info.details}</p>
              <p className="text-zinc-500 text-xs">{info.subtitle}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-20 bg-gradient-to-t from-zinc-950 to-black text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6 text-white">
          Secure Your <span className="gold-text">Booking</span>
        </h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
          Scan the UPI code to confirm your date instantly. Please mention the
          transaction ID in your message.
        </p>
        <div className="inline-block p-4 bg-white rounded-3xl shadow-[0_0_50px_rgba(234,179,8,0.2)]">
          <img
            src="QR CODE/qr.jpeg"
            alt="Payment QR"
            className="w-64 h-64 object-contain"
          />
        </div>
        <p className="mt-6 text-zinc-500 font-mono">
          UPI ID: <span className="text-yellow-500">9164619328@ybl</span>
        </p>
      </section>

      <ToastContainer theme="dark" position="bottom-right" />
    </motion.div>
  );
};

export default Contact;
