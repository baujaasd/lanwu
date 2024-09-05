/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.pug',  // Указываем путь к Pug-файлам
    './src/**/*.html', // Если есть HTML-файлы
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "12px",
      },
      screens: {
        xs: "575px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1344px",
      },
    },
  },
  plugins: [],
}
