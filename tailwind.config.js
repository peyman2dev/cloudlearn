/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
