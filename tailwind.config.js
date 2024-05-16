/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
// eslint-disable-next-line no-undef
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
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
        roundkey: ["Roundkey", "sans-serif"],
      },
      fontWeight: {
        // Define font weights based on your font files
        bold: 700,
        extralight: 200,
        light: 300,
        medium: 500,
        thin: 100,
      },

      screens: {
        xs: { max: "640px" }, // everything under 768px
        mL: { min: "425px", max: "639px" }, // mobile L
        mM: { min: "375px", max: "424px" }, // mobile M
        mS: { min: "320px", max: "374px" }, // mobile S
      },
      backgroundImage: {
        aboutLogo: "url('/public/about_logo.png')",
        bookBackground: "url('/public/bookonline.png')",
        mapBackground: "url('/public/map_placeholder.png')",
        footerBackground: "url('/public/footerbg.png')",
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
