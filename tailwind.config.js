// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
    },
    },
  plugins: [],
}