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
var audio = new Audio("sound/mario.mp3");

//---------------------------------------------------------------
//Functions
function gameStart(){
  // time taken for perfect is 1.7 sec, there is 600ms delay
  audio.play();
  // Every beat in song
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 900);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 1400);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 2070);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 2490);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 3078);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 3666);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 4128);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 4548);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 5052);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 6102);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 6270);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 6564);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 7068);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 7782);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 8538);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 9378);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 9672);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 10008);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 10428);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 10680);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 12108);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 12486);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 13158);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 13452);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 13788);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 14082);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 15342);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 15594);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 16182);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 16476);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 16900);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 17736);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 18366);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 18900);

  setTimeout(function(){setScore();}, 21000)
  setTimeout(function(){window.location.href = "end.html";}, 22000);
}

function addBeat(circle,animation){
  //Need all functions to use new variable.
  var hasClicked = false;
  // Start chain of listeners
  addBadClick();
  // Start animation
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
      $("h2").html("BAD!!!");
    }

  hasClicked = true
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
  var highscore = localStorage.getItem("mariohighscore");
  var player1Score = localStorage.getItem("player1Score");

  if (highscore !== null){
    if (score > highscore){
      localStorage.setItem("mariohighscore", score);
    }
  }
  else {
    localStorage.setItem("mariohighscore", score);
  }
  
  if (player1Score !== null){
    localStorage.setItem("player2Score", score);
    localStorage.setItem("playerFinished", "player2");
  } else {
    localStorage.setItem("player1Score", score);
  }

  localStorage.setItem("mariolastScore", score);
  localStorage.setItem("lastSong", "mario");
}

//------------------------------------------------------
//main function start
gameStart();
