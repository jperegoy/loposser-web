module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
