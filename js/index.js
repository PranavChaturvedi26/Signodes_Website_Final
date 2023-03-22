const bgimg = document.querySelector(".banner");
var images = new Array(
  "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(../assets/Bg/1.JPG)",
  "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(../assets/Bg/2.JPG)",
  "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(../assets/Bg/3.JPG)",
  "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(../assets/Bg/4.JPG)",
  "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(../assets/Bg/5.JPG)"
);
var len = images.length;
var i = 0;
function sliderBody() {
  if (i > len - 1) {
    i = 0;
  }
  bgimg.style.backgroundImage = images[i];
  i++;
  setTimeout("sliderBody()", 4000);
}
// sliderBody();

(function ($) {
  "use strict";

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      $this.find(".dropdown-menu").removeClass("show");
    }
  );
})(jQuery);
