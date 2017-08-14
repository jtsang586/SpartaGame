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
var audio = new Audio("mario.mp3");

//temp variables
var $audioButton = $("#audio");
var counter = 0;
//---------------------------------------------------------------
//Functions
function gameStart(){
  // time taken for perfect is 1.7 sec, there is 600ms delay
  audio.play();
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 900);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 1400);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 2070);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 2490);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 3078);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 3666);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 4128);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 4548);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 5052);
 setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 6102);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 6270);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 6564);
 setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 7068);
 setTimeout(function(){addBeat($topLeft, $topLeftA);}, 7782);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 8538);
 setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 9378);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 9672);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 10008);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 10428);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 10680);
 setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 12108);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 12486);
 setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 13158);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 13452);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 13788);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 14082);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 15342);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 15594);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 16182);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 16476);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 16896);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 17736);
  setTimeout(function(){addBeat($middleLeft, $middleLeftA);}, 18366);
  setTimeout(function(){addBeat($mainCircle, $mainA);}, 19248);
  setTimeout(function(){addBeat($topLeft, $topLeftA);}, 20256);
  setTimeout(function(){addBeat($topMiddle, $topMiddleA);}, 20718);
  setTimeout(function(){addBeat($smallCircle, $smallCircleA);}, 21222);
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
