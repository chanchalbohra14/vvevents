import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { X, Star, Clock, Users, ArrowRight } from "lucide-react";
import { Plus, Minus } from "lucide-react";

const birthdayGalleryPricing = [
  { image: "/Hb/hbd1.jpg", price: "₹6500" },
  { image: "/Hb/hbd2.jpg", price: "₹8500" },
  { image: "/Hb/hbd3.jpg", price: "₹8500" },
  { image: "/Hb/hbd4.jpg", price: "₹12500" },
  { image: "/Hb/hbd5.jpg", price: "₹3500" },
  { image: "/Hb/hbd6.jpg", price: "₹2500" },
  { image: "/Hb/hbd7.jpg", price: "₹2000" },
  { image: "/Hb/hbd8.jpg", price: "₹1800" },
  { image: "/Hb/hbd9.jpg", price: "₹18500" },
  { image: "/Hb/hbd10.jpg", price: "₹4000" },
  { image: "/Hb/hbd11.jpg", price: "₹3000" },
  { image: "/Hb/hbd12.jpg", price: "₹2500" },
  { image: "/Hb/hbd13.jpg", price: "₹3000" },
  { image: "/Hb/hbd14.jpg", price: "₹3500" },
  { image: "/Hb/hbd15.jpg", price: "₹15500" },
  { image: "/Hb/hbd16.jpg", price: "₹20500" },
  { image: "/Hb/hbd17.jpg", price: "₹2000" },
  { image: "/Hb/hbd18.jpg", price: "₹2000" },
  { image: "/Hb/hbd19.jpg", price: "₹3500" },
  { image: "/Hb/hbd20.jpg", price: "₹6500" },
  { image: "/Hb/hbd21.jpg", price: "₹4500" },
  { image: "/Hb/hbd22.jpg", price: "₹15500" },
  { image: "/Hb/hbd23.jpg", price: "₹18500" },
  { image: "/Hb/hbd24.jpg", price: "₹2000" },
  { image: "/Hb/hbd25.jpg", price: "₹1700" },
  { image: "/Hb/hbd26.jpg", price: "₹1750" },
  { image: "/Hb/hbd27.jpg", price: "₹1800" },
  { image: "/Hb/hbd28.jpg", price: "₹1850" },
  { image: "/Hb/hbd29.jpg", price: "₹1900" },
  { image: "/Hb/hbd30.jpg", price: "₹1950" },
];
const babyshowerGalleryPricing = [
  { image: "/Bs/bs1.jpg", price: "₹500" },
  { image: "/Bs/bs2.jpg", price: "₹550" },
  { image: "/Bs/bs3.jpg", price: "₹600" },
  { image: "/Bs/bs4.jpg", price: "₹650" },
  { image: "/Bs/bs5.jpg", price: "₹700" },
  { image: "/Bs/bs6.jpg", price: "₹750" },
  { image: "/Bs/bs7.jpg", price: "₹800" },
  { image: "/Bs/bs8.jpg", price: "₹850" },
  { image: "/Bs/bs9.jpg", price: "₹900" },
  { image: "/Bs/bs10.jpg", price: "₹950" },
  { image: "/Bs/bs11.jpg", price: "₹1000" },
  { image: "/Bs/bs12.jpg", price: "₹1050" },
  { image: "/Bs/bs13.jpg", price: "₹1100" },
  { image: "/Bs/bs14.jpg", price: "₹1150" },
  { image: "/Bs/bs15.jpg", price: "₹1200" },
  { image: "/Bs/bs16.jpg", price: "₹1250" },
  { image: "/Bs/bs17.jpg", price: "₹1300" },
  { image: "/Bs/bs18.jpg", price: "₹1350" },
  { image: "/Bs/bs19.jpg", price: "₹1400" },
  { image: "/Bs/bs20.jpg", price: "₹1450" },
  { image: "/Bs/bs21.jpg", price: "₹1500" },
  { image: "/Bs/bs22.jpg", price: "₹1550" },
  { image: "/Bs/bs23.jpg", price: "₹1600" },
  { image: "/Bs/bs24.jpg", price: "₹1650" },
  { image: "/Bs/bs25.jpg", price: "₹1700" },
  { image: "/Bs/bs26.jpg", price: "₹1750" },
  { image: "/Bs/bs27.jpg", price: "₹1800" },
  { image: "/Bs/bs28.jpg", price: "₹1850" },
  { image: "/Bs/bs29.jpg", price: "₹1900" },
  { image: "/Bs/bs30.jpg", price: "₹1950" },
];

const anniversaryGalleryPricing = [
  { image: "/Av/av1.jpg", price: "₹500" },
  { image: "/Av/av2.jpg", price: "₹550" },
  { image: "/Av/av3.jpg", price: "₹600" },
  { image: "/Av/av4.jpg", price: "₹650" },
  { image: "/Av/av5.jpg", price: "₹700" },
  { image: "/Av/av6.jpg", price: "₹750" },
  { image: "/Av/av7.jpg", price: "₹800" },
  { image: "/Av/av8.jpg", price: "₹850" },
  { image: "/Av/av9.jpg", price: "₹900" },
  { image: "/Av/av10.jpg", price: "₹950" },
  { image: "/Av/av11.jpg", price: "₹1000" },
  { image: "/Av/av12.jpg", price: "₹1050" },
  { image: "/Av/av13.jpg", price: "₹1100" },
  { image: "/Av/av14.jpg", price: "₹1150" },
  { image: "/Av/av15.jpg", price: "₹1200" },
  { image: "/Av/av16.jpg", price: "₹1250" },
  { image: "/Av/av17.jpg", price: "₹1300" },
  { image: "/Av/av18.jpg", price: "₹1350" },
  { image: "/Av/av19.jpg", price: "₹1400" },
  { image: "/Av/av20.jpg", price: "₹1450" },
  { image: "/Av/av21.jpg", price: "₹1500" },
  { image: "/Av/av22.jpg", price: "₹1550" },
  { image: "/Av/av23.jpg", price: "₹1600" },
  { image: "/Av/av24.jpg", price: "₹1650" },
  { image: "/Av/av25.jpg", price: "₹1700" },
  { image: "/Av/av26.jpg", price: "₹1750" },
  { image: "/Av/av27.jpg", price: "₹1800" },
  { image: "/Av/av28.jpg", price: "₹1850" },
  { image: "/Av/av29.jpg", price: "₹1900" },
  { image: "/Av/av30.jpg", price: "₹1950" },
];

const namingGalleryPricing = [
  { image: "/Nc/nc1.jpg", price: "₹500" },
  { image: "/Nc/nc2.jpg", price: "₹550" },
  { image: "/Nc/nc3.jpg", price: "₹600" },
  { image: "/Nc/nc4.jpg", price: "₹650" },
  { image: "/Nc/nc5.jpg", price: "₹700" },
  { image: "/Nc/nc6.jpg", price: "₹750" },
  { image: "/Nc/nc7.jpg", price: "₹800" },
  { image: "/Nc/nc8.jpg", price: "₹850" },
  { image: "/Nc/nc9.jpg", price: "₹900" },
  { image: "/Nc/nc10.jpg", price: "₹950" },
  { image: "/Nc/nc11.jpg", price: "₹1000" },
  { image: "/Nc/nc12.jpg", price: "₹1050" },
  { image: "/Nc/nc13.jpg", price: "₹1100" },
  { image: "/Nc/nc14.jpg", price: "₹1150" },
  { image: "/Nc/nc15.jpg", price: "₹1200" },
  { image: "/Nc/nc16.jpg", price: "₹1250" },
  { image: "/Nc/nc17.jpg", price: "₹1300" },
  { image: "/Nc/nc18.jpg", price: "₹1350" },
  { image: "/Nc/nc19.jpg", price: "₹1400" },
  { image: "/Nc/nc20.jpg", price: "₹1450" },
  { image: "/Nc/nc21.jpg", price: "₹1500" },
  { image: "/Nc/nc22.jpg", price: "₹1550" },
  { image: "/Nc/nc23.jpg", price: "₹1600" },
  { image: "/Nc/nc24.jpg", price: "₹1650" },
  { image: "/Nc/nc25.jpg", price: "₹1700" },
  { image: "/Nc/nc26.jpg", price: "₹1750" },
  { image: "/Nc/nc27.jpg", price: "₹1800" },
  { image: "/Nc/nc28.jpg", price: "₹1850" },
  { image: "/Nc/nc29.jpg", price: "₹1900" },
  { image: "/Nc/nc30.jpg", price: "₹1950" },
];

const brideGalleryPricing = [
  { image: "/Br/br1.jpg", price: "₹500" },
  { image: "/Br/br2.jpg", price: "₹550" },
  { image: "/Br/br3.jpg", price: "₹600" },
  { image: "/Br/br4.jpg", price: "₹650" },
  { image: "/Br/br5.jpg", price: "₹700" },
  { image: "/Br/br6.jpg", price: "₹750" },
  { image: "/Br/br7.jpg", price: "₹800" },
  { image: "/Br/br8.jpg", price: "₹850" },
  { image: "/Br/br9.jpg", price: "₹900" },
  { image: "/Br/br10.jpg", price: "₹950" },
  { image: "/Br/br11.jpg", price: "₹1000" },
  { image: "/Br/br12.jpg", price: "₹1050" },
  { image: "/Br/br13.jpg", price: "₹1100" },
  { image: "/Br/br14.jpg", price: "₹1150" },
  { image: "/Br/br15.jpg", price: "₹1200" },
  { image: "/Br/br16.jpg", price: "₹1250" },
  { image: "/Br/br17.jpg", price: "₹1300" },
  { image: "/Br/br18.jpg", price: "₹1350" },
  { image: "/Br/br19.jpg", price: "₹1400" },
  { image: "/Br/br20.jpg", price: "₹1450" },
  { image: "/Br/br21.jpg", price: "₹1500" },
  { image: "/Br/br22.jpg", price: "₹1550" },
  { image: "/Br/br23.jpg", price: "₹1600" },
  { image: "/Br/br24.jpg", price: "₹1650" },
  { image: "/Br/br25.jpg", price: "₹1700" },
  { image: "/Br/br26.jpg", price: "₹1750" },
  { image: "/Br/br27.jpg", price: "₹1800" },
  { image: "/Br/br28.jpg", price: "₹1850" },
  { image: "/Br/br29.jpg", price: "₹1900" },
  { image: "/Br/br30.jpg", price: "₹1950" },
];

const officeGalleryPricing = [
  { image: "/Of/of1.jpg", price: "₹500" },
  { image: "/Of/of2.jpg", price: "₹550" },
  { image: "/Of/of3.jpg", price: "₹600" },
  { image: "/Of/of4.jpg", price: "₹650" },
  { image: "/Of/of5.jpg", price: "₹700" },
  { image: "/Of/of6.jpg", price: "₹750" },
  { image: "/Of/of7.jpg", price: "₹800" },
  { image: "/Of/of8.jpg", price: "₹850" },
  { image: "/Of/of9.jpg", price: "₹900" },
  { image: "/Of/of10.jpg", price: "₹950" },
  { image: "/Of/of11.jpg", price: "₹1000" },
  { image: "/Of/of12.jpg", price: "₹1050" },
  { image: "/Of/of13.jpg", price: "₹1100" },
  { image: "/Of/of14.jpg", price: "₹1150" },
  { image: "/Of/of15.jpg", price: "₹1200" },
  { image: "/Of/of16.jpg", price: "₹1250" },
  { image: "/Of/of17.jpg", price: "₹1300" },
  { image: "/Of/of18.jpg", price: "₹1350" },
  { image: "/Of/of19.jpg", price: "₹1400" },
  { image: "/Of/of20.jpg", price: "₹1450" },
  { image: "/Of/of21.jpg", price: "₹1500" },
  { image: "/Of/of22.jpg", price: "₹1550" },
  { image: "/Of/of23.jpg", price: "₹1600" },
  { image: "/Of/of24.jpg", price: "₹1650" },
  { image: "/Of/of25.jpg", price: "₹1700" },
  { image: "/Of/of26.jpg", price: "₹1750" },
  { image: "/Of/of27.jpg", price: "₹1800" },
  { image: "/Of/of28.jpg", price: "₹1850" },
  { image: "/Of/of29.jpg", price: "₹1900" },
  { image: "/Of/of30.jpg", price: "₹1950" },
];
const houseWarmingGalleryPricing = [
  { image: "/Hw/hw1.jpg", price: "₹500" },
  { image: "/Hw/hw2.jpg", price: "₹550" },
  { image: "/Hw/hw3.jpg", price: "₹600" },
  { image: "/Hw/hw4.jpg", price: "₹650" },
  { image: "/Hw/hw5.jpg", price: "₹700" },
  { image: "/Hw/hw6.jpg", price: "₹750" },
  { image: "/Hw/hw7.jpg", price: "₹800" },
  { image: "/Hw/hw8.jpg", price: "₹850" },
  { image: "/Hw/hw9.jpg", price: "₹900" },
  { image: "/Hw/hw10.jpg", price: "₹950" },
  { image: "/Hw/hw11.jpg", price: "₹1000" },
  { image: "/Hw/hw12.jpg", price: "₹1050" },
  { image: "/Hw/hw13.jpg", price: "₹1100" },
  { image: "/Hw/hw14.jpg", price: "₹1150" },
  { image: "/Hw/hw15.jpg", price: "₹1200" },
  { image: "/Hw/hw16.jpg", price: "₹1250" },
  { image: "/Hw/hw17.jpg", price: "₹1300" },
  { image: "/Hw/hw18.jpg", price: "₹1350" },
  { image: "/Hw/hw19.jpg", price: "₹1400" },
  { image: "/Hw/hw20.jpg", price: "₹1450" },
  { image: "/Hw/hw21.jpg", price: "₹1500" },
  { image: "/Hw/hw22.jpg", price: "₹1550" },
  { image: "/Hw/hw23.jpg", price: "₹1600" },
  { image: "/Hw/hw24.jpg", price: "₹1650" },
  { image: "/Hw/hw25.jpg", price: "₹1700" },
  { image: "/Hw/hw26.jpg", price: "₹1750" },
  { image: "/Hw/hw27.jpg", price: "₹1800" },
  { image: "/Hw/hw28.jpg", price: "₹1850" },
  { image: "/Hw/hw29.jpg", price: "₹1900" },
  { image: "/Hw/hw30.jpg", price: "₹1950" },
];
const graduationGalleryPricing = [
  { image: "/Gc/gc1.jpg", price: "₹500" },
  { image: "/Gc/gc2.jpg", price: "₹550" },
  { image: "/Gc/gc3.jpg", price: "₹600" },
  { image: "/Gc/gc4.jpg", price: "₹650" },
  { image: "/Gc/gc5.jpg", price: "₹700" },
  { image: "/Gc/gc6.jpg", price: "₹750" },
  { image: "/Gc/gc7.jpg", price: "₹800" },
  { image: "/Gc/gc8.jpg", price: "₹850" },
  { image: "/Gc/gc9.jpg", price: "₹900" },
  { image: "/Gc/gc10.jpg", price: "₹950" },
  { image: "/Gc/gc11.jpg", price: "₹1000" },
  { image: "/Gc/gc12.jpg", price: "₹1050" },
  { image: "/Gc/gc13.jpg", price: "₹1100" },
  { image: "/Gc/gc14.jpg", price: "₹1150" },
  { image: "/Gc/gc15.jpg", price: "₹1200" },
  { image: "/Gc/gc16.jpg", price: "₹1250" },
  { image: "/Gc/gc17.jpg", price: "₹1300" },
  { image: "/Gc/gc18.jpg", price: "₹1350" },
  { image: "/Gc/gc19.jpg", price: "₹1400" },
  { image: "/Gc/gc20.jpg", price: "₹1450" },
  { image: "/Gc/gc21.jpg", price: "₹1500" },
  { image: "/Gc/gc22.jpg", price: "₹1550" },
  { image: "/Gc/gc23.jpg", price: "₹1600" },
  { image: "/Gc/gc24.jpg", price: "₹1650" },
  { image: "/Gc/gc25.jpg", price: "₹1700" },
  { image: "/Gc/gc26.jpg", price: "₹1750" },
  { image: "/Gc/gc27.jpg", price: "₹1800" },
  { image: "/Gc/gc28.jpg", price: "₹1850" },
  { image: "/Gc/gc29.jpg", price: "₹1900" },
  { image: "/Gc/gc30.jpg", price: "₹1950" },
];
const retirementGalleryPricing = [
  { image: "/Rt/rt1.jpg", price: "₹500" },
  { image: "/Rt/rt2.jpg", price: "₹550" },
  { image: "/Rt/rt3.jpg", price: "₹600" },
  { image: "/Rt/rt4.jpg", price: "₹650" },
  { image: "/Rt/rt5.jpg", price: "₹700" },
  { image: "/Rt/rt6.jpg", price: "₹750" },
  { image: "/Rt/rt7.jpg", price: "₹800" },
  { image: "/Rt/rt8.jpg", price: "₹850" },
  { image: "/Rt/rt9.jpg", price: "₹900" },
  { image: "/Rt/rt10.jpg", price: "₹950" },
  { image: "/Rt/rt11.jpg", price: "₹1000" },
  { image: "/Rt/rt12.jpg", price: "₹1050" },
  { image: "/Rt/rt13.jpg", price: "₹1100" },
  { image: "/Rt/rt14.jpg", price: "₹1150" },
  { image: "/Rt/rt15.jpg", price: "₹1200" },
  { image: "/Rt/rt16.jpg", price: "₹1250" },
  { image: "/Rt/rt17.jpg", price: "₹1300" },
  { image: "/Rt/rt18.jpg", price: "₹1350" },
  { image: "/Rt/rt19.jpg", price: "₹1400" },
  { image: "/Rt/rt20.jpg", price: "₹1450" },
  { image: "/Rt/rt21.jpg", price: "₹1500" },
  { image: "/Rt/rt22.jpg", price: "₹1550" },
  { image: "/Rt/rt23.jpg", price: "₹1600" },
  { image: "/Rt/rt24.jpg", price: "₹1650" },
  { image: "/Rt/rt25.jpg", price: "₹1700" },
  { image: "/Rt/rt26.jpg", price: "₹1750" },
  { image: "/Rt/rt27.jpg", price: "₹1800" },
  { image: "/Rt/rt28.jpg", price: "₹1850" },
  { image: "/Rt/rt29.jpg", price: "₹1900" },
  { image: "/Rt/rt30.jpg", price: "₹1950" },
];

const services = [
  {
    id: 1,
    name: "Birthday Party",
    image: "/Hb/hbd8.jpg",
    description:
      "Celebrate another year of life with joy, laughter, and unforgettable memories.",
    galleryPricing: birthdayGalleryPricing,
  },
  {
    id: 2,
    name: "Baby Shower Event",
    image: "/Bs/bs1.jpg",
    description:
      "Welcome the newest family member with a beautiful and memorable celebration.",
    galleryPricing: babyshowerGalleryPricing,
  },
  {
    id: 3,
    name: "Anniversary Celebration",
    image:
      "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Honor your love story with an elegant celebration of your journey together.",
    galleryPricing: anniversaryGalleryPricing,
  },
  {
    id: 4,
    name: "Naming Ceremony",
    image:
      "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Celebrate the blessing of your child's name with a sacred and joyful ceremony.",
    galleryPricing: namingGalleryPricing,
  },
  {
    id: 5,
    name: "Bride-To-Be Party",
    image:
      "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Celebrate the bride-to-be with an unforgettable pre-wedding celebration.",
    galleryPricing: brideGalleryPricing,
  },
  {
    id: 6,
    name: "Office Inauguration",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Mark your business milestone with a professional and memorable inauguration.",
    galleryPricing: officeGalleryPricing,
  },
  {
    id: 7,
    name: "House Warming Ceremony",
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Bless your new home with a warm and welcoming celebration.",
    galleryPricing: houseWarmingGalleryPricing,
  },
  {
    id: 8,
    name: "Retirement Party",
    image:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Honor a lifetime of dedication with a memorable retirement celebration.",
    galleryPricing: retirementGalleryPricing,
  },
  {
    id: 9,
    name: "Graduation Celebration",
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Celebrate academic achievements with pride and joy.",
    galleryPricing: graduationGalleryPricing,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | undefined>(
    undefined
  );

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const navigate = useNavigate();

  const handleBookService = (serviceName, price, imageUrl) => {
    navigate("/contact", {
      state: {
        selectedService: serviceName,
        selectedPrice: price,
        selectedImage: imageUrl, // ✅ now passed correctly
      },
    });
  };

  const faqs = [
    {
      question: "How can I book a decoration service?",
      answer:
        "You can book directly through our website’s Contact or Booking page. Just fill out the form with your event details, and we’ll get back to you within 24 hours.",
    },
    {
      question: "Do you offer decoration services at home?",
      answer:
        "Yes, we provide home decoration services for various occasions like birthdays, anniversaries, baby showers, and more. Setup is done at your preferred location.",
    },
    {
      question: "Do I need to provide any materials for the decoration?",
      answer:
        "No. We bring everything required — including props, flowers, balloons, lights, and other decor essentials. If you want something custom added, let us know in advance.",
    },
    {
      question: "How do I contact vvevents for support?",
      answer:
        "You can reach out via phone at +91 9164619328 or email us at vvevents681@gmail.com. You can also message us through Instagram or the contact form on our site.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
            "url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920)",
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
            Our Premium <span className="gold-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
          >
            From intimate gatherings to grand celebrations, we specialize in
            creating unforgettable experiences for every milestone in your life
            with luxury and elegance.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-gray-300"
          >
            <div className="flex items-center">
              <Clock className="text-yellow-400 mr-2" size={20} />
              <span>300+ Events Completed</span>
            </div>
            <div className="flex items-center">
              <Users className="text-yellow-400 mr-2" size={20} />
              <span>300+ Happy Clients</span>
            </div>
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-2" size={20} />
              <span>4.3-Star Rated Service</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Explore Our <span className="gold-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Each service is meticulously crafted to exceed your expectations
              and create lasting memories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 50, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl premium-card hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3 font-playfair">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-400 font-semibold">
                      <span className="text-sm"> Book Now</span>
                      <ArrowRight
                        className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        size={14}
                      />
                    </div>
                    <div className="text-yellow-400 text-sm font-semibold">
                      {service.pricing}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 gold-gradient rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Star className="text-black" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="premium-card rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  loading="lazy"
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-3 bg-black/70 rounded-full text-white hover:bg-black/90 transition-colors border border-yellow-400/30 hover:scale-110 transition-transform duration-300"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair">
                    {selectedService.name}
                  </h2>
                  <div className="flex items-center gap-6 mt-4 text-gray-300"></div>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-semibold gold-text mb-6 font-playfair">
                  Choose Your Experience
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {selectedService.galleryPricing.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-black/80 rounded-xl overflow-hidden border border-yellow-400/20 flex flex-col"
                      onClick={() => setSelectedImageIdx(idx)}
                    >
                      <motion.img
                        src={item.image}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-40 object-cover cursor-pointer"
                        whileHover={{ scale: 1.08 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        }}
                      />
                      <div className="text-center text-yellow-400 text-sm font-medium py-2">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Detail Modal */}
      <AnimatePresence>
        {typeof selectedImageIdx === "number" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImageIdx(undefined)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-black rounded-2xl shadow-xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 w-full flex items-center justify-center bg-black cursor-pointer">
                <motion.img
                  src={selectedService.galleryPricing[selectedImageIdx].image}
                  alt={`Gallery ${selectedImageIdx + 1}`}
                  className="object-cover w-full h-80"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                />
              </div>
              <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4 font-playfair">
                    {selectedService.name}
                  </h4>
                  <p className="text-gray-300 mb-4">
                    {/* You can customize this content as needed */}
                    Experience this special moment with our premium service
                    option.
                  </p>
                  <div className="text-lg font-semibold gold-text mb-6">
                    {selectedService.galleryPricing[selectedImageIdx].price}
                  </div>
                </div>
                <button
                  className="premium-button w-full px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    handleBookService(
                      selectedService.name,
                      selectedService.galleryPricing[selectedImageIdx].price, // ✅ price
                      selectedService.galleryPricing[selectedImageIdx].image // ✅ image
                    );
                  }}
                >
                  Book Now
                </button>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-3 bg-black/70 rounded-full text-white hover:bg-black/90 transition-colors border border-yellow-400/30 hover:scale-110 transition-transform duration-300"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
              Frequently Asked <span className="gold-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Got questions? We’re here to help you plan the perfect event.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-xl p-6 bg-black/80 backdrop-blur-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg md:text-xl text-white font-semibold font-playfair">
                    {faq.question}
                  </span>
                  <span className="text-yellow-400">
                    {openFAQ === index ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </span>
                </button>

                {openFAQ === index && (
                  <div className="mt-4 text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
