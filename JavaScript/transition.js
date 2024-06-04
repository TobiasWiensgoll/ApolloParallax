$(document).ready(function () {
  const $window = $(window);
  const $contentContainer = $(".ContentContainer");
  const $newBackground = $(".Scene3");

  $window.on("scroll", function () {
    const scrollTop = $window.scrollTop();
    const contentHeight = $contentContainer.outerHeight();
    const windowHeight = $window.height();

    if (scrollTop < contentHeight - windowHeight) {
      $contentContainer.css("bottom", scrollTop * -1);
      $newBackground.hide();
      $(".rocket").removeClass("fadeOut");
      $(".rocket").show();
      $(".Flame").show();
    } else {
      // Wenn das Ende des ContentContainers erreicht ist
      $contentContainer.css("bottom", (contentHeight - windowHeight) * -1);
      $(".rocket").addClass("fadeOut");
      $(".Flame").hide();

      // Neue Scroll-Effekt-Logik für den newBackground
      $newBackground.show(); // Start animation
    }
  });
});
