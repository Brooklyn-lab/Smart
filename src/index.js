(function ($) {
   let textMore = $(".more");
   let btn = $("#buttonNo");

   $(btn).on("click", function () {
      console.log(1);
      console.log(alert(1));
      $(this).toggleClass("active");
      textMore.toggleClass("active");

   });

})(jQuery);
