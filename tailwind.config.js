/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui,],
  daisyui: {
    themes: ["winter", "luxury"],
    darkTheme: "luxury", 
    base: true,
    styled: true,
    utils: true,
    prefix: "", 
    logs: true,
    themeRoot: ":root"
  },
}



