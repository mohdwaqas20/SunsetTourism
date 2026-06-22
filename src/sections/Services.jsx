import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── Service Data ────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "uae-packages",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    eyebrow: "Explore the Emirates",
    title: "UAE Tourism Packages",
    shortDesc: "Curated city tours, desert safaris and luxury experiences across Dubai, Abu Dhabi and the wider Emirates.",
    tags: ["Dubai City Tours", "Desert Safari", "Abu Dhabi Tours", "Luxury Experiences"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    modalDesc: "From the glittering towers of Downtown Dubai to the tranquil dunes of the Empty Quarter — we build UAE itineraries that go beyond the obvious. Each journey is shaped around your pace, your interests, and the kind of moments you'll still talk about years from now.",
    included: [
      "Private guided city tours in Dubai & Abu Dhabi",
      "Sunrise & sunset desert safari experiences",
      "Luxury hotel stay recommendations & bookings",
      "Cultural visits to heritage sites & museums",
      "Seamless in-country transfers throughout",
    ],
  },
  {
    id: "flight-tickets",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
    eyebrow: "Take Off in Comfort",
    title: "Flight Tickets",
    shortDesc: "Best-fare international and domestic flights, sourced across all major airlines to fit your schedule and budget.",
    tags: ["International Flights", "Domestic Flights", "Best Fare Deals"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    modalDesc: "Whether you need a last-minute economy seat or a first-class suite for a family of eight, our travel consultants search every airline and consolidator to find the best available fare — then book it without the noise.",
    included: [
      "International & domestic flight search across all airlines",
      "Best fare comparison & guaranteed booking",
      "Flexible date options & seat selection",
      "Business & first class arrangements",
      "Group booking support for 5+ passengers",
    ],
  },
  {
    id: "tourist-visas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
    eyebrow: "Paperwork, Handled",
    title: "UAE Tourist Visas",
    shortDesc: "UAE tourist and visit visa assistance, handled end to end with fast processing and high approval rates.",
    tags: ["UAE Tourist Visa", "Visit Visa Assistance", "Fast Processing"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    modalDesc: "Visa paperwork is the part nobody enjoys — so we handle it for you. From document checks to submission and status tracking, our team keeps your application moving and answers every question along the way.",
    included: [
      "30 & 60-day tourist visas",
      "Multiple-entry visit visas",
      "Document review & preparation",
      "Status tracking & updates",
      "Express processing options",
    ],
    featured: true,
  },
  {
    id: "hotel-bookings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    eyebrow: "Your Perfect Stay",
    title: "Hotel Bookings",
    shortDesc: "Hand-picked stays from budget-friendly hotels to five-star resorts, matched to your taste and itinerary.",
    tags: ["Luxury Hotels", "Budget Hotels", "Resort Packages"],
    image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=1200&q=80",
    modalDesc: "A great stay doesn't happen by chance. We select and book properties that match your expectations — whether that's a quiet boutique in the old city or a beachfront resort with every amenity. Our hotel relationships often unlock rates unavailable online.",
    included: [
      "Curated hotel selection across all budgets",
      "Preferred rates & exclusive access perks",
      "Breakfast & transfer packages",
      "Suite & villa arrangements",
      "Long-stay & corporate rate negotiation",
    ],
  },
  {
    id: "airport-transfer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    eyebrow: "Seamless Transfers",
    title: "Airport Pickup & Drop",
    shortDesc: "Reliable, comfortable transfers — including VIP and private transportation — to and from every UAE airport.",
    tags: ["Airport Transfers", "VIP Transfers", "Private Transportation"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    modalDesc: "The moment your flight lands, you shouldn't be thinking about logistics. We arrange professional meet-and-greet pickups, private chauffeur services, and group transfers so the journey from tarmac to hotel is the smoothest part of your trip.",
    included: [
      "Meet & greet at all UAE airports",
      "Private & shared luxury vehicle options",
      "VIP chauffeured transfers",
      "Flight monitoring & flexible wait times",
      "Group & family transfer coordination",
    ],
  },
  {
    id: "schengen-visa",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    eyebrow: "Enter Europe",
    title: "Schengen Visa Application",
    shortDesc: "Complete documentation, expert guidance and submission support for Schengen-zone visa applications.",
    tags: ["Complete Documentation", "Visa Guidance", "Application Submission"],
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
    modalDesc: "Schengen applications are detail-heavy and unforgiving of small errors. Our team prepares, reviews, and submits your full application with the documentation package that gives you the best chance of approval — first time.",
    included: [
      "Full document checklist & guidance",
      "Bank statement & letter preparation advice",
      "Travel itinerary & insurance assistance",
      "Application form review before submission",
      "Progress tracking after submission",
    ],
    featured: true,
  },
  {
    id: "schengen-appointment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
      </svg>
    ),
    eyebrow: "Secure Your Slot",
    title: "Schengen Visa Appointment",
    shortDesc: "Appointment booking, pre-submission consultation and tracking assistance for your Schengen application.",
    tags: ["Appointment Booking", "Consultation", "Tracking Assistance"],
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    modalDesc: "Getting a visa centre slot can take weeks if you're booking alone. We secure your appointment, prep you for what to expect on the day, and keep tracking your application after it's submitted.",
    included: [
      "Visa centre appointment booking",
      "Pre-submission consultation",
      "Biometrics day preparation",
      "Application status tracking",
      "Follow-up support after submission",
    ],
  },
  {
    id: "more-services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    eyebrow: "And Beyond",
    title: "More Services",
    shortDesc: "Can't find what you need? We offer a wide range of travel solutions — from Umrah packages to corporate travel.",
    tags: ["Group & Corporate Travel", "Umrah & Pilgrimage", "Travel Insurance"],
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    modalDesc: "Travel needs don't come in standard shapes. From organising Umrah pilgrimages with full support to arranging group corporate travel with seamless logistics — if it involves getting from here to somewhere meaningful, we can help.",
    included: [
      "Umrah & pilgrimage packages with full guidance",
      "Group & corporate travel management",
      "Travel insurance assistance & advice",
      "Honeymoon & anniversary packages",
      "Custom family holiday planning",
    ],
    isMore: true,
  },
];

// ─── Stagger container variants ──────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Modal ───────────────────────────────────────────────────────────────────
function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const WHATSAPP_NUMBER = "971526258581";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0" style={{ background: "rgba(18,16,12,0.82)", backdropFilter: "blur(6px)" }} />

        {/* Panel */}
        <motion.div
          className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl"
          style={{ maxHeight: "92vh", background: "#F7F4EF" }}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile drag pill */}
          <div className="sm:hidden flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full" style={{ background: "#DCCDB8" }} />
          </div>

          {/* Hero image */}
          <div className="relative h-44 sm:h-52 overflow-hidden flex-shrink-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.72)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(18,16,12,0.65) 100%)" }} />

            {/* Icon + Title overlay */}
            <div className="absolute bottom-0 left-0 p-5 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(247,244,239,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(200,164,107,0.4)", color: "#C8A46B" }}>
                {service.icon}
              </div>
              <div>
                <p className="eyebrow text-[0.6rem]" style={{ color: "#C8A46B" }}>{service.eyebrow}</p>
                <h3 className="font-display text-xl leading-tight" style={{ color: "#F7F4EF" }}>{service.title}</h3>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ background: "rgba(18,16,12,0.5)", color: "#F7F4EF", border: "1px solid rgba(247,244,239,0.2)" }}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto" style={{ maxHeight: "calc(92vh - 13rem)" }}>
            <div className="p-5 sm:p-6">
              <p className="text-sm leading-relaxed" style={{ color: "#5A5A5A" }}>{service.modalDesc}</p>

              {/* What's included */}
              <div className="mt-5">
                <p className="eyebrow text-[0.62rem] mb-3" style={{ color: "#C8A46B" }}>What's Included</p>
                <ul className="space-y-2.5">
                  {service.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#24352B" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#C8A46B" strokeWidth={2.5} className="w-2.5 h-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-sm" style={{ color: "#1E1E1E" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[0.65rem] font-button px-3 py-1 rounded-full tracking-wide" style={{ background: "#EFE7DA", color: "#5B3A29", border: "1px solid #DCCDB8" }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-6 grid grid-cols-1 gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to enquire about ${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-button text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "#5B3A29", color: "#C8A46B" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-button text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "#EFE7DA", color: "#24352B", border: "1px solid #DCCDB8" }}
                >
                  Send an Enquiry
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ service, onClick, index }) {
  const isFeatured = service.featured;
  const isMore = service.isMore;

  if (isMore) {
    return (
      <motion.div
        variants={cardVariant}
        className="relative flex flex-col justify-between rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          background: "linear-gradient(135deg, #24352B 0%, #5B3A29 100%)",
          minHeight: "260px",
          padding: "1.75rem",
        }}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-8 translate-x-8" style={{ background: "#C8A46B" }} />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-5 translate-y-6 -translate-x-6" style={{ background: "#F7F4EF" }} />

        <div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(200,164,107,0.18)", color: "#C8A46B" }}>
            {service.icon}
          </div>
          <p className="eyebrow text-[0.6rem] mb-2" style={{ color: "#C8A46B" }}>{service.eyebrow}</p>
          <h3 className="font-display text-xl leading-snug mb-3" style={{ color: "#F7F4EF" }}>{service.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: "#DCCDB8" }}>{service.shortDesc}</p>
        </div>

        <div className="mt-5">
          <ul className="space-y-1.5 mb-5">
            {service.tags.map((tag) => (
              <li key={tag} className="flex items-center gap-2 text-xs" style={{ color: "#DCCDB8" }}>
                <span style={{ color: "#C8A46B" }}>›</span> {tag}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-sm font-button font-medium" style={{ color: "#C8A46B" }}>
            <span>View All Services</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </motion.div>
    );
  }

  if (isFeatured) {
    return (
      <motion.div
        variants={cardVariant}
        className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer group"
        style={{ background: "#1A3060", minHeight: "280px" }}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image top half */}
        <div className="relative h-36 overflow-hidden flex-shrink-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{ filter: "brightness(0.55)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 20%, #1A3060 100%)" }} />

          {/* Featured badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[0.58rem] font-button font-semibold tracking-widest uppercase" style={{ background: "#C8A46B", color: "#1E1E1E" }}>
            Popular
          </div>
        </div>

        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center gap-2.5 mb-3 -mt-6 relative z-10">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,164,107,0.2)", color: "#C8A46B", border: "1px solid rgba(200,164,107,0.3)" }}>
              {service.icon}
            </div>
          </div>

          <p className="eyebrow text-[0.58rem] mb-1.5" style={{ color: "#C8A46B" }}>{service.eyebrow}</p>
          <h3 className="font-display text-lg leading-snug mb-2" style={{ color: "#F7F4EF" }}>{service.title}</h3>
          <p className="text-xs leading-relaxed flex-1" style={{ color: "#DCCDB8" }}>{service.shortDesc}</p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {service.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[0.58rem] px-2.5 py-1 rounded-full font-button" style={{ background: "rgba(200,164,107,0.15)", color: "#C8A46B", border: "1px solid rgba(200,164,107,0.25)" }}>
                {tag}
              </span>
            ))}
          </div>

          <button className="mt-4 flex items-center gap-1.5 text-xs font-button font-medium group-hover:gap-3 transition-all duration-300" style={{ color: "#C8A46B" }}>
            Learn More
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </motion.div>
    );
  }

  // Default card (light / ivory)
  return (
    <motion.div
      variants={cardVariant}
      className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer group border"
      style={{ background: "#FFFFFF", borderColor: "#EFE7DA", minHeight: "260px" }}
      onClick={onClick}
      whileHover={{ scale: 1.02, borderColor: "#C8A46B" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <div className="relative h-32 overflow-hidden flex-shrink-0">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.9) 100%)" }} />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2.5 mb-3 -mt-7 relative z-10">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm" style={{ background: "#FFFFFF", color: "#24352B", border: "1px solid #EFE7DA" }}>
            {service.icon}
          </div>
        </div>

        <p className="eyebrow text-[0.58rem] mb-1.5" style={{ color: "#C8A46B" }}>{service.eyebrow}</p>
        <h3 className="font-display text-lg leading-snug mb-2" style={{ color: "#1E1E1E" }}>{service.title}</h3>
        <p className="text-xs leading-relaxed flex-1" style={{ color: "#5A5A5A" }}>{service.shortDesc}</p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {service.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[0.58rem] px-2.5 py-1 rounded-full font-button" style={{ background: "#F7F4EF", color: "#5B3A29", border: "1px solid #DCCDB8" }}>
              {tag}
            </span>
          ))}
        </div>

        <button
          className="mt-4 flex items-center gap-1.5 text-xs font-button font-semibold group-hover:gap-3 transition-all duration-300"
          style={{ color: "#24352B" }}
        >
          Learn More
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Gold left border reveal on hover */}
      <motion.div
        className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
        style={{ background: "#C8A46B" }}
        initial={{ scaleY: 0, originY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 md:py-36 px-5 sm:px-6 overflow-hidden" style={{ background: "#F7F4EF" }}>
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,164,107,0.07), transparent)" }} />

      <div className="max-w-7xl mx-auto relative">

        {/* ── Header ── */}
        <div ref={headerRef} className="max-w-2xl mb-14 md:mb-20">
          <motion.span
            className="eyebrow"
            style={{ color: "#C8A46B" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            What We Do
          </motion.span>
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-tight"
            style={{ color: "#1E1E1E" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Every Aspect of Your{" "}
            <span className="italic" style={{ color: "#5B3A29" }}>Journey,</span>
            <br />Handled.
          </motion.h2>
          <motion.p
            className="mt-5 text-sm sm:text-base leading-relaxed max-w-xl"
            style={{ color: "#5A5A5A" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From visa applications to airport pickups — we handle every aspect of your travel so you can focus on the experience.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => setActiveService(service)}
            />
          ))}
        </motion.div>

        {/* ── Bottom strip ── */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-10 border-t"
          style={{ borderColor: "#DCCDB8" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <p className="font-display text-xl" style={{ color: "#1E1E1E" }}>Not sure what you need?</p>
            <p className="text-sm mt-1" style={{ color: "#5A5A5A" }}>Our consultants will map out the right service combination for your journey.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/971526258581"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-button text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
              style={{ background: "#5B3A29", color: "#F3EBE1" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-button text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
              style={{ background: "transparent", color: "#24352B", border: "1.5px solid #24352B" }}
            >
              Send an Enquiry
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {activeService && (
        <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      )}
    </section>
  );
}