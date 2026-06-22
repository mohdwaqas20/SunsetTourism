import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#24352B" }}
        >
          {/* Ambient glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-96 h-96 rounded-full mesh-anim" style={{ top: "5%", left: "15%", background: "radial-gradient(circle, rgba(200,164,107,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />
            <div className="absolute w-80 h-80 rounded-full mesh-anim-r" style={{ bottom: "10%", right: "10%", background: "radial-gradient(circle, rgba(91,58,41,0.18) 0%, transparent 70%)", filter: "blur(60px)" }} />
          </div>

          {/* Logo — transparent background, no box */}
          <motion.img
            src={logo}
            alt="Sunset Voyages Tourism"
            className="relative z-10"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "contain",
              filter: "drop-shadow(0 4px 24px rgba(200,164,107,0.25))",
            }}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />

          {/* Brand name */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.3, delay: 0.7 }}
            className="font-display text-2xl relative z-10 mt-5"
            style={{ color: "#F7F4EF" }}
          >
            Sunset Voyages
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="font-button text-[0.6rem] tracking-[0.35em] uppercase relative z-10 mt-2"
            style={{ color: "#C8A46B" }}
          >
            Tourism L.L.C — Dubai
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="mt-10 h-px relative z-10"
            style={{ background: "rgba(200,164,107,0.15)", width: 160 }}
          >
            <motion.div
              className="h-full origin-left"
              style={{ background: "linear-gradient(90deg, #C8A46B, #D9BE8C)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}