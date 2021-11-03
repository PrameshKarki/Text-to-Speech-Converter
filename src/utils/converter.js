// *Text to speech converter
const converter = (values, options) => {
    if (speechSynthesis.speaking)
        return;

    let utterance = new SpeechSynthesisUtterance(values.text);

    for (let voice of options) {
        if (voice.name === values.voice)
            utterance.voice = voice; //Set Voice
    }
    speechSynthesis.speak(utterance); //Speak the speech

}

export default converter;