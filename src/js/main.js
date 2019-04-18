import "jquery";
// importing the carousel js module
import "bootstrap/js/dist/carousel";


import "owl.carousel/dist/owl.carousel";

import App from "./app.js";

$(".owl-carousel").owlCarousel({
   items: 1,
   center: true,
   loop: true,
   nav: false,
   dots: true,
   autoplay: true,
   animateOut: 'fadeOut',
   animateIn: 'fadeIn'
   });
   var owl = $('.owl-carousel');
   owl.owlCarousel();
   owl.on('translate.owl.carousel', function (event) {
   $('.owl-carousel h1').removeClass('animated').hide();
   $('.owl-carousel p').removeClass('animated').hide();
   $('.owl-carousel .boxed-btn').removeClass('animated').hide();
   })
   
   owl.on('translated.owl.carousel', function (event) {
       $('.owl-carousel h1').addClass('animated fadeInUp').show();
       $('.owl-carousel p').addClass('animated fadeInDown').show();
       $('.owl-carousel .boxed-btn').addClass('animated fadeInDown').show();
   }) 