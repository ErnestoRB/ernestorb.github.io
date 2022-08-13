const colors = require("tailwindcss/colors");

// https://maketintsandshades.com/#CD4197,4DB6EA,d41515

module.exports = {
  extend: {
    maxWidth: {
      80: "80%",
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      rose: {
        100: "#e6a0cb",
        200: "#e18dc1",
        300: "#dc7ab6",
        400: "#d767ac",
        500: "#d254a1",
        600: "#cd4197",
        700: "#b93b88",
        800: "#a43479",
      },
      blue: {
        800: "#3e92bb",
        700: "#45a4d3",
        600: "#4db6ea",
        500: "#5fbdec",
        400: "#71c5ee",
        300: "#82ccf0",
        200: "#94d3f2",
        100: "#a6dbf5",
      },
      gray: {
        800: "#2D2D2D",
        700: "#343434",
        600: "#3D3D3D",
        500: "#4A4A4A",
        400: "#686868",
        300: "#848484",
        200: "#999999",
        100: "#B0B0B0",
      },
      red: {
        800: "#550808",
        700: "#6a0b0b",
        600: "#7f0d0d",
        500: "#940f0f",
        400: "#aa1111",
        300: "#bf1313",
        200: "#d41515",
        100: "#d82c2c",
      },
      green: colors.green,
    },
  },
  plugins: [],
};
