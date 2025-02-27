// Traffic Lights
// PossiblyAxolotl
// February 27, 2025

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let greenWait  = 1000;
let yellowWait = 500;
let redWait    = 1500;

let timeSinceLoop = 0;
let state = "green";

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  processLights();
  fillLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(100);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function processLights() {
  let timeToCheck = millis() - timeSinceLoop;

  if (timeToCheck > greenWait + yellowWait + redWait) {
    timeSinceLoop = millis();
  } 
  else if (timeToCheck > greenWait + yellowWait) {
    state = "red";
  } 
  else if (timeToCheck > greenWait) {
    state = "yellow";
  } 
  else {
    state = "green";
  }
}

function fillLights() {
  fill(state);

  if (state === "red") {
    ellipse(width/2, height/2 - 65, 50, 50); //top
  } 
  else if (state === "yellow") {
    ellipse(width/2, height/2, 50, 50); //middle
    
  } 
  else {
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
}

// other way that doesn't use state vars
/*let greenWait  = 1000;
let yellowWait = 500;
let redWait    = 1500;

let timeSinceLoop = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  fillLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(100);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function fillLights() {
  let timeToCheck = millis() - timeSinceLoop;

  if (timeToCheck > greenWait + yellowWait + redWait) {
    timeSinceLoop = millis();
  } 
  else if (timeToCheck > greenWait + yellowWait) {
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
  } 
  else if (timeToCheck > greenWait) {
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  } 
  else {
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
}*/