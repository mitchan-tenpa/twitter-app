module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    width: {
      "50": "50px",
      "418": "418px",
      "540": "540px",
      "20%": "20%",
      "30%": "30%",
      "50%": "50%",
      "100%": "100%",
    },
    height: {
      "5%": "5%",
      "10%": "10%",
      "95%": "95%",
      "50": "50px",
      "370": "370px",
      "478": "478px",
      "screen": "100vh",
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}