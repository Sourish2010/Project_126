leftWristX = 0;
leftWristY=0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
song1 = loadSound('music.mp3');
song2 = loadSound('music2.mp3');
}
function setup()
{
canvas = createCanvas(400,300);
canvas.position(484,300);
capture = createCapture(VIDEO);
capture.hide();
poseNet = ml5.poseNet(capture,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw()
{
image(capture,0,0,400,300);
}
function modelLoaded()
{
    console.log("PoseNet is Loaded!");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        console.log(leftWristX);
        leftWristY = results[0].pose.leftWrist.y;
        console.log(leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        console.log(rightWristX);
        rightWristY = results[0].pose.rightWrist.y;
        console.log(rightWristY);
    }
}