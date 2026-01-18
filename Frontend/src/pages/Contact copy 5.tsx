import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Components
import FullImageModal from "../Containers/Contact/FullImageModal";
import HeroSection from "../Containers/Contact/HeroSection";
import ContactForm from "../Containers/Contact/ContactForm";
import ContactCards from "../Containers/Contact/ContactCards";
import PaymentSection from "../Containers/Contact/PaymentSection";
import SuccessState from "../Containers/Contact/SuccessState";

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

  if (isSubmitted) {
    return <SuccessState onReset={resetForm} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-black"
    >
      {/* Full Image Modal */}
      <FullImageModal
        isOpen={showFullImageModal}
        onClose={() => setShowFullImageModal(false)}
        imageUrl={formData.image || selectedImageFromState}
        serviceType={formData.serviceType}
        price={formData.amount}
        onImageLoad={() => setImageLoading(false)}
        isLoading={imageLoading}
      />

      {/* Hero Section */}
      <HeroSection
        showSelectedService={showSelectedService}
        imageUrl={formData.image || selectedImageFromState}
        serviceType={formData.serviceType}
        price={formData.amount}
        onViewFullSize={() => setShowFullImageModal(true)}
      />

      {/* Booking Form */}
      <ContactForm
        formData={formData}
        services={services}
        today={today}
        maxDate={maxDateStr}
        isSubmitting={isSubmitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {/* Contact Info */}
      <ContactCards />

      {/* Payment Section */}
      <PaymentSection />

      <ToastContainer position="top-center" theme="dark" />
    </motion.div>
  );
};

export default Contact;
