

function mainEngScreen() {
  createCanvas(windowWidth * 1, windowHeight * 3);
  background(202, 240, 248);
  languageButtons();
  artistEng();

  push();
  textAlign(CENTER);
  textSize(25);
  fill(2, 62, 138, 200);
  textFont(myKfont);
  text('On April 16, 2014', windowWidth * 0.5, windowHeight * 0.15);
  text('the Sewol ferry, en route from Incheon to Jeju,', windowWidth * 0.5, windowHeight * 0.18);
  text('sank in the sea near Jindo,', windowWidth * 0.5, windowHeight * 0.21);
  text('resulting in a major catastrophe,', windowWidth * 0.5, windowHeight * 0.24);
  text('with 5 missing and 299 fatalities out of 476 people on board,', windowWidth * 0.5, windowHeight * 0.27);
  text('resulting in a total of 304 deaths.', windowWidth * 0.5, windowHeight * 0.30);

  fill(0, 150, 199)
  text('After pressing W, scroll dowm.', windowWidth * 0.5, windowHeight * 0.35);

  pop();

  drawWaves();

  nameCrewsRandom();
  namePassengersRandom();
  nameTeachersRandom();
  nameStudentsRandom();


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


//function mainSpanScreen() {
//   createCanvas(windowWidth, windowHeight);
//   background(0, 150, 199);
//   textAlign(CENTER);
//   textSize(20);
//   fill(206, 212, 218);
//   text('This is Spanish Page.', windowWidth * 0.5, windowHeight * 0.5);
//   languageButtons();
// }
