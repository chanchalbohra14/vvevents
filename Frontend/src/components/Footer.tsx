import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Heart,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3 md:space-x-4 mb-3 sm:mb-4 md:mb-6">
              <img
                src="/LOGO/logo.jpg"
                alt="Village Vacation"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-2 border-yellow-400"
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold gold-text font-playfair">
                vvevents
              </span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base md:text-lg">
              Creating unforgettable moments for your special occasions. From
              intimate gatherings to grand celebrations, we bring your vision to
              life with elegance, style, and premium attention to detail.
            </p>
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 md:space-x-6">
              <a
                href="https://www.facebook.com/share/19jJH8YcVL/"
                target="blank"
                className="text-gray-400 hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-yellow-400/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/vveventorganizers?igsh=MWRtM2N0Mjcwdnd1ZA=="
                target="blank"
                className="text-gray-400 hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-yellow-400/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/@vvevents-i2w?si=zX8yAXHa-svOPAqe"
                target="blank"
                className="text-gray-400 hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-yellow-400/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold gold-text mb-3 sm:mb-4 md:mb-6 font-playfair">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base md:text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base md:text-lg"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base md:text-lg"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base md:text-lg"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold gold-text mb-3 sm:mb-4 md:mb-6 font-playfair">
              Contact Info
            </h3>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <div className="flex items-start justify-center md:justify-start space-x-2 sm:space-x-3 md:space-x-4">
                <Phone
                  size={16}
                  className="text-yellow-400 mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+919164619328"
                  className="text-gray-300 text-sm sm:text-base md:text-lg break-all hover:text-yellow-400 transition-colors duration-200"
                >
                  +91 9164619328
                </a>
              </div>

              <div className="flex items-start justify-center md:justify-start space-x-2 sm:space-x-3 md:space-x-4">
                <Mail
                  size={16}
                  className="text-yellow-400 mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:vvevents681@gmail.com"
                  className="text-gray-300 text-sm sm:text-base md:text-lg break-all hover:text-yellow-400 transition-colors duration-200"
                >
                  vvevents681@gmail.com
                </a>
              </div>

              <div className="flex items-start justify-center md:justify-start space-x-2 sm:space-x-3 md:space-x-4">
                <MapPin
                  size={16}
                  className="text-yellow-400 mt-1 flex-shrink-0"
                />
                <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                  Ballari, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg flex flex-col sm:flex-row items-center justify-center">
            <span>© 2025 vvevent.com - All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
