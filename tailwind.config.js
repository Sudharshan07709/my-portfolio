/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-main": "#050814",
        "bg-card": "#0F1629",
        accent: "#00D2FF",
        "accent-soft": "#5BE7FF",
        muted: "#8C9BC5",
        danger: "#FF4B5C",
      },
    },
  },
  plugins: [],
};
