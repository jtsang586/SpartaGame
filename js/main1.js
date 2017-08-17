// Music game - Mouseclick hero
// Core Game: player clicks on specific sections of the page with the right timing
// to gain points.

// Global variables

// All circles
var $topLeft = $("#topLeft");
var $topLeftA = $("#topLeftAnim");
var $topMiddle = $("#topMiddle");
var $topMiddleA = $("#topMiddleAnim");
var $middleLeft = $("#middleLeft");
var $middleLeftA = $("#middleLeftAnim")
var $mainCircle = $("#mainCircle");
var $mainA = $("#mainAnim");
var $smallCircle = $("#smallCircle");
var $smallCircleA = $("#smallCircleAnim");
var $scoreBoard = $("#score");
// Player score
var score = null;
// Timer?
var audio = new Audio("sound/7nation.mp3");
//---------------------------------------------------------------
//Functions
function gameStart(){
  // time taken for perfect is 1.7 sec, there is 600ms delay
  audio.play();
  // Every beat in song
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 1312);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 1900);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 2388);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 2766);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 3060);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 3690);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 4668);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 5748);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 6546);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 7176);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 7680);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 8730);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 9696);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 10704);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 11512);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 12378);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 13302);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 14048);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 14510);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 14888);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 15854);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 16854);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 17316);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 18316);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 18778);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 19282);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 19786);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 20248);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 20752);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 21718);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 22222);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 22684);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 23146);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 23650);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 24112);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 25078);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 25498);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 26044);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 26464);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 27010);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 27430);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 28396);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 28900);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 29404);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 29908);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 30370);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 30874);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 31336);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 31882);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 32344);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 33310);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 34310);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 35276);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 35738);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 36242);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 37712);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 38132);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 38678);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 39140);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 39602);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 40602);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 42526);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 43492);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 43996);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 44500);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 44962);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 45962);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 46466);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 46886);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 47432);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 47894);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 48860);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 49406);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 49868);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 50330);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 50834);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 51338);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 52304);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 53304);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 53682);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 54682);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 55228);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 55690);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 56110);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 56656);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 57118);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 57622);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 58588);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 59554);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 60058);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 60562);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 61066);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 62066);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 63032);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 63452);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 63998);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 64998);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 65460);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 66048);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 66468);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 67014);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 67476);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 68064);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 69064);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 69526);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 70828);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 71374);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 71878);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 72382);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 72886);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 73264);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 74566);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 75364);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 75868);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 76868);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 77834);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 78632);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 79262);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 80262);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 81228);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 82570);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 83267);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 84267);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 84771);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 85275);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 85779);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 86279);
  // setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 86779);
  // setTimeout(function(){addBeat($mainCircle, $mainA);}, 87279);
  // setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 88279);
  // setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 89279);
  // setTimeout(function(){addBeat($topLeft, $topLeftA);}, 90035);
  // // 01:29:18
  // setTimeout(function(){addBeat($mainCircle, $mainA);}, 90707);
  // setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 91043);
  // setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 91295);
  // setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 92295);
  // setTimeout(function(){addBeat($topLeft, $topLeftA);}, 93295);
  // setTimeout(function(){addBeat($mainCircle, $mainA);}, 94135);
  // setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 94303);
  // setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 94713);
  // setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 95049);
  // setTimeout(function(){addBeat($topLeft, $topLeftA);}, 95343);
  // setTimeout(function(){addBeat($mainCircle, $mainA);}, 96343);

  setTimeout(function(){setScore();}, 89000);
  setTimeout(function(){window.location.href = "end.html";}, 89600);
}

function addBeat(circle,animation){
  //Need all functions to use new variable.
  animation.hide();
  var hasClicked = false;
  addBadClick();
  animation.show();
  animation.attr("class", "animate");
  animation.css("visibility", "visible");

  function addBadClick(){
    if (hasClicked == false){
    circle.on("click", badClick);
    circle.attr("class", "badClick");
    // remove badClick listener after half a second
    setTimeout(function(){removeBadClick(circle);}, 500);
    }
  }

  function removeBadClick(){
    circle.off("click", badClick);
    circle.attr("class", "");

    if (hasClicked == false){
      // if there's not been a click then add next listener
      addGoodClick(circle);
    }

  }

  function addPerfectClick(){
    circle.on("click", perfectClick);
    circle.attr("class", "perfectClick");
    setTimeout(function(){removePerfectClick();}, 500);
  }

  function removePerfectClick(){
    circle.off("click", perfectClick);
    circle.attr("class", "");

    if (hasClicked == false){
      if (score > 100){
        score -= 100;
        $scoreBoard.html("Score : " + score);
        $("h2").html("MISS!!!");
      }
    }

    animation.attr("class", "");
  }

  function addGoodClick(){
    circle.on("click", goodClick);
    circle.attr("class", "goodClick");
    setTimeout(function(){removeGoodClick();}, 700);
    setTimeout(function(){animation.css("visibility", "hidden");},100);
  }

  function removeGoodClick(){
    circle.off("click", goodClick);
    circle.attr("class", "");

    if (hasClicked == false){
      addPerfectClick(circle);
    }
  }

  function badClick(){

    if (hasClicked == false){
      score += 50;
      $scoreBoard.html("Score : " + score);
      $("h2").html("BAD!!!").css("display", "block");
    }

  hasClicked = true;
  animation.attr("class", "");
  animation.css("visibility", "hidden");
  }

  function goodClick(){

    if (hasClicked == false){
      score+=100;
      $scoreBoard.html("Score : " + score);
      $("h2").html("Good!!!");
    }

    hasClicked = true;
    animation.attr("class", "");
  }

function perfectClick(){

    if (hasClicked == false){
      score+=200;
      $scoreBoard.html("Score : " + score);
      $("h2").html("Perfect!!!");
    }

    hasClicked = true;
  }
}

function setScore(){
  var highscore = localStorage.getItem("7Nhighscore");
  var player1Score = localStorage.getItem("player1Score");

  if (highscore !== null){
    if (score > highscore){
      localStorage.setItem("7Nhighscore", score);
    }
  }
  else {
    localStorage.setItem("7Nhighscore", score);
  }
  if (player1Score !== null){
    localStorage.setItem("player2Score", score);
    localStorage.setItem("playerFinished", "player2");
  } else {
    localStorage.setItem("player1Score", score);
  }

  localStorage.setItem("7NlastScore", score);
  localStorage.setItem("lastSong", "7Nation");
}

//------------------------------------------------------
//main function start
gameStart();
