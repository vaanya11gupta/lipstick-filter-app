noseX=0
noseY=0
function preload() {
	lipstick_img =loadImage("https://i.postimg.cc/V6tP27KZ/images.jpg");
}
function setup() {
	canvas= createCanvas(300,300);
	canvas.position(550,150);
	video= createCapture(VIDEO);
	video.size(300,300);
	video.hide();
	
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPose);
}
function draw(){
	image(video,0,0,300,300);
	image(lipstick_img,noseX -10,noseY +20,40,20);
}
function take_snapshot() {
	save('myFilterImage.png')
}
function modelLoaded() {
	console.log('PoseNet is initialized');
}

function gotPose(results) {
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		
	}
}
