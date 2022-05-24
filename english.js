

function mainEngScreen() {
  createCanvas(windowWidth * 1, windowHeight * 2.6);
  background(202, 240, 248);
  languageButtons();

  push();
  textAlign(CENTER);
  textSize(25);
  fill(2, 62, 138, 200);
  textFont(myKfont);
  text('On April 16, 2014', windowWidth * 0.5, windowHeight * 0.09);
  text('the Sewol ferry, en route from Incheon to Jeju,', windowWidth * 0.5, windowHeight * 0.12);
  text('sank in the sea near Jindo,', windowWidth * 0.5, windowHeight * 0.15);
  text('resulting in a major catastrophe,', windowWidth * 0.5, windowHeight * 0.18);
  text('with 5 missing and 299 fatalities out of 476 people on board,', windowWidth * 0.5, windowHeight * 0.21);
  text('resulting in a total of 304 deaths.', windowWidth * 0.5, windowHeight * 0.24);

  fill(0, 150, 199)
  text('Scroll dowm, after pressing W.', windowWidth * 0.5, windowHeight * 0.29);
  text('After that, hover and press on yellow ribons.', windowWidth * 0.5, windowHeight * 0.32);

  textFont("san-serif");
  text('🎗', windowWidth * 0.5, windowHeight * 0.355);
  pop();

  drawWaves();
}

function lastPageEng() {
  createCanvas(windowWidth, windowHeight*0.9);
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
  text("Artist Statement", windowWidth * 0.5, windowHeight * 0.06)

  textSize(20);
  fill(248, 249, 250);
  text("Eight years have passed since the Sewol ferry tragedy.", windowWidth * 0.5, windowHeight * 0.12)
  text("The shock and pain of that day seemed to have been forgotten.", windowWidth * 0.5, windowHeight * 0.15)
  text("But the blame on the bereaved family for why can’t they let go,", windowWidth * 0.5, windowHeight * 0.18)
  text("reminded me of the tragedy.", windowWidth * 0.5, windowHeight * 0.21)

  text("We still don’t know why the Sewol Ferry sank,", windowWidth * 0.5, windowHeight * 0.27)
  text("why the rescue team arrived late,", windowWidth * 0.5, windowHeight * 0.30)
  text("why it was broadcasted that everyone was safely rescued.", windowWidth * 0.5, windowHeight * 0.33)
  text("People criticized the bereaved families for wanting to know why their families died.", windowWidth * 0.5, windowHeight * 0.36)
  text("And easily told them to just move on. ", windowWidth * 0.5, windowHeight * 0.39)

  text("In this tragedy,", windowWidth * 0.5, windowHeight * 0.45)
  text("250 students that were excited about going on a school trip died.", windowWidth * 0.5, windowHeight * 0.48)
  text("11 teachers that were protecting the students also died.", windowWidth * 0.5, windowHeight * 0.51)
  text("33 ordinary passengers who boarded the ship for their own reasons also died.", windowWidth * 0.5, windowHeight * 0.54)
  text("10 crew members and part-time students also died.", windowWidth * 0.5, windowHeight * 0.57)
  text("A total of 304 people drowend at sea.", windowWidth * 0.5, windowHeight * 0.60)
  text("The bodies of 5 people have not yet been even found.", windowWidth * 0.5, windowHeight * 0.63)

  text("We should not forget.", windowWidth * 0.5, windowHeight * 0.69)
  text("It could have happened to me, to my friend, to my families", windowWidth * 0.5, windowHeight * 0.72)
  text("No one has a right to blame the families of the victims of this tragedy.", windowWidth * 0.5, windowHeight * 0.75)


  text("I will always remember that spring. ", windowWidth * 0.5, windowHeight * 0.81)
}


//function mainSpanScreen() {
//   createCanvas(windowWidth, windowHeight);
//   background(0, 150, 199);
//   textAlign(CENTER);
//   textSize(20);
//   fill(206, 212, 218);
//   text('This is Spanish Page.', windowWidth * 0.5, windowHeight * 0.5);
//   languageButtons();
// }
