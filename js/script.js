// 頁頭 head
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", mobilemenu);

function mobilemenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

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

// 倒數 timer
$('#time').countdown('2024/01/01', function (event) {
  $(this).html(event.strftime(
    '<div class="clock"><span>%d</span> <p>Days</p></div> ' +
    '<div class="clock"><span>%H</span> <p>Hours</p></div> ' +
    '<div class="clock"><span>%M</span> <p>Minutes</p></div> ' +
    '<div class="clock"><span>%S</span> <p>Seconds</p></div> '
  ));
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
$('.gallary').owlCarousel({
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















































