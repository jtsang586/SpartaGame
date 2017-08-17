
function displayScore(){
  var players = localStorage.getItem("players");
  var lastSong = localStorage.getItem("lastSong");
  var playerFinished = localStorage.getItem("playerFinished");

  if (playerFinished == "player2" && players == 2){
    var player1Score = localStorage.getItem("player1Score");
    var player2Score = localStorage.getItem("player2Score");

    $("#front").css("display", "none");
    $("#end").css("display", "block");

    $("#player1Display").html("Player 1 score: " + player1Score);
    $("#player2Display").html("Player 2 score: " + player2Score);
    console.log(player1Score);
    console.log(player2Score);
      
      if (player1Score > player2Score){
        $("#result").html("Player 1 is the Winner!!!")
      } else if (player2Score > player1Score){
          $("#result").html("Player 2 is the Winner!!!")
        } else {
            $("#result").html("It's a draw....")
          }

    localStorage.removeItem("players");
    localStorage.removeItem("playerFinished");
    localStorage.removeItem("player1Score");
    localStorage.removeItem("player2Score");
  } else if (players == 2){
      normalScores();
      if (lastSong == "mario"){
        $(".7NButton").css("display", "none");
      } else if (lastSong == "7Nation"){
        $(".marioButton").css("display", "none");
      }
    }
  
  else {
      normalScores();
      localStorage.removeItem("player1Score");
    }

  function normalScores(){
    if (lastSong == "mario"){
      $("#highScore").html("HighScore is: " + localStorage.getItem("mariohighscore"));
      $("#lastScore").html("Your score is: " + localStorage.getItem("mariolastScore"));
    } else if (lastSong == "7Nation"){
        $("#highScore").html("HighScore is: " + localStorage.getItem("7Nhighscore"));
        $("#lastScore").html("Your score is: " + localStorage.getItem("7NlastScore"));
      }
  }
}

function onePlayer(){
  $(".onePlayer").on("click", function(){
    localStorage.setItem("players", null);
  })
}

function twoPlayer(){
  $(".twoPlayer").on("click", function(){
    localStorage.setItem("players", 2);
  })
}


displayScore();
onePlayer();
twoPlayer();