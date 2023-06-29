var audio = document.getElementById("myAudio");
var button = document.getElementById("playButton");
var volumeBar = document.getElementById("volumeBar");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    button.classList.add("playing");
  } else {
    audio.pause();
    button.classList.remove("playing");
  }
}

button.addEventListener("click", toggleAudio);

volumeBar.addEventListener("input", function() {
  audio.volume = volumeBar.value;
});

// Set initial volume from the volume bar value
audio.volume = volumeBar.value;

// Remove autoplay attempt for compatibility
button.style.display = "block";