$(document).ready(function () {
    simpleParallax(4, $(".baloon"));
    simpleParallax(2, $(".airplane"));
    simpleParallaxHorizontal(4, $(".airplane"));
    simpleParallax(2, $(".mountain"));
    simpleParallaxSidewards(-2, 4, $(".ShootingStar"));
    simpleParallaxSidewards(4, 4, $(".satellite"));
    simpleParallaxSidewards(4, 4, $(".satelit"));
    simpleParallaxSidewards(2, 2, $(".meteor"));
  
    var audioLiftOff = document.getElementById("audioLiftOff");
    var audioMission = document.getElementById("audioMission");
    var isAudioPlaying = false;
  
    $('#soundToggle').change(function() {
      if (!this.checked) {
        audioLiftOff.pause();
        audioMission.pause();
        isAudioPlaying = false;
      }
    });
  
    $(window).on("scroll", function () {
      if ($('#soundToggle').is(':checked') && !isAudioPlaying) {
        manageAudio($(window).scrollTop());
      }
    });
  
    function manageAudio(scrollPos) {
      isAudioPlaying = true;  // Setze, dass Audio gerade gespielt wird
      if (scrollPos < 1000) {
        setAudioPosition(audioLiftOff, scrollPos, 1000);
        audioMission.pause();
      } else {
        setAudioPosition(audioMission, scrollPos - 1000, 4000);
        audioLiftOff.pause();
      }
    }
  
    function setAudioPosition(audio, scrollPos, maxScroll) {
      // Berechne die Position im Audio basierend auf der Scroll-Position
      var duration = audio.duration;
      var time = (scrollPos / maxScroll) * duration;
      if (audio.paused) {
        audio.currentTime = time;
        audio.play();
      } else if (Math.abs(audio.currentTime - time) > 1) {
        // Aktualisiere die Zeit nur, wenn die Differenz mehr als eine Sekunde beträgt
        audio.currentTime = time;
      }
    }
  });
  