// Colour Time Swap
// PossiblyAxolotl
// March 4, 2025
//
// Palette from Lospec: https://lospec.com/palette-list/molten + https://lospec.com/palette-list/ink-crimson
//
// Extra for Experts:
// - Using multiple scripts to separate code
// - Storing levels in JSON to be loaded 

let lavaHeight = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // outlines
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(4);

  makeStars();

  loadMap("./levels/1.json");
}

function draw() {
  background("#382d43");

  drawBackdrop();
  
  // player movement
  changePlayerVelocity();
  collidePlayer();
  movePlayer();
  
  processCamera();
 
  // misc. updating
  updateBoxes();

  killPlane();

  stroke("#201727");

  // drawing
  drawBoxes();
  drawPlayer();
  
  drawLava();
}

// misc functions
function killPlane() {
  if (player.y > lavaHeight + 20) {
    reloadMap();
  }

  lavaHeight -= deltaTime * 0.01;
}

// Window settings
function doubleClicked() {
  fullscreen(!fullscreen());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  stars = [];
  makeStars();
}