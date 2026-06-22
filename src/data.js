// Curated imagery — luxury travel / Dubai / destinations
// Note: all photo IDs below have been verified against live Unsplash CDN references.
const SKYLINE = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=85";
const DESERT = "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&w=1600&q=80";
const PORTRAIT = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=85";
const PARIS = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80";
const EUROPE_ALPS = "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80";
const FLIGHT = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80";
const DUBAI_LUXURY = "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80";
const MALDIVES = "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80";
const COASTAL = "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=1200&q=80";
const MOUNTAINS = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80";
const FOREST_PATH = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80";
const DENSE_FOREST = "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80";
const AUTUMN = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80";
const MISTY = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80";
const FACE_1 = "https://images.unsplash.com/photo-1499313843378-eebdb187f629?auto=format&fit=crop&w=300&q=80";
const FACE_2 = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80";
const FACE_3 = "https://images.unsplash.com/photo-1496671431883-c102df9ae8f9?auto=format&fit=crop&w=300&q=80";

export const IMAGES = {
  heroSkyline: SKYLINE,
  heroDesert: DESERT,
  aboutPortrait: PORTRAIT,
  aboutSecondary: PARIS,

  expLuxuryDubai: DUBAI_LUXURY,
  expDesert: DESERT,
  expCityTour: SKYLINE,
  expEurope: EUROPE_ALPS,
  expHotel: COASTAL,
  expFlight: FLIGHT,
  expVisa: MISTY,
  expConcierge: FOREST_PATH,

  destDubai: SKYLINE,
  destAbuDhabi: DUBAI_LUXURY,
  destSharjah: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?auto=format&fit=crop&w=1200&q=80",
  destRasAlKhaimah: MOUNTAINS,
  destUmmAlQuwain: COASTAL,
  destEurope: EUROPE_ALPS,

  testimonial1: PORTRAIT,
  testimonial2: DUBAI_LUXURY,
  testimonial3: MALDIVES,

  ctaTravel: DESERT,
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCES = [
  {
    title: "Luxury Dubai Escapes",
    desc: "Private suites, skyline dining, and after-hours access to the city's most exclusive addresses.",
    image: "expLuxuryDubai",
  },
  {
    title: "Desert Adventures",
    desc: "Golden dunes at dawn, falconry, and Bedouin-style dining beneath an open sky.",
    image: "expDesert",
  },
  {
    title: "Private City Tours",
    desc: "Personal guides and unhurried itineraries through the UAE's landmarks and hidden corners.",
    image: "expCityTour",
  },
  {
    title: "European Holidays",
    desc: "Curated escapes across the Alps, the Riviera, and Europe's most storied capitals.",
    image: "expEurope",
  },
  {
    title: "Luxury Hotel Reservations",
    desc: "Preferred access to five-star properties and suites rarely available to the public.",
    image: "expHotel",
  },
  {
    title: "Flight Planning",
    desc: "Seamless first and business class arrangements, tailored to your schedule.",
    image: "expFlight",
  },
  {
    title: "Visa Solutions",
    desc: "End-to-end documentation handled with precision and a 99% success rate.",
    image: "expVisa",
  },
  {
    title: "Airport Concierge Services",
    desc: "Fast-track arrivals, private lounges, and chauffeured transfers from touchdown.",
    image: "expConcierge",
  },
];

export const DESTINATIONS = [
  { name: "Dubai", country: "UAE", image: "destDubai", tag: "Most Popular" },
  { name: "Abu Dhabi", country: "UAE Capital", image: "destAbuDhabi" },
  { name: "Sharjah", country: "Cultural Capital", image: "destSharjah" },
  { name: "Ras Al Khaimah", country: "Adventure Capital", image: "destRasAlKhaimah" },
  { name: "Umm Al Quwain", country: "Hidden Gem of UAE", image: "destUmmAlQuwain" },
  { name: "Europe", country: "Schengen Zone", image: "destEurope", tag: "Schengen Visa" },
];

export const WHY_US = [
  { title: "99% Visa Approval Rate", desc: "Our expert documentation team handles every detail — UAE, Schengen and beyond — with one of the highest approval rates in the region." },
  { title: "Best Fare Flight Tickets", desc: "We source the most competitive fares across all major airlines for international and domestic routes, tailored to your schedule." },
  { title: "24/7 Travel Assistance", desc: "A dedicated support line, day or night, wherever your journey takes you — from boarding to safe return." },
  { title: "Hand-Picked Hotel Stays", desc: "From five-star resorts to budget-friendly comfort, every property is personally vetted and matched to your preferences." },
  { title: "Transparent Pricing", desc: "No hidden fees — clear, honest costs from the first consultation to your return flight home." },
  { title: "Airport Pickup & Drop", desc: "Reliable, comfortable transfers to and from every UAE airport, including VIP and private transportation options." },
];

export const PROCESS_STEPS = [
  { title: "Consultation", desc: "We learn how you like to travel, and what this journey means to you." },
  { title: "Travel Planning", desc: "A bespoke itinerary is shaped around your time, taste, and budget." },
  { title: "Documentation", desc: "Visas, bookings, and paperwork handled with quiet precision." },
  { title: "Booking Confirmation", desc: "Every detail is locked in and placed in your hands." },
  { title: "Enjoy Your Journey", desc: "You travel. We remain on call until you're safely home." },
];

export const TESTIMONIALS = [
  {
    name: "Amira Al Falasi",
    location: "Dubai, UAE",
    quote: "Sunset Voyages turned our anniversary trip into something we still talk about. Every detail, considered.",
    image: "testimonial1",
  },
  {
    name: "James Whitfield",
    location: "London, UK",
    quote: "Their visa team made an impossible deadline feel effortless. True professionals, start to finish.",
    image: "testimonial2",
  },
  {
    name: "Sara Al Mansoori",
    location: "Abu Dhabi, UAE",
    quote: "The Maldives itinerary they built for us was better than anything we could have planned ourselves.",
    image: "testimonial3",
  },
];

export const FAQS = [
  {
    q: "How far in advance should I book my journey?",
    a: "For bespoke itineraries, we recommend starting four to six weeks ahead, though we regularly arrange journeys on shorter notice.",
  },
  {
    q: "Do you handle visa processing for all nationalities?",
    a: "Yes. Our documentation team manages visa solutions for a wide range of nationalities and destinations, with a 99% success rate.",
  },
  {
    q: "Can you accommodate last-minute changes during travel?",
    a: "Our concierge line is available 24/7, so itineraries can be adjusted in real time, wherever you are.",
  },
  {
    q: "What makes Sunset Voyages different from a typical travel agency?",
    a: "We build single, fully personalized journeys rather than selling fixed packages — every detail is shaped around you.",
  },
  {
    q: "Do you arrange group and family travel?",
    a: "Yes, from intimate family holidays to larger group itineraries, each guest's preferences are accounted for individually.",
  },
];
export const FACE_IMAGES = [
  "https://images.unsplash.com/photo-1499313843378-eebdb187f629?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1496671431883-c102df9ae8f9?auto=format&fit=crop&w=300&q=80",
];