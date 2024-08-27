document.addEventListener("DOMContentLoaded", function () {
  // loader
  (() => {
    const loader = document.querySelector("#loader");
    setTimeout(() => {
      loader?.classList.add("load");
    }, 250);
  })();

  // to top
  (() => {
    const btn = document.getElementById("to_top");
    if (btn) {
      window.addEventListener("scroll", () => {
        window.scrollY > window.innerHeight
          ? btn.classList.add("show")
          : btn.classList.remove("show");
      });
      btn.addEventListener("click", () => {
        window.scrollTo(0, 0);
      });
    }
  })();

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
  };
});
