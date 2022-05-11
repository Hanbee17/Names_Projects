let pageState = 'first';

let ferryShip;
let korean;
let english;
let spanish;

let ferryAni;

var yoff = 0;
var level1 = 800;
var level2 = 950;

function preload() {
  ferryShip = loadImage('./assets/ship1.png');
  korean = loadImage('./assets/kor.png');
  english = loadImage('./assets/eng.png');
  spanish = loadImage('./assets/span.png');

  ferryAni = loadAnimation('./assets/ship1.png', './assets/ship5.png')
  ferryAni.looping = false;
  ferryAni.playing = false;
}

function setup() {
  //frameRate(60);
  createCanvas(windowWidth, windowHeight);
  background(0);
  intialButtons();
  firstScreen();
}

function draw() {

  switch (pageState) {
    case 'title':
      firstScreen();
      break;
    case 'mainKor':
      mainKorScreen();
      korButton.locate(-400, -500);
      break;
    case 'mainEng':
      mainEngScreen();
      engButton.locate(-400, -500);
      break;
    case 'mainSpan':
      mainSpanScreen();
      spanButton.locate(-400, -500);
      break;
  }

  shipButton.draw();

  korButton.draw();
  engButton.draw();
  spanButton.draw();

  name1.draw();
}

function firstScreen() {
  startButton();
}

function drawWaves() {
  fill(2, 62, 138, 200);
  noStroke();
  beginShape();
  var xoff = 0;
  for (var x = 0; x <= width; x += 10) {
    var y = map(noise(xoff, yoff), 0, 1, level1, level2);
    vertex(x, y);
    xoff += 0.05;
  }
  yoff += 0.03;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  if (keyIsPressed) {
    if (keyCode == 87) {
      if (level2 > 50) {
        level1 -= 1.5;
        level2 -= 1.5;
      }
    }
  }
  ferryAnimation();
  nameButtons();
}


function ferryAnimation() {
  imageMode(CENTER);
    if (keyIsDown) {
      if (keyCode == 87) {
        ferryAni.changeFrame(3);
        ferryAni.play();
      } else {
        ferryAni.stop();
      }
  }
  animation(ferryAni, windowWidth * 0.5, level2 * 0.9,);
}

  function mainKorScreen() {
    createCanvas(windowWidth * 1, windowHeight * 3);
    background(202, 240, 248);
    languageButtons();

    drawWaves();

    textAlign(CENTER);
    textSize(20);
    fill(0);
    text('This is Korean page. Press W to begin. 메인 페이지', windowWidth * 0.5, windowHeight * 0.2);
  }

  function mainEngScreen() {
    createCanvas(windowWidth, windowHeight);
    background(0, 150, 199);
    textAlign(CENTER);
    textSize(20);
    fill(206, 212, 218);
    text('This is English Page.', windowWidth * 0.5, windowHeight * 0.5);
    languageButtons();
  }

  function mainSpanScreen() {
    createCanvas(windowWidth, windowHeight);
    background(0, 150, 199);
    textAlign(CENTER);
    textSize(20);
    fill(206, 212, 218);
    text('This is Spanish Page.', windowWidth * 0.5, windowHeight * 0.5);
    languageButtons();
  }
