/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { inter: ["Inter", "sans-serif"] },
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
};
