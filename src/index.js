(function ($) {
   let textMore = $(".more");
   let btn = $(".header__arrow");
   let arrowLeft = $(".left");
   let arrowRight = $(".right");

   $(arrowLeft).on("click", function () {
   });

   $(arrowRight).on("click", function () {
   });

   $(btn).on("click", function () {
      textMore.toggleClass("active");
      $(this).toggleClass("active");
   });

})(jQuery);

$(document).ready(function () {
   $(".slider").slick( {
      slidesToShow: 1,
      adaptiveHeight: true,
      speed: 1000
   });

   $(".slider").on('afterChange', function(event, slick, currentSlide){
      $("#cp").text(currentSlide + 1);
   });

});