/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#263159",
        secondary: "#fff",
        tertiary: "#495579",
        quaternary: "#251749",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
