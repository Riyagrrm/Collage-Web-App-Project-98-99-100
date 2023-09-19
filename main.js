var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'png',
    png_quality:90
});
function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
{
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Take Your Next Selfie in 5 Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);
setTimeout(function()
{
    img_id = "selfie2";
    take_snapshot();
    speak_data = "Take Your Next Selfie in 5 Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);
setTimeout(function()
{
    img_id = "selfie3";
    take_snapshot();
    speak_data = "Take Your Next Selfie in 5 Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);
}

function take_snapshot()
{
    console.log(img_id)
    Webcam.snap(function(data_uri){
        if(img_id == "selfie1")
        {
            document.getElementById("result1").innerHtml='<img id="selfie1" src="'+data_uri+'">'
        }
        if(img_id == "selfie2")
        {
            document.getElementById("result2").innerHtml='<img id="selfie2" src="'+data_uri+'">'
        }
        if(img_id == "selfie2")
        {
            document.getElementById("result3").innerHtml='<img id="selfie3" src="'+data_uri+'">'
        }
    })
}