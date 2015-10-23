// illustration.js

var backgroundImg;
var littlegirl;
var firefly;
var glowOn = 0;
var tintOne = 0;
var tintTwo = 0;
var xPositions = [];
var yPositions = [];
var bubbleSize = [];

function preload() {
	backgroundImg = loadImage("background.jpg");
	littlegirl = loadImage("littlegirl.png");
	firefly = loadImage("firefly.png");
	glow = loadImage("glow.png");
}


function setup() {
	createCanvas(800, 660);
	// Set up random X and Y positions
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
	image(littlegirl, -100, 10, 800, 700);

	// Lantern Light
	tint(random(225, 250), random(175, 225), random(200, 255), glowOn);
	image(glow, 270, 270, 120, 120);



	// Make Fireflies Flutter
	for (var i = 0; i < 20; i++) {
		xPositions[i] = xPositions[i] + random(-10, 10);
		yPositions[i] = yPositions[i] + random(-10, 10);

		if (xPositions[i] < mouseX) {
			xPositions[i] += 5;
		}

		if (xPositions[i] > mouseX) {
			xPositions[i] -= 5;
		}

		if (yPositions[i] < mouseY) {
			yPositions[i] += 5;
		}

		if (yPositions[i] > mouseY) {
			yPositions[i] -= 5;
		}

		// Draw Fireflies
		var bubbleSize = i + 20;
		rotate(PI / 3.0);
		tint(random(225, 250), random(175, 225), random(200, 255), glowOn);
		image(firefly, xPositions[i], yPositions[i], bubbleSize + 5, bubbleSize + 5);
		image(glow, xPositions[i] + 8, yPositions[i] + 6, bubbleSize, bubbleSize);
	}
}


// Light On and Off with Mouse Click
function mousePressed() {
	if (glowOn == 0) {
		glowOn = 255;
		tintOne = random(80, 100);
		tintTwo = random(30, 50);
	} else {
		glowOn = 0
		tintOne = 40;
		tintTwo = 55;
	}
}
