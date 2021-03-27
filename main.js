function preload() {
	
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
		
	}
}
