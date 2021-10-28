module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#10101a",
        lightBlue: "#6BC5F8",
        lightPurple: "rgb(207, 89, 230)",
        purple: "#8000ff",
        nearme1: "#4F60C3",
        nearme2: "#3C46A2",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
