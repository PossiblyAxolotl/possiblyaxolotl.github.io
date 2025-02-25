// Colour Time Swap
// PossiblyAxolotl
// February 25, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let waitTime   = 2000;
let lastSwitch = 0;

let isWhite = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background((millis() % 4000 < waitTime) ? "white" : "black");
  
  showBackground();
  swapStateIfNeeded();
}

function showBackground() { 
  background(isWhite ? "white" : "black");
}

function swapStateIfNeeded() {
  if (millis() > lastSwitch + waitTime) {
    isWhite = !isWhite;
    lastSwitch = millis();
  }
}