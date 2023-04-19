/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "hsl(233, 47%, 7%)",
        "card-bg": "hsl(244, 38%, 16%)",
        "bg-accent": "hsl(277, 74%, 50%)",
        "main-p": "hsla(0, 0%, 100%, 0.75)",
        "stat-h": "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        inter: "Inter",
        "lexend-deca": "Lexend Deca",
      },
    },
  },
  plugins: [],
};
