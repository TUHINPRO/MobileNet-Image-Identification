Webcam.set({
    width:300,
    height:300,
    image_format:'jpg',
    jpg_quality:90,
     
    constraints:{
        facingMode:"environment"
    }
});

Webcam.attach('#cameraUwU');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("resultUwU").innerHTML= '<img id="image"src="'+data_uri+'">';

    });
}
console.log("ml5.version",ml5.version);

classifier=ml5.imageClassifier("Mobilenet",ModelLoaded);

function ModelLoaded (){
   console.log("ModelLoaded");
}

function check() {
 images=document.getElementById("image");
classifier.classify(images,gotResult);

}
function gotResult(error,results) {
if (error) {
    console.log(error);
}
else 
console.log(results);

document.getElementById("hello").innerHTML=results[0].label;


}