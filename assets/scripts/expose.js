// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsconfetti = new JSConfetti();

  const hornSelect = document.getElementById('horn-select');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volImg = document.querySelector('#volume-controls img');
  const img = document.querySelector('img');

  hornSelect.addEventListener('change', () => {
    if (hornSelect.value === 'air-horn') {
      audio.src = 'assets/audio/air-horn.mp3';
      img.src = 'assets/images/air-horn.svg';
    }
    else if (hornSelect.value === 'car-horn') {
      audio.src = 'assets/audio/car-horn.mp3';
      img.src = 'assets/images/car-horn.svg';
    }
    else if (hornSelect.value === 'party-horn') {
      audio.src = 'assets/audio/party-horn.mp3';
      img.src = 'assets/images/party-horn.svg';
    }
  });

  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
    if (volumeSlider.value === '0') {
      volImg.src = 'assets/icons/volume-level-0.svg';
      volImg.alt = 'Volume level 0';
    }
    else if (volumeSlider.value < 33) {
      volImg.src = 'assets/icons/volume-level-1.svg';
      volImg.alt = 'Volume level 1';
    }
    else if (volumeSlider.value < 67) {
      volImg.src = 'assets/icons/volume-level-2.svg';
      volImg.alt = 'Volume level 2';
    }
    else if (volumeSlider.value <= 100) {
      volImg.src = 'assets/icons/volume-level-3.svg';
      volImg.alt = 'Volume level 3';
    }
    else {
      volImg.src = 'assets/icons/volume-level-2.svg';
      volImg.alt = 'Volume level 2';
    }
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