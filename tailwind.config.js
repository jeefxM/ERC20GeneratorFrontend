/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        196: "43.75rem",
        110: "37rem",
      },
      fontSize: {
        xss: "0.5rem",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
