function same(){
    document.getElementById("heading1").style.backgroundColor="#5bc0de"
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550, 500);
    canvas.position(560,350);
video.position(0,350)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded")
}
noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;
text1="hello";
color1="black";
function gotPoses(results){
    if(results.length>=0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose ("+noseX+", "+noseY+")");
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
        difference=Math.abs(difference)
    }   
}
function change(){
    text1=document.getElementById("input1").value;
}
function color2(){
    color1=document.getElementById("input2").value;
}
function draw(){
    console.log(text1)
    background("lightgrey");
    fill(color1);
    stroke("black");
    textSize(difference);
    text(text1,noseX,noseY);
}

take="take "
the="the "
wheel="wheel "
from="from "
my="my "    
hands="hands"
var jesus=take+the+wheel+from+my+hands