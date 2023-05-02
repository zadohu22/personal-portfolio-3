/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        mainbg: "#E5E5E5",
        accentbg: "#FFFFFF",
        "dark-2": "#2E86C1",
        "dark-1": "#4798a1",
      },
    },
  },
  plugins: [],
};
