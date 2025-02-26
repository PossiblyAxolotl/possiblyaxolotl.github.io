// Colour Time Swap
// PossiblyAxolotl
// March 4, 2025
//
// Extra for Experts:
// - Using multiple scripts to separate code
// - Storing levels in JSON to be loaded 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // outlines
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(4);

  loadMap("./levels/1.json");
}

function draw() {
  background(220);
  
  // player movement
  changePlayerVelocity();
  collidePlayer();
  movePlayer();
    
  processCamera();
 
  // drawing
  drawBoxes();
  drawPlayer();
  
  fill("red");
  drawLava();
  
  if (player.y > 650) {
    reloadMap();
  }
}

// Window settings
function doubleClicked() {
  fullscreen(!fullscreen());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/// MOVE THIS
function drawLava() {
  beginShape();
  let betweenSize = width / 16;

  for (let i = 0; i<betweenSize; i++) {
    vertex(i * betweenSize, 500-camera.y + 8*Math.sin((millis() + i*120) / 160));
  }

  vertex(width, height);
  vertex(0, height);

  endShape();
}