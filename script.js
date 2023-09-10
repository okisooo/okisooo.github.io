document.addEventListener('DOMContentLoaded', function () {
    // Get the video element
    const video = document.getElementById('background-video');

    // Get the unmute button
    const unmuteButton = document.getElementById('unmute-button');

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

    // Initial text setup
    updateButtonText();

    // Add a click event listener to the unmute button
    unmuteButton.addEventListener('click', () => {
        if (isMuted) {
            // Unmute immediately
            video.muted = false; // Set video.muted to false to unmute
        } else {
            // Mute immediately
            video.muted = true;
        }

        // Toggle mute state
        isMuted = !isMuted;

        // Update the button text
        updateButtonText();
    });

    const fadingText = document.getElementById('fading-text');

    // Show the text after a delay
    setTimeout(() => {
        fadingText.style.animation = 'fadeinout 6s cubic-bezier(0.77, 0, 0.175, 1) 3s forwards, sizechange 6s cubic-bezier(0.77, 0, 0.175, 1) 3s both';
    }, 3000); // Show after 3 seconds
    
    // Hide the text after another delay
    setTimeout(() => {
        fadingText.style.animation = 'fadeinout 6s cubic-bezier(0.77, 0, 0.175, 1) reverse 3s forwards, sizechange 6s cubic-bezier(0.77, 0, 0.175, 1) reverse 3s both';
    }, 6000); // Hide after 6 seconds
    


});


