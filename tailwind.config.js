/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ECF0F3: "#ECF0F3",
      },
      padding: {
        "5px": "5px",
        "10px": "10px",
      },
      screens: {
        lmin: { min: "900px" },
        smax: { max: "900px" },
        smin: { min: "639px" },
        mmin: { min: "639px" },
        mmax: { max: "639px" },
      },
      boxShadow: {
        "search-shadow": "rgba(149 , 157, 165, 0.2) 0px 8px 24px",
      },
      gridTemplateColumns: {
        searchGrid: "repeat(2, 1fr)",
      },
    },
  },
  plugins: [],
};
