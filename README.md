# SpartaGame Project 1 - Mouse-Click Hero

## Game definition
The game is a music game developed using HTML, JS and CSS in one week. Aim of the game is to click on highlighted areas of the screen based on the beat of a specific song. To start with the game will involve only mouse clicks and gradually become more complex.

## User stories
1) The user picks the song they'd like to play. 

3) As soon as the user clicks play the song starts playing and the areas where the user needs to click will start to appear. 

2) The user will need to click on each area that's animating

3) The user should try to match the timings for the best score. 

1) The game ends when the song finishes and the player's score is shown at the end of the page. 

5) Animations should start to animate in specific sections to the song

### Definition of done features - Minimal viable product
1. Music plays when game is started.
2. Mouseclick for the correct beats is registered and score is updated.


### Basic features for first sprint
1. Get mouseclick working at the correct sections.
2. Get music to play.
3. Mouseclick to register for specific time.
4. Score updates with mouse-click.
5. Add animations to when the player has to click - start basic eg. colour change in circle.

### Features for second sprint
1. Add improved animations to better indicate when the player has to click.
2. Get one level working with the song.
3. Add more songs/ changing difficulty.

### Features for final sprint/stretch goals
1. Highscore is stored as local variable.
2. Two player option with score comparison.
3. Improve animations
4. Bug fixes

### Original [Wireframe](https://wireframe.cc/Xyuhcr) for main levels

## The Code

### HTML
The game is seperated into several different HTML pages. All the HTML pages are styled and positioned using bootstrap containers and classes. Index.html is the homepage where the instructions are found and the user can pick which song they want to play. 

The main levels contain the circles and it's animating counterpart. As well as headers and text for scores and button click text. Every circle element is seperated using id tags. 

The level end page is styled using the same css as the homepage containing two different div containers which is hidden if the user picked a two player mode. 

### CSS
There are two CSS files used in the game. Start.css is used in the front and end page of the game containing basic styling for the backgrounds and font. Style.css contains the styling used in the main level. Every circle is positioned along with its animating counterpart using position relative. Classes and animations are defined to be added dynamically in javascript. 

### Javascript
There's three javascript files used in the game. One for every level in the game and one for the end page once the level is finished. The javascript for the levels are identical apart from the gameStart() function where the beats added are different for every song. 

```javascript
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
```
SetTimeOut is used to time every beat to match the beats in the song. The final function is ```setTimeout(function(){window.location.href = "end.html";}, 24000);``` Which takes the user to the end screen once the song is finished.

The addBeat() function adds and removes listeners and starts the animation for every beat in the song. The setScore() function adds variables to the local storage to be displayed at the end screen. Which variables are stored/ created depends on if the player had picked two player game. 

The end.js script changes the display for the end screen based on if the player picked two player mode vs single and if the first or second player have finished playing. Usually the high score is displayed with the player's last score. In two player mode the end screen will display which player has won against each other's score. 

## Screenshots
Homepage: 
![homepage]

Main level:
![main]

End screen:
![end]


[homepage]:images/homepage.png
[main]:images/main.png
[end]:images/end.png