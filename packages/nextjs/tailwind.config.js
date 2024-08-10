/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [nextui(), require("daisyui")],
  darkTheme: "dark",
  darkMode: ["class", "[data-theme='dark']"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#93BBFB",
          "primary-content": "#212638",
          secondary: "#DAE8FF",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#212638",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f4f8ff",
          "base-300": "#DAE8FF",
          "base-400": "#FF7F50",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",
        },
      },
      {
        dark: {
          primary: "#212638",
          "primary-content": "#F9FBFF",
          secondary: "#323f61",
          "secondary-content": "#F9FBFF",
          accent: "#4969A6",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#385183",
          "base-200": "#2A3655",
          "base-300": "#212638",
          "base-400": "#FF7F50",
          "base-content": "#F9FBFF",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        "card-bg": "#d4eaf7", // Fondo claro de tarjetas o secciones
        "sidebar-bg": "#b6ccd8", // Fondo de la barra lateral
        "header-text": "#3b3c3d", // Texto en el encabezado o elementos destacados
        "button-bg": "#71c4ef", // Fondo de los botones principales
        "button-hover": "#00668c", // Color de fondo de los botones al pasar el ratón (hover)
        "main-text": "#1d1c1c", // Color principal del texto
        "secondary-text": "#313d44", // Texto secundario
        "app-background": "#f5f4f1", // Fondo principal de la aplicación
        "section-bg": "#fffefb", // Fondo de secciones o contenedores
        "border-color": "#cccbc8", // Bordes o fondos sutiles
      },
    },
  },
};
