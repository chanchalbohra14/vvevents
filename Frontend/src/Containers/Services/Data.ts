// src/data/servicesData.ts

// Helper function to create a URL-friendly slug
export const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

// Sub-galleries with pricing
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
  // { image: "/Hb/hbd25.jpg", price: "₹1700" },
  // { image: "/Hb/hbd26.jpg", price: "₹1750" },
  // { image: "/Hb/hbd27.jpg", price: "₹1800" },
  // { image: "/Hb/hbd28.jpg", price: "₹1850" },
  // { image: "/Hb/hbd29.jpg", price: "₹1900" },
  // { image: "/Hb/hbd30.jpg", price: "₹1950" },
  // ... rest of the birthday images
];

const babyshowerGalleryPricing = [
  { image: "/Bs/bs1.jpg", price: "₹15000" },
  { image: "/Bs/bs2.jpg", price: "₹18000" },
  { image: "/Bs/bs3.jpg", price: "₹7000" },
  { image: "/Bs/bs4.jpg", price: "₹8000" },
  { image: "/Bs/bs5.jpg", price: "₹15000" },
  { image: "/Bs/bs6.jpg", price: "₹25000" },
  { image: "/Bs/bs7.jpg", price: "₹6000" },
  { image: "/Bs/bs8.jpg", price: "₹5000" },
  { image: "/Bs/bs9.jpg", price: "₹3500" },
  { image: "/Bs/bs10.jpg", price: "₹4500" },
  { image: "/Bs/bs11.jpg", price: "₹8500" },
  { image: "/Bs/bs12.jpg", price: "₹10000" },
  { image: "/Bs/bs13.jpg", price: "₹8500" },
  // { image: "/Bs/bs14.jpg", price: "₹1150" },
  // { image: "/Bs/bs15.jpg", price: "₹1200" },
  // { image: "/Bs/bs16.jpg", price: "₹1250" },
  // { image: "/Bs/bs17.jpg", price: "₹1300" },
  // { image: "/Bs/bs18.jpg", price: "₹1350" },
  // { image: "/Bs/bs19.jpg", price: "₹1400" },
  // { image: "/Bs/bs20.jpg", price: "₹1450" },
  // { image: "/Bs/bs21.jpg", price: "₹1500" },
  // { image: "/Bs/bs22.jpg", price: "₹1550" },
  // { image: "/Bs/bs23.jpg", price: "₹1600" },
  // { image: "/Bs/bs24.jpg", price: "₹1650" },
  // { image: "/Bs/bs25.jpg", price: "₹1700" },
  // { image: "/Bs/bs26.jpg", price: "₹1750" },
  // { image: "/Bs/bs27.jpg", price: "₹1800" },
  // { image: "/Bs/bs28.jpg", price: "₹1850" },
  // { image: "/Bs/bs29.jpg", price: "₹1900" },
  // { image: "/Bs/bs30.jpg", price: "₹1950" },
  // ... rest of the baby shower images
];

const anniversaryGalleryPricing = [
  { image: "/WA/WA1.jpg", price: "₹2500" },
  { image: "/WA/WA2.jpg", price: "₹2500" },
  { image: "/WA/WA3.jpg", price: "₹3000" },
  { image: "/WA/WA4.jpg", price: "₹3500" },
  { image: "/WA/WA5.jpg", price: "₹2500" },
  { image: "/WA/WA6.jpg", price: "₹5000" },
  { image: "/WA/WA7.jpg", price: "₹5500" },
  { image: "/WA/WA8.jpg", price: "₹3500" },
  { image: "/WA/WA9.jpg", price: "₹4500" },
  { image: "/WA/WA10.jpg", price: "₹6500" },
  { image: "/WA/WA11.jpg", price: "₹6500" },
  { image: "/WA/WA12.jpg", price: "₹3000" },
  { image: "/WA/WA13.jpg", price: "₹3500" },
  { image: "/WA/WA14.jpg", price: "₹4000" },
  { image: "/WA/WA15.jpg", price: "₹3500" },
  { image: "/WA/WA16.jpg", price: "₹3500" },
  { image: "/WA/WA17.jpg", price: "₹4000" },
  { image: "/WA/WA19.jpg", price: "₹3000" },
  { image: "/WA/WA20.jpg", price: "₹3000" },
  { image: "/WA/WA21.jpg", price: "₹2000" },
  { image: "/WA/WA22.jpg", price: "₹2500" },
  { image: "/WA/WA23.jpg", price: "₹4000" },
  { image: "/WA/WA24.jpg", price: "₹3500" },
  { image: "/WA/WA25.jpg", price: "₹15000" },
  { image: "/WA/WA26.jpg", price: "₹4000" },
  { image: "/WA/WA28.jpg", price: "₹5000" },
  { image: "/WA/WA29.jpg", price: "₹3000" },
  { image: "/WA/WA30.jpg", price: "₹3500" },
  // ... rest of the anniversary images
];

const namingGalleryPricing = [
  { image: "/Nc/nc1.jpg", price: "₹4000" },
  { image: "/Nc/nc2.jpg", price: "₹4000" },
  { image: "/Nc/nc3.jpg", price: "₹6500" },
  { image: "/Nc/nc4.jpg", price: "₹3000" },
  { image: "/Nc/nc5.jpg", price: "₹4000" },
  { image: "/Nc/nc6.jpg", price: "₹5000" },
  { image: "/Nc/nc7.jpg", price: "₹5000" },
  { image: "/Nc/nc8.jpg", price: "₹18000" },
  { image: "/Nc/nc9.jpg", price: "₹12000" },
  { image: "/Nc/nc10.jpg", price: "₹5000" },
  { image: "/Nc/nc11.jpg", price: "₹2500" },
  { image: "/Nc/nc12.jpg", price: "₹3500" },
  { image: "/Nc/nc13.jpg", price: "₹1500" },
  { image: "/Nc/nc14.jpg", price: "₹2500" },
  { image: "/Nc/nc15.jpg", price: "₹5000" },
  { image: "/Nc/nc16.jpg", price: "₹4000" },
  { image: "/Nc/nc17.jpg", price: "₹2000" },
  { image: "/Nc/nc18.jpg", price: "₹2000" },
  { image: "/Nc/nc19.jpg", price: "₹3000" },
  { image: "/Nc/nc20.jpg", price: "₹1500" },
  { image: "/Nc/nc21.jpg", price: "₹2000" },
  { image: "/Nc/nc22.jpg", price: "₹4500" },
  { image: "/Nc/nc23.jpg", price: "₹5500" },
  { image: "/Nc/nc24.jpg", price: "₹6500" },
  { image: "/Nc/nc25.jpg", price: "₹6500" },
  { image: "/Nc/nc26.jpg", price: "₹6500" },
  { image: "/Nc/nc27.jpg", price: "₹5500" },
  { image: "/Nc/nc28.jpg", price: "₹5500" },
  { image: "/Nc/nc29.jpg", price: "₹4500" },
  { image: "/Nc/nc30.jpg", price: "₹6500" },
  // ... rest of the naming ceremony images
];

const brideGalleryPricing = [
  // { image: "/Br/br1.jpg", price: "₹500" },
  // { image: "/Br/br2.jpg", price: "₹550" },
  { image: "/Br/br3.jpg", price: "₹3500" },
  { image: "/Br/br4.jpg", price: "₹5500" },
  { image: "/Br/br5.jpg", price: "₹6500" },
  { image: "/Br/br6.jpg", price: "₹15000" },
  { image: "/Br/br7.jpg", price: "₹4000" },
  { image: "/Br/br8.jpg", price: "₹4500" },
  { image: "/Br/br9.jpg", price: "₹6500" },
  { image: "/Br/br10.jpg", price: "₹4500" },
  { image: "/Br/br11.jpg", price: "₹6500" },
  { image: "/Br/br12.jpg", price: "₹3500" },
  { image: "/Br/br13.jpg", price: "₹2500" },
  { image: "/Br/br14.jpg", price: "₹2000" },
  { image: "/Br/br15.jpg", price: "₹5500" },
  { image: "/Br/br16.jpg", price: "₹3500" },
  { image: "/Br/br17.jpg", price: "₹3500" },
  { image: "/Br/br18.jpg", price: "₹6500" },
  { image: "/Br/br19.jpg", price: "₹3000" },
  { image: "/Br/br20.jpg", price: "₹3500" },
  { image: "/Br/br21.jpg", price: "₹3500" },
  { image: "/Br/br22.jpg", price: "₹4000" },
  { image: "/Br/br23.jpg", price: "₹2500" },
  { image: "/Br/br24.jpg", price: "₹1500" },
  { image: "/Br/br25.jpg", price: "₹6500" },
  { image: "/Br/br26.jpg", price: "₹2500" },
  { image: "/Br/br27.jpg", price: "₹4500" },
  // { image: "/Br/br28.jpg", price: "₹1850" },
  // { image: "/Br/br29.jpg", price: "₹1900" },
  // { image: "/Br/br30.jpg", price: "₹1950" },
  // ... rest of the bride-to-be images
];

const officeGalleryPricing = [
  { image: "/Of/of1.jpg", price: "₹1500" },
  { image: "/Of/of2.jpg", price: "₹1500" },
  { image: "/Of/of3.jpg", price: "₹2000" },
  { image: "/Of/of4.jpg", price: "₹1500" },
  { image: "/Of/of5.jpg", price: "₹3000" },
  { image: "/Of/of6.jpg", price: "₹2500" },
  { image: "/Of/of7.jpg", price: "₹4500" },
  { image: "/Of/of8.jpg", price: "₹3500" },
  { image: "/Of/of9.jpg", price: "₹3500" },
  { image: "/Of/of10.jpg", price: "₹2000" },
  { image: "/Of/of11.jpg", price: "₹1500" },
  { image: "/Of/of12.jpg", price: "₹4500" },
  { image: "/Of/of13.jpg", price: "₹1500" },
  { image: "/Of/of14.jpg", price: "₹4500" },
  { image: "/Of/of15.jpg", price: "₹3000" },
  { image: "/Of/of16.jpg", price: "₹3000" },
  { image: "/Of/of17.jpg", price: "₹2000" },
  { image: "/Of/of18.jpg", price: "₹2000" },
  { image: "/Of/of19.jpg", price: "₹2000" },
  { image: "/Of/of20.jpg", price: "₹5500" },
  { image: "/Of/of21.jpg", price: "₹1500" },
  { image: "/Of/of22.jpg", price: "₹1500" },
  { image: "/Of/of23.jpg", price: "₹1500" },
  { image: "/Of/of24.jpg", price: "₹4500" },
  { image: "/Of/of25.jpg", price: "₹3500" },
  { image: "/Of/of26.jpg", price: "₹3500" },
  // { image: "/Of/of27.jpg", price: "₹1800" },
  // { image: "/Of/of28.jpg", price: "₹1850" },
  // { image: "/Of/of29.jpg", price: "₹1900" },
  // { image: "/Of/of30.jpg", price: "₹1950" },
  // ... rest of the office inauguration images
];

const houseWarmingGalleryPricing = [
  { image: "/Hw/hw1.jpg", price: "custom" },
  { image: "/Hw/hw2.jpg", price: "custom" },
  { image: "/Hw/hw3.jpg", price: "custom" },
  { image: "/Hw/hw4.jpg", price: "custom" },
  { image: "/Hw/hw5.jpg", price: "custom" },
  { image: "/Hw/hw6.jpg", price: "custom" },
  { image: "/Hw/hw7.jpg", price: "custom" },
  { image: "/Hw/hw8.jpg", price: "custom" },
  { image: "/Hw/hw9.jpg", price: "custom" },
  // ... rest of the house warming images
];

const graduationGalleryPricing = [
  { image: "/Gc/gc1.jpg", price: "₹5000" },
  { image: "/Gc/gc2.jpg", price: "₹8500" },
  { image: "/Gc/gc3.jpg", price: "₹1000" },
  { image: "/Gc/gc4.jpg", price: "₹4000" },
  { image: "/Gc/gc5.jpg", price: "₹6500" },
  { image: "/Gc/gc6.jpg", price: "₹6500" },
  { image: "/Gc/gc7.jpg", price: "₹4500" },
  { image: "/Gc/gc8.jpg", price: "₹5000" },
  { image: "/Gc/gc9.jpg", price: "₹5000" },
  { image: "/Gc/gc10.jpg", price: "₹4500" },
  { image: "/Gc/gc11.jpg", price: "₹4500" },
  { image: "/Gc/gc12.jpg", price: "₹6500" },
  { image: "/Gc/gc13.jpg", price: "₹4000" },
  { image: "/Gc/gc14.jpg", price: "₹3500" },
  // ... rest of the graduation images
];

const retirementGalleryPricing = [
  { image: "/Rt/rt1.jpg", price: "₹6500" },
  { image: "/Rt/rt2.jpg", price: "₹5500" },
  { image: "/Rt/rt3.jpg", price: "₹4500" },
  { image: "/Rt/rt4.jpg", price: "₹6500" },
  { image: "/Rt/rt5.jpg", price: "₹2500" },
  { image: "/Rt/rt6.jpg", price: "₹8500" },
  { image: "/Rt/rt7.jpg", price: "₹8500" },
  // ... rest of the retirement images
];

// Main services array
export const servicesData = [
  {
    id: 1,
    name: "Birthday Party",
    image: "/Hb/hbd.jpeg",
    description:
      "Magical birthday celebrations with custom themes, decorations, and entertainment.",
    galleryPricing: birthdayGalleryPricing,
  },
  {
    id: 2,
    name: "Baby Shower Event",
    image: "/Bs/bs.jpeg",
    description:
      "Elegant baby shower celebrations welcoming your little bundle of joy.",
    galleryPricing: babyshowerGalleryPricing,
  },
  {
    id: 3,
    name: "Anniversary Celebration",
    image: "/WA/WA.jpeg",
    description:
      "Romantic anniversary celebrations honoring your love story and journey together.",
    galleryPricing: anniversaryGalleryPricing,
  },
  {
    id: 4,
    name: "Naming Ceremony",
    image: "/Nc/nc.jpeg",
    description:
      "Sacred naming ceremonies blending tradition with modern celebration.",
    galleryPricing: namingGalleryPricing,
  },
  {
    id: 5,
    name: "Bride-To-Be Party",
    image: "/Br/br.jpeg",
    description: "Unforgettable bridal celebrations and bachelorette parties.",
    galleryPricing: brideGalleryPricing,
  },
  {
    id: 6,
    name: "Office Inauguration",
    image: "/Of/of.jpeg",
    description:
      "Professional office inaugurations and corporate milestone celebrations.",
    galleryPricing: officeGalleryPricing,
  },
  {
    id: 7,
    name: "House Warming Ceremony",
    image: "/Hw/hw8.jpg",
    description: "Bless your new home with a warm and welcoming celebration.",
    galleryPricing: houseWarmingGalleryPricing,
  },
  {
    id: 8,
    name: "Retirement Party",
    image: "/Rt/rt.jpeg",
    description:
      "Honor a lifetime of dedication with a memorable retirement celebration.",
    galleryPricing: retirementGalleryPricing,
  },
  {
    id: 9,
    name: "Graduation Celebration",
    image: "/Gc/gc.jpeg",
    description: "Commemorate academic achievements with a grand celebration.",
    galleryPricing: graduationGalleryPricing,
  },
];

// Re-export the data for easier import
export type Service = (typeof servicesData)[number];

export const homeServices = servicesData.map((service) => ({
  name: service.name,
  image: service.image,
}));
