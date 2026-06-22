import { motion } from "framer-motion";
import { IMAGES } from "../data";

export default function CTABanner() {
  const scrollTo = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-center justify-center">
      <img src={IMAGES.ctaTravel} alt="Luxury travel" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(36,53,43,0.85) 0%, rgba(24,28,22,0.55) 50%, rgba(15,18,14,0.82) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(10,16,12,0.25) 0%, transparent 100%)" }}
      />
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-3xl md:text-5xl leading-tight"
          style={{ color: "#F7F4EF" }}
        >
          Your story deserves a destination worth telling.
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={scrollTo}
          className="mt-9 font-button text-xs tracking-widest2 uppercase px-9 py-4 btn-focus"
          style={{ backgroundColor: "#C8A46B", color: "#1E1E1E" }}
        >
          Speak With a Consultant
        </motion.button>
      </div>
    </section>
  );
}