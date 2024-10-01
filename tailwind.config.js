/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        titleTextGradient: "linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,72,187,1) 100%);"
      },
      boxShadow:{
        heroCircleShadow: "0 0 55px 49px black"
      },
      fontFamily: {
        neo: "var(--font-neo)"
      }
    },
  },
  plugins: [],
};
