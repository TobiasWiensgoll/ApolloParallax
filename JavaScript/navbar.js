$(document).ready(function () {
  const $body = $("body");
  let lastScroll = 0;

  $(window).on("scroll", () => {
    let currentscroll = $(window).scrollTop();

    if (currentscroll <= 0) {
      $body.removeClass("scroll-up");
    }
    if (currentscroll > lastScroll && !$body.hasClass("scroll-down")) {
      $body.removeClass("scroll-up").addClass("scroll-down");
    }
    if (currentscroll < lastScroll && $body.hasClass("scroll-down")) {
      $body.removeClass("scroll-down").addClass("scroll-up");
    }

    lastScroll = currentscroll;
  });
});
