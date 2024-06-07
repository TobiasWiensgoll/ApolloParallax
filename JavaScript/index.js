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

