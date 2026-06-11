import type { Feature } from "./specialData";

export type Bullets = { lead?: string; items: string[]; after?: string[] };
export type CreditGroup = { title: string; items: string[] };

export type SpecOp = {
  slug: string;
  name: string;
  short: string; // dropdown / card tagline
  icon: "camera" | "banner" | "flame" | "anchor" | "film" | "rescue" | "crane";
  eyebrow: string;
  hero: string;
  heroPos?: string;
  card: string;
  lead: string;
  intro: string[];
  features?: Feature[];
  bullets?: Bullets;
  equipment?: string[];
  credits?: CreditGroup[];
  gallery?: string[];
  cta: string;
};

export const SPEC_OPS: SpecOp[] = [
  {
    slug: "aerial-photography",
    name: "Aerial Photography",
    short: "A platform that can hover — the perfect frame, every time.",
    icon: "camera",
    eyebrow: "Specialised Operations",
    hero: "/assets/specialised/aerial-photography.jpg",
    heroPos: "center 55%",
    card: "/assets/specialised/aerial-photography.jpg",
    lead: "A helicopter that can fly slow or hover is the ideal photographic platform — the perfect composition, every time.",
    intro: [
      "Our pilots are specially trained to understand the needs of the most discerning photographer. The ability of the helicopter to fly slowly — or even hover — above your subject makes it the ideal photographic platform, its aeronautical agility ensuring you get the perfect composition and angle.",
      "Gold Coast Helitours realises that photographic assignments vary, so we offer a choice of helicopters for the job — providing the most cost-effective solution for your particular needs.",
    ],
    cta: "Call us for a quote",
  },
  {
    slug: "banner-towing",
    name: "Banner Towing",
    short: "Low, slow and impossible to ignore — your message in the sky.",
    icon: "banner",
    eyebrow: "Specialised Operations",
    hero: "/assets/specialised/banner-hero.jpg",
    heroPos: "center 40%",
    card: "/assets/specialised/banner-hero.jpg",
    lead: "Helicopters fly low, slow and can hover — guaranteeing your message gets looked up to.",
    intro: [
      "Banner towing is a highly efficient means of communicating a message or brand to your demographic. With a captive audience on the ground — away from the distractions of home or work — Gold Coast Helitours' banner towing service ensures your potential customers 'look up' to your message.",
      "What's the first thing you do when you hear a helicopter flying overhead? With our low-flying permits and the unique ability helicopters have over planes — to fly forward slowly or even hover in mid-air — we guarantee increased visibility and exposure for your company, promotion, product or service.",
    ],
    gallery: [
      "/assets/specialised/banner-queensland.jpg",
      "/assets/specialised/banner-riviera.jpg",
    ],
    cta: "Call us for a quote",
  },
  {
    slug: "fire-fighting",
    name: "Fire Fighting",
    short: "Three decades on the front line, mobilised at a moment's notice.",
    icon: "flame",
    eyebrow: "Specialised Operations",
    hero: "/assets/specialised/fire-hero.jpg",
    card: "/assets/specialised/fire-hero.jpg",
    lead: "Three decades supporting Queensland, Victoria and NSW Rural Fire Services — mobilised at a moment's notice.",
    intro: [
      "In Gold Coast Helitours' 30-year history, the company and its staff have enjoyed an ongoing relationship with the Queensland, Victoria and New South Wales Rural Fire Services — providing aerial support, spotting and bucketing services during many of the summer fire fights that plague Australia's states annually.",
      "With the flexibility of our modern fleet, coupled with state-of-the-art fire fighting equipment in the hands of our experienced pilots, we pride ourselves on our ability to help contain one of Mother Nature's most brutal forces. With pilots on call around the clock, we can mobilise at a moment's notice.",
    ],
    gallery: [
      "/assets/specialised/fire-2.jpg",
      "/assets/specialised/fire-3.jpg",
    ],
    cta: "Contact us for more information",
  },
  {
    slug: "marine-helipad",
    name: "Mobile Marine Helipad",
    short: "Australia's only registered mobile marine helipad.",
    icon: "anchor",
    eyebrow: "Specialised Operations",
    hero: "/assets/specialised/marine-hero.jpg",
    card: "/assets/specialised/marine-hero.jpg",
    lead: "Australia's only officially registered mobile marine helipad — designed and commissioned by our founder.",
    intro: [
      "Gold Coast Helitours founder Scott Menzies designed and commissioned what is Australia's only officially registered mobile marine helipad. She can reach 20 knots — and still makes 15 knots with a helicopter on board.",
      "Not every location offers an adequate landing site for helicopters; however MV Helitours provides the ideal marine environment for our fleet to work from. The versatility of this unique vessel means we can motor to a nearby location, land helicopters and transfer clients to almost anywhere on the Gold Coast and beyond.",
    ],
    gallery: ["/assets/specialised/marine-aerial.jpg"],
    cta: "Call us for a quote",
  },
  {
    slug: "motion-picture-filming",
    name: "Motion Picture Filming",
    short: "Camera-ship platforms trusted by the world's biggest productions.",
    icon: "film",
    eyebrow: "Specialised Operations",
    hero: "/assets/specialised/mpf-hero.jpg",
    card: "/assets/specialised/mpf-hero.jpg",
    lead: "From Pirates of the Caribbean to Aquaman — camera-ship platforms and pilots trusted by the world's biggest productions.",
    intro: [
      "The majority of aerial footage in cinema and television is filmed from helicopters. Gold Coast Helitours combines aerial film photography with a complete understanding of the needs of the camera operator and director alike.",
      "We operate state-of-the-art camera systems mounted outside the helicopter — Cineflex, Shotover (K1 and F1) and GSS gimbal platforms, the mainstays of the movie world. Couple this with the flexibility and agility of our helicopters and we deliver an aerial perspective like no other aircraft can.",
    ],
    equipment: [
      "Cineflex V14 HD",
      "Shotover K1 & F1",
      "Gyro-Stabilized Systems (GSS)",
      "Forward Tyler",
      "Tyler Gyro Gimbal",
      "Mini Tyler Gyro",
      "Side Tyler (with Gyro)",
      "Forward / Belly",
      "Side Continental",
      "Gyron Film",
      "Wescam Film",
    ],
    gallery: [
      "/assets/specialised/mpf-set.jpg",
      "/assets/specialised/mpf-rooftop.jpg",
    ],
    credits: [
      {
        title: "Feature films",
        items: [
          "Pirates of the Caribbean: Dead Men Tell No Tales",
          "Aquaman",
          "Godzilla vs. Kong",
          "Narnia: The Voyage of the Dawn Treader",
          "San Andreas",
          "Unbroken",
          "Scooby-Doo 2: Monsters Unleashed",
          "Sanctum",
          "Oceans",
          "Guardians of the Tomb",
        ],
      },
      {
        title: "Television",
        items: [
          "Monarch: Legacy of Monsters",
          "The Amazing Race",
          "Top Gear",
          "I'm a Celebrity… Get Me Out of Here",
          "House Rules",
          "The Bachelor",
          "Big Brother",
          "Sea Patrol",
          "Reef Break",
          "Flipper",
        ],
      },
      {
        title: "Clients & commercials",
        items: [
          "Qantas",
          "Toyota",
          "Coca-Cola",
          "Pepsi",
          "Mazda",
          "Subaru",
          "Maritimo",
          "Riviera",
          "Sanctuary Cove Boat Show",
          "Gold Coast 500",
        ],
      },
    ],
    cta: "Discuss your production",
  },
  {
    slug: "search-rescue",
    name: "Search & Rescue",
    short: "The mainstay of modern search-and-rescue operations.",
    icon: "rescue",
    eyebrow: "Specialised Operations",
    hero: "/assets/specialised/sar-hero.jpg",
    heroPos: "center 45%",
    card: "/assets/specialised/sar-hero.jpg",
    lead: "The versatility of the helicopter makes it the mainstay of modern search-and-rescue.",
    intro: [
      "Search and Rescue is an operation conducted to find someone believed to be in distress, lost, sick or injured — either in a remote or difficult-to-access area such as mountains, deserts, forests or the ocean. The versatility of the helicopter ensures it is already the mainstay of many SAR operations.",
      "Our pilots, equipment and modern fleet deliver critical performance, experience and — ultimately — results on SAR missions.",
    ],
    cta: "Call us for more information",
  },
  {
    slug: "sky-crane-lifting-work",
    name: "Sky Crane & Lifting Work",
    short: "Jet-turbine lifting power for the hardest-to-reach places.",
    icon: "crane",
    eyebrow: "Specialised Operations",
    hero: "/assets/specialised/crane-hero.jpg",
    heroPos: "center 60%",
    card: "/assets/specialised/crane-hero.jpg",
    lead: "Jet-turbine power and precision — a cost-effective lifting solution in the most difficult-to-access locations.",
    intro: [
      "Given the infinite versatility and power afforded by our jet-turbine helicopters, Gold Coast Helitours offers a cost-effective lifting solution in difficult-to-access locations — such as offshore sites, mountain peaks and remote areas with poor access.",
    ],
    bullets: {
      lead: "Often the helicopter is the ultimate choice for:",
      items: [
        "Placement of HVAC units on high-rise buildings",
        "Insertion of signage on challenging terrain",
        "Airlifting materials and equipment to remote areas",
        "Placement of spas on penthouse apartment roofs",
        "Airlifting materials to wilderness areas and state parks",
        "Power-line construction and much more",
      ],
      after: [
        "Our lift jobs are conducted by experienced sling-load rated pilots, backed up by a capable ground-based operations team with loaders in constant radio contact with the pilot.",
        "Gold Coast Helitours can carry out any lift job for private clients, corporations, and local, state and federal governments alike.",
      ],
    },
    gallery: [
      "/assets/specialised/crane-2.jpg",
      "/assets/specialised/crane-3.jpg",
    ],
    cta: "Call us for a quote",
  },
];

export const SPEC_OP_BY_SLUG = Object.fromEntries(
  SPEC_OPS.map((s) => [s.slug, s])
);
