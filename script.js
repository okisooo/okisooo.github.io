window.onload = function() {
    const unmuteButton = $('#unmute-button');
    const video = document.getElementById('bgvid');
    video.volume = 0;
    let isMuted = video.muted;
    let fadeInterval;

    function updateButtonText() {
        if (isMuted) {
            unmuteButton.text('Unmute');
        } else {
            unmuteButton.text('Mute');
        }
    }

    function fadeVolume(direction) {
        clearInterval(fadeInterval);
        fadeInterval = setInterval(function() {
            if (direction === 'up' && video.volume < 1) {
                video.volume = Math.min(video.volume + 0.1, 1);
            } else if (direction === 'down' && video.volume > 0) {
                video.volume = Math.max(video.volume - 0.1, 0);
            } else {
                clearInterval(fadeInterval);
            }
        }, 50);
    }

    unmuteButton.on('click', function() {
        // Toggle mute state
        isMuted = !isMuted;
    
        if (isMuted) {
            // Fade out volume
            fadeVolume('down');
        } else {
            // Fade in volume
            fadeVolume('up');
        }
    
        updateButtonText();
    });

    // Initialize button text
    updateButtonText();
};