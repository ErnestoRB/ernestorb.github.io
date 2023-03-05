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
    fontFamily: {
      staatliches: "'Staatliches'",
      bebas: "'Bebas'",
      quicksand: "'Quicksand'",
    },
    keyframes: {
      glow: {
        from: {
          transform: "scale(100%) rotate(3deg)",
        },
        to: {
          transform: "scale(110%) rotate(2deg)",
        },
      },
    },
    animation: {
      glow: "glow 3s linear infinite alternate-reverse",
    },
    colors: {
      white: "#FFF",
      black: "#000",
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
      rose: {
        1: "#e73677",
        2: "#e72f72",
        3: "#db1a61",
        4: "#d40f57",
      },
      purple: {
        1: "#9226ff",
        2: "#850aaf",
        3: "#7000e0",
      },
      green: {
        1: "#2bcaad",
        2: "#26b399",
        3: "#24a890",
      },
    },
  },
  plugins: [],
};
