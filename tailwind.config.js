module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: "#FF6EC7",
        neonCyan: "#4FFBDF",
        neonPurple: "#A349A4",
        neonGreen: "#39FF14",
        darkBackground: "#121212",
      },
      fontFamily: {
        sans: ['"Roboto Mono"', "monospace"],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],

};
