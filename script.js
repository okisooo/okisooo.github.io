document.addEventListener('DOMContentLoaded', function () {
    // Get the video element
    const video = document.getElementById('background-video');

    // Get the unmute button
    const unmuteButton = document.getElementById('unmute-button');

    // Add a click event listener to the unmute button
    unmuteButton.addEventListener('click', () => {
        // Toggle the video's muted state
        video.muted = !video.muted;

        // Update the button text based on the muted state
        if (video.muted) {
            unmuteButton.textContent = 'Unmute';
        } else {
            unmuteButton.textContent = 'Mute';
        }
    });
});
