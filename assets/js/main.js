(function ($) {
  "use strict";
  jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("sticky-nav");
    } else {
      $(".navbar-area").removeClass("sticky-nav");
    }
  });
  $(".nav-side .search-box i").on("click", function () {
    $(".search-overlay").toggleClass("search-overlay-active");
  });
  $(".search-close").on("click", function () {
    $(".search-overlay").removeClass("search-overlay-active");
  });
  $(".banner-slider").owlCarousel({
    loop: true,
    margin: -1,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    autoHeight: true,
    autoplayHoverPause: true,
  });
  $(".case-study-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 3 },
      1200: { items: 4 },
    },
  });
  $(".brand-slider").owlCarousel({
    loop: true,
    margin: 60,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      600: { items: 2 },
      700: { items: 3 },
      1024: { items: 5 },
    },
  });
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: { 0: { items: 1 }, 992: { items: 2 } },
    navText: [
      "<i class='far fa-angle-left'></i>",
      "<i class='far fa-angle-right'></i>",
    ],
  });
  $(".popup-btn").magnificPopup({
    disableOn: 320,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $("select").niceSelect();
  $(".accordion")
    .find(".accordion-title")
    .on("click", function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle("fast");
      $(".accordion-content").not($(this).next()).slideUp("fast");
      $(".accordion-title").not($(this)).removeClass("active");
    });
  new WOW().init();
  $(window).on("load", function () {
    $(".preloader").fadeOut(500);
  });
  $(".counter").counterUp({ delay: 10, time: 4000 });
  $("body").append("<div class='go-top'><i class='far fa-arrow-up'></i></div>");
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 600) $(".go-top").addClass("active");
    if (scrolled < 600) $(".go-top").removeClass("active");
  });
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 50);
  });
  function makeTimer() {
    var endTime = new Date("December 30, 2023 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }

  // $(document).ready(function() {
  //   activeLink()
  // });

  // function activeLink(){
  //   $(' .navbar-nav .nav-item a').click(function() {
  //     $(this).closest('.nav-item').addClass('active')
  //     $(this).closest('.nav-item').siblings().removeClass('active')
  //   })
  // }

  setInterval(function () {
    makeTimer();
  }, 300);
})(jQuery);

// const activePage = window.location.pathname;
// console.log(activePage)

// const navLinks = document.querySelectorAll('nav a').
// forEach(link=> {
//   if(link.href.includes(`${activePage}`)){
//     link.classList.add('active')
//   }
// })

// const activeLink = document.querySelectorAll('.navbar .navbar-nav .nav-item a').
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
  
// }

const currentLocation = location.href;
const menuItem = document.querySelectorAll('.navbar-nav .nav-item a');
const menuLength = menuItem.length
for(let i = 0 ; i<menuLength; i++){
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active"
  }
}