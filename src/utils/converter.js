
// *Text to speech converter
const converter = (values) => {
    console.log(values);

    let utterance=new SpeechSynthesisUtterance(values.text);
    speechSynthesis.speak(utterance); //Speak the speech

}

export default converter;