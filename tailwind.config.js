import svgToDataUri from 'mini-svg-data-uri';

// const colors = require("tailwindcss/colors");
import colors from "tailwindcss/colors"

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        silver: "#c4c4c4"
      },
      backgroundImage: {
        titleTextGradient: "linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,72,187,1) 100%);"
      },
      boxShadow: {
        heroCircleShadow: "0 0 55px 49px black",
        heroBottomGradient: "0 0 41px 45px #0a0a0a",
        workDetailsCard: "40px 0px 50px -20px #8badfe, -40px 0px 50px -20px #e88bfe",
        contactCard: "20px 0 52px -33px #867eff, -20px 0 52px -33px #c47eff"
      },
      fontFamily: {
        neo: "var(--font-neo)",
        oswald: ["Oswald"]
      }
    },
  },
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}