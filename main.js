
rightwristx=0;
leftwristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(570,100);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes);
}

function modelloaded(){
    console.log("model is loaded");
}

function getposes(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
    
}

function draw(){
    background("lightblue");
    document.getElementById("squareside"),innerHTML=" font size will be " + difference;
    fill("limegreen");
    textSize(difference);
    text(" font displayed ",50,400);
}