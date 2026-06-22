import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../data";

export default function Process() {
  return (
    <section className="py-28 md:py-36 px-6" style={{ backgroundColor: "#EFE7DA" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
            style={{ color: "#A9824F" }}
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl mt-5"
            style={{ color: "#24352B" }}
          >
            Your Journey, Step by Step
          </motion.h2>
        </div>

        {/* Desktop curved line */}
        <div className="relative hidden md:block">
          <svg className="absolute top-10 left-0 w-full" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none">
            <motion.path
              d="M20 20 Q 250 -10, 500 20 T 980 20"
              stroke="#C8A46B"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid grid-cols-5 gap-4 relative">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center px-2"
              >
                <div
                  className="w-5 h-5 rounded-full border-2 mb-6 mt-7 z-10"
                  style={{ backgroundColor: "#EFE7DA", borderColor: "#C8A46B" }}
                />
                <span className="font-display text-3xl" style={{ color: "#C8A46B" }}>
                  0{i + 1}
                </span>
                <h3 className="font-display text-lg mt-3" style={{ color: "#24352B" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed mt-2" style={{ color: "#5A5A5A" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-2.5 top-2 bottom-2 w-px" style={{ backgroundColor: "#C8A46B" }} />
          <div className="flex flex-col gap-10">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div
                  className="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full border-2"
                  style={{ backgroundColor: "#EFE7DA", borderColor: "#C8A46B" }}
                />
                <span className="font-display text-2xl" style={{ color: "#C8A46B" }}>
                  0{i + 1}
                </span>
                <h3 className="font-display text-lg mt-1" style={{ color: "#24352B" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed mt-2" style={{ color: "#5A5A5A" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}