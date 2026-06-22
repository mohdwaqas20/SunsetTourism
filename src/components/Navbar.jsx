import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../data";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const textColor = scrolled ? "#1E1E1E" : "#F7F4EF";
  const logoH = scrolled ? "38px" : "52px";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass-light shadow-[0_1px_0_rgba(200,164,107,0.25)]" : "bg-transparent"
      }`}
    >
      {scrolled ? (
        /* ─────────────── SCROLLED: single compact row ─────────────── */
        <nav className="w-full px-6 xl:px-12 h-16 flex items-center justify-between gap-4">

          {/* Logo + brand */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 flex-shrink-0 group">
            <motion.img src={logo} alt="Sunset Voyages Tourism"
              style={{ height: logoH, width: "auto", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))" }}
              whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
            <div className="flex flex-col leading-none">
              <span style={{ fontSize: "0.78rem", color: "#1E1E1E", letterSpacing: "0.18em", fontWeight: 700, textTransform: "uppercase" }}>
                Sunset Voyages
              </span>
              <span style={{ fontSize: "0.5rem", color: "#C8A46B", letterSpacing: "0.28em", textTransform: "uppercase", marginTop: "2px" }}>
                — Tourism —
              </span>
            </div>
          </a>

          {/* Desktop nav — only show on xl+ */}
          <ul className="hidden xl:flex items-center gap-6 2xl:gap-9 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className="font-button text-[0.7rem] tracking-widest uppercase transition-colors duration-300 relative group btn-focus"
                  style={{ color: "#1E1E1E" }}>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{ background: "#C8A46B", width: active === link.href ? "100%" : "0%" }} />
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden xl:inline-block font-button text-[0.65rem] tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 btn-focus flex-shrink-0"
            style={{ borderColor: "#C8A46B", color: "#24352B" }}
            whileHover={{ scale: 1.02, backgroundColor: "#C8A46B", color: "#1E1E1E" }}
            whileTap={{ scale: 0.98 }}>
            Plan Your Journey
          </motion.a>

          {/* Hamburger — shows on everything below xl */}
          <button className="xl:hidden text-2xl btn-focus ml-auto"
            style={{ color: "#24352B" }} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <AnimatePresence mode="wait">
              {open
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><HiX /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><HiMenu /></motion.span>
              }
            </AnimatePresence>
          </button>
        </nav>

      ) : (
        /* ─────────────── NOT SCROLLED: two-tier layout ─────────────── */
        <div className="w-full px-6 xl:px-12">

          {/* TOP ROW */}
          <div className="flex items-center justify-between pt-5 pb-3">

            {/* Logo + brand left-aligned */}
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-4 group">
              <motion.img src={logo} alt="Sunset Voyages Tourism"
                style={{ height: logoH, width: "auto", filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.4))" }}
                whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
              <div className="flex flex-col leading-none">
                <span style={{ fontSize: "1rem", color: "#F7F4EF", letterSpacing: "0.2em", fontWeight: 700, textTransform: "uppercase" }}>
                  Sunset Voyages
                </span>
                <span style={{ fontSize: "0.55rem", color: "#C8A46B", letterSpacing: "0.32em", textTransform: "uppercase", marginTop: "3px" }}>
                  — Tourism —
                </span>
              </div>
            </a>

            {/* CTA — desktop only */}
            <motion.a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden xl:inline-block font-button text-[0.65rem] tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 btn-focus flex-shrink-0"
              style={{ borderColor: "#C8A46B", color: "#F7F4EF", minWidth: "160px", textAlign: "center" }}
              whileHover={{ scale: 1.02, backgroundColor: "#C8A46B", color: "#1E1E1E" }}
              whileTap={{ scale: 0.98 }}>
              Plan Your Journey
            </motion.a>

            {/* Hamburger — tablets + mobile */}
            <button className="xl:hidden text-2xl btn-focus"
              style={{ color: "#F7F4EF" }} onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <AnimatePresence mode="wait">
                {open
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><HiX /></motion.span>
                  : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><HiMenu /></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>

          {/* GOLD DIVIDER */}
          <div className="hidden xl:block h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(200,164,107,0.5), transparent)" }} />

          {/* BOTTOM ROW — nav links */}
          <ul className="hidden xl:flex items-center justify-center gap-10 2xl:gap-14 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className="font-button text-[0.7rem] tracking-widest uppercase transition-colors duration-300 relative group btn-focus"
                  style={{ color: "#F7F4EF" }}>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{ background: "#C8A46B", width: active === link.href ? "100%" : "0%" }} />
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ─────────────── MOBILE / TABLET DRAWER ─────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden overflow-hidden bg-forest"
          >
            {/* Header row inside drawer */}
            <div className="flex items-center gap-3 px-6 pt-5 pb-3 border-b border-[rgba(200,164,107,0.2)]">
              <img src={logo} alt="Sunset Voyages" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
              <div className="flex flex-col leading-none">
                <span className="text-ivory font-semibold tracking-widest uppercase text-sm">Sunset Voyages</span>
                <span className="text-[#C8A46B] tracking-[0.28em] uppercase text-[0.5rem] mt-0.5">— Tourism —</span>
              </div>
            </div>

            {/* Links grid — 2 columns on tablet, 1 on mobile */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 px-6 py-6 gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.li key={link.href}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                    className="font-button text-sm tracking-widest uppercase text-ivory hover:text-gold transition-colors duration-200 flex items-center gap-2">
                    <span className="w-4 h-px" style={{ background: "#C8A46B" }} />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* CTA inside drawer */}
            <div className="px-6 pb-6">
              <motion.a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}
                className="font-button text-xs tracking-widest uppercase px-6 py-3 border border-gold text-gold inline-block"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}>
                Plan Your Journey
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}