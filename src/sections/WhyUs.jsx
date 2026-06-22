import { motion } from "framer-motion";
import { GiPassport, GiCommercialAirplane, GiPhone } from "react-icons/gi";
import { HiOutlineCurrencyDollar, HiOutlineStar, HiOutlineTruck } from "react-icons/hi";
import { WHY_US } from "../data";

const ICONS = [GiPassport, GiCommercialAirplane, GiPhone, HiOutlineStar, HiOutlineCurrencyDollar, HiOutlineTruck];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 md:py-36 px-6 relative overflow-hidden" style={{ backgroundColor: "#24352B" }}>
      {/* Floating background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full mesh-anim"
          style={{
            top: "-200px", right: "-200px",
            background: "radial-gradient(circle, rgba(200,164,107,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
            style={{ color: "#C8A46B" }}
          >
            The Sunset Voyages Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl mt-5"
            style={{ color: "#F7F4EF" }}
          >
            Why Choose Sunset Voyages
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(247,244,239,0.1)" }}>
          {WHY_US.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: (i % 3) * 0.1 }}
                className="p-10 group relative overflow-hidden transition-colors duration-500 hover:bg-white/[0.04]"
                style={{ backgroundColor: "#24352B" }}
              >
                {/* Animated gradient sweep on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(200,164,107,0.08) 0%, transparent 60%)",
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Animated border gradient */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700 origin-left"
                  style={{ background: "linear-gradient(90deg, #C8A46B, transparent)" }}
                />

                <motion.div
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon
                    className="text-3xl transition-colors duration-500 group-hover:text-gold"
                    style={{ color: "#DCCDB8" }}
                  />
                </motion.div>

                <h3
                  className="font-display text-xl mt-6 transition-colors duration-500 group-hover:text-gold"
                  style={{ color: "#F7F4EF" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mt-3 transition-colors duration-500 group-hover:text-ivory"
                  style={{ color: "#DCCDB8" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}