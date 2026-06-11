export type Feature = {
  heading?: string;
  paras: string[];
  image: string;
  alt?: string;
  aspect?: "wide" | "tall";
};

export type Venue = {
  name: string;
  location: string;
  image: string;
  paras: string[];
};

export type Pricing = {
  headline: string;
  intro: string;
  options: { label: string; value: string }[];
  note?: string;
  noteLink?: { label: string; href: string };
};

export type Occasion = {
  slug: string;
  name: string;
  short: string; // dropdown / card tagline
  icon: "picnic" | "ring" | "heart" | "wine";
  eyebrow: string;
  hero: string;
  heroPos?: string;
  card: string; // card / dropdown thumbnail
  lead: string; // hero subtitle
  intro: string[];
  features?: Feature[];
  pricing?: Pricing;
  venues?: Venue[];
  gallery?: string[];
  cta: string;
};

export const OCCASIONS: Occasion[] = [
  {
    slug: "island-picnic",
    name: "Island Picnic",
    short: "A secluded island, a gourmet picnic, just the two of you.",
    icon: "picnic",
    eyebrow: "Picnic Helitours",
    hero: "/assets/special/picnic-champagne.jpg",
    card: "/assets/special/picnic-gazebo.jpg",
    lead: "Your private sky-taxi to a secluded island — white sands, clear waters and a gourmet picnic set just for you.",
    intro: [
      "The versatility of the helicopter means we can transport you to elite locations on the Gold Coast which afford the ultimate tranquility that only island escapism provides.",
      "We access picturesque spots on a secluded island — the ideal setting to enjoy a serene al fresco picnic with a partner or with close family and friends, amongst the white sands, clear waters and blue skies.",
    ],
    features: [
      {
        heading: "A gourmet picnic, catered to you",
        paras: [
          "Enjoy a delicious gourmet picnic selected with fresh ingredients and homemade condiments, catered completely to your dietary preferences.",
          "With a chilled drink in hand you can sit back, relax and soak up the serenity of an island picnic experience.",
        ],
        image: "/assets/special/picnic-platter.jpg",
      },
      {
        heading: "Your ultimate sky-taxi",
        paras: [
          "We fly you from our heliport at Marina Mirage direct to your picnic spot via a scenic coastal flight, set up everything on the sand, and return to collect you once you've savoured every last moment.",
          "All you have to do is arrive, unwind and enjoy the view.",
        ],
        image: "/assets/special/picnic-gazebo.jpg",
        aspect: "wide",
      },
    ],
    pricing: {
      headline: "$1,395 for two people, including GST",
      intro:
        "The Island Picnic Experience includes your helicopter flight, a complete picnic set-up, a gourmet platter with drinks, and a 10-minute scenic flight along the coast. Your scenic flight can be extended with four options:",
      options: [
        { label: "Option 1", value: "20 minutes" },
        { label: "Option 2", value: "25 minutes" },
        { label: "Option 3", value: "30 minutes" },
        { label: "Option 4", value: "45 minutes" },
      ],
      note: "For optional tours and prices, please see our",
      noteLink: { label: "Scenic Flights", href: "/scenic-flights" },
    },
    gallery: [
      "/assets/special/picnic-beach.jpg",
      "/assets/special/picnic-aerial.jpg",
      "/assets/special/picnic-landing.jpg",
      "/assets/special/picnic-bread.jpg",
      "/assets/special/picnic-table.jpg",
    ],
    cta: "Enquire about an island picnic",
  },
  {
    slug: "proposal-tours",
    name: "Proposal Tours",
    short: "Pop the question in five-metre letters across the sand.",
    icon: "ring",
    eyebrow: "Proposal Tours",
    hero: "/assets/special/proposal-sand.jpg",
    heroPos: "center 40%",
    card: "/assets/special/proposal-sand.jpg",
    lead: "When you've found true love, make a romantic gesture they'll never forget — your message written across a Gold Coast beach.",
    intro: [
      "When you have found your perfect partner and you know you've found true love, why not make a true romantic gesture they'll never forget and team up with Gold Coast Helitours.",
      "In five-metre letters across the sands of a spectacular Gold Coast beach, we will write your message.",
    ],
    features: [
      {
        heading: "The perfect canvas",
        paras: [
          "We station ground staff on the sand at a remote spot of South Stradbroke Island, amongst beautiful blue waters which contrast against golden sands.",
          "It is the perfect canvas to write what will probably be the biggest question you'll ever pose to somebody in your lifetime.",
        ],
        image: "/assets/special/proposal-sand.jpg",
        aspect: "wide",
      },
    ],
    gallery: [],
    cta: "Plan your proposal",
  },
  {
    slug: "wedding-transfers",
    name: "Wedding Arrival",
    short: "Descend from the skies and make a grand entrance.",
    icon: "heart",
    eyebrow: "Wedding Transfers",
    hero: "/assets/hero-coast.jpg",
    card: "/assets/special/wedding-arrival.jpg",
    lead: "The most memorable day of your life deserves the most memorable arrival — descend from the skies in luxury.",
    intro: [
      "Looking at making a grand entrance? This will be the most memorable day of your life — so why not arrive in style?",
      "Descend from the skies above your venue in one of our luxury helicopters and create an impressive, unique entrance on your special day.",
    ],
    features: [
      {
        heading: "Flown in comfort, safety and style",
        paras: [
          "Our wedding transfer helicopters feature sumptuous upholstery and air-conditioning to ensure your wedding party are flown in complete comfort.",
          "From the bridal arrival to transfers between ceremony and reception, our crew tailor every detail to your day.",
        ],
        image: "/assets/special/wedding-arrival.jpg",
        aspect: "tall",
      },
    ],
    gallery: [],
    cta: "Enquire about a wedding arrival",
  },
  {
    slug: "restaurant-winery-transfers",
    name: "Restaurant & Winery Transfers",
    short: "Fly the hinterland to world-class restaurants and wineries.",
    icon: "wine",
    eyebrow: "Restaurant & Winery Transfers",
    hero: "/assets/special/spicers-peak.jpg",
    heroPos: "center 60%",
    card: "/assets/special/sirromet-winery.jpg",
    lead: "The Gold Coast hinterland is alive with world-class restaurants and wineries — we fly you there in comfort and style.",
    intro: [
      "The Gold Coast offers the most diverse, vibrant lifestyle in Queensland, and it doesn't all happen by the ocean. The region's hinterland is alive with world-class restaurants and wineries which our helicopters often frequent.",
      "We are perfectly positioned to transport you from the heart of the city to any of these amazing venues in comfort and style, aboard our air-conditioned luxury helicopters. To inspire you, below are a few of these exclusive venues — contact our team for a personalised quote.",
    ],
    venues: [
      {
        name: "Beechmont Estate",
        location: "Beechmont, QLD",
        image: "/assets/special/beechmont-estate.jpg",
        paras: [
          "Beechmont Estate (formerly Hazelwood Estate) is a luxury country retreat just outside the small township of Beechmont, near Binna Burra in the Scenic Rim. The 75-acre property neighbours the World Heritage-listed Lamington National Park.",
          "Escape to taste the region's finest ingredients, sip a drink on the sunset terrace, enjoy a scenic bush walking trail, or simply retreat in five-star luxury.",
        ],
      },
      {
        name: "Sirromet Winery",
        location: "Mount Cotton, QLD",
        image: "/assets/special/sirromet-winery.jpg",
        paras: [
          "Sirromet is Queensland's largest and most highly awarded winery, having won numerous prestigious awards for its wines and facilities. The Mount Cotton headquarters combines a fully operating vineyard, winery, cellar door and restaurant in a location alive with natural scenery and abundant wildlife.",
          "Visit the multi award-winning Restaurant Lurleen's and enjoy spectacular views of rolling vineyards and native bushland, looking out to Moreton Bay and the sand ridges of North Stradbroke Island.",
        ],
      },
      {
        name: "Spicers Peak Lodge",
        location: "Maryvale, QLD",
        image: "/assets/special/spicers-peak.jpg",
        paras: [
          "Spicers Peak Lodge is a luxurious, secluded mountain getaway close to Cunningham's Gap in the magnificent Scenic Rim, just 1.5 hours from Brisbane. Set atop a 9,000-acre private cattle property at 1,100m, it is the highest retreat in Queensland — with spectacular views of the World Heritage-listed Main Range National Park.",
          "With only 10 luxurious suites, plus world-class food, wine and service, the lodge was awarded Queensland's best luxury hotel for the past two years.",
        ],
      },
      {
        name: "Spicers Hidden Vale",
        location: "Grandchester, QLD",
        image: "/assets/special/spicers-hidden-vale.jpg",
        paras: [
          "Spicers Hidden Vale is a gem — an escape just an hour's drive from Brisbane that combines the style and comfort of a luxury retreat with the warmest of country welcomes.",
          "Discover a genuine regional adventure that blends fresh air with luxury, 'paddock to plate' dining and a generous range of nature-based activities. With three event spaces and three private dining rooms, any gathering or special event can be personalised and catered for.",
        ],
      },
      {
        name: "Eagle Heights Mountain Resort",
        location: "Mount Tamborine, QLD",
        image: "/assets/special/eagle-heights.jpg",
        paras: [
          "The spectacular views are the first thing that strikes visitors to the Eagle Heights Mountain Resort on Mount Tamborine. This panorama covers 280 degrees, stretching from Moreton Bay in the north down to Tweed Heads in the south.",
          "At any time of day, enjoy a beverage and a bite to eat, sit above the clouds and be transfixed by the ever-changing sky and the expansive vistas of hinterland rainforest and Pacific Ocean.",
        ],
      },
      {
        name: "Kooroomba Vineyards & Lavender Farm",
        location: "Mount Alford, QLD",
        image: "/assets/special/kooroomba.jpg",
        paras: [
          "Nestled in the Fassifern Valley at Mount Alford near Boonah, the property consists of a cellar door, the Kooroomba Restaurant and a Lavender Gift Shop, overlooking a six-hectare vineyard and breathtaking lavender fields with magnificent views of the Scenic Rim mountains.",
          "Kooroomba is the very definition of a 'hidden gem' — the perfect setting for any festivity or simply a relaxing day away.",
        ],
      },
      {
        name: "The Overflow Estate 1895",
        location: "Beaudesert, QLD",
        image: "/assets/special/overflow-estate.jpg",
        paras: [
          "The Overflow Estate 1895 is a beautiful winery near Brisbane and the Gold Coast. Historically a grazing property, it spans the Beaudesert–Boonah highway and fronts the Lake Wyaralong Dam.",
          "As you sit on the Cellar Door deck enjoying the extraordinary location, you can gaze along the rows and know with confidence that you are amidst the home of these remarkable wines.",
        ],
      },
    ],
    cta: "Request a venue quote",
  },
];

export const OCCASION_BY_SLUG = Object.fromEntries(
  OCCASIONS.map((o) => [o.slug, o])
);
