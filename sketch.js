let cvn;

let pageState = 'first';

let shipIcon;
let ferryShip;
let korean;
let english;
let spanish;

let myKfont;

let ferryAni;

var yoff = 0;
var level1 = 500;
var level2 = 600;

let bubbles = [];
let stars = [];

function preload() {
  myKfont = loadFont('./assets/font1.otf');
  shipIcon = loadImage('./assets/icon.png');
  ferryShip = loadImage('./assets/ship1.png');
  korean = loadImage('./assets/kor.png');
  english = loadImage('./assets/eng.png');
  spanish = loadImage('./assets/span.png');

  ferryAni = loadAnimation('./assets/ship1.png', './assets/ship40.png');
  ferryAni.scale = 0.5;
  ferryAni.looping = false;
  ferryAni.playing = false;

  symbol = loadImage('./assets/ribbon.png');

  soundOn = loadImage('./sound/on.png');
  soundOff = loadImage('./sound/off.png');

  oceanSound = loadSound('./sound/ocean.mp3');
  kdhSound = loadSound('./sound/kdh.mp3');
  ksySound = loadSound('./sound/ksy.mp3');
  pshSound = loadSound('./sound/psh.mp3');
  pysSound = loadSound('./sound/pys.mp3');
}

function startButton() {
  shipButton.locate(windowWidth * 0.445, windowHeight * 0.35);
}

function languageButtons() {
  korButton.locate(windowWidth * 0.91, windowHeight * 0.04);
  engButton.locate(windowWidth * 0.95, windowHeight * 0.04);
  //spanButton.locate(windowWidth*0.95, windowHeight*0.04);
}

//Korean Names Buttons
function nameButtonsKor() {
  crewButtonEng.locate(-400, -500);
  passengerButtonEng.locate(-400, -500);
  teacherButtonEng.locate(-400, -500);
  studentButtonEng.locate(-400, -500);

  crewButtonKor.locate(windowWidth * 0.475, windowHeight * 1);
  passengerButtonKor.locate(windowWidth * 0.475, windowHeight * 1.25);
  teacherButtonKor.locate(windowWidth * 0.475, windowHeight * 1.55);
  studentButtonKor.locate(windowWidth * 0.475, windowHeight * 2.08);
}

function nameButtonsEng() {
  crewButtonKor.locate(-400, -500);
  passengerButtonKor.locate(-400, -500);
  teacherButtonKor.locate(-400, -500);
  studentButtonKor.locate(-400, -500);

  crewButtonEng.locate(windowWidth * 0.475, windowHeight * 1);
  passengerButtonEng.locate(windowWidth * 0.475, windowHeight * 1.25);
  teacherButtonEng.locate(windowWidth * 0.475, windowHeight * 1.55);
  studentButtonEng.locate(windowWidth * 0.475, windowHeight * 2.08);
}

function nameWithSoundButtons() {
  kdhButton.locate(windowWidth * 0.3, windowHeight * 2.23)
  ksyButton.locate(windowWidth * 0.56, windowHeight * 1.8)
  pshButton.locate(windowWidth * 0.33, windowHeight * 1.75)
  pysButton.locate(windowWidth * 0.67, windowHeight * 2.2)
}

function artistKor() {
  artistKorButton.locate(windowWidth * 0.475, windowHeight * 2.5)
}

function artistEng() {
  artistEngButton.locate(windowWidth * 0.475, windowHeight * 2.5)
}

function setup() {
  cvn = createCanvas(windowWidth, windowHeight * 0.8);
  cvn.parent('canvas');

  for (let i = 0; i < 200; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }

  for (let i = 0; i < 800; i++) {
    stars.push(new Star());
  }

  background(0);
  intialButtons();
  firstScreen();

  nameCrewsRandom();
  nameCrewsRandomSetUp();

  namePassengersRandom();
  namePassengersRandomSetUp();

  nameTeachersRandom();
  nameTeachersRandomSetUp();

  nameStudentsRandomSetUp();
  nameStudentsRandom();
}

function draw() {

  switch (pageState) {
    case 'title':
      firstScreen();
      break;
    case 'mainKor':
      artistEngButton.locate(-400, -500);
      mainKorScreen();
      if (keyIsDown) {
        if (keyCode == 87) {
          nameButtonsKor();
          artistKor();
        } else {
        }
      }

      break;
    case 'mainEng':
      artistKorButton.locate(-400, -500);
      mainEngScreen();
      if (keyIsDown) {
        if (keyCode == 87) {
          nameButtonsEng();
          artistEng();
        } else {
        }
      }

      break;

    case 'mainSpan':
      //mainSpanScreen();
      spanButton.locate(-400, -500);
      break;
    case 'lastKor':
      artistKorButton.locate(-400, -500);
      artistEngButton.locate(-400, -500);
      korButton.locate(-400, -500);
      engButton.locate(-400, -500);
      lastPageKor();
      break;
    case 'lastEng':
      artistKorButton.locate(-400, -500);
      artistEngButton.locate(-400, -500);
      korButton.locate(-400, -500);
      engButton.locate(-400, -500);
      lastPageEng();
      break;
  }

  shipButton.draw();

  mySoundOn.draw();
  mySoundOff.draw();

  korButton.draw();
  engButton.draw();
  spanButton.draw();

  crewButtonKor.draw();
  passengerButtonKor.draw();
  teacherButtonKor.draw();
  studentButtonKor.draw();

  kdhButton.draw();
  ksyButton.draw();
  pshButton.draw();
  pysButton.draw();

  artistKorButton.draw();

  crewButtonEng.draw();
  passengerButtonEng.draw();
  teacherButtonEng.draw();
  studentButtonEng.draw();

  artistEngButton.draw();

}

function firstScreen() {
  startButton();
}

function mainKorScreen() {
  createCanvas(windowWidth * 1, windowHeight * 2.6);
  background(202, 240, 248);
  languageButtons();

  push();
  textAlign(CENTER);
  textSize(25);
  fill(2, 62, 138, 200);
  textFont(myKfont);
  text('2014년 4월 16일,', windowWidth * 0.5, windowHeight * 0.09);
  text('인천에서 제주로 향하던 여객선 세월호가', windowWidth * 0.5, windowHeight * 0.12);
  text('진도 인근 해상에서 침몰하면서', windowWidth * 0.5, windowHeight * 0.15);
  text('전체 탑승자 476명 중', windowWidth * 0.5, windowHeight * 0.18);
  text('실종 5명, 사망자 299명으로 총 304명이', windowWidth * 0.5, windowHeight * 0.21);
  text('사망 및 실종된 대형 참사가 일어났다.', windowWidth * 0.5, windowHeight * 0.24);

  fill(0, 150, 199)
  text('W를 누른 후, 스크롤을 내리세요.', windowWidth * 0.5, windowHeight * 0.29);
  text('그 후, 노란 리본을 누르고 계세요.', windowWidth * 0.5, windowHeight * 0.32);

  textFont("san-serif");
  text('🎗', windowWidth * 0.5, windowHeight * 0.355);
  pop();

  drawWaves();
}

class Bubble {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height * 3);
    this.z = random(width);
  }
  move() {
    this.y--
    if (this.y > windowHeight * 1) {
      this.y = 0;
    }
  }
  body() {
    fill(150, 188, 255);
    noStroke();
    this.size = map(this.z, 0, width, 20, 0);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

function drawWaves() {
  fill(3, 4, 94);
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

  for (let i = 0; i < 200; i++) {
    bubbles[i].body();
    bubbles[i].move();
  }

  push();
  scale(0.7, 0.8);
  ferryAnimation();
  pop();
}

function ferryAnimation() {
  if (keyIsDown) {
    if (keyCode == 87) {
      ferryAni.nextFrame();
      nameWithSoundButtons();
      nameCrewsRandom();
      namePassengersRandom();
      nameTeachersRandom();
      nameStudentsRandom();
    } else {
      ferryAni.stop();
    }
  }
  animation(ferryAni, windowWidth * 0.7, level2 * 1);
}

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
  }

  show() {
    fill(255, 228, 92);
    noStroke();
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    this.size = map(this.z, 0, width, 10, 0);
    ellipse(this.sx, this.sy, this.size, this.size);
  }
}

function lastPageKor() {
  createCanvas(windowWidth, windowHeight * 0.9);
  background(1, 1, 20);

  for (let i = 0; i < stars.length; i++) {
    stars[i].show();
  }

  imageMode(CENTER);
  tint(255, 126);
  image(symbol, windowWidth * 0.5, windowHeight * 0.45, windowWidth * 0.5, windowHeight);

  textAlign(CENTER);
  textSize(25);
  fill(248, 249, 250);
  textFont(myKfont);
  text("작가의 말", windowWidth * 0.5, windowHeight * 0.06)

  textSize(20);
  fill(248, 249, 250);
  text("세월호 참사가 일어난 지 어느덧 8년이 지났다.", windowWidth * 0.5, windowHeight * 0.12)
  text("그날의 충격도 아픔도 많이 무뎌지는 듯했다.", windowWidth * 0.5, windowHeight * 0.15)
  text("그러나 아직도 세월호를 잊지 못하냐는 유가족들을 향한 날선 비난에", windowWidth * 0.5, windowHeight * 0.18)
  text("그날의 참사가 다시 생각났다.", windowWidth * 0.5, windowHeight * 0.21)

  text("우리는 아직도 왜 세월호가 침몰했는지,", windowWidth * 0.5, windowHeight * 0.27)
  text("구조대는 늦게 도착했는지,", windowWidth * 0.5, windowHeight * 0.30)
  text("모든 이들이 무사히 구조되었다고 오보가 났었는지 아직 모른다.", windowWidth * 0.5, windowHeight * 0.33)
  text("그저 사랑하는 가족이 왜 죽었는지 알고 싶다던 유가족들에게 사람들은 비난을 했다.", windowWidth * 0.5, windowHeight * 0.36)
  text("이제는 놓아주라고 잊으라고 자격도 없는 사람들이 그들을 마구 짓밟았다.", windowWidth * 0.5, windowHeight * 0.39)

  text("이 참사에서", windowWidth * 0.5, windowHeight * 0.45)
  text("수학여행 간다고 들떠있던 248명의 18살 아이들이 죽었다.", windowWidth * 0.5, windowHeight * 0.48)
  text("학생들을 지켜주던 10명의 교사도 죽었다.", windowWidth * 0.5, windowHeight * 0.51)
  text("각자의 이유로 배를 탔던 일반 승객 30명도 죽었다.", windowWidth * 0.5, windowHeight * 0.54)
  text("선원과 선상 아르바이트생들 10명도 죽었다.", windowWidth * 0.5, windowHeight * 0.57)
  text("총 304명이 바다에서 죽었다.", windowWidth * 0.5, windowHeight * 0.60)
  text("5명의 유해는 수습되지 못한 채 바다를 떠돌고 있다.", windowWidth * 0.5, windowHeight * 0.63)

  text("잊으면 안 된다.", windowWidth * 0.5, windowHeight * 0.69)
  text("당시 17살이던 나에게, 내 친구에게, 내 형제자매들에게 일어났을 수도 있는 일이다.", windowWidth * 0.5, windowHeight * 0.72)
  text("아무도 이 참사의 유가족들을 비난할 자격이 없다.", windowWidth * 0.5, windowHeight * 0.75)


  text("그날의 봄을 잊지 않겠다.", windowWidth * 0.5, windowHeight * 0.81)
}
