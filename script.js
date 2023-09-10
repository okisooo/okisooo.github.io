document.addEventListener('DOMContentLoaded', function () {
    // Get the video element
    const video = document.getElementById('background-video');

    // Get the unmute button
    const unmuteButton = document.getElementById('unmute-button');

    // Flag to track mute/unmute state
    let isMuted = true;

    // Add a click event listener to the unmute button
    unmuteButton.addEventListener('click', () => {
        if (isMuted) {
            // Mute immediately
            video.muted = true;
        } else {
            // Unmute immediately
            video.muted = false;
        }

        // Toggle mute state
        isMuted = !isMuted;
    });
});
