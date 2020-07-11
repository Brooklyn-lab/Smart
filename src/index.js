(function ($) {
   let textMore = $(".more");
   let btn = $(".header__arrow");

   $(btn).on("click", function () {
      textMore.toggleClass("active");
      $(this).toggleClass("active");
   });

})(jQuery);

$(document).ready(function () {
   $(".slider").slick({
      slidesToShow: 1,
      adaptiveHeight: true,
      speed: 1000,
      centerMode: true,
      variableWidth: true
   });

   $(".slider").on('afterChange', function (event, slick, currentSlide) {
      $("#cp").text(currentSlide + 1);
   });

});