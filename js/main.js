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
// Player score
var score = null;
var clicked = false;
// Timer?
//---------------------------------------------------------------
//Functions
function gameStart(){
  addBeat($mainCircle);
}

//Function to start and call each function at specific time

//Function put event listener for circle that should be pressed.
function addBeat(circle){
  var clicked = false;
  setTimeout(function(){addBadClick(circle);}, 1000);
  
}

function addBadClick(circle){
  var clicked = false;
  circle.on("click", badClick);
  console.log("added bad");
  setTimeout(function(){removeBadClick(circle, clicked);}, 1000);
}

function removeBadClick(circle, clicked){
  var ifClicked = clicked;
  circle.off("click", badClick);
  console.log("removed bad");
  if (ifClicked == false){
    addGoodClick(circle);
  }
}

function addPerfectClick(circle){
  circle.on("click", perfectClick);
  console.log("perfect added");
  setTimeout(function(){removePerfectClick(circle);}, 1000);
}

function removePerfectClick(circle){
  circle.off("click", perfectClick);
  console.log("perfect removed");
}

function addGoodClick(circle){
  circle.on("click", goodClick);
  console.log("added good");
  setTimeout(function(){removeGoodClick(circle);}, 1000);
}

function removeGoodClick(circle){
  circle.off("click", goodClick);
    console.log("removed good");
    addPerfectClick(circle);
}



//Function to change amount of point that can be scored.
function badClick(){
  // var clicked = true;
  // var thisCircle = circle;
  score += 50;
  console.log(score);
  // removeBadClick(circle, clicked);
}

function goodClick(){
  score+=100;
  console.log(score);
  removeGoodClick();
  clicked = true;
}

function perfectClick(){
  score+=200;
  console.log(score);
  removePerfectClick();
  clicked = true;
}
//Function to start animation


//Function to update score


//Function to seperate circles into different classes?


//Function to play music at start


//Function to go to different page after game

//------------------------------------------------------
//main function start
gameStart();
