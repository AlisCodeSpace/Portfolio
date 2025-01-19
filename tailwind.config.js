/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(45, 100%, 72%)",
        gold: "hsl(45, 54%, 58%)",
        "light-gray": "hsla(0, 0%, 84%, 0.7)",
        smoke: "hsl(0, 0%, 7%)",
        jet: "hsl(0, 0%, 22%)",
        onyx: "hsl(240, 1%, 17%)",
        eerieblack: "hsl(240, 2%, 12%)",
      },
      backgroundColor: {
        "gradient-onyx":
          "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
        "gradient-yellow":
          "linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))",
        "gradient-jet":
          "linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)",
      },
      borderColor: {
        "gradient-onyx":
          "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
      },
      boxShadow: {
        dark: "-4px 8px 24px hsla(0, 0%, 0%, 0.125)",
      },
    },
  },
  plugins: [],
};
