document.addEventListener('DOMContentLoaded', function () {
    // Get the video element and audio context
    const video = document.getElementById('background-video');
    let audioContext; // Declare audioContext variable
    let gainNode; // Declare gainNode variable for volume control

    // Get the unmute button
    const unmuteButton = document.getElementById('unmute-button');

    // Flag to track mute/unmute state
    let isMuted = true;

    // Add a click event listener to the mute/unmute button
    unmuteButton.addEventListener('click', () => {
        if (isMuted) {
            // Mute immediately
            video.muted = true;
        } else {
            // Unmute with fade effect
            if (!audioContext) {
                // Create the audio context (only on the first unmute)
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                gainNode = audioContext.createGain(); // Create gain node for volume control
                gainNode.connect(audioContext.destination); // Connect gain node to audio context
            }

            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }

            // Gradually increase the gain (volume) over 0.5 seconds
            const fadeDuration = 0.5; // seconds
            const currentTime = audioContext.currentTime;

            // Start with the gain at 0
            gainNode.gain.setValueAtTime(0, currentTime);

            // Linearly ramp the gain to 1 (full volume) over the specified duration
            gainNode.gain.linearRampToValueAtTime(1, currentTime + fadeDuration);

            // Connect the video's audio to the gain node
            video.audioTracks[0].setSinkId(gainNode);

            // Unmute the video
            video.muted = false;
        }

        // Toggle mute state
        isMuted = !isMuted;
    });
});
