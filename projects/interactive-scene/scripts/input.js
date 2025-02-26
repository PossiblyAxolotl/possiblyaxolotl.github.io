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