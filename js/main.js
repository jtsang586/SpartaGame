// Music game - Mouseclick hero
// Core Game: player clicks on specific sections of the page with the right timing
// to gain points.

// Global variables

// All circles
var $topLeft = $("#topLeft");
var $topLeftA = $("topLeftAnim");
var $topMiddle = $("#topMiddle");
var $topMiddleA = $("topMiddleAnim");
var $middleLeft = $("#middleLeft");
var $middleLeftA = $("middleLeftAnim")
var $mainCircle = $("#mainCircle");
var $mainA = $("mainAnim");
var $smallCircle = $("#smallCircle");
var $smallCircleA = $("smallCircleAnim");
var $scoreBoard = $("#score");
// Player score
var score = null;
// Timer?
var audio = new Audio("mario.mp3");

//temp variables
var $audioButton = $("#audio");
//---------------------------------------------------------------
//Functions
function gameStart(){
  audio.play();
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 5000);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 6000);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 6500);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 7500);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 7800);
}

function addBeat(circle,animation){
  //Need all functions to use new variable.
  var hasClicked = false;
  addBadClick();
  animation.attr("class", "animate");
  animation.attr("id", "displayN");
  console.log(animation);
  function addBadClick(){
    if (hasClicked == false){
    circle.on("click", badClick);
    console.log("added bad");
    circle.attr("class", "badClick");
    setTimeout(function(){removeBadClick(circle);}, 500);
    }
  }

  function removeBadClick(){
    circle.off("click", badClick);
    circle.attr("class", "");
    console.log("removed bad");
    console.log(hasClicked);
    if (hasClicked == false){
      addGoodClick(circle);
    }
  }

  function addPerfectClick(){
    circle.on("click", perfectClick);
    console.log("perfect added");
    circle.attr("class", "perfectClick");
    setTimeout(function(){removePerfectClick();}, 500);
  }

  function removePerfectClick(){
    circle.off("click", perfectClick);
    circle.attr("class", "");
    console.log("perfect removed");
    if (hasClicked == false){
      console.log("miss");
      if (score > 100){
        score -= 100;
        $scoreBoard.html("Score : " + score);
        console.log(score);
      }
    }
  }

  function addGoodClick(){
    circle.on("click", goodClick);
    console.log("added good");
    circle.attr("class", "goodClick");
    setTimeout(function(){removeGoodClick();}, 700);
  }

  function removeGoodClick(){
    circle.off("click", goodClick);
    circle.attr("class", "");
    console.log("removed good");
    if (hasClicked == false){
      addPerfectClick(circle);
    }
  }

  function badClick(){
    var clicked = false;
      if (clicked == false){
        score += 50;
        $scoreBoard.html("Score : " + score);
        console.log(score);
        clicked = true;
      }
    hasClicked = true;
  }

  function goodClick(){
    var clicked = false;
      if (clicked == false){
        score+=100;
        $scoreBoard.html("Score : " + score);
        console.log(score);
        clicked = true;
      }
      hasClicked = true;
  }

function perfectClick(){
  var clicked = false;
    if (clicked == false){
      score+=200;
      $scoreBoard.html("Score : " + score);
      console.log(score);
      clicked = true;
    }
    hasClicked = true;
  }
}

//temp function
$audioButton.on("click", function(){
  console.log("button");
  audio.pause();
});

//------------------------------------------------------
//main function start
gameStart();
