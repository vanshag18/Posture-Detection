let capture;
var posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;
let specs,smoke;

function setup()
 {
    createCanvas(800, 500);
    console.log("setup funct");
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLOADED);
    posenet.on('pose', recievedPoses);

    actor_img = loadImage('images/shahrukh.png');
    specs = loadImage('images/spects.png');
    smoke = loadImage('images/cigar.png');
}

function recievedPoses(poses) {
    console.log(poses);

    if(poses.length > 0) {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLOADED() {
    console.log("model has loaded");
}
function draw()
 {
    image(capture, 0, 0);
    fill(255, 0, 0);
    
    if(singlePose) {
        for(let i=0; i<singlePose.keypoints.length; i++) {
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 20);
        }

        stroke(255, 255, 255);
        strokeWeight(5);

        for(let j=0; j<skeleton.length; j++) {
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y);
        }

        image(specs, singlePose.nose.x-40, singlePose.nose.y-70, 125, 125);
        image(smoke, singlePose.nose.x-35, singlePose.nose.y+28, 50, 50);
    }
    
    //background(200);
    //1.point
    //point(200, 200);
    //2.line
    //line(200, 200, 300, 300);
    //3.trialgle
    //triangle(100, 200, 300, 400, 150, 250);
    //4.rectangle
    //rect(250, 200, 200, 100);
    //5. circle
    //ellipse(100, 200, 100, 100);
    // color circlw using stroke and crcle
    /*
    fill(127, 102, 34);
    stroke(255, 0, 0);
    ellipse(100, 200, 100, 100);
    stroke(0, 255, 0);
    ellipse(300, 320, 100, 100);
    stroke(0, 0, 255);
    ellipse(400, 400, 100, 100);
    */

    // infite loop using mouse hovering
    //fill(255);
    /*
    r = getRandomArbitrary(0, 255);
    g = getRandomArbitrary(0, 255);
    b = getRandomArbitrary(0, 255);
    fill(r,g,b);
    ellipse(mouseX, mouseY, 50, 50);
    */
   // IMAGE CAPTURE
   //image(capture, 0, 0, 800, 600);
}