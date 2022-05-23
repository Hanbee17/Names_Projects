var shipButton;

var korButton;
var engButton;
var spanButton;

var crewButton;
var passengerButton;
var teacherButton;
var studentButton;

function startButton() {
  shipButton.locate(windowWidth*0.445, windowHeight*0.35);
}

function languageButtons() {
  korButton.locate(windowWidth*0.91, windowHeight*0.04);
  engButton.locate(windowWidth*0.95, windowHeight*0.04);
  //spanButton.locate(windowWidth*0.95, windowHeight*0.04);
}

function nameButtons () {

  crewButton.locate(windowWidth*0.4, level2*1.3);
  passengerButton.locate(windowWidth*0.4, level2*1.3);
  teacherButton.locate(windowWidth*0.4, level2*1.6);
  studentButton.locate(windowWidth*0.5, level2*2);

  arrowForLast.locate(windowWidth*0.5, windowHeight*2.9)
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
    alert('It could be very disturbing and traumatic experience. Please leave if you do not want it.');
    pageState = 'mainKor'
    shipButton.locate(-400, -500);
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

 crewButton = new Clickable();
 crewButton.locate(-400, -500);
 crewButton.text = "Crews";
 crewButton.color = "#00000000";
 crewButton.strokeWeight = 00;
 crewButton.onRelease = function() {
   alert('Crews');
 }

 passengerButton = new Clickable();
 passengerButton.locate(-400, -500);
 passengerButton.text = "Passengers";
 passengerButton.color = "#00000000";
 passengerButton.strokeWeight = 00;
 passengerButton.onRelease = function() {
   alert('Passengers');
 }

 teacherButton = new Clickable();
 teacherButton.locate(-400, -500);
 teacherButton.text = "Teachers";
 teacherButton.color = "#00000000";
 teacherButton.strokeWeight = 00;
 teacherButton.onRelease = function() {
   alert('Teachers');
 }

 studentButton = new Clickable();
 studentButton.locate(-400, -500);
 studentButton.text = "Students";
 studentButton.color = "#00000000";
 studentButton.strokeWeight = 00;
 studentButton.onRelease = function() {
   alert('Students');
 }

arrowForLast = new Clickable();
arrowForLast.locate(-400, -500);
arrowForLast.text = "Click to Go Last Page";
arrowForLast.color = "#00000000";
arrowForLast.strokeWeight = 00;
arrowForLast.onRelease = function() {
  alert('last Page');
  pageState = 'lastKor'
}

}
