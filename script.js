document.addEventListener('DOMContentLoaded', function () {
    // Get the video element
    const video = document.getElementById('background-video');

    // Get the unmute button
    const unmuteButton = document.getElementById('unmute-button');

    // Initialize the button text based on the initial muted state
    unmuteButton.textContent = video.muted ? 'Unmute' : 'Mute';

    // Add a click event listener to the unmute button
    unmuteButton.addEventListener('click', () => {
        // Toggle the video's muted state
        video.muted = !video.muted;

        // Update the button text based on the muted state
        unmuteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });
});
