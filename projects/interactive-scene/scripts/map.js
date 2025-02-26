let currentData;

function createMap(data) {
  currentData = data; // save data for reloading level

  // player data
  player.x = data.player.x;
  player.y = data.player.y;
  
  camera.y = player.y - height / 2;
  
  // clear colliders and create new ones
  resetColliders();
  for (let platform of data.platforms) {
    addCollider(platform.x,platform.y,platform.w,platform.h,platform.col);
  }
}

function loadMap(path) {
  loadJSON(path, createMap);
}

function reloadMap() {
  createMap(currentData);
}