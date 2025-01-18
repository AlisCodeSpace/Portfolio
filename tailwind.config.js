/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(45, 100%, 72%)",
        gold: "hsl(45, 54%, 58%)",
        smoke: "hsl(0, 0%, 7%)",
        jet: "hsl(0, 0%, 22%)",
        onyx: "hsl(240, 1%, 17%)",
        eerieblack: "hsl(240, 2%, 13%)",
      },
      backgroundColor: {},
      borderColor: {
        "gradient-onyx":
          "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
      },
    },
  },
  plugins: [],
};
