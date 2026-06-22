import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1, backgroundColor: "#C8A46B", color: "#192620" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-11 h-11 flex items-center justify-center btn-focus transition-colors duration-300"
            style={{ backgroundColor: "#24352B", color: "#C8A46B", border: "1px solid #C8A46B" }}
          >
            <HiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/971526258581"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg btn-focus"
        style={{ backgroundColor: "#C8A46B", color: "#1E1E1E" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        animate={{ boxShadow: ["0 0 0 0 rgba(200,164,107,0.4)", "0 0 0 12px rgba(200,164,107,0)", "0 0 0 0 rgba(200,164,107,0)"] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
}