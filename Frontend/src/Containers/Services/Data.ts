// src/Containers/Services/Data.tsx

// Helper function to create a URL-friendly slug
export const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

// Interface for gallery items
export interface ThemeItem {
  image: string;
  name?: string;
  price: string;
  category?: string;
  description?: string;
  popular?: boolean;
  features?: string[];
  capacity?: string;
  duration?: string;
}

// Sub-galleries with pricing

// Birthday Gallery
const birthdayGalleryPricing: ThemeItem[] = [
  { image: "/Hb/hbd1.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd2.jpg", price: "₹2500", category: "Birthday Party" },
  { image: "/Hb/hbd3.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd4.jpg", price: "₹2500", category: "Birthday Party" },
  { image: "/Hb/hbd5.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd6.jpg", price: "₹2500", category: "Birthday Party" },
  { image: "/Hb/hbd7.jpg", price: "₹2500", category: "Birthday Party" },
  { image: "/Hb/hbd8.jpg", price: "₹2500", category: "Birthday Party" },
  { image: "/Hb/hbd9.jpg", price: "₹2500", category: "Birthday Party" },
  { image: "/Hb/hbd10.jpg", price: "₹2500", category: "Birthday Party" },
  { image: "/Hb/hbd11.jpg", price: "₹2500", category: "Birthday Party" },
  { image: "/Hb/hbd12.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd13.jpg", price: "₹2500", category: "Birthday Party" },
  { image: "/Hb/hbd14.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd15.jpg", price: "₹6500", category: "Birthday Party" },
  { image: "/Hb/hbd16.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd17.jpg", price: "₹5500", category: "Birthday Party" },
  { image: "/Hb/hbd18.jpg", price: "₹4500", category: "Birthday Party" },
  { image: "/Hb/hbd19.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd20.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd21.jpg", price: "₹6500", category: "Birthday Party" },
  { image: "/Hb/hbd22.jpg", price: "₹6500", category: "Birthday Party" },
  { image: "/Hb/hbd23.jpg", price: "₹5500", category: "Birthday Party" },
  { image: "/Hb/hbd24.jpg", price: "₹7500", category: "Birthday Party" },
  { image: "/Hb/hbd25.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd26.jpg", price: "₹5500", category: "Birthday Party" },
  { image: "/Hb/hbd27.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd28.jpg", price: "₹6500", category: "Birthday Party" },
  { image: "/Hb/hbd29.jpg", price: "₹4500", category: "Birthday Party" },
  { image: "/Hb/hbd30.jpg", price: "₹3500", category: "Birthday Party" },
  { image: "/Hb/hbd31.jpg", price: "₹8500", category: "Birthday Party" },
  { image: "/Hb/hbd32.jpg", price: "₹10500", category: "Birthday Party" },
];

// Baby Shower Gallery
const babyshowerGalleryPricing: ThemeItem[] = [
  { image: "/Bs/bs1.jpg", price: "₹4500", category: "Baby Shower Event" },
  { image: "/Bs/bs2.jpg", price: "₹7500", category: "Baby Shower Event" },
  { image: "/Bs/bs3.jpg", price: "₹10000", category: "Baby Shower Event" },
  { image: "/Bs/bs4.jpg", price: "₹6500", category: "Baby Shower Event" },
  { image: "/Bs/bs5.jpg", price: "₹5500", category: "Baby Shower Event" },
  { image: "/Bs/bs6.jpg", price: "₹6500", category: "Baby Shower Event" },
  { image: "/Bs/bs7.jpg", price: "₹4500", category: "Baby Shower Event" },
  { image: "/Bs/bs8.jpg", price: "₹8500", category: "Baby Shower Event" },
  { image: "/Bs/bs9.jpg", price: "₹4500", category: "Baby Shower Event" },
  { image: "/Bs/bs10.jpg", price: "₹6500", category: "Baby Shower Event" },
  { image: "/Bs/bs11.jpg", price: "₹5500", category: "Baby Shower Event" },
  { image: "/Bs/bs12.jpg", price: "₹15000", category: "Baby Shower Event" },
  { image: "/Bs/bs13.jpg", price: "₹6500", category: "Baby Shower Event" },
  { image: "/Bs/bs14.jpg", price: "₹6500", category: "Baby Shower Event" },
  { image: "/Bs/bs15.jpg", price: "₹3500", category: "Baby Shower Event" },
];

// Anniversary Gallery
const anniversaryGalleryPricing: ThemeItem[] = [
  { image: "/WA/WA1.jpg", price: "₹5500", category: "Anniversary Celebration" },
  { image: "/WA/WA2.jpg", price: "₹8500", category: "Anniversary Celebration" },
  { image: "/WA/WA3.jpg", price: "₹9000", category: "Anniversary Celebration" },
  { image: "/WA/WA4.jpg", price: "₹6500", category: "Anniversary Celebration" },
  { image: "/WA/WA5.jpg", price: "₹6500", category: "Anniversary Celebration" },
  { image: "/WA/WA6.jpg", price: "₹4500", category: "Anniversary Celebration" },
  { image: "/WA/WA7.jpg", price: "₹6500", category: "Anniversary Celebration" },
  { image: "/WA/WA8.jpg", price: "₹3500", category: "Anniversary Celebration" },
  { image: "/WA/WA9.jpg", price: "₹6500", category: "Anniversary Celebration" },
  {
    image: "/WA/WA10.jpg",
    price: "₹4500",
    category: "Anniversary Celebration",
  },
  {
    image: "/WA/WA11.jpg",
    price: "₹7500",
    category: "Anniversary Celebration",
  },
  {
    image: "/WA/WA12.jpg",
    price: "₹7500",
    category: "Anniversary Celebration",
  },
  {
    image: "/WA/WA13.jpg",
    price: "₹6500",
    category: "Anniversary Celebration",
  },
  {
    image: "/WA/WA14.jpg",
    price: "₹4500",
    category: "Anniversary Celebration",
  },
];

// Corporate Gallery
const corporateGalleryPricing: ThemeItem[] = [
  { image: "/Cr/cr1.jpg", price: "₹6500", category: "Corporate Events" },
  { image: "/Cr/cr2.jpg", price: "₹5500", category: "Corporate Events" },
  { image: "/Cr/cr3.jpg", price: "₹4500", category: "Corporate Events" },
  { image: "/Cr/cr4.jpg", price: "₹5500", category: "Corporate Events" },
  { image: "/Cr/cr5.jpg", price: "₹3500", category: "Corporate Events" },
  { image: "/Cr/cr6.jpg", price: "₹3500", category: "Corporate Events" },
  { image: "/Cr/cr7.jpg", price: "₹4500", category: "Corporate Events" },
  { image: "/Cr/cr8.jpg", price: "₹6500", category: "Corporate Events" },
  { image: "/Cr/cr9.jpg", price: "₹3500", category: "Corporate Events" },
  { image: "/Cr/cr10.jpg", price: "₹8500", category: "Corporate Events" },
  { image: "/Cr/cr11.jpg", price: "₹6500", category: "Corporate Events" },
  { image: "/Cr/cr12.jpg", price: "₹6500", category: "Corporate Events" },
  { image: "/Cr/cr13.jpg", price: "₹7500", category: "Corporate Events" },
  { image: "/Cr/cr14.jpg", price: "₹6500", category: "Corporate Events" },
  { image: "/Cr/cr15.jpg", price: "₹8500", category: "Corporate Events" },
  { image: "/Cr/cr16.jpg", price: "₹5500", category: "Corporate Events" },
  { image: "/Cr/cr17.jpg", price: "₹4500", category: "Corporate Events" },
  { image: "/Cr/cr18.jpg", price: "₹8500", category: "Corporate Events" },
  { image: "/Cr/cr19.jpg", price: "₹3500", category: "Corporate Events" },
  { image: "/Cr/cr20.jpg", price: "₹5500", category: "Corporate Events" },
];

// Bride-To-Be Gallery
const brideGalleryPricing: ThemeItem[] = [
  { image: "/Br/br1.jpg", price: "₹6500", category: "Bride-To-Be Party" },
  { image: "/Br/br2.jpg", price: "₹8500", category: "Bride-To-Be Party" },
  { image: "/Br/br3.jpg", price: "₹4500", category: "Bride-To-Be Party" },
  { image: "/Br/br4.jpg", price: "₹3500", category: "Bride-To-Be Party" },
  { image: "/Br/br5.jpg", price: "₹4500", category: "Bride-To-Be Party" },
  { image: "/Br/br6.jpg", price: "₹8500", category: "Bride-To-Be Party" },
  { image: "/Br/br7.jpg", price: "₹3500", category: "Bride-To-Be Party" },
  { image: "/Br/br8.jpg", price: "₹4500", category: "Bride-To-Be Party" },
  { image: "/Br/br9.jpg", price: "₹7500", category: "Bride-To-Be Party" },
  { image: "/Br/br10.jpg", price: "₹7500", category: "Bride-To-Be Party" },
  { image: "/Br/br11.jpg", price: "₹8500", category: "Bride-To-Be Party" },
  { image: "/Br/br12.jpg", price: "₹2500", category: "Bride-To-Be Party" },
  { image: "/Br/br13.jpg", price: "₹4500", category: "Bride-To-Be Party" },
  { image: "/Br/br14.jpg", price: "₹3500", category: "Bride-To-Be Party" },
  { image: "/Br/br15.jpg", price: "₹4500", category: "Bride-To-Be Party" },
  { image: "/Br/br16.jpg", price: "₹3500", category: "Bride-To-Be Party" },
  { image: "/Br/br17.jpg", price: "₹5500", category: "Bride-To-Be Party" },
  { image: "/Br/br18.jpg", price: "₹6500", category: "Bride-To-Be Party" },
  { image: "/Br/br19.jpg", price: "₹8500", category: "Bride-To-Be Party" },
  { image: "/Br/br20.jpg", price: "₹6500", category: "Bride-To-Be Party" },
  { image: "/Br/br21.jpg", price: "₹2500", category: "Bride-To-Be Party" },
  { image: "/Br/br22.jpg", price: "₹4500", category: "Bride-To-Be Party" },
  { image: "/Br/br23.jpg", price: "₹2500", category: "Bride-To-Be Party" },
  { image: "/Br/br24.jpg", price: "₹4500", category: "Bride-To-Be Party" },
  { image: "/Br/br25.jpg", price: "₹7500", category: "Bride-To-Be Party" },
  { image: "/Br/br26.jpg", price: "₹7500", category: "Bride-To-Be Party" },
  { image: "/Br/br27.jpg", price: "₹7500", category: "Bride-To-Be Party" },
  { image: "/Br/br28.jpg", price: "₹6500", category: "Bride-To-Be Party" },
];

// Office Inauguration Gallery
const officeGalleryPricing: ThemeItem[] = [
  { image: "/Of/of1.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of2.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of3.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of4.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of5.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of6.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of7.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of8.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of9.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of10.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of11.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of12.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of13.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of14.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of15.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of16.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of17.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of18.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of19.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of20.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of21.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of22.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of23.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of24.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of25.jpg", price: "₹4500", category: "Office Inauguration" },
  { image: "/Of/of26.jpg", price: "₹4500", category: "Office Inauguration" },
];

// House Warming Gallery
// const houseWarmingGalleryPricing: ThemeItem[] = [
//   { image: "/Hw/hw1.jpg", price: "Custom", category: "House Warming Ceremony" },
//   { image: "/Hw/hw2.jpg", price: "Custom", category: "House Warming Ceremony" },
//   { image: "/Hw/hw3.jpg", price: "Custom", category: "House Warming Ceremony" },
//   { image: "/Hw/hw4.jpg", price: "Custom", category: "House Warming Ceremony" },
//   { image: "/Hw/hw5.jpg", price: "Custom", category: "House Warming Ceremony" },
//   { image: "/Hw/hw6.jpg", price: "Custom", category: "House Warming Ceremony" },
//   { image: "/Hw/hw7.jpg", price: "Custom", category: "House Warming Ceremony" },
//   { image: "/Hw/hw8.jpg", price: "Custom", category: "House Warming Ceremony" },
//   { image: "/Hw/hw9.jpg", price: "Custom", category: "House Warming Ceremony" },
// ];

// Graduation Gallery
const graduationGalleryPricing: ThemeItem[] = [
  { image: "/Gc/gc1.jpg", price: "₹5000", category: "Graduation Celebration" },
  { image: "/Gc/gc2.jpg", price: "₹8500", category: "Graduation Celebration" },
  { image: "/Gc/gc3.jpg", price: "₹1000", category: "Graduation Celebration" },
  { image: "/Gc/gc4.jpg", price: "₹4000", category: "Graduation Celebration" },
  { image: "/Gc/gc5.jpg", price: "₹6500", category: "Graduation Celebration" },
  { image: "/Gc/gc6.jpg", price: "₹6500", category: "Graduation Celebration" },
  { image: "/Gc/gc7.jpg", price: "₹4500", category: "Graduation Celebration" },
  { image: "/Gc/gc8.jpg", price: "₹5000", category: "Graduation Celebration" },
  { image: "/Gc/gc9.jpg", price: "₹5000", category: "Graduation Celebration" },
  { image: "/Gc/gc10.jpg", price: "₹4500", category: "Graduation Celebration" },
  { image: "/Gc/gc11.jpg", price: "₹4500", category: "Graduation Celebration" },
  { image: "/Gc/gc12.jpg", price: "₹6500", category: "Graduation Celebration" },
  { image: "/Gc/gc13.jpg", price: "₹4000", category: "Graduation Celebration" },
  { image: "/Gc/gc14.jpg", price: "₹3500", category: "Graduation Celebration" },
];

// Retirement Gallery
const retirementGalleryPricing: ThemeItem[] = [
  { image: "/Rt/rt1.jpg", price: "₹6500", category: "Retirement Party" },
  { image: "/Rt/rt2.jpg", price: "₹5500", category: "Retirement Party" },
  { image: "/Rt/rt3.jpg", price: "₹4500", category: "Retirement Party" },
  { image: "/Rt/rt4.jpg", price: "₹6500", category: "Retirement Party" },
  { image: "/Rt/rt5.jpg", price: "₹2500", category: "Retirement Party" },
  { image: "/Rt/rt6.jpg", price: "₹8500", category: "Retirement Party" },
  { image: "/Rt/rt7.jpg", price: "₹8500", category: "Retirement Party" },
];

// Premium Theme Decorations Gallery
export const themeDecorationGalleryPricing: ThemeItem[] = [
  {
    image: "/Th/th1.jpg",
    name: "Glitter and Butterfly Theme",
    price: "₹15000",
    category: "Premium Themes",
    popular: true,
  },
  {
    image: "/Th/th2.jpg",
    name: "Butterfly Theme",
    price: "₹25000",
    category: "Premium Themes",
    popular: true,
  },
  {
    image: "/Th/th3.jpg",
    name: "Glitter & Banner Theme",
    price: "₹10500",
    category: "Premium Themes",
  },
  {
    image: "/Th/th4.jpg",
    name: "Jungle Theme",
    price: "₹12000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th5.jpg",
    name: "Mix Colour Jungle Theme",
    price: "₹15000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th6.jpg",
    name: "Micky Mouse Theme",
    price: "₹15500",
    category: "Premium Themes",
    popular: true,
  },
  {
    image: "/Th/th7.jpg",
    name: "Banner Theme",
    price: "₹8500",
    category: "Premium Themes",
  },
  {
    image: "/Th/th8.jpg",
    name: "Tom & Jerry Theme",
    price: "₹12500",
    category: "Premium Themes",
  },
  {
    image: "/Th/th9.jpg",
    name: "Red Carpet Theme",
    price: "₹8500",
    category: "Premium Themes",
  },
  {
    image: "/Th/th10.jpg",
    name: "Blue glitter Garland Theme",
    price: "₹13000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th11.jpg",
    name: "Little krishna Theme",
    price: "₹28000",
    category: "Premium Themes",
    popular: true,
  },
  {
    image: "/Th/th12.jpg",
    name: "Baby Boss Theme",
    price: "₹18000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th13.jpg",
    name: "Krishna Theme",
    price: "₹25000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th14.jpg",
    name: "Mickey Mouse Theme",
    price: "₹35000",
    category: "Premium Themes",
    popular: true,
  },
  {
    image: "/Th/th15.jpg",
    name: "Arch Decoration",
    price: "₹12000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th16.jpg",
    name: "Photo Theme",
    price: "₹12000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th17.jpg",
    name: "Glitter and Banner Theme",
    price: "₹13000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th18.jpg",
    name: "Jungle Theme",
    price: "₹25000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th19.jpg",
    name: "Arch Decoration Theme",
    price: "₹10000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th20.jpg",
    name: "Moon Theme",
    price: "₹20000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th21.jpg",
    name: "Coco Melon Theme",
    price: "₹28000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th22.jpg",
    name: "Little Krishna Theme",
    price: "₹12000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th23.jpg",
    name: "Pillers and Arch Decoration",
    price: "₹25000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th24.jpg",
    name: "Candy Theme",
    price: "₹10500",
    category: "Premium Themes",
  },
  {
    image: "/Th/th25.jpg",
    name: "Sea Theme",
    price: "₹15000",
    category: "Premium Themes",
  },
  {
    image: "/Th/th26.jpg",
    name: "Coco Melon Theme",
    price: "₹13500",
    category: "Premium Themes",
  },
  {
    image: "/Th/th27.jpg",
    name: "Unicorn Theme",
    price: "₹15500",
    category: "Premium Themes",
  },
  {
    image: "/Th/th28.jpg",
    name: "Astronauts Theme",
    price: "₹8500",
    category: "Premium Themes",
  },
  {
    image: "/Th/th29.jpg",
    name: "Butterfly Theme",
    price: "₹25500",
    category: "Premium Themes",
  },
];

// Group all galleries by category for easy access
export const galleryByCategory: Record<string, ThemeItem[]> = {
  "Birthday Party": birthdayGalleryPricing,
  "Baby Shower Event": babyshowerGalleryPricing,
  "Anniversary Celebration": anniversaryGalleryPricing,
  "Corporate Events": corporateGalleryPricing,
  "Bride-To-Be Party": brideGalleryPricing,
  "Office Inauguration": officeGalleryPricing,
  // "House Warming Ceremony": houseWarmingGalleryPricing,
  "Graduation Celebration": graduationGalleryPricing,
  "Retirement Party": retirementGalleryPricing,
  "Premium Themes": themeDecorationGalleryPricing,
};

// Function to get random items from each category
export const getRandomGalleryItems = (
  itemsPerCategory: number = 2
): ThemeItem[] => {
  const result: ThemeItem[] = [];

  Object.entries(galleryByCategory).forEach(([category, items]) => {
    // Shuffle array and take specified number of items
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, itemsPerCategory);

    // Add category to each item with enhanced data
    selected.forEach((item) => {
      // Generate a name if not present
      const itemName =
        item.name || `${category} Theme ${Math.floor(Math.random() * 100) + 1}`;

      // Add features based on category
      const features = getFeaturesByCategory(category);

      result.push({
        ...item,
        name: itemName,
        category,
        features,
        capacity: getCapacityByCategory(category),
        duration: "Full Day Setup",
        popular: item.popular || Math.random() > 0.7, // Mark some as popular
      });
    });
  });

  // Shuffle the final result for variety
  return result.sort(() => 0.5 - Math.random());
};

// Helper function to get features by category
const getFeaturesByCategory = (category: string): string[] => {
  const featuresMap: Record<string, string[]> = {
    "Birthday Party": [
      "Custom Backdrop",
      "Balloon Decor",
      "Theme Props",
      "Lighting",
    ],
    "Baby Shower Event": [
      "Gender Reveal Options",
      "Elegant Backdrop",
      "Baby Props",
      "Custom Cake Table",
    ],
    "Anniversary Celebration": [
      "Romantic Setup",
      "Floral Decor",
      "Photo Booth",
      "Candle Lighting",
    ],
    "Corporate Events": [
      "Professional Setup",
      "Branding Options",
      "Stage Decor",
      "Audio-Visual",
    ],
    "Bride-To-Be Party": [
      "Bridal Theme",
      "Photo Corner",
      "Custom Signage",
      "Elegant Seating",
    ],
    "Office Inauguration": [
      "Welcome Setup",
      "Ribbon Cutting",
      "Display Board",
      "Corporate Branding",
    ],
    "House Warming Ceremony": [
      "Traditional Setup",
      "Welcome Decor",
      "Rangoli Design",
      "Pooja Arrangement",
    ],
    "Graduation Celebration": [
      "Achievement Theme",
      "Certificate Display",
      "Photo Wall",
      "Theme Colors",
    ],
    "Retirement Party": [
      "Memory Wall",
      "Award Display",
      "Farewell Theme",
      "Guest Book",
    ],
    "Premium Themes": [
      "Complete Setup",
      "Custom Design",
      "Premium Materials",
      "Expert Installation",
    ],
  };

  return (
    featuresMap[category] || [
      "Complete Decoration",
      "Professional Setup",
      "Custom Design",
      "Quality Materials",
    ]
  );
};

// Helper function to get capacity by category
const getCapacityByCategory = (category: string): string => {
  const capacityMap: Record<string, string> = {
    "Birthday Party": "20-50 Guests",
    "Baby Shower Event": "15-40 Guests",
    "Anniversary Celebration": "30-100 Guests",
    "Corporate Events": "50-200 Guests",
    "Bride-To-Be Party": "20-60 Guests",
    "Office Inauguration": "50-300 Guests",
    "House Warming Ceremony": "30-80 Guests",
    "Graduation Celebration": "20-60 Guests",
    "Retirement Party": "30-80 Guests",
    "Premium Themes": "Custom Capacity",
  };

  return capacityMap[category] || "30-50 Guests";
};

// Get all gallery items (for search/filter)
export const getAllGalleryItems = (): ThemeItem[] => {
  const allItems: ThemeItem[] = [];

  Object.entries(galleryByCategory).forEach(([category, items]) => {
    items.forEach((item) => {
      allItems.push({
        ...item,
        name: item.name || `${category} Theme`,
        category,
        features: getFeaturesByCategory(category),
        capacity: getCapacityByCategory(category),
        duration: "Full Day Setup",
      });
    });
  });

  return allItems;
};

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
    name: "Corporate Events",
    image: "/Cr/cr.jpeg",
    description:
      "Professional corporate events and office celebrations with elegant decorations.",
    galleryPricing: corporateGalleryPricing,
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
  // {
  //   id: 7,
  //   name: "House Warming Ceremony",
  //   image: "/Hw/hw8.jpg",
  //   description: "Bless your new home with a warm and welcoming celebration.",
  //   galleryPricing: houseWarmingGalleryPricing,
  // },
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

// Home services (simplified version)
export const homeServices = servicesData.map((service) => ({
  name: service.name,
  image: service.image,
}));

// Function to get gallery items by service name
export const getGalleryByServiceName = (serviceName: string): ThemeItem[] => {
  const service = servicesData.find((s) => s.name === serviceName);
  return service ? service.galleryPricing : [];
};

// Function to search gallery items
export const searchGalleryItems = (
  query: string,
  category?: string
): ThemeItem[] => {
  const allItems = getAllGalleryItems();

  return allItems.filter((item) => {
    const matchesQuery =
      query === "" ||
      item.name?.toLowerCase().includes(query.toLowerCase()) ||
      item.category?.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      !category || category === "all" || item.category === category;

    return matchesQuery && matchesCategory;
  });
};

// Statistics
export const galleryStats = {
  totalThemes: getAllGalleryItems().length,
  totalCategories: Object.keys(galleryByCategory).length,
  totalImages: getAllGalleryItems().length,
  popularThemes: getAllGalleryItems().filter((item) => item.popular).length,
};
