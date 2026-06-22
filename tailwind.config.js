/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: { DEFAULT: "#5B3A29", deep: "#5B3A29", 900: "#3E2719", 800: "#4A2F20" },
        forest: { DEFAULT: "#24352B", 900: "#192620", 800: "#1F2E25" },
        beige: { DEFAULT: "#DCCDB8", light: "#E8DCC9" },
        gold: { DEFAULT: "#C8A46B", light: "#D9BE8C", dark: "#A9824F" },
        ivory: "#F7F4EF",
        cream: "#EFE7DA",
        charcoal: "#1E1E1E",
        graytext: "#5A5A5A",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
        button: ["'Montserrat'", "sans-serif"],
      },
      backgroundImage: {
        "forest-brown": "linear-gradient(135deg, #24352B 0%, #5B3A29 100%)",
        "beige-gold": "linear-gradient(135deg, #DCCDB8 0%, #C8A46B 100%)",
        "sun-arc": "linear-gradient(90deg, transparent 0%, #C8A46B 50%, transparent 100%)",
      },
      letterSpacing: { widest2: "0.25em" },
      transitionTimingFunction: { luxury: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
