document.addEventListener('DOMContentLoaded', function () {
    // Get the video element and audio context
    const video = document.getElementById('background-video');
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

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
            const audioElement = video.querySelector('audio');
            const audioSource = audioContext.createMediaElementSource(audioElement);
            const gainNode = audioContext.createGain();

            // Connect the audio source to the gain node
            audioSource.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // Gradually increase the gain (volume) over 0.5 seconds
            const fadeDuration = 0.5; // seconds
            const finalVolume = 1; // Full volume
            const currentTime = audioContext.currentTime;

            gainNode.gain.setValueAtTime(0, currentTime);
            gainNode.gain.linearRampToValueAtTime(finalVolume, currentTime + fadeDuration);

            // Unmute the video
            video.muted = false;
        }

        // Toggle mute state
        isMuted = !isMuted;
    });
});
