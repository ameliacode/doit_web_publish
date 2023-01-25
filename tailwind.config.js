/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image" : "url('../public/images/menu_bg1.png')",
        "menu1-image" : "url('../public/images/content_bg1.png')",
        "menu2-image" : "url('../public/images/content_bg2.png')",
        "menu3-image" : "url('../public/images/content_bg3.png')",
        "menu4-image" : "url('../public/images/content_bg4.png')",
        "icon1-image" : "url('../public/images/main_ico1.png')",
        "icon2-image" : "url('../public/images/main_ico2.png')",
        "icon3-image" : "url('../public/images/main_ico3.png')",
        "icon4-image" : "url('../public/images/main_ico4.png')",
      },
      colors: {
        "red": "#ed3140",
        "gray":"#7e7e7e",
      }
    },
  },
  plugins: [],
}
