/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "5rem",
          xl: "6rem",
        },
      },
      boxShadow: {
        "all-sides":
          "2px 2px 10px rgba(0, 99, 230, 0.5), 0 0 10px rgba(0, 99, 230, 0.5)",
        purple:
          "2px 2px 10px rgba(169, 117, 255, 0.4), 0 0 10px rgba(169, 117, 255, 0.4)",
        green:
          "2px 2px 10px rgba(164, 239, 25, 0.349), 0 0 10px rgba(164, 239, 25, 0.349)",
      },
      fontFamily: {
        Afacad: ["Afacad", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
