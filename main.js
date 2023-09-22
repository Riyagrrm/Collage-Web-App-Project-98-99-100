var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
    speak()
}

camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach(camera);
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking Your 1st Selfie in 5 Seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function () {
        img_id = "selfie1";
        speak_data = "Taking Your 2nd Selfie in 5 Seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
    }, 5000);
    setTimeout(function () {
        img_id = "selfie2";
        speak_data = "Taking Your 3rd Selfie in 5 Seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
    }, 10000);
    setTimeout(function () {
        img_id = "selfie3";
        take_snapshot();
    }, 15000);
}

function take_snapshot() {
    console.log(img_id)
    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
            document.getElementById("result1").src = data_uri
        }
        if (img_id == "selfie2") {
            document.getElementById("result2").src = data_uri
        }
        if (img_id == "selfie3") {
            document.getElementById("result3").src = data_uri
        }
    })
}