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
  simpleParallaxSidewards(2, 2, $(".meteor"));

  // Setup initial volume from the slider
  var volume = $("#volumeSlider").val();
  $("audio").each(function () {
    this.volume = volume;
  });

  // Update volume on slider change
  $("#volumeSlider").on("input", function () {
    var volume = $(this).val();
    $("audio").each(function () {
      this.volume = volume;
    });
  });

  var audioLiftOffPlayed = false;
  var audioMissionPlayed = false;

  // Initialisiert den Audio-Start bei der ersten Scroll-Aktion
  $(window).one("scroll", function () {
    if (!audioLiftOffPlayed) {
      var audioLiftOff = document.getElementById("audioLiftOff");
      if (audioLiftOff) {
        audioLiftOff
          .play()
          .catch((e) => console.log("Error playing Lift Off audio: ", e));
        audioLiftOffPlayed = true;
      }
    }

    // Weiteres Scroll-Event für Wechsel zum Missions-Sound
    $(window).on("scroll", function () {
      var scrollPos = $(window).scrollTop();
      if (!audioMissionPlayed && scrollPos >= 3000) {
        var audioMission = document.getElementById("audioMission");
        if (audioMission) {
          $("#audioLiftOff").get(0).pause();
          $("#audioLiftOff").get(0).currentTime = 0;
          audioMission
            .play()
            .catch((e) => console.log("Error playing Mission audio: ", e));
          audioMissionPlayed = true;
        }
      }
    });
  });
});
