let stars = [];

const lavaSplits = 16;
const lavaBetweenSize = width / lavaSplits;

function drawLava() {
  fill("#fd724e");
  beginShape();
  
  let lavaBetweenSize = width / lavaSplits;

  for (let i = 0; i<lavaSplits+1; i++) {
    vertex(i * lavaBetweenSize, lavaHeight-camera.y + 8*Math.sin((millis() + i*120 + camera.x) / 160));
  }

  vertex(width, height);
  vertex(0, height);

  endShape();

  fill("#a02f40");

  beginShape();

  for (let i = 0; i<lavaSplits+1; i++) {
    vertex(i * lavaBetweenSize, lavaHeight+50-camera.y + 8*Math.cos((millis() + i*120 + camera.x) / 160));
  }

  vertex(width, height);
  vertex(0, height);

  endShape();
}

function makeStars() {
  for (let i = 0; i<64; i++) {
    stars.push({
      x: Math.random() * windowWidth,
      y: Math.random() * windowHeight,
      diameter: Math.random() * 4 + 2,
      dir: Math.random() * 359
    });
  }
}

function drawBackdrop() {
  noStroke();
  fill("#261b2e");

  for (let star of stars) {
    star.x += Math.sin(star.dir);
    star.y -= Math.cos(star.dir);

    if (star.x < camera.x) { 
      star.x += width;
    } 
    else if (star.x > camera.x + width) {
      star.x -= width;
    }

    if (star.y < camera.y) { 
      star.y += height;
    } 
    else if (star.y > camera.y + height) {
      star.y -= height;
    }

    circle(star.x - camera.x, star.y - camera.y, star.diameter);
  }
}