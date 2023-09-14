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

    // Function to fade in the text
    function fadeInText() {
        fadingText.style.opacity = '1';
    }

    // Function to fade out and remove the text
    function fadeOutText() {
        fadingText.style.opacity = '0';
        
        // Remove the text element from the DOM after it fades out
        setTimeout(() => {
            fadingText.style.display = 'none';
        }, 6000); //
    }

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


video.addEventListener('loadeddata', function () {
    // Show the text after a delay
    setTimeout(() => {
        fadeInText();
    }, 7000); // 
    
    // Hide the text after another delay
    setTimeout(() => {
        fadeOutText();
    }, 9000); //
});

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is not active, pause animations and video here
        fadingText.style.animationPlayState = 'paused';
        video.pause();
    } else {
        // Page is active again, resume animations and video here
        fadingText.style.animationPlayState = 'running';
        video.play();
    }
});


});
