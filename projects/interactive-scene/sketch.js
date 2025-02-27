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
 
  // misc. updating
  updateBoxes();

  // drawing
  drawBoxes();
  drawPlayer();
  
  drawLava();
  
  // death plane
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