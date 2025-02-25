let player = {
  x : 0,
  y : 0,
  vy : 0,
  vx : 0,
  w : 20,
  h : 20,
  
  canJump : false
};

let data;
const gravForce = 0.02;

function preload() {
  data = loadJSON("./levels/1.json");
}

function createMap() {
  player.x = data.player.x;
  player.y = data.player.y;
  
  camera.y = player.y - height / 2;
  
  colliders = [];
  for (let platform of data.platforms) {
    addCollider(platform.x,platform.y,platform.w,platform.h,"green");
  }
}

function setup() {
  createCanvas(600, 400);
  
  // outlines
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(4);

  createMap();
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
    createMap();
  }
}

/* INPUT */
function buttonLeft() {
  return keyIsDown(LEFT_ARROW) || keyIsDown(65) /* A */;
}

function buttonRight() {
  return keyIsDown(RIGHT_ARROW) || keyIsDown(68) /* D */;
}

function horizontalButtons() {
  return buttonRight() - buttonLeft();
}

function buttonJump() {
  return keyIsDown(UP_ARROW) || keyIsDown(32) /* SPACE */ || keyIsDown(87); /* W */
}

/* PLAYER */
function changePlayerVelocity() {
  // gravity
  player.vy += deltaTime * 
    (buttonJump() && player.vy < 0) ? 0.175 : 0.35; // hold to jump higher
  
  // Horizontal movement
  let lerpAmnt = player.canJump ? 0.2 : 0.05;
  player.vx = lerp(player.vx, horizontalButtons()*5, lerpAmnt);
  
  // jumping
  if (buttonJump() && player.canJump) {
    player.vy = -6;
    player.canJump = false;
  }
}

function movePlayer() {
  player.x += player.vx;
  player.y += player.vy;
}

/*
Doesn't work diagonally as it checks Y and then X, but not X + Y
can potentially avoid by having all platforms as semi-solid as to not
bother rewriting. Walls can be solid
*/
function collidePlayer() {
  for (let collider of getColliders()) {
    // horizontally inline
    if (player.x + player.w > collider.x && player.x < collider.x + collider.w) {
      // vertical collision
      let prevVy = player.vy;
      //player.vy = collide1D(player.y + player.h, player.vy, collider.y, collider.y + collider.h + player.h);
      player.vy = collide1D(player.y + player.h, player.vy, collider.y);
      if (player.vy === 0 && prevVy > 0) {
        player.canJump = true;
      }
    }
    
    /*/ vertically inline
    if (player.y + player.h > collider.y && player.y < collider.y + collider.h) {
      // horizontal collision
      player.vx = collide1D(player.x + player.w, player.vx, collider.x, collider.x + collider.w + player.w);
    }*/
  }
}

function drawPlayer() {
  fill("red");
  rect(player.x - camera.x, player.y - camera.y, player.w, player.h);
}

function doubleClicked() {
  fullscreen(true);
}