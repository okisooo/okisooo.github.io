$(document).ready(function() {
    const unmuteButton = $('#unmute-button');

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
});
