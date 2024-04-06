/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roundkey: "'Roundkey', 'sans-serif'",
      },
      fontWeight: {
        thin: 100,
        "thin-italic": 100,
        extralight: 200,
        "extralight-italic": 200,
        light: 300,
        "light-italic": 300,
        normal: 400,
        italic: 400,
        medium: 500,
        "medium-italic": 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        "black-italic": 900,
      },

      screens: {
        xs: { max: "640px" }, // everything under 768px
        mL: { min: "425px", max: "639px" }, // mobile L
        mM: { min: "375px", max: "424px" }, // mobile M
        mS: { min: "320px", max: "374px" }, // mobile S
      },
      backgroundImage: {
        aboutBackground: "url('././public/about_background.png')",
        aboutLogo: "url('././public/about_logo.png')",
        bookBackground: "url('././public/bookonline.png')",
        mapBackground: "url('././public/map_placeholder.png')",
        footerBackground: "url('././public/footerbg.png')",
      },
      colors: {
        brown: {
          100: "#ece7dd",
          200: "#dacfbc",
          300: "#c7b89a",
          400: "#b5a079",
          500: "#a28857",
          600: "#826d46",
          700: "#615234",
          800: "#413623",
          900: "#201b11",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    [nextui({ addCommonColors: true })],
    ["prettier-plugin-tailwindcss"],
  ],
});
