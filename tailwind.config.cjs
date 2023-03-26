/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#56d35a",

          "secondary": "#013e99",

          "accent": "#932705",

          "neutral": "#25293C",

          "base-100": "#FFFFFF",

          "info": "#94A1DB",

          "success": "#1E8F51",

          "warning": "#F5D238",

          "error": "#F05847",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
