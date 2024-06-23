//Bewegt die Layern in der dritten Szene horizontal

$(document).ready(function () {
  let $cont = $(".container");
  let $layer = $(".layer");

  $cont.on("scroll", function () {
    let X = $cont.scrollTop();

    $layer.eq(1).css("left", X / 1.7 + "px");
    $layer.eq(3).css("left", X / -10 + "px");
    $layer.eq(5).css("top", X / 20 + "vh");
  });
});
