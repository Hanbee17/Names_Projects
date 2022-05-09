let pageState = 'first';

var firstImage;

function preload() {
  firstImage = loadImage('./assets/ship1.png');
  korean = loadImage('./assets/kor.png');
  english = loadImage('./assets/eng.png');
  spanish = loadImage('./assets/span.png');
}

function setup() {
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
}

function firstScreen() {
  startButton();
}

function mainKorScreen() {
  createCanvas(windowWidth, windowHeight);
  background(0, 150, 199);
  textAlign(CENTER);
  textSize(20);
  fill(206, 212, 218);
  text('This is Korean page. 메인 페이지', windowWidth*0.5,windowHeight*0.5);
  languageButtons();
}

function mainEngScreen() {
  createCanvas(windowWidth, windowHeight);
  background(0, 150, 199);
  textAlign(CENTER);
  textSize(20);
  fill(206, 212, 218);
  text('This is English Page.', windowWidth*0.5,windowHeight*0.5);
  languageButtons();
}

function mainSpanScreen() {
  createCanvas(windowWidth, windowHeight);
  background(0, 150, 199);
  textAlign(CENTER);
  textSize(20);
  fill(206, 212, 218);
  text('This is Spanish Page.', windowWidth*0.5,windowHeight*0.5);
  languageButtons();
}
