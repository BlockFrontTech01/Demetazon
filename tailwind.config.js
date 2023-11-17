/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "rgba(245, 245, 245, 0.15)",
        },
        black: "#000",
        gray: {
          "100": "rgba(255, 255, 255, 0.3)",
          "200": "rgba(255, 255, 255, 0.5)",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        white: "#fff",
        darkslategray: "#00352a",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        "inknut-antiqua": "'Inknut Antiqua'",
      },
      borderRadius: {
        "3xs": "10px",
        "31xl": "50px",
      },
    },
    fontSize: {
      mini: "15px",
      mid: "17px",
      xl: "20px",
      xs: "12px",
      "11xl": "30px",
      lgi: "19px",
      lg: "18px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
