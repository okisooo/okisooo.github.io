$(document).ready(function() {
    const unmuteButton = $('#unmute-button');
    const video = document.getElementById('bgvid');
    let isMuted = video.muted;

    function updateButtonText() {
        if (isMuted) {
            unmuteButton.text('Unmute');
        } else {
            unmuteButton.text('Mute');
        }
    }

    unmuteButton.on('click', function() {
        if (isMuted) {
            // Unmute immediately
            video.muted = false;
        } else {
            // Mute immediately
            video.muted = true;
        }

        // Toggle mute state
        isMuted = !isMuted;

        updateButtonText();
    });

    // Initialize button text
    updateButtonText();
});