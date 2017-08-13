// Music game - Mouseclick hero
// Core Game: player clicks on specific sections of the page with the right timing
// to gain points.

// Global variables

// All circles
var $topLeft = $("#topLeft");
var $topMiddle = $("#topMiddle");
var $middleLeft = $("#middleLeft");
var $mainCircle = $("#mainCircle");
var $smallCircle = $("#smallCircle");
var $scoreBoard = $("#score");
// Player score
var score = null;
var clicked = false;
// Timer?
var audio = new Audio("mario.mp3");

//temp variables
var $audioButton = $("#audio");
//---------------------------------------------------------------
//Functions
function gameStart(){
  audio.play();
  setTimeout(function(){addBadClick($mainCircle);}, 5000);
  setTimeout(function(){addBadClick($topLeft);}, 6000);
  setTimeout(function(){addBadClick($topMiddle);}, 7000);
}

//Function to start and call each function at specific time

//Function put event listener for circle that should be pressed.
// function addBeat(circle){
//   var hasClicked = false;
//   setTimeout(function(){addBadClick(circle);}, 1000);
//   setTimeout(function(){removeBadClick(circle);}, 2000);
//   hasClicked = checkClick();
//   console.log(hasClicked);
//   if (hasClicked == false){
//     setTimeout(function(){addGoodClick(circle);}, 2001);
//     setTimeout(function(){removeGoodClick(circle);}, 2500);
//     hasClicked = checkClick();
//   }
//   if (hasClicked == false){
//     setTimeout(function(){addPerfectClick(circle);}, 2501);
//     setTimeout(function(){removePerfectClick(circle);}, 3000);
//     checkClick();
//   }
// }
$audioButton.on("click", function(){
  console.log("button");
  audio.pause();
});

function addBadClick(circle){
  var clicked = false;
  circle.on("click", badClick);
  console.log("added bad");
  circle.attr("class", "badClick");
  setTimeout(function(){removeBadClick(circle);}, 500);
}

function removeBadClick(circle){
  circle.off("click", badClick);
  circle.attr("class", "");
  console.log("removed bad");
  console.log(clicked);
  if (clicked == false){
    addGoodClick(circle);
  }
  clicked = false;
}

function addPerfectClick(circle){
  circle.on("click", perfectClick);
  console.log("perfect added");
  circle.attr("class", "perfectClick");
  setTimeout(function(){removePerfectClick(circle);}, 500);
}

function removePerfectClick(circle){
  circle.off("click", perfectClick);
  circle.attr("class", "");
  console.log("perfect removed");
  if (clicked == false){
    console.log("miss");
    if (score > 100){
      score -= 100;
      $scoreBoard.html("Score : " + score);
      console.log(score);
    }
  }
}

function addGoodClick(circle){
  circle.on("click", goodClick);
  console.log("added good");
  circle.attr("class", "goodClick");
  setTimeout(function(){removeGoodClick(circle);}, 500);
}

function removeGoodClick(circle){
  circle.off("click", goodClick);
  circle.attr("class", "");
  console.log("removed good");
  if (clicked == false){
    addPerfectClick(circle);
  }
  clicked = false;
}



//Function to change amount of point that can be scored.
function badClick(){
  // var clicked = true;
  // var thisCircle = circle;
  if (clicked == false){
    score += 50;
    $scoreBoard.html("Score : " + score);
    console.log(score);
    clicked = true;
    // removeBadClick(circle, clicked);
  }
}

function goodClick(){
  if (clicked == false){
    score+=100;
    $scoreBoard.html("Score : " + score);
    console.log(score);
    clicked = true;
  }
}

function perfectClick(){
  if (clicked == false){
    score+=200;
    $scoreBoard.html("Score : " + score);
    console.log(score);
    clicked = true;
  }
}

function checkClick(){
  if (clicked == true){
    clicked = false;
    return true;
  } else
  return false;
}
//Function to start animation


//Function to update score


//Function to seperate circles into different classes?


//Function to play music at start


//Function to go to different page after game

//------------------------------------------------------
//main function start
gameStart();
