img = ""
status = ""
objects = [];
function back(){
    window.location = 'index.html'
}
function preload(){
    img = loadImage('25-louisdehe-62d2bec44a254575836da1e473e1c381.jpeg');

}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocosd', modelLoaded);
}
function modelLoaded(){
    console.log('Loaded');
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results)
    objects = results
}
function draw(){
    image(img, 0, 0, 1040, 520);
    if (status != ""){
        for(i = 0; i < objects.length; i++){
document.getElementById("status").innerHTML = "Status : Object Detected";
fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + "" + percent + '%', objects[i].x + 15, objects[i].y + 15);
noFill();
stroke("FF0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}




