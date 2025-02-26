let colliders = [];

function resetColliders() {
  colliders = [];
}

function addCollider(x,y,w,h,col) {
  colliders.push ({
    x,y,w,h,col
  });
}

function drawColliders() {
  for (let collider of colliders) {
    fill(collider.col);
    rect(collider.x - camera.x, collider.y - camera.y, collider.w, collider.h);
  }
}

function getColliders() {
  return colliders;
}

function collide1D(position, velocity, barrier, end = null) {
  // before -> after
  if (velocity > 0 && position <= barrier) {
    return position + velocity > barrier ? barrier - position : velocity;
  } 
  // after -> before
  else if (end !== null && velocity < 0 && position >= end) {
    return position + velocity < end ? end - position : velocity; 
  }
  
  return velocity;
}