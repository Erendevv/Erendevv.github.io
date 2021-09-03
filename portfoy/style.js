$(function () {
   $(window).on('scroll', function () {
      if ($(window).scrollTop()>1) {
         $('.navbar').addClass('solid');
         $('nav li a').addClass('color');
      }
      else {
         $('.navbar').removeClass('solid');
         $('nav li a').removeClass('color');
      }
   });
});
$(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

   $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 1000);
});