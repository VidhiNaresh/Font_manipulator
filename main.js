letWristX = 0;
rightWrist = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(750, 110)
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw() {
    background("#62018f");
    text('Vidhi', 50, 400);
    textSize(difference);
    fill("#ffee38");

}
function modelLoaded() {
    console.log("Posenet is initialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}