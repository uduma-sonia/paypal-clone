module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#2c2e2f",
        secondary: "#0070ba",
        dark: "#5c5b5b",
      },
      fontSize: {
        xs: "14px",
        xxs: "12px",
      },
      fontFamily: {
        main: "Open Sans, sans-serif",
      },
      backgroundColor: () => ({
        primary: "#0070ba",
        primarytwo: "#005ea6",
        secondary: "#f7f9fa",
        blue: "#009cde",
      }),
      borderColor: {
        primary: "#0070ba",
        silver: "silver",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
