import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MobileBottomNav from "./components/MobileBottomNav";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <div className="hidden md:block">
          <Navbar />
        </div>
        {/* <Navbar /> */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<Services />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        {/* 👇 Bottom Nav for Mobile */}
        <MobileBottomNav />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
