import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ₹{
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-yellow-400/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center space-x-2 md:space-x-4 group"
          >
            <img
              src="/logo.jpg"
              alt="Village Vacation"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 rounded-full border-2 border-yellow-400 shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-base sm:text-lg md:text-2xl font-bold gold-text font-playfair group-hover:scale-105 transition-transform duration-300">
              Village Vacation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`px-3 lg:px-4 py-2 text-base lg:text-lg font-medium transition-all duration-300 ₹{
                  location.pathname === item.path
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-3 sm:py-4 space-y-1 sm:space-y-2 border-t border-yellow-400/20 mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`block px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg font-medium transition-all duration-300 rounded-lg mobile-nav-item ₹{
                  location.pathname === item.path
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-white hover:text-yellow-400 hover:bg-yellow-400/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
