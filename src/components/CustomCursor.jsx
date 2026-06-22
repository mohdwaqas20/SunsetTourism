import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);

  const springX = useSpring(cursorX, { damping: 28, stiffness: 180 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 180 });
  const dotSpringX = useSpring(dotX, { damping: 50, stiffness: 400 });
  const dotSpringY = useSpring(dotY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e) => {
      setVisible(true);
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <motion.div
        style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
        className="fixed top-0 left-0 z-[999] pointer-events-none w-10 h-10 rounded-full border border-[#C8A46B]"
        transition={{ opacity: { duration: 0.3 } }}
      />
      <motion.div
        style={{ x: dotSpringX, y: dotSpringY, opacity: visible ? 1 : 0 }}
        className="fixed top-0 left-0 z-[999] pointer-events-none w-2 h-2 rounded-full bg-[#C8A46B]"
        transition={{ opacity: { duration: 0.3 } }}
      />
    </>
  );
}