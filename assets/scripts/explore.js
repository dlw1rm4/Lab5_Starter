// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const face_speak = document.querySelector('img');
  const synth = window.speechSynthesis;

  const talkButton = document.querySelector('button');
  talkButton.addEventListener('click', () => {
    const textToSpeak = "Welcome to Lab 5";
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    utterance.onstart = () => {
      face_speak.src = 'assets/images/smiling-open.png'
      face_speak.alt = "Smiling face with mouth open";
    };

    utterance.onend = () => {
      face_speak.src = 'assets/images/smiling.png';
      face_speak.alt = "Smiling face";
    };

    synth.speak(utterance);
  });
}