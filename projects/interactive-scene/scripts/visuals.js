const lavaSplits = 16;
const lavaBetweenSize = width / lavaSplits;


function drawLava() {
  beginShape();
  
  let lavaBetweenSize = width / lavaSplits;

  for (let i = 0; i<lavaSplits+1; i++) {
    vertex(i * lavaBetweenSize, 500-camera.y + 8*Math.sin((millis() + i*120 + camera.x) / 160));
  }

  vertex(width, height);
  vertex(0, height);

  endShape();
}