document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("myAudio");
  var button = document.getElementById("playButton");

  button.addEventListener("click", function() {
    audio.volume = 1; // Set volume to maximum (1)
    audio.play();
  });
});
