document.addEventListener("DOMContentLoaded", function () {
  console.log("load")

  // swipers
  var swiper = new Swiper(".about-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // tailwind config
  tailwind.config = {
    theme: {
      extend: {
        container: {
          center: true,
          padding: '12px',
        },
        screens: {
          xs: "575px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          '2xl': "1344px",
        }
      }
    }
  }
})