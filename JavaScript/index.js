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
