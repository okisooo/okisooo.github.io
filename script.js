document.addEventListener("DOMContentLoaded", function () {
  // Get references to the video and unmute button
  const video = document.getElementById("background-video");
  const unmuteButton = document.getElementById("unmute-button");

  // Add a click event listener to the unmute button
  unmuteButton.addEventListener("click", function () {
      if (video.muted) {
          video.muted = false;
          unmuteButton.textContent = "Mute"; // Change the button text to "Mute" when unmuted
      } else {
          video.muted = true;
          unmuteButton.textContent = "Unmute"; // Change the button text to "Unmute" when muted
      }
  });
});
