import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant, 'Cormorant Garamond')", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: ["var(--font-inter, Inter)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji"],
      },
      colors: {
        "bt-navy": "#1E3A5F",
        "bt-navy-light": "#3D5A80",
        "bt-mist": "#B7C4D4",
        "bt-charcoal": "#33363B",
        "bt-charcoal-light": "#5A5E65",
        "bt-cream": "#F8F4EC",
        "bt-sand": "#ECE3D2",
        "bt-sand-dark": "#DCCEB2",
        "bt-gold": "#B8863E",
        "bt-gold-light": "#D4AC6E",
        // Darker gold for gold TEXT on cream/white (4.5:1) — bt-gold is only ~3:1 there.
        "bt-gold-text": "#8F6A2E",
      },
    },
  },
  plugins: [],
};
export default config;
