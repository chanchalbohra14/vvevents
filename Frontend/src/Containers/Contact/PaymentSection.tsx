import React from "react";
import { motion } from "framer-motion";

const PaymentSection: React.FC = () => {
  return (
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
            src="QR CODE/qr.jpeg"
            alt="vvevent UPI QR Code"
            className="w-64 h-64 object-contain"
          />
        </motion.div>

        <p className="text-gray-400 mt-6 text-lg">
          UPI ID:{" "}
          <span className="text-yellow-300 font-semibold">9164619328@ybl</span>
          <br />
          After payment, mention the transaction ID in the message box or send
          confirmation via WhatsApp.
        </p>
      </div>
    </section>
  );
};

export default PaymentSection;
