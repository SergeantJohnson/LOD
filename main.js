status="";

function preload() {
   video=createCapture(VIDEO);
   video.hide();
}

function setup() {
   canvas=createCanvas(500,500);
   canvas.center();
}

function start() {
   objectDetector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="Status:Detecting Objects";
   obj=document.getElementById("object").value;
}

function modelLoaded() {
   console.log("Model Loaded!");
   status=true;
}

function draw() {
   image(video,0,0,500,500);
}