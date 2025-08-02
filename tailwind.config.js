// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'footer-pattern': "url('/src/assets/footerbg.png')",
      },
    },
  },
  plugins: [],
}
