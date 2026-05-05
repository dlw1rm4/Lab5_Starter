// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
    const voiceSelect = document.getElementById('voice-select');
    const button = document.querySelector('button');
    const textarea = document.querySelector('textarea');
    const synth = window.speechSynthesis;

    function populateVoiceList() {
        if (typeof speechSynthesis === 'undefined') {
            return;
        }
        const voices = synth.getVoices();
        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement('option');
            option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            voiceSelect.appendChild(option);
        }
    }

    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = populateVoiceList;
    }
    populateVoiceList();




    button.addEventListener('click', () => {
        const utterThis = new SpeechSynthesisUtterance(textarea.value);
        const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
        for (let i = 0; i < synth.getVoices().length; i++) {
            if (synth.getVoices()[i].name === selectedOption) {
                utterThis.voice = synth.getVoices()[i];
            }
        }
        synth.speak(utterThis);
    });
        
    
      

}