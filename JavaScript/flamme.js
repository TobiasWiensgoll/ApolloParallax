$(document).ready(function () {
  var lastScrollTop = 0;
  const $window = $(window);
  $window.on("scroll", function () {
    var st = $(this).scrollTop();

    if (st > lastScrollTop) {
      //Scroll Down aber hier gegen Himmel
      $(".flameStart").removeClass("hidden");
      $(".nurFlamme").removeClass("fadeOut");

      setTimeout(function () {
        $(".flameStart").addClass("hidden");
        $(".nurFlamme").removeClass("hidden");
      }, 500);
    } else {
      //Scroll Up aber hier richtung boden
      console.log("scrolle zurück");
      $(".nurFlamme").addClass("fadeOut");
      $(".FlameStart").addClass("hidden");
      setTimeout(function () {
        $(".nurFlamme").addClass("hidden");
      }, 1000);
    }
    lastScrollTop = st;
  });
});
