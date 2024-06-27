window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY; // Aktuelle Scrollposition
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Gesamte Scrollhöhe
    var scrollPercent = scrollTop / docHeight; // Scrollprozentsatz

    var containerHeight = document.querySelector('.loadContainer').clientHeight;//die Höhe des Ladebalkens wird abgerufen
    var fillerHeight = containerHeight * scrollPercent; //Höhe des fillers wird berechnet
    document.querySelector('.filler').style.height = fillerHeight+'px'; // Setzen der neuen Höhe des Füllers

    var maxScroll = containerHeight - document.querySelector('.scrolling-image').clientHeight;
    var imageTop = maxScroll * scrollPercent;
    document.querySelector('.scrolling-image').style.bottom = imageTop + 'px'; // Setzen der neuen Position des Bildes

    // Timer aktualisieren
    var timerElement = document.querySelector('.timer');

    var totalMinutes = Math.floor(scrollPercent * 76 * 60);//proportionale Anzahl der gesamten Minuten basierend auf der Scrollposition 
    var hours = Math.floor(totalMinutes / 60); //berechnen der Stunden
    var minutes = totalMinutes % 60; //berechnen der verbleibenden Minuten

    var formattedTime = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2); //Darstellung der Zeit als HH:MM
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