/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans KR'],
      },
      animation: {
        item: 'item 0.8s '
      },
      keyframes: {
        item: {
          '0%' : {
            opacity: 0,
            top: "-100%",
          },
          '100%' : {
            opacity: 100,
            top: 0
          }
        }
      },
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
        "macbook" : "url('../public/images/mackbook.png')",
        "bookbg" : "url('../public/images/bookbg.png')",
      },
      colors: {
        "red": "#ed3140",
        "gray":"#7e7e7e",
        "gray-title":'#d6d4d4',
        "gray-text": '#ababab'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwindcss-animate")
  ],
}
