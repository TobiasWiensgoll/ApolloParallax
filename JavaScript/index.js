$(window).on("scroll", function () {
  $(".ContentContainer").css("bottom", $(window).scrollTop() * -1);
});

function simpleParallax(intensity, element) {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var imgPos = scrollTop / intensity + "px";
    element.css("transform", "translateY(" + imgPos + ")");
  });
}

function simpleParallaxHorizontal(intensity, element) {
  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    var imgPos = scrollTop / intensity + "px";
    element.css("transform", "translateX(" + imgPos + ")");
  });
}

function simpleParallaxSidewards(intensityX, intensityY, element) {
  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    var imgPosX = scrollTop / intensityX + "px";
    var imgPosY = scrollTop / intensityY + "px";
    element.css("transform", "translate(" + imgPosX + ", " + imgPosY + ")");
  });
}
$(document).ready(function () {
  simpleParallax(4, $(".baloon"));
  simpleParallax(2, $(".airplane"));
  simpleParallaxHorizontal(4, $(".airplane"));
  simpleParallax(2, $(".mountain"));
  simpleParallaxSidewards(-2, 4, $(".ShootingStar"));
  simpleParallaxSidewards(4, 4, $(".satellite"));
  simpleParallaxSidewards(4, 4, $(".satelit"));
  simpleParallaxSidewards(2, 2, $(".meteor"));
  simpleParallaxSidewards(2, 2, $(".meteor2"));
});
