import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { IMAGES } from "../data";

// Subtle floating particles
function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        dx: (Math.random() - 0.5) * 0.2, dy: -Math.random() * 0.3 - 0.08,
        opacity: Math.random() * 0.35 + 0.05,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,164,107,${p.opacity})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[2]" />;
}

// Letter-by-letter animation
function AnimatedText({ text, delay = 0, className = "", style = {} }) {
  return (
    <span className={className} style={style}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay + i * 0.022, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}


export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" ref={ref} className="relative h-screen min-h-[680px] w-full overflow-hidden">

      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={IMAGES.heroSkyline}
          alt="Dubai skyline at sunset"
          className="w-full h-[125%] object-cover object-center"
        />
      </motion.div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(180deg, rgba(20,30,24,0.55) 0%, rgba(20,30,24,0.45) 25%, rgba(20,30,24,0.65) 55%, rgba(20,30,24,0.92) 85%, rgba(15,22,18,0.98) 100%)",
        }}
      />

      {/* Centre radial shadow */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(10,16,12,0.45) 0%, transparent 100%)",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Sunlight glow */}
      <motion.div
        className="absolute rounded-full pointer-events-none z-[2]"
        style={{
          width: 500, height: 500, right: "3%", top: "2%",
          background: "radial-gradient(circle, rgba(200,164,107,0.22) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />



      {/* ── MAIN CONTENT ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="eyebrow mb-5"
          style={{ color: "#C8A46B", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
        >
          Sunset Voyages Tourism L.L.C — Dubai
        </motion.span>

        {/* Headline */}
        <h1 className="font-display leading-[1.1] max-w-4xl mb-0" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
          <AnimatedText
            text="Beyond Destinations,"
            delay={2.55}
            style={{ color: "#FFFFFF", display: "block", textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
          />
          <span style={{ display: "block", marginTop: "0.1em" }}>
            <AnimatedText
              text="We Create Experiences."
              delay={2.85}
              className="italic"
              style={{ color: "#C8A46B", display: "block", textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}
            />
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.5 }}
          className="mt-7 max-w-lg text-base md:text-lg font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.88)", textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}
        >
          Luxury travel experiences, curated holidays, visa solutions, premium accommodations, and seamless journeys across the UAE and beyond.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.85 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={() => scrollTo("#contact")}
            className="font-button text-xs tracking-widest2 uppercase px-10 py-4 btn-focus"
            style={{ backgroundColor: "#C8A46B", color: "#1A1A1A" }}
            whileHover={{ scale: 1.03, backgroundColor: "#D9BE8C", boxShadow: "0 8px 32px rgba(200,164,107,0.45)" }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Journey
          </motion.button>
          <motion.a
            href="https://wa.me/971526258581"
            target="_blank"
            rel="noopener noreferrer"
            className="font-button text-xs tracking-widest2 uppercase px-10 py-4 border btn-focus"
            style={{
              borderColor: "rgba(255,255,255,0.6)",
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(6px)",
              display: "inline-block",
            }}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.14)", borderColor: "#C8A46B", color: "#C8A46B" }}
            whileTap={{ scale: 0.97 }}
          >
            Speak With Our Travel Expert
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.3 }}
          className="mt-14 flex flex-wrap justify-center items-center gap-x-8 gap-y-3"
        >
          {["99% Visa Success Rate", "10,000+ Happy Travelers", "24/7 Support"].map((item, i) => (
            <span key={item} className="flex items-center gap-8">
              {i > 0 && <span className="w-px h-4 hidden sm:block" style={{ background: "rgba(200,164,107,0.4)" }} />}
              <span
                className="font-button text-[0.68rem] tracking-widest2 uppercase"
                style={{ color: "rgba(220,205,184,0.9)", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
              >
                {item}
              </span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.6 }}
      >
        <span
          className="font-button text-[0.6rem] tracking-widest2 uppercase"
          style={{ color: "rgba(220,205,184,0.7)", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-8 origin-top"
          style={{ background: "linear-gradient(180deg, #C8A46B, transparent)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}