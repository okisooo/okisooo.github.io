document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("myAudio");
  var button = document.getElementById("playButton");
  var volumeBar = document.getElementById("volumeBar");

  button.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      button.textContent = "Pause";
    } else {
      audio.pause();
      button.textContent = "Play";
    }
  });

  volumeBar.addEventListener("input", function() {
    audio.volume = volumeBar.value;
  });

  // Auto-play on startup
  audio.play();
});
