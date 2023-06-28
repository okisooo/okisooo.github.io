var audio = document.getElementById("myAudio");

function playAudio() {
  audio.volume = 0; // Start with volume set to 0
  audio.play();

  var fadeInterval = setInterval(function() {
    // Gradually increase volume by 0.01 every 100 milliseconds
    audio.volume += 0.01;

    if (audio.volume >= 1) {
      // Volume reached 1 (maximum), clear the interval
      clearInterval(fadeInterval);
    }
  }, 100);
}

function pauseAudio() {
  audio.pause();
}