/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#080F25",
        second : "#101935",
        second2 : "#1F253B",
        primaryBg: "#0C0C0C",
        primaryLight: "#ff8127",
        secondary: "#F9FAFB",
        secondaryBg: "#181818",
        linkedinBg: "#0e9fff",
        instagramBg: "#fe0582",
        borderBg : "#1F2A4A",
        fontCol : "#7E88AE",
        fontCol2 : "#AEB9E1",
        fontSec : "#899BD3",
        btn : "#6C72FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nunito: ["nunito"],
        dm_sans: ["dm_sans"],
        lily: ["lily"],
        lora: ["lora"],
        roboto: ['roboto']
      },
    },
  },
  plugins: [],
};
