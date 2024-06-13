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
  var isSoundEnabled = false;
  var audioMissionStarted = false;

  var speakerButton = $(".sound-control img");

  speakerButton.click(function () {
    if (speakerButton.attr("src").includes("Lautsprecher_aus")) {
      speakerButton.attr("src", "Images/Lautsprecher_an.png");
      isSoundEnabled = true;
      audioMissionStarted = false;
    } else {
      speakerButton.attr("src", "Images/Lautsprecher_aus.png");
      audioLiftOff.pause();
      audioMission.pause();
      isSoundEnabled = false;
      audioMissionStarted = false;
    }
  });

  $(window).on(
    "scroll",
    debounce(function () {
      var scrollPos = $(window).scrollTop();
      if (isSoundEnabled) {
        manageAudio(scrollPos);
      }
    }, 50)
  );

  function manageAudio(scrollPos) {
    if (scrollPos < 1500) {
      setAudioPosition(audioLiftOff, scrollPos, 1500);
      if (scrollPos >= 1500) {
        audioLiftOff.pause(); // Pausiert den audioLiftOff bei 1000 Pixeln
      }
    } else {
      if (!audioMissionStarted) {
        audioMission.currentTime = 0;
        audioMission.play();
        audioMissionStarted = true;
      }
      audioLiftOff.pause(); // Sicherstellen, dass audioLiftOff pausiert ist, wenn audioMission spielt
    }
  }

  function setAudioPosition(audio, scrollPos, maxScroll) {
    var duration = audio.duration;
    var time = (scrollPos / maxScroll) * duration;
    if (Math.abs(audio.currentTime - time) > 1) {
      audio.currentTime = time;
    }
    if (audio.paused) {
      audio.play();
    }
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }
});
