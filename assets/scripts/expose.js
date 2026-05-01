// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsconfetti = new JSConfetti();

  const hornSelect = document.getElementById('horn-select');
  const playButton = document.querySelector('button');

  playButton.addEventListener('click', () => {
    if (hornSelect.value === 'party-horn') {
      jsconfetti.addConfetti();
    }
  });
}