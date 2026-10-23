/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          500: "#1d4ed8",
          700: "#1e3a8a",
        },
        late: "#b45309",
        offline: "#6b7280",
      },
      borderRadius: {
        card: "6px",
      },
    },
  },
  plugins: [],
};
