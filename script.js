window.onload = function() {
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
        // Toggle mute state
        isMuted = !isMuted;

        if (isMuted) {
            // Mute immediately
            video.muted = true;
        } else {
            // Unmute immediately
            video.muted = false;
        }

        updateButtonText();
    });

    // Initialize button text
    updateButtonText();
};