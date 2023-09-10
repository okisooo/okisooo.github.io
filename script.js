// Get the video element
const video = document.getElementById('background-video');

// Get the unmute button
const unmuteButton = document.getElementById('unmute-button');

// Add a click event listener to the unmute button
unmuteButton.addEventListener('click', () => {
    // Check if the video is muted
    if (video.muted) {
        // Unmute the video
        video.muted = false;
        unmuteButton.style.display = 'none'; // Hide the unmute button
    }
});
