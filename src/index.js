$(document).ready(function () {
   //-----------------Burger------------------------
   $(".header__button").click(function () {
      $("body").toggleClass("lock");
      $(".header__menu, .header__button").toggleClass("active");
   });

   //----------menu Scroll------------------------
   $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $("html,body")
         .stop()
         .animate({ scrollTop: $($(this).attr("href")).offset().top }, 600);
   });

   //---------More text button-----------
   let textMore = $(".more");
   let btn = $(".header__arrow");

   $(btn).on("click", function () {
      textMore.toggleClass("activeMore");
      $(this).toggleClass("active");
   });

   // --------- Slaider -----------
   $('.slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true
   });

   $(".slider").on('afterChange', function (event, slick, currentSlide) {
      $("#cp").text(currentSlide + 1);
   });
});