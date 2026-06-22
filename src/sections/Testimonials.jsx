import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { TESTIMONIALS, FACE_IMAGES } from "../data";

const FACE_URLS = [
  "https://images.unsplash.com/photo-1499313843378-eebdb187f629?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1496671431883-c102df9ae8f9?auto=format&fit=crop&w=300&q=80",
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-28 md:py-36 px-6 relative overflow-hidden" style={{ backgroundColor: "#EFE7DA" }}>
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full mesh-anim"
          style={{
            top: "10%", left: "5%",
            background: "radial-gradient(circle, rgba(200,164,107,0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full mesh-anim-r"
          style={{
            bottom: "5%", right: "5%",
            background: "radial-gradient(circle, rgba(91,58,41,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
            style={{ color: "#A9824F" }}
          >
            Traveler Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl mt-5"
            style={{ color: "#24352B" }}
          >
            What Our Travelers Say
          </motion.h2>
        </div>

        {/* Main testimonial card */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center px-4 sm:px-12 py-8"
              style={{
                background: "rgba(247,244,239,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(200,164,107,0.2)",
              }}
            >
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FaQuoteLeft className="text-3xl mb-6" style={{ color: "#C8A46B" }} />
              </motion.div>

              <p className="font-display text-xl md:text-2xl italic leading-relaxed max-w-2xl" style={{ color: "#24352B" }}>
                "{t.quote}"
              </p>

              <div className="flex gap-1 mt-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                  >
                    <FaStar style={{ color: "#C8A46B" }} />
                  </motion.span>
                ))}
              </div>

              <img
                src={FACE_URLS[current]}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mt-6 border-2"
                style={{ borderColor: "#C8A46B" }}
              />
              <p className="font-display text-base mt-3" style={{ color: "#5B3A29" }}>
                {t.name}
              </p>
              <p className="font-button text-[0.65rem] tracking-widest2 uppercase mt-1" style={{ color: "#5A5A5A" }}>
                {t.location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-400"
              style={{
                width: i === current ? 22 : 7,
                height: 7,
                background: i === current ? "#C8A46B" : "#DCCDB8",
                border: "none",
                padding: 0,
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Floating mini review cards (decorative) */}
        <motion.div
          className="hidden lg:block absolute -left-28 top-1/2 -translate-y-1/2 px-4 py-3 pointer-events-none"
          style={{
            background: "rgba(247,244,239,0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(200,164,107,0.25)",
            width: 100,
          }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex gap-0.5 mb-1">
            {[1, 2, 3, 4, 5].map((s) => <FaStar key={s} size={8} style={{ color: "#C8A46B" }} />)}
          </div>
          <p className="font-button text-[0.5rem] tracking-wide" style={{ color: "#5A5A5A" }}>5/5 stars</p>
          <p className="font-button text-[0.48rem] mt-0.5" style={{ color: "#A9824F" }}>10,000+ reviews</p>
        </motion.div>

        <motion.div
          className="hidden lg:block absolute -right-28 top-1/3 px-4 py-3 pointer-events-none"
          style={{
            background: "rgba(247,244,239,0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(200,164,107,0.25)",
            width: 100,
          }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <p className="font-display text-xs" style={{ color: "#24352B" }}>Trusted</p>
          <p className="font-button text-[0.5rem] tracking-wide mt-1" style={{ color: "#A9824F" }}>Since 2009</p>
        </motion.div>
      </div>
    </section>
  );
}
