/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1220px",
    },
    extend: {
      fontFamily: {
        "Worksans-Thin": "Worksans-Thin",
        "Worksans-Light": "Worksans-Light",
        "Worksans-Regular": "Worksans-Regular",
        "Worksans-Medium": "Worksans-Medium",
        "Worksans-SemiBold": "Worksans-SemiBold",
        "Worksans-Bold": "Worksans-Bold",
        "Worksans-ExtraBold": "Worksans-ExtraBold",
        "Worksans-Black": "Worksans-Black",
      },
      colors: {
        "prime-10": "#FF9500",
        "prime-15": "#FFBF66",
        "prime-20": "#FFCA80",
        "prime-30": "#FFD499",
        "prime-40": "#FFEACC",
        "prime-50": "#FFF4E5",
        "prime-60": "#FFF9F0",
        "prime-70": "#FFFDFA",

        "dark-10": "#1A1A1A",
        "dark-15": "#262626",
        "dark-20": "#333333",
        "dark-30": "#4C4C4D",
        "dark-40": "#59595A",
        "dark-50": "#656567",
        "dark-60": "#98989A",
        "dark-70": "#B3B3B3",
      },
      container: {
        center: true
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
