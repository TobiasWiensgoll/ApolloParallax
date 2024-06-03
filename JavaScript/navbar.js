$(document).ready(function () {
  const $body = $("body");
  let lastScroll = 0;
  const $window = $(window);
  const $contentContainer = $(".ContentContainer");
  const $newBackground = $(".Scene3");

  $(window).on("scroll", () => {
    const scrollTop = $window.scrollTop();
    const contentHeight = $contentContainer.outerHeight();
    const windowHeight = $window.height();
    let currentscroll = $(window).scrollTop();

    if (scrollTop < contentHeight - windowHeight) {
      if (currentscroll <= 0) {
        $body.removeClass("scroll-up");
      }
      if (currentscroll > lastScroll && !$body.hasClass("scroll-down")) {
        $body.removeClass("scroll-up").addClass("scroll-down");
      }
      if (currentscroll < lastScroll && $body.hasClass("scroll-down")) {
        $body.removeClass("scroll-down").addClass("scroll-up");
      }
    } else {
      $body.removeClass("scroll-down").removeClass("scroll-up");
    }

    lastScroll = currentscroll;
  });
});
