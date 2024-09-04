document.addEventListener("DOMContentLoaded", function () {
  // loader
  (() => {
    const loader = document.querySelector("#loader");
    setTimeout(() => {
      loader?.classList.add("load");
    }, 250);
  })();

  // header heihgt
  (() => {
    const header = document.querySelector(".header");
    if (header) {
      document.documentElement.style.setProperty("--headerHeight", `${header.clientHeight}px`);
    } else return
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
    } else return
  })();

  // catalog menu list
  (() => {
    const menu = document.querySelector("#catalog-list");
    if (menu) {
      menu.addEventListener("click", (e) => {
        if (e.target.nodeName === "A" && e.target.nextElementSibling.nodeName === "UL") {
          e.preventDefault();
          e.stopPropagation();
          let target = e.target;
          target.parentNode.classList.toggle("active");
        }
      })
    } else return
  })();

  // tabs
  document.querySelectorAll('.tabs').forEach((tabsContainer, containerIndex) => {
    const tabs = tabsContainer.querySelectorAll('[role="tab"]');
    const tabPanels = tabsContainer.querySelectorAll('[role="tabpanel"]');
  
    tabs.forEach((tab, index) => {
      const panelId = `tabpanel${containerIndex}-${index}`;
      const tabId = `tab${containerIndex}-${index}`;
      
      tab.setAttribute('href', `#${panelId}`);
      tab.setAttribute('aria-controls', panelId);
      tab.setAttribute('id', tabId);
      
      tabPanels[index].setAttribute('id', panelId);
      tabPanels[index].setAttribute('aria-labelledby', tabId);
    });
  
    tabs.forEach(tab => {
      tab.addEventListener('click', event => {
        event.preventDefault();
  
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        tab.setAttribute('aria-selected', 'true');
  
        tabPanels.forEach(panel => panel.hidden = true);
        const targetPanel = tabsContainer.querySelector(tab.getAttribute('href'));
        targetPanel.hidden = false;
      });
    });
  });  

  // swipers
  var swiper = new Swiper(".about-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var productSwiper = new Swiper(".product-swiper--thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var productSwiper2 = new Swiper(".product-swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: productSwiper,
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
