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
var audio = new Audio("7nation.mp3");

//temp variables
var $audioButton = $("#audio");
var counter = 0;
//---------------------------------------------------------------
//Functions
function gameStart(){
  // time taken for perfect is 1.7 sec, there is 600ms delay
  audio.play();
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 1312);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 1900);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 2388);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 2766);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 3060);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 3690);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 4698);
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
  setTimeout(function(){window.location.href = "start.html";}, 23800);
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
    setTimeout(function(){removeBadClick(circle);}, 500);
    }
  }

  function removeBadClick(){
    circle.off("click", badClick);
    circle.attr("class", "");
    if (hasClicked == false){
      addGoodClick(circle);
    }
  }

  function addPerfectClick(){
    circle.on("click", perfectClick);
    circle.attr("class", "perfectClick");
    // animation.css("display", "none");
    // animation.hide();
    setTimeout(function(){removePerfectClick();}, 500);
  }

  function removePerfectClick(){
    circle.off("click", perfectClick);
    circle.attr("class", "");
    if (hasClicked == false){
      if (score > 100){
        score -= 100;
        $scoreBoard.html("Score : " + score);
        console.log(score);
        $("h2").html("MISS!!!");
      }
    }animation.attr("class", "");
    counter++;
    console.log(counter);
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
    hasClicked = true;
  }

  function goodClick(){
      if (hasClicked == false){
        score+=100;
        $scoreBoard.html("Score : " + score);
        $("h2").html("Good!!!");
      }
      hasClicked = true;
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

//temp function
$audioButton.on("click", function(){
  audio.pause();
});

//------------------------------------------------------
//main function start
gameStart();
