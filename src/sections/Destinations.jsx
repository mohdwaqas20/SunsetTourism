import { motion } from "framer-motion";
import { DESTINATIONS, IMAGES } from "../data";

function DestCard({ dest, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, zIndex: 10 }}
      style={{ aspectRatio: "4/3", borderRadius: "2px", position: "relative", zIndex: 1 }}
      className="overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Image */}
      <img
        src={IMAGES[dest.image]}
        alt={dest.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent 25%, rgba(10,16,12,0.94) 100%)" }}
      />

      {/* Tag badge */}
      {dest.tag && (
        <div
          className="absolute top-4 left-4 font-button text-[0.55rem] tracking-widest uppercase px-3 py-1"
          style={{ background: "#C8A46B", color: "#1A1A1A", borderRadius: "1px" }}
        >
          {dest.tag}
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5">
        <div className="w-5 h-px mb-3" style={{ background: "#C8A46B" }} />
        <p className="font-display text-xl leading-snug" style={{ color: "#F7F4EF" }}>
          {dest.name}
        </p>
        <p className="font-button text-[0.58rem] tracking-widest uppercase mt-1" style={{ color: "#C8A46B" }}>
          {dest.country}
        </p>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-28 md:py-36 px-6" style={{ backgroundColor: "#24352B" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="eyebrow"
              style={{ color: "#C8A46B" }}
            >
              Where We Take You
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl mt-5"
              style={{ color: "#F7F4EF" }}
            >
              Featured Destinations
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-sm text-sm leading-relaxed"
            style={{ color: "#DCCDB8" }}
          >
            From the dunes of Arabia to the Schengen heartlands of Europe — journeys crafted for those who notice the details.
          </motion.p>
        </div>

        {/* 6-card grid: 3 cols on md+, 2 cols on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {DESTINATIONS.map((dest, i) => (
            <DestCard key={dest.name} dest={dest} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[rgba(200,164,107,0.2)] px-8 py-6"
        >
          <div>
            <p className="font-display text-xl" style={{ color: "#F7F4EF" }}>
              Looking for another destination?
            </p>
            <p className="font-button text-[0.62rem] tracking-widest uppercase mt-1" style={{ color: "#C8A46B" }}>
              We craft journeys worldwide — Oman, Qatar, Azerbaijan &amp; beyond
            </p>
          </div>
          <motion.a
            href="https://wa.me/971526258581"
            target="_blank"
            rel="noopener noreferrer"
            className="font-button text-[0.65rem] tracking-widest uppercase px-8 py-3 flex-shrink-0 border border-[#C8A46B] transition-all duration-300"
            style={{ color: "#C8A46B", borderRadius: "1px" }}
            whileHover={{ backgroundColor: "#C8A46B", color: "#1A1A1A" }}
            whileTap={{ scale: 0.97 }}
          >
            Chat on WhatsApp →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}