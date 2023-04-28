// 區塊 wrapper
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

// 顧客 customers
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

// gallary
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});