/* ============================================================
   ABOUT US — shared content for the fleet, facilities, FAQ and
   policy pages. All copy mirrors the legacy goldcoasthelitours.com.au
   site, lightly tidied for consistency.
   ============================================================ */

/* ---------- Our Fleet ---------- */

export type Aircraft = {
  reg: string;
  model: string;
  variant?: string; // e.g. "(H125)"
  category: "Jet turbine" | "Piston engine";
  seats: string;
  image: string;
  imagePos?: string;
  desc: string;
  note?: string;
  engine: string;
  range: string;
  cruise: string;
};

export const FLEET: Aircraft[] = [
  {
    reg: "VH-HTY",
    model: "Eurocopter 350B2 Squirrel",
    variant: "(H125)",
    category: "Jet turbine",
    seats: "6 passengers",
    image: "/assets/fleet/vh-hty.jpg",
    imagePos: "center 60%",
    desc: "Corporate executive six-passenger jet-turbine helicopter with leather interior, air-conditioning and Bose audio sound system.",
    engine: "Turbomeca Arriel 1D1",
    range: "352 NM · 652 km",
    cruise: "120 kn · 222 kph",
  },
  {
    reg: "VH-ZSM",
    model: "Eurocopter 350B2 Squirrel",
    variant: "(H125)",
    category: "Jet turbine",
    seats: "6 passengers",
    image: "/assets/fleet/vh-zsm.jpg",
    desc: "Corporate executive six-passenger jet-turbine helicopter with leather interior, air-conditioning and Bose audio sound system.",
    engine: "Turbomeca Arriel 1D1",
    range: "352 NM · 652 km",
    cruise: "120 kn · 222 kph",
  },
  {
    reg: "VH-JSM",
    model: "Eurocopter 350B2 Squirrel",
    variant: "(H125)",
    category: "Jet turbine",
    seats: "6 passengers",
    image: "/assets/fleet/vh-jsm.jpg",
    imagePos: "center 55%",
    desc: "Corporate executive six-passenger jet-turbine helicopter with leather interior, air-conditioning and Bose audio sound system.",
    engine: "Turbomeca Arriel 1D1",
    range: "352 NM · 652 km",
    cruise: "120 kn · 222 kph",
  },
  {
    reg: "VH-SES",
    model: "Eurocopter 350BA Squirrel",
    variant: "(H125)",
    category: "Jet turbine",
    seats: "6 passengers",
    image: "/assets/fleet/vh-ses.jpg",
    imagePos: "center 45%",
    desc: "Corporate executive six-passenger jet-turbine helicopter with leather interior, air-conditioning and Bose audio sound system.",
    engine: "Turbomeca Arriel 1B",
    range: "352 NM · 652 km",
    cruise: "115 kn · 213 kph",
  },
  {
    reg: "VH-UTL",
    model: "Bell 206L Long Ranger",
    category: "Jet turbine",
    seats: "6 passengers",
    image: "/assets/fleet/vh-utl.jpg",
    desc: "Corporate executive six-passenger jet-turbine helicopter with leather club-class seating, air-conditioning and Bose audio sound system.",
    engine: "Rolls-Royce Allison C30P",
    range: "374 NM · 692 km",
    cruise: "115 kn · 213 kph",
  },
  {
    reg: "VH-JMI",
    model: "Robinson R44 Clipper II",
    category: "Piston engine",
    seats: "3 passengers + pilot",
    image: "/assets/fleet/vh-jmi.jpg",
    imagePos: "center 40%",
    desc: "Three-passenger-plus-pilot piston-engine helicopter with leather seating, air-conditioning and a cruising speed of 105 knots.",
    note: "The R44 is the world's most popular helicopter.",
    engine: "Lycoming IO-540 6-cylinder",
    range: "250 NM · 463 km",
    cruise: "105 kn · 194 kph",
  },
  {
    reg: "VH-HFS",
    model: "Robinson R44 Clipper II",
    category: "Piston engine",
    seats: "3 passengers + pilot",
    image: "/assets/fleet/vh-hfs.jpg",
    desc: "Three-passenger-plus-pilot piston-engine helicopter with leather seating, air-conditioning and a cruising speed of 105 knots.",
    note: "The R44 is the world's most popular helicopter.",
    engine: "Lycoming IO-540 6-cylinder",
    range: "250 NM · 463 km",
    cruise: "105 kn · 194 kph",
  },
];

export const CABIN_GALLERY = [
  "/assets/fleet/cabin-1.jpg",
  "/assets/fleet/cabin-2.jpg",
  "/assets/fleet/cabin-3.jpg",
  "/assets/fleet/cabin-4.jpg",
  "/assets/fleet/cockpit.jpg",
];

/* ---------- FAQ ---------- */

export type Faq = { q: string; a: string[] };

export const FAQS: Faq[] = [
  {
    q: "How many passengers can you fly?",
    a: [
      "You can bring one person or whole groups on our scenic flights.",
      "We have helicopters that seat 3 passengers plus the pilot and require a minimum of 2 adult fares on each flight.",
      "We also have helicopters that seat 6 passengers plus the pilot and require a minimum of 4 adult fares on each flight.",
      "Please note each fare buys a seat in the helicopter and you may be paired with other passengers. If you are a single person, we may be able to match you with others.",
    ],
  },
  {
    q: "What happens if it rains on the day of my flight?",
    a: [
      "We are able to fly in most conditions including light rain and wind, and we don't fly above the clouds so you still get a great view.",
      "In case of doubt, please do not hesitate to call us on 07 5591 8457.",
    ],
  },
  {
    q: "What are your opening hours?",
    a: [
      "We are open 7 days a week, all year round, except on some public holidays.",
      "Please check our main page for specific public holiday opening hours. Our office hours are from 8:30 am to 5:00 pm.",
    ],
  },
  {
    q: "How do I get there?",
    a: [
      "Our heliport is located at Marina Mirage, Seaworld Drive, Main Beach — a short drive from the heart of Surfers Paradise.",
      "Alternatively, there is a regular bus service, G:link tram service, Hopo ferry and taxis to assist you in getting to us.",
    ],
  },
  {
    q: "Do you have set times that you fly during the day?",
    a: [
      "There are no set times for our scenic flights, however we recommend bookings to ensure your preferred time.",
    ],
  },
  {
    q: "What is the best time of the day to fly?",
    a: [
      "There is no specific time of the day that is best to fly over the beautiful Gold Coast.",
    ],
  },
  {
    q: "Can I bring my camera or video camera on the flight?",
    a: [
      "We encourage you to bring a small camera with you, and once you embark on your flight you are welcome to take as many photographs as you like. Small video cameras are also welcome.",
      "Selfie sticks and large cameras are not permitted.",
    ],
  },
  {
    q: "Where do I store my valuables and personal belongings?",
    a: [
      "We offer complimentary secure lockers to store any belongings that are not permitted on board.",
    ],
  },
  {
    q: "How long before the flight do I need to be there?",
    a: [
      "We recommend you arrive at least 10 minutes prior to your flight for check-in and safety briefing.",
      "We offer first-class air-conditioned lounge facilities, including our Hover café, for you to enjoy.",
    ],
  },
  {
    q: "What should I wear?",
    a: [
      "Wear clothing you are comfortable in. However, we do require a shirt to be worn at all times, and closed-in shoes are preferred.",
    ],
  },
  {
    q: "Do you accept all credit cards?",
    a: ["Yes, we accept all credit cards, EFTPOS and cash (AUD) payments."],
  },
];

/* ---------- Policy / Privacy shared blocks ---------- */

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "ul"; items: string[] };

export type PolicySection = { title: string; blocks: Block[] };

/* Booking policies (legacy "Terms & Conditions") */
export const BOOKING_SECTIONS: PolicySection[] = [
  {
    title: "Minimum Flight Requirement",
    blocks: [
      { kind: "p", text: "All scenic flights operate with a minimum charge of two adult fares per booking." },
      { kind: "p", text: "Bookings with one adult, or one adult and one child, are welcome; however, the two-adult minimum fare will apply. This requirement also applies to gift vouchers." },
      { kind: "p", text: "This requirement may be adjusted due to aircraft availability or operational requirements. Please refer to our FAQ for scenic flight seating information." },
    ],
  },
  {
    title: "Deposit & Payment Policy",
    blocks: [
      { kind: "p", text: "A 50% deposit is required for all bookings, and all flights must be paid in full prior to departure." },
      { kind: "p", text: "Payments can be made via:" },
      { kind: "ul", items: ["Direct deposit", "Bank card", "Cash (Australian dollars)"] },
    ],
  },
  {
    title: "Scenic Flight Cancellation & Refund Policy",
    blocks: [
      { kind: "p", text: "A full refund will be provided if a flight is cancelled by Gold Coast Helitours due to:" },
      { kind: "ul", items: ["Adverse weather conditions", "Safety concerns", "Operational or unforeseen circumstances within our control"] },
      { kind: "h", text: "Client cancellations" },
      { kind: "ul", items: ["More than 24 hours before departure: no cancellation fee", "Within 24 hours of departure: 50% cancellation fee", "Within 2 hours of departure: 100% cancellation fee"] },
    ],
  },
  {
    title: "Charter / Group Booking Cancellation Policy",
    blocks: [
      { kind: "p", text: "If a charter or group flight is cancelled by Gold Coast Helitours prior to departure due to weather or operational reasons, customers will be offered a reschedule or a full refund." },
      { kind: "h", text: "Client cancellations" },
      { kind: "ul", items: ["Within 48 hours: 50% cancellation fee", "Within 24 hours: 100% cancellation fee"] },
    ],
  },
  {
    title: "No-Show Policy",
    blocks: [
      { kind: "p", text: "A booking may be considered a no-show if:" },
      { kind: "ul", items: ["Cancellation notice is not received at least 24 hours before the scheduled flight, or", "Passengers fail to arrive at the designated time and location"] },
      { kind: "p", text: "No-show bookings are non-refundable." },
    ],
  },
  {
    title: "Provided Weights",
    blocks: [
      { kind: "p", text: "Accurate passenger weights are essential for the safe operation of helicopters and light aircraft. Gold Coast Helitours may verify all passenger and baggage weights before flight." },
      { kind: "p", text: "Significant differences between supplied and actual weights may cause delays or non-refundable cancellations." },
    ],
  },
  {
    title: "Age Definitions",
    blocks: [
      { kind: "p", text: "In accordance with the Civil Aviation Safety Authority (CASA):" },
      { kind: "ul", items: ["Infant: under 2 years of age", "Child: 2–12 years of age", "Adult: 13 years and over"] },
      { kind: "p", text: "Gold Coast Helitours reserves the right to request proof of age for child tickets. If proof cannot be provided, the adult fare may apply." },
    ],
  },
  {
    title: "Gift Vouchers",
    blocks: [
      { kind: "ul", items: ["Are non-refundable", "Cannot be redeemed for cash", "Are valid for 12 months from the date of purchase"] },
      { kind: "p", text: "Please note: a minimum charge of two adult fares applies to each booking. If a voucher covers only one adult, or one adult and one child, any difference required to meet the minimum adult fare must be paid at the time of booking." },
    ],
  },
  {
    title: "Privacy",
    blocks: [
      { kind: "p", text: "Gold Coast Helitours maintains customer information in accordance with strict security and confidentiality standards. We will not sell, share or disclose personal information such as email addresses, residential addresses or phone numbers." },
      { kind: "p", text: "Information will only be disclosed if authorised by the customer, or required by law." },
    ],
  },
];

/* Privacy Policy */
export const PRIVACY_INTRO: string[] = [
  "Gold Coast Helitours is committed to providing quality services to you, and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.",
  "We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The APPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information. A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at www.oaic.gov.au.",
];

export const PRIVACY_SECTIONS: PolicySection[] = [
  {
    title: "What is Personal Information and why do we collect it?",
    blocks: [
      { kind: "p", text: "Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include names, addresses, email addresses, phone and facsimile numbers." },
      { kind: "p", text: "This Personal Information is obtained in many ways, including interviews, correspondence, by telephone and facsimile, by email, via our website, from media and publications, from other publicly available sources, from cookies and from third parties. We don't guarantee website links or the policy of authorised third parties." },
      { kind: "p", text: "We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing." },
      { kind: "p", text: "When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it." },
    ],
  },
  {
    title: "Sensitive Information",
    blocks: [
      { kind: "p", text: "Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information." },
      { kind: "p", text: "Sensitive information will be used by us only:" },
      { kind: "ul", items: ["For the primary purpose for which it was obtained", "For a secondary purpose that is directly related to the primary purpose", "With your consent, or where required or authorised by law"] },
    ],
  },
  {
    title: "Third Parties",
    blocks: [
      { kind: "p", text: "Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party." },
    ],
  },
  {
    title: "Disclosure of Personal Information",
    blocks: [
      { kind: "p", text: "Your Personal Information may be disclosed in a number of circumstances including the following:" },
      { kind: "ul", items: ["Third parties where you consent to the use or disclosure; and", "Where required or authorised by law."] },
    ],
  },
  {
    title: "Security of Personal Information",
    blocks: [
      { kind: "p", text: "Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorised access, modification or disclosure." },
      { kind: "p", text: "When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal Information is, or will be, stored in client files which will be kept by us for a minimum of 7 years." },
    ],
  },
  {
    title: "Access to your Personal Information",
    blocks: [
      { kind: "p", text: "You may access the Personal Information we hold about you, and update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing." },
      { kind: "p", text: "Gold Coast Helitours will not charge any fee for your access request, but may charge an administrative fee for providing a copy of your Personal Information." },
      { kind: "p", text: "In order to protect your Personal Information we may require identification from you before releasing the requested information." },
    ],
  },
  {
    title: "Maintaining the Quality of your Personal Information",
    blocks: [
      { kind: "p", text: "It is important to us that your Personal Information is up to date. We will take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you." },
    ],
  },
  {
    title: "Policy Updates",
    blocks: [
      { kind: "p", text: "This Policy may change from time to time and is available on our website." },
    ],
  },
  {
    title: "Privacy Policy Complaints and Enquiries",
    blocks: [
      { kind: "p", text: "If you have any queries or complaints about our Privacy Policy, please contact us at:" },
    ],
  },
];
