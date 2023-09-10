document.addEventListener('DOMContentLoaded', function () {
    // Get the video element
    const video = document.getElementById('background-video');
    
    // Get the unmute button
    const unmuteButton = document.getElementById('unmute-button');
    
    // Flag to track mute/unmute state
    let isMuted = false;
    
    // Add a click event listener to the mute/unmute button
    unmuteButton.addEventListener('click', () => {
        // Check if the video is muted
        if (isMuted) {
            // Gradually increase the volume over 0.5 seconds
            const fadeDuration = 0.5; // seconds
            const finalVolume = 1; // Full volume
            const initialVolume = 0;
            const volumeIncrement = (finalVolume - initialVolume) / (fadeDuration * 60); // Adjust the divisor for smoother fading
            
            let currentVolume = initialVolume;
            
            const volumeInterval = setInterval(() => {
                if (currentVolume < finalVolume) {
                    currentVolume += volumeIncrement;
                    video.volume = currentVolume;
                } else {
                    clearInterval(volumeInterval);
                    video.muted = false; // Unmute the video when the fade-in is complete
                }
            }, 1000 / 60); // 60 FPS
        } else {
            // Mute immediately
            video.muted = true;
        }
        
        // Toggle mute state
        isMuted = !isMuted;
    });
});
