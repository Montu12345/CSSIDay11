/* global createCanvas, colorMode, HSB, background, ellipse, random, width, height */

let backgroundColor, spherePosition, rectPosition

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  background(backgroundColor);
  // This variable contains a JSON object
  spherePosition = {
    "x": 100,
    "y": 100
  }
  rectPosition = {
    "xLength": width*2/3,
    "yLength": height/16
  }
  
  rectMode(CENTER);
  text("Start", 10, height - 10)
  text("Stop", 10, 20)
}

function computeDistance(point1, point2){
  distance = sqrt((point2.x - point1.x)**2 + (point2.y - point1.y)**2);
  return distance
}

function computeCategoryOfDistance(point1, point2){
  distance = computeDistance(point1, point2);
  if (distance < 50){
    backgroundColor = color(240, 10, 100);
    temp = "hot";
  }
  else if (distance < 200){
    backgroundColor = color(120, 10, 100);
    temp = "warm";
  }
  else if (distance > 200){
    backgroundColor = color(0, 10, 100);
    temp = "cold";
  }
  return temp;
}

function draw() {
  //ellipse(spherePosition.x, spherePosition.y, 20, 20);
  rect(width - rectPosition.xLength, 60, rectPosition.xLength, rectPosition.yLength);
  rect(width - rectPosition.xLength, 200, rectPosition.xLength, rectPosition.yLength);
  rect(width - rectPosition.xLength, 360, rectPosition.xLength, rectPosition.yLength);
  rect(rectPosition.xLength, 260, rectPosition.xLength, rectPosition.yLength);
  rect(rectPosition.xLength, 140, rectPosition.xLength, rectPosition.yLength);
  stroke(30, 50, 100);
  if (mouseIsPressed){
    line(prevX, prevY, mouseX, mouseY);
  }
  //collidePointRect(pointX, pointY, x, y, width, height)

  if (collidePointRect(mouseX, mouseY, width - rectPosition.xLength, 60, rectPosition.xLength, rectPosition.yLength)){
    stroke(10, 50, 100);
  }
  if (collidePointRect(mouseX, mouseY, width - rectPosition.xLength, 200, rectPosition.xLength, rectPosition.yLength)){
    stroke(10, 50, 100);
  }
  if (collidePointRect(mouseX, mouseY, width - rectPosition.xLength, 360, rectPosition.xLength, rectPosition.yLength)){
    stroke(10, 50, 100);
  }
  if (collidePointRect(mouseX, mouseY, rectPosition.xLength, 260, rectPosition.xLength, rectPosition.yLength)){
    stroke(10, 50, 100);
  }
  if (collidePointRect(mouseX, mouseY, rectPosition.xLength, 140, rectPosition.xLength, rectPosition.yLength)){
    stroke(10, 50, 100);
  }

  
  prevX = mouseX;
  prevY = mouseY;
  
  //stroke(30, 50, 100);
}

/*function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}*/
