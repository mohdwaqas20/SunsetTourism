import { motion } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
import aboutImg from "../assets/about.JPG";

const STATS = [
  { value: 100, suffix: "%", label: "Genuine Satisfaction" },
  { value: 10000, suffix: "+", label: "Happy Travelers" },
  { value: 99, suffix: "%", label: "Visa Success Rate" },
  { value: 24, suffix: "/7", label: "Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6" style={{ backgroundColor: "#F7F4EF" }}>

      {/* Keyframe styles */}
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1)    translateX(0px)   translateY(0px); }
          35%  { transform: scale(1.06) translateX(-8px)  translateY(-6px); }
          70%  { transform: scale(1.1)  translateX(6px)   translateY(-12px); }
          100% { transform: scale(1)    translateX(0px)   translateY(0px); }
        }
        @keyframes shimmer {
          0%   { left: -120%; }
          100% { left: 160%; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .about-img-kenburns {
          animation: kenBurns 14s ease-in-out infinite;
          transform-origin: center center;
          will-change: transform;
        }
        .shimmer-sweep::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 60%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255,255,255,0.06) 40%,
            rgba(255,255,255,0.13) 50%,
            rgba(255,255,255,0.06) 60%,
            transparent 100%
          );
          animation: shimmer 5s ease-in-out infinite;
          pointer-events: none;
          z-index: 15;
        }
        .badge-float {
          animation: floatBadge 4s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* === TEXT SIDE (left) === */}
        <div>
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="eyebrow" style={{ color: "#A9824F" }}
          >
            About Sunset Voyages
          </motion.span>

          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl leading-tight mt-5"
            style={{ color: "#24352B" }}
          >
            We believe travel should be unforgettable.
          </motion.h2>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base leading-relaxed max-w-lg"
            style={{ color: "#5A5A5A" }}
          >
            At Sunset Voyages Tourism LLC, we create personalized journeys, premium holiday experiences,
            UAE tourism packages, luxury accommodations, flight reservations, visa solutions, and travel
            planning services designed around your needs — never a fixed itinerary off the shelf.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
              >
                <p className="font-display text-4xl md:text-[2.75rem]" style={{ color: "#5B3A29" }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-button text-[0.68rem] tracking-widest2 uppercase mt-2" style={{ color: "#5A5A5A" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === IMAGE SIDE (right) === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Decorative gold ring top-right */}
          <div
            className="hidden md:block absolute -top-8 -right-8 w-24 h-24 rounded-full border z-0"
            style={{ borderColor: "#A9824F", opacity: 0.4 }}
          />

          {/* Image card with Ken Burns + shimmer */}
          <div
            className="shimmer-sweep relative aspect-[4/5] overflow-hidden rounded-[2.5rem] z-10"
            style={{ boxShadow: "0 30px 60px -20px rgba(36, 53, 43, 0.4)" }}
          >
            <img
              src={aboutImg}
              alt="Burj Khalifa Dubai at night"
              className="about-img-kenburns w-full h-full object-cover object-center"
            />

            {/* Soft vignette overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, transparent 40%, rgba(15,20,15,0.45) 100%)",
              }}
            />

            {/* Bottom gradient for badge readability */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(15,20,15,0.5) 0%, transparent 100%)",
              }}
            />
          </div>

          {/* Badge — Burj Khalifa */}
          <div
            className="badge-float hidden md:flex absolute -bottom-10 -left-10 z-20 flex-col items-center justify-center rounded-3xl text-center"
            style={{
              width: "10rem",
              height: "10rem",
              background: "linear-gradient(145deg, #ffffff 60%, #f5f0e8)",
              boxShadow: "0 20px 45px -12px rgba(36,53,43,0.25), 0 4px 16px rgba(169,130,79,0.15)",
              border: "3px solid #F7F4EF",
            }}
          >
            {/* Pulsing gold dot */}
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
              className="absolute top-4 right-4 w-2 h-2 rounded-full"
              style={{ backgroundColor: "#A9824F" }}
            />

            {/* Landmark icon line */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A9824F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "0.3rem" }}>
              <path d="M3 21h18M9 21V7l3-4 3 4v14M9 9h6M9 13h6M9 17h6" />
            </svg>

            <p className="font-display leading-none" style={{ fontSize: "1rem", color: "#1B2E22", fontWeight: 700, letterSpacing: "-0.01em" }}>
              Burj Khalifa
            </p>
            <p className="font-button uppercase mt-1 leading-tight" style={{ fontSize: "0.52rem", letterSpacing: "0.1em", color: "#A9824F" }}>
              828m · World's Tallest
            </p>
            <p className="font-button uppercase mt-1 leading-tight" style={{ fontSize: "0.48rem", letterSpacing: "0.08em", color: "#9A9A9A" }}>
              Dubai, UAE
            </p>
          </div>

          {/* Dot cluster bottom-right */}
          <div
            className="hidden md:grid absolute -bottom-4 -right-4 z-0 opacity-25"
            style={{ gridTemplateColumns: "repeat(3,1fr)", gap: "6px" }}
          >
            {[...Array(9)].map((_, i) => (
              <span key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#A9824F", display: "block" }} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}