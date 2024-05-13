


// animate on scroll

/**
  * Animation on scroll function and init
  */
function aos_init() {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

