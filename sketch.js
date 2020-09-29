// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
 

}

function draw() {
  background(0);
  moveBalls();
  displayBalls();
  checkDeath();
}
function checkDeath() {
  for (let i=theCircles.length-1; i>=0; i --) {
    if (theCircles[i].bounceCount >= 10) {
      theCircles.splice(i, 1);
    }
  }
}


function mousePressed(){
  spawnBall();
}

function moveBalls() {

  for (let i =0; i<theCircles.length; i++) {

    theCircles[i].x += theCircles[i].dx;
    theCircles[i].y += theCircles[i].dy;
  
    if (theCircles[i].x + theCircles[i].radius > width || theCircles[i].x - theCircles[i].radius < 0) {
      theCircles[i].dx *= -1;
      theCircles[i].bounceCount +=1;
      
    }
  
    if (theCircles[i].y + theCircles[i].radius > height || theCircles[i].y - theCircles[i].radius <0) {
      theCircles[i].dy *= -1;
      theCircles[i].bounceCount +=1;
    }
  }
}

function displayBalls(){
  noStroke();
  for (let ball of theCircles) {
    fill(ball.theColour);
    circle(ball.x, ball.y, ball.radius * 2);
  }
}

function spawnBall() {

  let ball = {
    x: mouseX,
    y: mouseY,
    dx: random (-5, 5),
    dy:random(-5,5),
    radius: random(30,75),
    theColour: color(random(255),random(255),random(255)),
    bounceCount: 0,
  };
  theCircles.push(ball);
}
