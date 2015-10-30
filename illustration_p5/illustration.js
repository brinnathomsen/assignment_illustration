// illustration.js
// "Happiness can be found, even in the darkest of times, when one only remembers to turn on the light"


// image variables
var backgroundImg;
var littlegirl;
var firefly;
var glow;
var happinessText;
var darknessText;
var lightText;


// change variables
var glowOn = 0;
var tintOne = 50;
var tintTwo = 50;
var xPositions = [];
var yPositions = [];
var bubbleSize = [];
var textOne = 100;
var textTwo = 0;

function preload() {
	backgroundImg = loadImage("production/background.jpg");
	littlegirl = loadImage("production/littlegirl.png");
	firefly = loadImage("production/firefly.png");
	glow = loadImage("production/glow.png");
	happinessText = loadImage("production/happiness.png");
	darknessText = loadImage("production/dark.png");
	lightText = loadImage("production/light.png");
}


function setup() {
	createCanvas(800, 660);
	// Set up random X and Y positions for fireflies
	for (var i = 0; i < 20; i++) {
		xPositions[i] = random(0, 800);
		yPositions[i] = random(0, 660);
	}
}


function draw() {

	// Forest Lighting
	tint(tintOne, tintTwo, 130);

	// Forest Scene
	background(200, 0, 0);
	image(backgroundImg, 0, 0);
	tint(tintOne, tintTwo, 255);
	image(littlegirl, 450, 300, 200, 330);

	// Write text "happiness can be found even in the darkest of times"
	tint(255, 255, 255, textOne);
	image(happinessText, 200, 130, 400, 60);
	image(darknessText, 300, 200, 400, 50);

	// write text "if one only remembers to turn on the light"
	tint(255, 255, 255, textTwo);
	image(lightText, 200, 100, 500, 100);


	// Lantern Light
	tint(random(225, 250), random(175, 225), random(200, 255), glowOn);
	image(glow, 560, 330, 120, 120);

	// Make Fireflies Flutter
	for (var i = 0; i < 20; i++) {
		xPositions[i] = xPositions[i] + random(-10, 10);
		yPositions[i] = yPositions[i] + random(-10, 10);



		// Draw Fireflies
		var size = i + 20;
		rotate(PI / 3.0);
		tint(random(225, 250), random(175, 225), random(200, 255), glowOn);
		image(firefly, xPositions[i], yPositions[i], size + 5, size + 5);
		image(glow, xPositions[i] + 8, yPositions[i] + 6, size, size);


	}
}


// Change lighting and text when mouse is clicked
function mousePressed() {
	if (mouseIsPressed &&
		mouseX > 570 &&
		mouseX < 650 &&
		mouseY > 300 &&
		mouseY < 400) {


		if (glowOn == 0) {
			glowOn = 255;
			tintOne = 100;
			tintTwo = 50;
			textOne = 0;
			textTwo = 255;
		} else {
			glowOn = 0
			tintOne = 50;
			tintTwo = 55;
			textOne = 100;
			textTwo = 0;
		}
	}
}
