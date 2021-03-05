function setup() {
  let width = 600;
  let height = 600;
  let cnv = createCanvas(width, height);
  frameRate(60);
}

function draw() {
  rectangle();
}

function rectangle() {
  frameRate(2 / 3);
  let r = random(60, 120);
  let g = random(60, 100);
  let b = random(60, 120);
  background(r,g,b);

  //   medium horizontal left
  for (i = 0; i < random(200); i++) {
    fill(r, g, b, random(150, 250) );
    stroke(0, 0);
    rect(random(0), random(0, 50), random(width/2), random(25));
    rect(random(0), random(50, 100), random(width/2), random(25));
    rect(random(0), random(100, 150), random(width/2), random(25));
    rect(random(0), random(150, 200), random(width/2), random(25));
    rect(random(0), random(200, 250), random(width/2), random(25));
    rect(random(0), random(250, 300), random(width/2), random(25));
    rect(random(0), random(300, 350), random(width/2), random(25));
    rect(random(0), random(350, 400), random(width/2), random(25));
    rect(random(0), random(400, 450), random(width/2), random(25));
    rect(random(0), random(450, 500), random(width/2), random(25));
    rect(random(0), random(500, 550), random(width/2), random(25));
    rect(random(0), random(550, 600), random(width/2), random(25));
  }
  
//   medium horizontal right
  for (i = 0; i < random(200); i++) {
    fill(r, g, b, random(100, 150) );
    stroke(0, 0);
    rect(random(width/2, width), random(0, 50), random(width/2), random(25));
    rect(random(width/2, width), random(50, 100), random(width/2), random(25));
    rect(random(width/2, width), random(100, 150), random(width/2), random(25));
    rect(random(width/2, width), random(150, 200), random(width/2), random(25));
    rect(random(width/2, width), random(200, 250), random(width/2), random(25));
    rect(random(width/2, width), random(250, 300), random(width/2), random(25));
    rect(random(width/2, width), random(300, 350), random(width/2), random(25));
    rect(random(width/2, width), random(350, 400), random(width/2), random(25));
    rect(random(width/2, width), random(400, 450), random(width/2), random(25));
    rect(random(width/2, width), random(450, 500), random(width/2), random(25));
    rect(random(width/2, width), random(500, 550), random(width/2), random(25));
    rect(random(width/2, width), random(550, 600), random(width/2), random(25));
  }

  //   big horizontal
  for (i = 0; i < random(2); i++)  {
    for (j = 0; j < random(2); j++) {
      rnd1 = random(15);
      rnd2 = random(15);
      rnd3 = random(15);
      fill(r + rnd1, g + rnd2, b + rnd3);
      stroke(0, 0);
      rect(random(width), random(width), width, random(15,20));
      rect(0, random(width), random(width), random(15,20));
      // vertical
      rect(random(width), random(width), random(5, 25), random(5, 25));
    }
}


  //   small horizontal
  for (i = 0; i < random(100, 150); i++) {
    rnd = random(5);
    fill(r + rnd, g + rnd, b + rnd, random(70,100));
    stroke(0, 0);
    rect(random(width/2), random(0, 50), random(width), random(5));
    rect(random(width/2), random(50, 100), random(width), random(5));
    rect(random(width/2), random(100, 150), random(width), random(5));
    rect(random(width/2), random(150, 200), random(width), random(5));
    rect(random(width/2), random(200, 250), random(width), random(5));
    rect(random(width/2), random(250, 300), random(width), random(5));
    rect(random(width/2), random(300, 350), random(width), random(5));
    rect(random(width/2), random(350, 400), random(width), random(5));
    rect(random(width/2), random(400, 450), random(width), random(5));
    rect(random(width/2), random(450, 500), random(width), random(5));
    rect(random(width/2), random(500, 550), random(width), random(5));
    rect(random(width/2), random(550, 600), random(width), random(5));
  }

  //   big squares
  for (i = 0; i < random(-3, 2); i++) {
    rnd = random(10, 30);
    size = random(70,120);
    fill(r + rnd, g + rnd, b + rnd, random(50,100));
    stroke(0, 0);
    rect(random(width), random(width), size, size);
  }

}