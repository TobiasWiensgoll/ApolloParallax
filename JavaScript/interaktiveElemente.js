window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY; // Aktuelle Scrollposition
    var docHeight = document.documentElement.scrollHeight - window.innerHeight; // Gesamte Scrollhöhe
    var scrollPercent = scrollTop / docHeight; // Scrollprozentsatz

    var containerHeight = document.querySelector('.loadContainer').clientHeight;
    var fillerHeight = containerHeight * scrollPercent;
    document.querySelector('.filler').style.height = fillerHeight+'px'; // Setzen der neuen Höhe des Füllers

    var maxScroll = containerHeight - document.querySelector('.scrolling-image').clientHeight;
    var imageTop = maxScroll * scrollPercent;
    document.querySelector('.scrolling-image').style.bottom = imageTop + 'px'; // Setzen der neuen Position des Bildes

    // Timer aktualisieren
    var timerElement = document.querySelector('.timer');
    var totalSeconds = Math.floor(scrollPercent * 76 * 3600); // 76 Stunden in Sekunden

    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);

    var formattedTime = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
    timerElement.textContent = formattedTime;
});

    var img = document.querySelector('.vollbildButton');

    img.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            // fullscreen starten
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) { // Firefox
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullscreen) { // Chrome, Safari und Opera
                docElm.webkitRequestFullscreen();
            } else if (docElm.msRequestFullscreen) { // IE/Edge
                docElm.msRequestFullscreen();
            }
        } else {
            //fullscreen beenden
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari und Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    });