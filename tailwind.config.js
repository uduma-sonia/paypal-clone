module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#2c2e2f",
        secondary: "#0070ba",
        dark: "#5c5b5b",
        gray: "#6c7378",
      },
      fontSize: {
        xs: "14px",
        xxs: "12px",
        xls: "13px",
      },
      fontFamily: {
        main: "Open Sans, sans-serif",
      },
      backgroundColor: () => ({
        primary: "#0070ba",
        primarytwo: "#005ea6",
        secondary: "#f7f9fa",
        blue: "#009cde",
        gray: "#e1e7eb",
        graytwo: "#d2dbe1",
      }),
      borderColor: {
        primary: "#0070ba",
        silver: "silver",
        input: "#9da3a6",
      },
      height: {
        xl: "545px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
