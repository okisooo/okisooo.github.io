document.addEventListener('DOMContentLoaded', function () {
    // Get the video element
    const video = document.getElementById('background-video');

    // Get the unmute button
    const unmuteButton = document.getElementById('unmute-button');

    let audioContext; // Declare audioContext variable
    let gainNode; // Declare gainNode variable for volume control

    // Flag to track mute/unmute state
    let isMuted = true;

    // Add a click event listener to the unmute button
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

            // Gradually increase the gain (volume) over 0.5 seconds
            const fadeDuration = 0.5; // seconds

            gainNode.gain.setValueAtTime(0, audioContext.currentTime); // Start with the gain at 0

            gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + fadeDuration); // Linearly ramp the gain to 1 (full volume)

            // Connect the video's audio to the gain node
            const videoAudio = video.captureStream().getAudioTracks()[0];
            const audioSource = audioContext.createMediaStreamSource(new MediaStream([videoAudio]));
            audioSource.connect(gainNode);

            // Unmute the video
            video.muted = false;
        }

        // Toggle mute state
        isMuted = !isMuted;
    });
});
