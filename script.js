$(document).ready(function() {
  // Get the video element
  const video = $('#background-video')[0]; // Use [0] to access the DOM element

  // Get the unmute button
  const unmuteButton = $('#unmute-button');

  // Get the fading text element
  const fadingText = $('#fading-text');

  // Flag to track mute/unmute state
  let isMuted = true;

  // Function to update the button text
  function updateButtonText() {
    if (isMuted) {
      unmuteButton.text('Unmute');
    } else {
      unmuteButton.text('Mute');
    }
  }

  // Function to animate the fading text
  function animateText() {
    // Set the initial styles
    fadingText.css('opacity', '0');
    fadingText.css('text-shadow', '0px 0px 20px rgba(128, 0, 128, 0.5)');
    fadingText.css('font-size', '92px');
    fadingText.css('transform', 'translate(-50%, -50%) scale(1)');
    fadingText.css('transform-origin', '50% 50%');

    // Start the video and then start the animation after a 2-second delay
    video.addEventListener('play', function() {
      setTimeout(function() {
        // Start the animation
        fadingText.animate({
          opacity: 1,
          fontSize: '64px',
          transform: 'translate(-50%, -50%) scale(1.3)'
        }, 2500, 'easeInOutCubic', function() {
          // Animation complete
          fadingText.animate({
            fontSize: '64px'
          }, 8500, 'easeInOutCubic', function() {
            // Animation complete
            fadingText.animate({
              opacity: 0,
              fontSize: '18px',
              transform: 'translate(-50%, -50%) scale(1.2)'
            }, 500, 'easeInOutCubic');
          });
        });
      }, 3500); // Delay the animation by 3500 milliseconds (3.5 seconds)
    });

    // Add a click event listener to the unmute button
    unmuteButton.on('click', function() {
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

    // Start the video

  }

  video.play();

  // Show and animate the text after a delay
  animateText();
});
