// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsconfetti = new JSConfetti();

  const hornSelect = document.getElementById('horn-select');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');

  hornSelect.addEventListener('change', () => {
    if (hornSelect.value === 'air-horn') {
      audio.src = 'assets/audio/air-horn.mp3';
    }
    else if (hornSelect.value === 'car-horn') {
      audio.src = 'assets/audio/car-horn.mp3';
    }
    else if (hornSelect.value === 'party-horn') {
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
  });

    playButton.addEventListener('click', () => {
    if (audio.src) {
      audio.play();
    }
    
    if (hornSelect.value === 'party-horn') {
      jsconfetti.addConfetti();
    }
  });
}