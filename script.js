document.addEventListener('DOMContentLoaded', function () {
    // Get the video element
    const video = document.getElementById('background-video');

    // Get the unmute button
    const unmuteButton = document.getElementById('unmute-button');

    // Get the fading text element
    const fadingText = document.getElementById('fading-text');

    // Flag to track mute/unmute state
    let isMuted = true;

    // Function to update the button text
    function updateButtonText() {
        if (isMuted) {
            unmuteButton.innerText = 'Unmute';
        } else {
            unmuteButton.innerText = 'Mute';
        }
    }

    // Function to animate the fading text
    function animateText() {
        // Set the initial styles
        fadingText.style.opacity = '0';
        fadingText.style.textShadow = '0px 0px 20px rgba(128, 0, 128, 0.5)';
        fadingText.style.fontSize = '72px';
        fadingText.style.transition = 'opacity 1s ease, font-size 3s ease';

        // Start the animation
        setTimeout(() => {
            fadingText.style.opacity = '1';
            fadingText.style.fontSize = '48px';
        }, 3000); // Fade in and change font size after 3 seconds

        setTimeout(() => {
            fadingText.style.fontSize = '24px';
        }, 9000); // Change font size after 9 seconds

        setTimeout(() => {
            fadingText.style.opacity = '0';
        }, 11000); // Fade out after 11 seconds
    }

    // Add a click event listener to the unmute button
    unmuteButton.addEventListener('click', () => {
        if (isMuted) {
            // Unmute immediately
            video.muted = false;
        } else {
            // Mute immediately
            video.muted = true;
        }

        // Toggle mute state
        isMuted = !isMuted;

        // Update the button text
        updateButtonText();
    });

    // Show and animate the text after a delay
    animateText();
});
