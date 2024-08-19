/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center:true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      screens:{
        xxs: "280px",
        xsm: "475px",
        sm: "640px",
        md: "768px",
        lg: "1280px",
        '2xl': "1536px",
      },
    },
  },
  plugins: [],
}

