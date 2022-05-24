var shipButton;

var mySoundOn;
var mySoundOff;

var korButton;
var engButton;
var spanButton;

var crewButtonKor;
var passengerButtonKor;
var teacherButtonKor;
var studentButtonKor;

function intialButtons() {
  shipButton = new Clickable();
  shipButton.image = shipIcon;
  shipButton.imageScale = 3.5;
  shipButton.fitImage = true;
  shipButton.locate(-400, -500);
  shipButton.resize(windowWidth * 0.11, windowWidth * 0.05);
  shipButton.text = "         ";
  shipButton.color = "#00000000";
  shipButton.strokeWeight = 00;
  shipButton.onRelease = function() {
    pageState = 'mainKor'
    shipButton.locate(-400, -500);
    mySoundOn.locate(windowWidth * 0.01, windowHeight * 0.035);
    oceanSound.loop();
  }

  //Sound On
  mySoundOn = new Clickable();
  mySoundOn.image = soundOn;
  mySoundOn.locate(-400, -500);
  mySoundOn.resize(30, 30);
  mySoundOn.text = "  ";
  mySoundOn.color = "#00000000";
  mySoundOn.strokeWeight = 0;
  mySoundOn.onRelease = function() {
    oceanSound.pause();
    kdhSound.pause();
    ksySound.pause();
    pshSound.pause();
    pysSound.pause();
    mySoundOff.locate(windowWidth * 0.01, windowHeight * 0.035);
    mySoundOn.locate(-400,-400);
  }


  //Sound Off
  mySoundOff = new Clickable();
  mySoundOff.image = soundOff;
  mySoundOff.locate(-400, -500);
  mySoundOff.resize(30, 30);
  mySoundOff.text = "  ";
  mySoundOff.color = "#00000000";
  mySoundOff.strokeWeight = 0;
  mySoundOff.onRelease = function() {
    oceanSound.play();
    mySoundOn.locate(windowWidth * 0.01, windowHeight * 0.035);
    mySoundOff.locate(-400,-400);
  }


  korButton = new Clickable();
  korButton.image = korean;
  korButton.imageScale = 1.2;
  korButton.fitImage = true;
  korButton.locate(-400, -500);
  korButton.resize(windowWidth * 0.03, windowWidth * 0.015);
  korButton.text = "         ";
  korButton.color = "#00000000";
  korButton.strokeWeight = 00;
  korButton.onRelease = function() {
    pageState = 'mainKor'
    shipButton.locate(-400, -500);
  }

  engButton = new Clickable();
  engButton.image = english;
  engButton.imageScale = 1.1;
  engButton.fitImage = true;
  engButton.locate(-400, -500);
  engButton.resize(windowWidth * 0.03, windowWidth * 0.015);
  engButton.text = "         ";
  engButton.color = "#00000000";
  engButton.strokeWeight = 00;
  engButton.onRelease = function() {
    pageState = 'mainEng'
    shipButton.locate(-400, -500);
  }

  spanButton = new Clickable();
  spanButton.image = spanish;
  spanButton.imageScale = 1.2;
  spanButton.locate(-400, -500);
  spanButton.resize(windowWidth * 0.03, windowWidth * 0.015);
  spanButton.text = "         ";
  spanButton.color = "#00000000";
  spanButton.strokeWeight = 00;
  spanButton.onRelease = function() {
    alert('Spanish');
    pageState = 'mainSpan'
    shipButton.locate(-400, -500);
  }

  crewButtonKor = new Clickable();
  crewButtonKor.locate(-400, -500);
  crewButtonKor.text = "승무원";
  crewButtonKor.image = symbol;
  crewButtonKor.imageScale = 1.5;
  crewButtonKor.fitImage = true;
  crewButtonKor.textColor = "#000000";
  crewButtonKor.textSize = 30;
  crewButtonKor.textFont = myKfont;
  crewButtonKor.textScaled = false;
  crewButtonKor.color = "#00000000";
  crewButtonKor.strokeWeight = 00;
  crewButtonKor.onHover = function() {
    rectMode(CENTER);
    fill(0)
    rect(windowWidth * 0.5, windowHeight * 1.09, 240, 40)
    fill(255)
    textSize(20);
    textAlign(CENTER);
    text('승무원 33명 중 10명 사망', windowWidth * 0.5, windowHeight * 1.1)
  }

  passengerButtonKor = new Clickable();
  passengerButtonKor.locate(-400, -500);
  passengerButtonKor.text = "일반인 탑승객";
  passengerButtonKor.image = symbol;
  passengerButtonKor.imageScale = 1.5;
  passengerButtonKor.fitImage = true;
  passengerButtonKor.textColor = "#000000";
  passengerButtonKor.textSize = 30;
  passengerButtonKor.textFont = myKfont;
  passengerButtonKor.textScaled = false;
  passengerButtonKor.color = "#00000000";
  passengerButtonKor.strokeWeight = 00;
  passengerButtonKor.onHover = function() {
    rectMode(CENTER);
    fill(0)
    rect(windowWidth * 0.5, windowHeight * 1.34, 350, 40)
    fill(255)
    textSize(20);
    textAlign(CENTER);
    text('일반인 탑승객 104명 중 31명 사망, 2명 실종', windowWidth * 0.5, windowHeight * 1.35)
  }

  teacherButtonKor = new Clickable();
  teacherButtonKor.locate(-400, -500);
  teacherButtonKor.text = "선생님";
  teacherButtonKor.image = symbol;
  teacherButtonKor.imageScale = 1.5;
  teacherButtonKor.fitImage = true;
  teacherButtonKor.textColor = "#000000";
  teacherButtonKor.textSize = 30;
  teacherButtonKor.textFont = myKfont;
  teacherButtonKor.textScaled = false;
  teacherButtonKor.color = "#00000000";
  teacherButtonKor.strokeWeight = 00;
  teacherButtonKor.onHover = function() {
    rectMode(CENTER);
    fill(0)
    rect(windowWidth * 0.5, windowHeight * 1.64, 280, 40)
    fill(255)
    textSize(20);
    textAlign(CENTER);
    text('교사 14명 중 10명 사망, 1명 실종', windowWidth * 0.5, windowHeight * 1.65)
  }

  studentButtonKor = new Clickable();
  studentButtonKor.locate(-400, -500);
  studentButtonKor.text = "학생";
  studentButtonKor.image = symbol;
  studentButtonKor.imageScale = 1.5;
  studentButtonKor.fitImage = true;
  studentButtonKor.textColor = "#000000";
  studentButtonKor.textSize = 30;
  studentButtonKor.textFont = myKfont;
  studentButtonKor.textScaled = false;
  studentButtonKor.color = "#00000000";
  studentButtonKor.strokeWeight = 00;
  studentButtonKor.onHover = function() {
    rectMode(CENTER);
    fill(0)
    rect(windowWidth * 0.5, windowHeight * 2.17, 300, 40)
    fill(255)
    textSize(20);
    textAlign(CENTER);
    text('학생 325명 중 248명 사망, 2명 실종', windowWidth * 0.5, windowHeight * 2.18)
  }

  kdhButton = new Clickable();
  kdhButton.locate(-400, -500);
  kdhButton.text = "김동협";
  kdhButton.image = symbol;
  kdhButton.imageScale = 1.5;
  kdhButton.fitImage = true;
  kdhButton.textColor = "#FFFFFF";
  kdhButton.textSize = 27;
  kdhButton.textFont = myKfont;
  kdhButton.textScaled = false;
  kdhButton.color = "#00000000";
  kdhButton.strokeWeight = 00;
  kdhButton.onPress = function() {
    kdhSound.play();
  }
  kdhButton.onRelease = function() {
    kdhSound.pause();
  }
  kdhButton.onHover = function() {
    fill(255)
    textSize(20);
    textAlign(CENTER);
    text('', windowWidth * 0.48, windowHeight * 2.2)
  }

  ksyButton = new Clickable();
  ksyButton.locate(-400, -500);
  ksyButton.text = "김시연";
  ksyButton.image = symbol;
  ksyButton.imageScale = 1.5;
  ksyButton.fitImage = true;
  ksyButton.textColor = "#FFFFFF";
  ksyButton.textSize = 27;
  ksyButton.textFont = myKfont;
  ksyButton.textScaled = false;
  ksyButton.color = "#00000000";
  ksyButton.strokeWeight = 00;
  ksyButton.onPress = function() {
    ksySound.play();
  }
  ksyButton.onRelease = function() {
    ksySound.pause();
  }

  pshButton = new Clickable();
  pshButton.locate(-400, -500);
  pshButton.text = "박수현";
  pshButton.image = symbol;
  pshButton.imageScale = 1.5;
  pshButton.fitImage = true;
  pshButton.textColor = "#FFFFFF";
  pshButton.textSize = 27;
  pshButton.textFont = myKfont;
  pshButton.textScaled = false;
  pshButton.color = "#00000000";
  pshButton.strokeWeight = 00;
  pshButton.onPress = function() {
    pshSound.play();
  }
  pshButton.onRelease = function() {
    pshSound.pause();
  }

  pysButton = new Clickable();
  pysButton.locate(-400, -500);
  pysButton.text = "박예슬";
  pysButton.image = symbol;
  pysButton.imageScale = 1.5;
  pysButton.fitImage = true;
  pysButton.textColor = "#FFFFFF";
  pysButton.textSize = 27;
  pysButton.textFont = myKfont;
  pysButton.textScaled = false;
  pysButton.color = "#00000000";
  pysButton.strokeWeight = 00;
  pysButton.onPress = function() {
    pysSound.play();
  }
  pysButton.onRelease = function() {
    pysSound.pause();
  }

  artistKorButton = new Clickable();
  artistKorButton.locate(-400, -500);
  artistKorButton.image = symbol;
  artistKorButton.imageScale = 1.5;
  artistKorButton.fitImage = true;
  artistKorButton.text = "작가의 말";
  artistKorButton.textColor = "#000000";
  artistKorButton.textSize = 25;
  artistKorButton.textFont = myKfont;
  artistKorButton.textScaled = false;
  artistKorButton.color = "#00000000";
  artistKorButton.strokeWeight = 00;
  artistKorButton.onRelease = function() {
    pageState = 'lastKor'
  }

  crewButtonEng = new Clickable();
  crewButtonEng.locate(-400, -500);
  crewButtonEng.text = "CREW MEMBERS";
  crewButtonEng.image = symbol;
  crewButtonEng.imageScale = 1.5;
  crewButtonEng.fitImage = true;
  crewButtonEng.textColor = "#000000";
  crewButtonEng.textSize = 30;
  crewButtonEng.textFont = myKfont;
  crewButtonEng.textScaled = false;
  crewButtonEng.color = "#00000000";
  crewButtonEng.strokeWeight = 00;
  crewButtonEng.onHover = function() {
    rectMode(CENTER);
    fill(0)
    rect(windowWidth * 0.5, windowHeight * 1.09, 240, 40)
    fill(255)
    textSize(20);
    textAlign(CENTER);
    text('Of the 33 crew members, 10 died', windowWidth * 0.5, windowHeight * 1.1)
  }

  passengerButtonEng = new Clickable();
  passengerButtonEng.locate(-400, -500);
  passengerButtonEng.text = "PASSENGERS";
  passengerButtonEng.image = symbol;
  passengerButtonEng.imageScale = 1.5;
  passengerButtonEng.fitImage = true;
  passengerButtonEng.textColor = "#000000";
  passengerButtonEng.textSize = 30;
  passengerButtonEng.textFont = myKfont;
  passengerButtonEng.textScaled = false;
  passengerButtonEng.color = "#00000000";
  passengerButtonEng.strokeWeight = 00;
  passengerButtonEng.onHover = function() {
    rectMode(CENTER);
    fill(0)
    rect(windowWidth * 0.5, windowHeight * 1.34, 350, 40)
    fill(255)
    textSize(20);
    textAlign(CENTER);
    text('Of the 104 passengers, 31 died, and 2 missing', windowWidth * 0.5, windowHeight * 1.35)
  }

  teacherButtonEng = new Clickable();
  teacherButtonEng.locate(-400, -500);
  teacherButtonEng.text = "TEACHERS";
  teacherButtonEng.image = symbol;
  teacherButtonEng.imageScale = 1.5;
  teacherButtonEng.fitImage = true;
  teacherButtonEng.textColor = "#000000";
  teacherButtonEng.textSize = 30;
  teacherButtonEng.textFont = myKfont;
  teacherButtonEng.textScaled = false;
  teacherButtonEng.color = "#00000000";
  teacherButtonEng.strokeWeight = 00;
  teacherButtonEng.onHover = function() {
    rectMode(CENTER);
    fill(0)
    rect(windowWidth * 0.5, windowHeight * 1.64, 280, 40)
    fill(255)
    textSize(20);
    textAlign(CENTER);
    text('Of the 14 teachers, 10 died and 1 missing', windowWidth * 0.5, windowHeight * 1.65)
  }

  studentButtonEng = new Clickable();
  studentButtonEng.locate(-400, -500);
  studentButtonEng.text = "STUDENTS";
  studentButtonEng.image = symbol;
  studentButtonEng.imageScale = 1.5;
  studentButtonEng.fitImage = true;
  studentButtonEng.textColor = "#000000";
  studentButtonEng.textSize = 30;
  studentButtonEng.textFont = myKfont;
  studentButtonEng.textScaled = false;
  studentButtonEng.color = "#00000000";
  studentButtonEng.strokeWeight = 00;
  studentButtonEng.onHover = function() {
    rectMode(CENTER);
    fill(0)
    rect(windowWidth * 0.5, windowHeight * 2.17, 300, 40)
    fill(255)
    textSize(20);
    textAlign(CENTER);
    text('Of the 325 students, 248 died and 2 missing', windowWidth * 0.5, windowHeight * 2.18)
  }

  artistEngButton = new Clickable();
  artistEngButton.locate(-400, -500);
  artistEngButton.image = symbol;
  artistEngButton.imageScale = 1.5;
  artistEngButton.fitImage = true;
  artistEngButton.text = "Artist's Statement";
  artistEngButton.textColor = "#000000";
  artistEngButton.textSize = 25;
  artistEngButton.textFont = myKfont;
  artistEngButton.textScaled = false;
  artistEngButton.color = "#00000000";
  artistEngButton.strokeWeight = 00;
  artistEngButton.onRelease = function() {
    pageState = 'lastEng'
  }

}
