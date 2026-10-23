export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "Arial", "sans-serif"],
        display: ["Barlow Condensed", "Arial Narrow", "sans-serif"],
      },
      colors: {
        "red-drtb": "#C11711",
        "red-deep": "#8F0F0B",
        ink: "#111111",
        steel: "#E6E6E3",
      },
      boxShadow: {
        plate: "8px 8px 0 0 #C11711",
      },
    },
  },
  plugins: [],
};
