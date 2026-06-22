import { motion } from "framer-motion";

/**
 * The site's signature motif: a thin arc tracing a sun's path,
 * echoing "Sunset Voyages" literally. Used between sections instead
 * of a generic straight divider or wave shape.
 */
export default function SunArc({ className = "", light = false }) {
  const stroke = light ? "#C8A46B" : "#C8A46B";
  return (
    <div className={`w-full flex justify-center ${className}`} aria-hidden="true">
      <svg width="220" height="40" viewBox="0 0 220 40" fill="none">
        <motion.path
          d="M5 35 Q110 -10 215 35"
          stroke={stroke}
          strokeWidth="1.25"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="110"
          cy="6"
          r="3"
          fill={stroke}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        />
      </svg>
    </div>
  );
}