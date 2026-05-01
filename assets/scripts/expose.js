// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const select = document.getElementById('horn-select');
  const img = document.querySelector('img');
  const button = document.querySelector('button');
  const volumeSlider = document.getElementById('volume');
  const volume = document.querySelector('input[type="range"]');
  const audio = document.querySelector('audio');
  const playSound = document.querySelector('button');

  select.addEventListener('change', (event) => {
    const value = event.target.value;
    if (value === 'air-horn') {
      img.src = 'assets/images/air-horn.svg';
    } else if (value === 'car-horn') {
      img.src = 'assets/images/car-horn.svg';
    } else if (value === 'party-horn') {
      img.src = 'assets/images/party-horn.svg';
    }
  });

  playSound.addEventListener('click', () => {
    audio.src = `assets/audio/${select.value}.mp3`;
    audio.play();
  });



}