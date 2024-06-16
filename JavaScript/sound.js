$(document).ready(function () {
  var audioLiftOff = document.getElementById("audioLiftOff");
  var audioMission = document.getElementById("audioMission");
  var isSoundEnabled = false;
  var audioLiftOffPlayed = false;
  var hasScrolled = false;

  var speakerButton = $(".sound-control img");

  // Klick auf den Lautsprecher-Button aktiviert nur die Möglichkeit, Sounds zu spielen
  speakerButton.click(function () {
    if (speakerButton.attr("src").includes("Lautsprecher_aus")) {
      speakerButton.attr("src", "Images/Lautsprecher_an.png");
      isSoundEnabled = true;
      if (hasScrolled) {  // Wenn bereits gescrollt wurde, prüfe, welcher Sound gespielt werden soll
        var currentScrollPosition = $(window).scrollTop();
        determineAndPlaySound(currentScrollPosition);
      }
    } else {
      speakerButton.attr("src", "Images/Lautsprecher_aus.png");
      audioLiftOff.pause();
      audioMission.pause();
      isSoundEnabled = false;
    }
  });

  // Scroll-Event-Handler, der den Sound abspielt, basierend auf der aktuellen Scroll-Position
  $(window).scroll(function () {
    hasScrolled = true;
    var currentScrollPosition = $(window).scrollTop();
    if (isSoundEnabled) {
      determineAndPlaySound(currentScrollPosition);
    }
  });

  function determineAndPlaySound(scrollPosition) {
    if (scrollPosition < 1500 && !audioLiftOffPlayed) {
      playAudioLiftOffOnce();
    } else if (scrollPosition >= 1500 || audioLiftOffPlayed) {
      audioMission.play();
    }
  }

  function playAudioLiftOffOnce() {
    audioLiftOff.play();
    audioLiftOffPlayed = true;
    audioLiftOff.addEventListener('ended', function() {
      audioMission.play();
    }, {once: true});
  }
});
