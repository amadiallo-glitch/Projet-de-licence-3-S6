/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b2752a",
        dark: "#050621",
        success: "#14ae5c",
        warning: "#bf6a02",
        info: "#2b51e8",
      },
      fontFamily: {
        geom: ["Geom", "sans-serif"],
        gravitas: ["Gravitas One", "sans-serif"],
      },
    },
  },
  plugins: [],
}
