let camera = {
  x : 0,
  y : 0
};

function clampCamera() {
  if (camera.x < 0) {
    camera.x = 0;
  };
}

function processCamera() {
  camera.x = lerp(camera.x, player.x-width * 0.5, 0.1); 
  camera.y = lerp(camera.y, player.y-height * 0.5, 0.05);

  clampCamera();
}