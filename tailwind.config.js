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
    require("flowbite/plugin"),
    [nextui({ addCommonColors: true })],
    ["prettier-plugin-tailwindcss"],
  ],
});
