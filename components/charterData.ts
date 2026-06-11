export type CharterService = {
  slug: string;
  name: string;
  short: string; // dropdown / card tagline
  icon: "survey" | "plane" | "briefcase" | "flag" | "calendar";
  hero: string;
  lead: string; // hero subtitle
  intro: string[];
  bullets?: string[];
  bulletsAfter?: string[];
  extra?: { heading: string; paras: string[]; image?: string }[];
  gallery?: string[];
  cta: string;
};

export const CHARTER_SERVICES: CharterService[] = [
  {
    slug: "aerial-survey",
    name: "Aerial Survey",
    short: "The best vantage point — straight from overhead.",
    icon: "survey",
    hero: "/assets/tours/tour5.jpg",
    lead: "Fast, agile observation platforms for any survey mission.",
    intro: [
      "Helicopters are the ideal choice when it comes to aerial surveying, given their unique ability to fly quickly to a location and then hover over it — providing the best vantage point possible, from overhead.",
      "Gold Coast Helitours has a fleet of fast modern helicopters all capable of flying at over 200kph, expediting travel time to survey sites. Given their speed and agility, helicopters are widely used for surveys such as:",
    ],
    bullets: [
      "Land and property surveys",
      "Archaeology",
      "Mining",
      "Monitoring wildlife",
      "Infrastructure such as power lines",
      "Monitoring vegetation and ground cover",
      "Reconnaissance",
    ],
    bulletsAfter: [
      "Whatever mission you need to fly, Gold Coast Helitours provides an economic observation platform to conduct your aerial survey.",
    ],
    gallery: ["/assets/charter/aerial-survey-1.jpg"],
    cta: "Contact us today",
  },
  {
    slug: "airport-transfers",
    name: "Airport Transfers",
    short: "Skip the traffic — your private air-limousine.",
    icon: "plane",
    hero: "/assets/tours/tour2.jpg",
    lead: "Catch the helicopter and you've caught that plane.",
    intro: [
      "Getting to the airport to catch a flight can be a stressful experience as you battle traffic jams or fight with luggage on public transport. So why not book the ultimate air-limousine and let us take you to the airport in comfort and style?",
      "Catch the helicopter and you've caught that plane — because there are no delays in the skies!",
      "Our aircraft are perfect for both families and business travellers alike, featuring air conditioning and leather upholstery, and can carry up to six passengers.",
    ],
    gallery: [
      "/assets/charter/airport-transfers-2.jpg",
      "/assets/charter/airport-transfers-3.jpg",
    ],
    cta: "Contact us for a quote",
  },
  {
    slug: "corporate-transfers",
    name: "Corporate Transfers",
    short: "Luxury transfers for business, on your schedule.",
    icon: "briefcase",
    hero: "/assets/hero-coast.jpg",
    lead: "The ultimate in comfort and style for business travellers.",
    intro: [
      "Our corporate agenda is intended to fully support business executives in their constant battle against time, distance and conflicting deadlines.",
      "We pride ourselves in our range of luxury helicopters, which offer business travellers the ultimate in comfort and style.",
      "Gold Coast Helitours possesses a fleet of aircraft which include leather seating, club-class interiors, air conditioning and sumptuous carpeting and upholstery.",
      "From economical three-seat passenger helicopters which can comfortably cruise at over 200kph, to larger six-seat helicopters cruising at over 250kph, Gold Coast Helitours can take you almost anywhere you want to go.",
    ],
    gallery: ["/assets/charter/corporate-transfers-1.jpg"],
    cta: "Contact us for a quote today",
  },
  {
    slug: "golf-excursions",
    name: "Golf & Other Excursions",
    short: "Arrive at any course in winning style.",
    icon: "flag",
    hero: "/assets/tours/tour3.jpg",
    lead: "Every golf course on the Gold Coast and Brisbane region.",
    intro: [
      "Golf is the ideal game for a sociable afternoon of relaxation with friends or corporate colleagues. And if you want to arrive in winning style, we have the ability to access every golf course on the Gold Coast and Brisbane region.",
      "So why not talk to our crew and book a golf helitour to suit?",
      "After you've had a celebratory drink at the nineteenth hole, we'll be ready to transport you back to our heliport at the heart of the Gold Coast.",
    ],
    extra: [
      {
        heading: "Byron Bay",
        paras: [
          "Byron Bay offers accommodation to suit all budgets, beautiful beaches, a bustling shopping arena, award-winning restaurants and vibrant night life. We specialise in charters on a daily basis — so why not contact a crew member and devise your own special helicopter tour?",
          "We are not just limited to the Gold Coast given the range our modern aircraft are capable of achieving. We can take you where you want to go, when you want to go — and the sky really is the limit.",
        ],
        image: "/assets/charter/golf-excursions-3.jpg",
      },
    ],
    gallery: [
      "/assets/charter/golf-excursions-1.jpg",
      "/assets/charter/golf-excursions-2.jpg",
    ],
    cta: "Contact us for more information",
  },
  {
    slug: "special-events",
    name: "Special Events",
    short: "Straight to the GC500, concerts and beyond.",
    icon: "calendar",
    hero: "/assets/tours/tour4.png",
    lead: "Bespoke charters to the Gold Coast's biggest events.",
    intro: [
      "Our fleet of helicopters provides the flexibility to offer a wide range of bespoke charter services at your convenience. By prior arrangement we can transport you directly to the myriad of special events which take place right here on the Gold Coast and beyond.",
      "From the spectacle that is the annual GC500 Supercars motor racing event to the vast array of musical and cultural events, Gold Coast Helitours can deliver you there in comfort and style.",
      "Our heliport is located on the Broadwater right at the heart of the city, with easy transport links and ample parking above and below ground at the Marina Mirage.",
    ],
    gallery: ["/assets/charter/special-events.jpg"],
    cta: "Contact us for a quote today",
  },
];

export const CHARTER_BY_SLUG = Object.fromEntries(
  CHARTER_SERVICES.map((s) => [s.slug, s])
);
