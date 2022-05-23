var shipButton;

var korButton;
var engButton;
var spanButton;

var crewButtonKor;
var passengerButtonKor;
var teacherButtonKor;
var studentButtonKor;

var closeButton;

function startButton() {
  shipButton.locate(windowWidth*0.445, windowHeight*0.35);
}

function languageButtons() {
  korButton.locate(windowWidth*0.91, windowHeight*0.04);
  engButton.locate(windowWidth*0.95, windowHeight*0.04);
  //spanButton.locate(windowWidth*0.95, windowHeight*0.04);
}

function nameButtons () {
  crewButtonKor.locate(windowWidth*0.475, windowHeight*1);
  passengerButtonKor.locate(windowWidth*0.475, windowHeight*1.25);
  teacherButtonKor.locate(windowWidth*0.475, windowHeight*1.55);
  studentButtonKor.locate(windowWidth*0.475, windowHeight*2.08);
 }

 function artistKor () {
   artistKorButton.locate(windowWidth*0.475, windowHeight*2.5)
 }

 function artistEng () {
   artistEngButton.locate(windowWidth*0.5, windowHeight*2.9)
 }

function intialButtons() {
  shipButton = new Clickable();
  shipButton.image = shipIcon;
  shipButton.imageScale = 3.5;
  shipButton.fitImage = true;
  shipButton.locate(-400, -500);
  shipButton.resize(windowWidth*0.11, windowWidth*0.05);
  shipButton.text = "         ";
  shipButton.color = "#00000000";
  shipButton.strokeWeight = 00;
  shipButton.onRelease = function() {
    pageState = 'mainKor'
    shipButton.locate(-400, -500);
    oceanSound.play();
    oceanSound.loop();
  }


 korButton = new Clickable();
 korButton.image = korean;
 korButton.imageScale = 1.2;
 korButton.fitImage = true;
 korButton.locate(-400, -500);
 korButton.resize(windowWidth*0.03, windowWidth*0.015);
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
 engButton.resize(windowWidth*0.03, windowWidth*0.015);
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
 spanButton.resize(windowWidth*0.03, windowWidth*0.015);
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
 crewButtonKor.text = "직원";
 crewButtonKor.image = symbol;
 crewButtonKor.imageScale = 1.5;
 crewButtonKor.fitImage = true;
 crewButtonKor.textColor = "#FFFFFF";
 crewButtonKor.textSize = 30;
 crewButtonKor.textFont = myKfont;
 crewButtonKor.textScaled = false;
 crewButtonKor.color = "#00000000";
 crewButtonKor.strokeWeight = 00;
 crewButtonKor.onPress = function() {
 }

 passengerButtonKor = new Clickable();
 passengerButtonKor.locate(-400, -500);
 passengerButtonKor.text = "승객";
 passengerButtonKor.image = symbol;
 passengerButtonKor.imageScale = 1.5;
 passengerButtonKor.fitImage = true;
 passengerButtonKor.textColor = "#FFFFFF";
 passengerButtonKor.textSize = 30;
 passengerButtonKor.textFont = myKfont;
 passengerButtonKor.textScaled = false;
 passengerButtonKor.color = "#00000000";
 passengerButtonKor.strokeWeight = 00;
 passengerButtonKor.onPress = function() {
   alert('Passengers');
 }

 teacherButtonKor = new Clickable();
 teacherButtonKor.locate(-400, -500);
 teacherButtonKor.text = "선생님";
 teacherButtonKor.image = symbol;
 teacherButtonKor.imageScale = 1.5;
 teacherButtonKor.fitImage = true;
 teacherButtonKor.textColor = "#FFFFFF";
 teacherButtonKor.textSize = 30;
 teacherButtonKor.textFont = myKfont;
 teacherButtonKor.textScaled = false;
 teacherButtonKor.color = "#00000000";
 teacherButtonKor.strokeWeight = 00;
 teacherButtonKor.onPress = function() {
   alert('Teachers');
 }

 studentButtonKor = new Clickable();
 studentButtonKor.locate(-400, -500);
 studentButtonKor.text = "학생";
 studentButtonKor.image = symbol;
 studentButtonKor.imageScale = 1.5;
 studentButtonKor.fitImage = true;
 studentButtonKor.textColor = "#FFFFFF";
 studentButtonKor.textSize = 30;
 studentButtonKor.textFont = myKfont;
 studentButtonKor.textScaled = false;
 studentButtonKor.color = "#00000000";
 studentButtonKor.strokeWeight = 00;
 studentButtonKor.onPress = function() {
   alert('Students');
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

artistEngButton = new Clickable();
artistEngButton.locate(-400, -500);
artistEngButton.text = "Click to Go Last Page";
artistEngButton.color = "#00000000";
artistEngButton.strokeWeight = 00;
artistEngButton.onRelease = function() {
  pageState = 'lastEng'
}

closeButton = new Clickable();
closeButton.locate(-400, -500);
closeButton.text = "X";
closeButton.textColor = "#FFFFFF";
closeButton.textSize = 25;
closeButton.textFont = myKfont;
closeButton.textScaled = false;
closeButton.color = "#00000000";
closeButton.strokeWeight = 00;
closeButton.onRelease = function() {
  pageState = 'mainKor'
}

}
