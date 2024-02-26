/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Nunito", "sans-serif"],
      keyframes: {
        appears: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        appears: "appears 1s",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
