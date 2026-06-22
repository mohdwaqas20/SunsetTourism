import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES, IMAGES } from "../data";

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative aspect-[3/4] overflow-hidden cursor-default"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4 }}
      >
        {/* Image */}
        <img
          src={IMAGES[exp.image]}
          alt={exp.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-luxury group-hover:scale-110"
        />

        {/* Base gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ background: "linear-gradient(180deg, rgba(36,53,43,0.05) 0%, rgba(30,30,30,0.55) 65%, rgba(30,30,30,0.9) 100%)" }}
        />

        {/* Glassmorphism overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "linear-gradient(180deg, rgba(36,53,43,0.2) 0%, rgba(36,53,43,0.5) 100%)" }}
        />

        {/* Animated gold border */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-3 left-3 right-3 bottom-3 border border-[#C8A46B]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Shimmer gradient animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(200,164,107,0.1) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6" style={{ transform: "translateZ(20px)" }}>
          <h3 className="font-display text-xl leading-snug" style={{ color: "#F7F4EF" }}>
            {exp.title}
          </h3>
          <div
            className="mt-2 overflow-hidden transition-all duration-500"
            style={{ maxHeight: "0", opacity: 0 }}
            ref={(el) => {
              if (el) {
                el.parentElement?.parentElement?.addEventListener("mouseenter", () => {
                  el.style.maxHeight = "100px";
                  el.style.opacity = "1";
                });
                el.parentElement?.parentElement?.addEventListener("mouseleave", () => {
                  el.style.maxHeight = "0";
                  el.style.opacity = "0";
                });
              }
            }}
          >
            <p className="font-body text-sm leading-relaxed mt-1" style={{ color: "#DCCDB8" }}>
              {exp.desc}
            </p>
          </div>
          <motion.div
            className="mt-4 h-px origin-left"
            style={{ backgroundColor: "#C8A46B" }}
            initial={{ scaleX: 0.3 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Corner number */}
        <div
          className="absolute top-4 right-4 font-button text-[0.6rem] tracking-widest2 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ color: "#C8A46B" }}
        >
          0{index + 1}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experiences() {
  return (
    <section id="experiences" className="py-28 md:py-36 px-6" style={{ backgroundColor: "#EFE7DA" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
            style={{ color: "#A9824F" }}
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl mt-5"
            style={{ color: "#24352B" }}
          >
            Curated Travel Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "#5A5A5A" }}
          >
            Hover to explore each experience
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
