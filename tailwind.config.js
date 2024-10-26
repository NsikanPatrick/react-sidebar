/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Add tailwindcss to the following extensions
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        "dark-purple": "#081a51",
        "light-white": "rgba(255, 255, 255, 0.17)",
      },
    },
  },
  plugins: [],
}

