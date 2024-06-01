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
  // Initialisierung der Parallax-Funktionen
  simpleParallax(4, $(".baloon"));
  simpleParallax(2, $(".airplane"));
  simpleParallaxHorizontal(4, $(".airplane"));
  simpleParallax(2, $(".mountain"));
  simpleParallaxSidewards(-2, 4, $(".ShootingStar"));
  simpleParallaxSidewards(4, 4, $(".satellite"));
  simpleParallaxSidewards(2, 2, $(".meteor"));

  var audioLiftOffPlayed = false;
  var audioMissionPlayed = false;

  // Behandlung des Checkbox-Status
  $('#soundToggle').change(function() {
    if (!this.checked) {
      $('audio').each(function() {
        this.pause();
        this.currentTime = 0;  // Setzt den Sound zurück
      });
      audioLiftOffPlayed = false;
      audioMissionPlayed = false;
    }
  });

  $(window).on("scroll", function () {
    var scrollPos = $(window).scrollTop();

    if ($('#soundToggle').is(':checked')) {
      // Starten des Lift Off Sounds
      if (!audioLiftOffPlayed) {
        var audioLiftOff = document.getElementById("audioLiftOff");
        if (audioLiftOff) {
          audioLiftOff.play().catch((e) => console.log("Error playing Lift Off audio: ", e));
          audioLiftOffPlayed = true;
        }
      }

      // Starten des Mission Sounds bei Erreichen von 3000px
      if (!audioMissionPlayed && scrollPos >= 3000) {
        var audioMission = document.getElementById("audioMission");
        if (audioMission) {
          $("#audioLiftOff").get(0).pause();  // Pausieren des vorherigen Sounds
          $("#audioLiftOff").get(0).currentTime = 0;  // Zurücksetzen des vorherigen Sounds
          audioMission.play().catch((e) => console.log("Error playing Mission audio: ", e));
          audioMissionPlayed = true;
        }
      }
    }
  });
});

  