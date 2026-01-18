import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Send } from "lucide-react";

interface ContactFormProps {
  //   formData: {
  //     name: string;
  //     email: string;
  //     phone: string;
  //     serviceType: string;
  //     amount: string;
  //     eventDate: string;
  //     guestCount: string;
  //     message: string;
  //   };
  formData: {
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    amount: string;
    eventDate: string;
    guestCount: string;
    address: string;
    landmark: string;
    message: string;
  };

  services: string[];
  today: string;
  maxDate: string;
  isSubmitting: boolean;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  services,
  today,
  maxDate,
  isSubmitting,
  onChange,
  onSubmit,
}) => {
  const [formRef, formInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
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
            <span className="gold-text">Celebration</span> your special
            <span className="gold-text"> Moments</span>
          </h2>
          {/* <p className="text-xl text-gray-300 leading-relaxed">
            Tell us about your vision and we'll make it a reality with our
            premium event planning services
          </p> */}
        </motion.div>

        <motion.form
          initial={{ y: 50, opacity: 0 }}
          animate={formInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={onSubmit}
          className="premium-card rounded-3xl p-10 shadow-2xl"
        >
          {/* Personal Information */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold gold-text mb-8 font-playfair">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-medium text-gray-300 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  required
                  className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-300 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-lg font-medium text-gray-300 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  required
                  className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-lg font-medium text-gray-300 mb-3">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={onChange}
                  required
                  rows={3}
                  className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Enter event address"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-lg font-medium text-gray-300 mb-3">
                  Landmark
                </label>
                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={onChange}
                  className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Nearby landmark (optional)"
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
                <label className="block text-lg font-medium text-gray-300 mb-3">
                  Service Type *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={onChange}
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
                <label className="block text-lg font-medium text-gray-300 mb-3">
                  Package Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  readOnly
                  className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Amount"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-300 mb-3">
                  Preferred Event Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={onChange}
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
              {/* <div>
                <label className="block text-lg font-medium text-gray-300 mb-3">
                  Expected Guest Count *
                </label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={onChange}
                  required
                  min="1"
                  className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Number of guests"
                />
              </div> */}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold gold-text mb-8 font-playfair">
              Additional Information
            </h3>
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-3">
                Tell us about your vision
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={onChange}
                rows={6}
                className="premium-input w-full px-6 py-4 rounded-xl text-white placeholder-gray-400 transition-all duration-300 resize-none"
                placeholder="Any other details that will help us make the perfect celebration for you..."
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
                Submit
                <Send className="ml-3" size={24} />
              </>
            )}
          </button>
          <p className="text-gray-400 text-center mt-6 text-lg">
            Want to pre-pay or block a date? Scan the payment QR code below
            before submitting the form.
          </p>
          <p className="text-gray-400 text-center mt-6 text-lg">
            * Required fields. We'll contact you within 24 hours to discuss your
            event details.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
