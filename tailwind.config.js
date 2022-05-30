module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      notwhite: "rgba(255, 255, 255, 0.7)",
      primary: {
        600: "#2196F3",
      }
    },
    extend: {
      backgroundImage: {
        outline: "url('./src/icons/outline.png')"
      }
    },
  },
  plugins: [],
}