//Variables for star
var ready = false;
let sound;


//Neaty Gritty
function setup(){
  let cnv = createCanvas(800, 400);
  sound = createAudio('Assets/SIDE STREET.mp3');

  cnv.position(320, 620);
}

function draw(){

  push();
  translate(width * 0.2, height * 0.5);
  star(0, 0, 30, 70, 5);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  star1(0, 0, 30, 70, 5);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  star2(0, 0, 30, 70, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
    fill(109,203,210);
  }
  endShape(CLOSE);
}

function star1(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
    fill(250,195,188);
  }
  endShape(CLOSE);
}

function star2(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
    fill(195,227,188);
  }
  endShape(CLOSE);
}

function mousePressed(){
  ready = true;
  sound.volume(0.5);
  sound.play();
}
