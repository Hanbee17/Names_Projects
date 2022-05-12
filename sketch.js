let names = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8', 'name9', 'name10',
             'name11', 'name12', 'name13', 'name14', 'name15', 'name16', 'name17', 'name18', 'name19', 'name20',
             'name21', 'name22', 'name23', 'name24', 'name25', 'name26', 'name27', 'name28', 'name29', 'name30',
             'name31', 'name32', 'name33', 'name34', 'name35', 'name36', 'name37', 'name38', 'name39', 'name40']

let yname = [];
let xname = [];

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
  nameRandomSetUp();
  nameRandom();
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

  studentButton.draw();
  teacherButton.draw();
}

function firstScreen() {
  startButton();
}

function mainKorScreen() {
  createCanvas(windowWidth * 1, windowHeight * 3);
  background(202, 240, 248);
  languageButtons();

  textAlign(CENTER);
  textSize(20);
  fill(0);
  text('This is Korean page. Press W to begin. 메인 페이지', windowWidth * 0.5, windowHeight * 0.2);

  drawWaves();
  nameRandom();
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
  nameRandom();
}


function ferryAnimation() {
  imageMode(CENTER);
  if (keyIsDown) {
    if (keyCode == 87) {
      // ferryAni.changeFrame(1);
      ferryAni.nextFrame();
      //ferryAni.play();
    } else {
      ferryAni.stop();
    }
  }
  animation(ferryAni, windowWidth * 0.5, level2 * 0.9, );
}

function nameRandom() {
  for (let i = 0; i < names.length; i++) {
    fill(255);
    text(names[i], xname[i], yname[i]);
  }
}

function nameRandomSetUp () {
  for (let i = 0; i < names.length; i++) {
    yname[i] = random(level2 * 1.1, windowHeight * 2.8);
    if (yname[i] <= level2 * 1.5) {
      xname[i] = random(windowWidth * 0.4, windowWidth * 0.6)
    } else if (yname[i] < level2 * 1.3 && yname[i] > level2 * 1.5) {
      xname[i] = random(windowWidth * 0.2, windowWidth * 0.8)
    } else if (yname[i] < level2 * 2.8 && yname[i] > windowHeight * 1.3) {
      xname[i] = random(windowWidth * 0.1, windowWidth * 0.9)
    }
  }
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
