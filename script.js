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
        fadingText.style.opacity = '1';
    }, 3000); // Show after 3 seconds
    
    // Hide the text after another delay
    setTimeout(() => {
        fadingText.style.opacity = '0';
        
        // Remove the text element from the DOM after it fades out
        setTimeout(() => {
            fadingText.style.display = 'none';
        }, 6000); 
    }, 6000); // Hide after 6 seconds
    


});


