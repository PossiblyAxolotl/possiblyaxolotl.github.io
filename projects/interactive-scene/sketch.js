// Colour Time Swap
// PossiblyAxolotl
// March 4, 2025
//
// Extra for Experts:
// - Using multiple scripts to separate code
// - Storing levels in JSON to be loaded 

function setup() {
  createCanvas(600, 400);
  
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
  drawColliders();
  drawPlayer();
  
  fill("red");
  rect(-5,500-camera.y,width+10,height);
  
  if (player.y > 650) {
    reloadMap();
  }
}

function doubleClicked() {
  fullscreen(true);
}