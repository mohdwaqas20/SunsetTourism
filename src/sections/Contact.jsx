import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const text = `Hello Sunset Voyages! 👋\n\nI'd like to plan my dream journey. Here are my details:\n\n👤 *Name:* ${form.name}\n📧 *Email:* ${form.email}\n📱 *Phone:* ${form.phone}\n\n✉️ *Message:*\n${form.message}\n\nPlease get in touch with me. Thank you!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/971526258581?text=${encoded}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 md:py-44 px-5 sm:px-6" style={{ background: "#EFE7DA" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-xs tracking-widest"
            style={{ color: "#C8A46B" }}
          >
            LET'S CONNECT
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight" style={{ color: "#1E1E1E" }}>
            Ready to Plan<br />
            <span style={{ color: "#C8A46B" }}>Your Dream Journey?</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-sm" style={{ color: "#5A5A5A" }}>
            Share your travel vision with us. Our expert consultants will reach out within hours to craft your perfect itinerary.
          </p>

          {/* Contact Cards */}
          <div className="mt-12 space-y-5">
            {[
              { icon: "📍", label: "Location", value: "Dubai, United Arab Emirates", delay: 0 },
              { icon: "📞", label: "Phone", value: "+971 52 625 8581", delay: 0.1 },
              { icon: "✉️", label: "Email", value: "hello@sunsetvoyages.ae", delay: 0.2 },
            ].map((c) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: c.delay }}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ background: "rgba(200,164,107,0.08)" }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 mt-0.5"
                  style={{ background: "#F7F4EF", border: "2px solid #C8A46B" }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="font-button text-xs tracking-widest uppercase font-semibold" style={{ color: "#C8A46B" }}>{c.label}</p>
                  <p className="text-sm mt-1.5 font-medium" style={{ color: "#1E1E1E" }}>{c.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="https://wa.me/971526258581"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 mt-10 px-7 py-4 rounded-full font-button text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ background: "#5B3A29", color: "#F3EBE1" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 md:p-10 rounded-2xl"
          style={{ background: "#fff", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
        >
          <h3 className="font-display text-2xl mb-2" style={{ color: "#1E1E1E" }}>Send Your Enquiry</h3>
          <p className="text-sm mb-8" style={{ color: "#5A5A5A" }}>We'll respond within 2-4 hours</p>

          <form onSubmit={submit} className="space-y-5">
            {[
              { name: "name", label: "Full Name", type: "text", placeholder: "Your full name", icon: "👤" },
              { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com", icon: "📧" },
              { name: "phone", label: "Phone Number", type: "tel", placeholder: "+971 52 625 8581", icon: "📱" },
            ].map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <label className="font-button text-xs tracking-widest uppercase block mb-2.5 font-semibold" style={{ color: "#C8A46B" }}>
                  {f.label}
                </label>
                <div className="relative">
                  <input
                    type={f.type}
                    name={f.name}
                    value={form[f.name]}
                    onChange={handle}
                    placeholder={f.placeholder}
                    required
                    className="w-full px-4 py-3.5 pl-11 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "#F9F7F4",
                      color: "#1E1E1E",
                      border: "1.5px solid #DCCDB8"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#C8A46B"}
                    onBlur={(e) => e.target.style.borderColor = "#DCCDB8"}
                  />
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg">{f.icon}</span>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
            >
              <label className="font-button text-xs tracking-widest uppercase block mb-2.5 font-semibold" style={{ color: "#C8A46B" }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                placeholder="Tell us about your travel dreams..."
                rows={4}
                className="w-full px-4 py-3.5 rounded-xl text-sm outline-none resize-none transition-all duration-200"
                style={{
                  background: "#F9F7F4",
                  color: "#1E1E1E",
                  border: "1.5px solid #DCCDB8"
                }}
                onFocus={(e) => e.target.style.borderColor = "#C8A46B"}
                onBlur={(e) => e.target.style.borderColor = "#DCCDB8"}
              />
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(91,58,41,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl font-button text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                background: "#5B3A29",
                color: "#F3EBE1",
                boxShadow: "0 10px 30px rgba(91,58,41,0.15)"
              }}
            >
              {sent ? (
                <>
                  <span>✓</span> Message Sent Successfully
                </>
              ) : (
                <>
                  <span>→</span> Send Enquiry
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}