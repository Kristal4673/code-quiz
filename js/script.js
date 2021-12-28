// Global variables, questions are stored in questions.js
var startQuiz = document.querySelector("#startButton");
var highScore = document.querySelector("#highScoreBtn");
var timerClock = document.querySelector(".timer");
var gameCard = document.querySelector("#gameCard");
var questions = document.querySelector("#questions");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var answer = document.querySelector("#answer");
var feedback = document.querySelector("#feedback");
var multipleAnswers = document.querySelector("#multipleAnswers");
var inputForm = document.querySelector("#inputForm");
var scoreCard = document.querySelector("#scoreCard");
var scoreButton = document.querySelector("#scoreButton");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submitButton");
var backButton = document.querySelector("#backButton");
var clearButton = document.querySelector("#clearButton");
var begin = document.querySelector(".begin");

var timeLengthLeft = quizQuestions.length * 15;
var qb = 0;
var sb = 0;
var score = 0;
var scoreList = [];
var timeInt;

//getTotalScore();
//__________________
//Running Timer
function timer() {
  timeInt = setInterval(function () {
    timeLengthLeft--;
    timerClock.textContent = " Time Left: " + timeLengthLeft;

    if (timeLengthLeft === 0 || qb >= quizQuestions.length) {
      clearInterval(timeInt);
      gameOver();
    }
  }, 1000);
}
// break- function to run through questions
function showQuestions() {
  if (qb < quizQuestions.length) {
    questions.textContent = quizQuestions[qb].questions;
    answerA.textContent = quizQuestions[qb].choices[0];
    answerB.textContent = quizQuestions[qb].choices[1];
    answerC.textContent = quizQuestions[qb].choices[2];
    answerD.textContent = quizQuestions[qb].choices[3];
  } else {
    gameOver();
  }
}
//checking to make sure answer is right or wrong
function validateAnswer(event) {
  if (qb >= quizQuestions.length) {
    gameOver();
    clearInterval(timeInt);
  } else {
    if (event === quizQuestions[qb].answer) {
      feedback.textContent = "Correct Great Job!";
    } else {
      timeLengthLeft -= 10;
      feedback.textContent = "Sorry! That is wrong!";
    }
    score = timeLengthLeft;
    qb++;
    showQuestions();
  }
}
function gameOver() {
  scoreButton.innerHTML = score;
  scoreButton.style.display = "inline-block";
  gameCard.classList.add("hide");
  inputForm.classList.remove("hide");
  timerClock.classList.add("hide");
  highScore.classList.add("hide");
  leaderScores();
}
function leaderScores() {
  removeFromLeaderScores();
  addToLeaderScores();
  scoreList.sort((a, b) => {
    return b.score - a.score;
  });

  //renders the top 7 highest scores
  topSeven = scoreList.slice(0, 7);

  for (var i = 0; i < topSeven.length; i++) {
    var gamer = topSeven[i].gamer; 
    var score = topSeven[i].score; 
    
    var newDiv = document.createElement("div"); 
    leaderScoresDiv.appendChild(newDiv); 

    var newName = document.createElement("label")
    newName.textContent = gamer + " - " + score; 
    newDiv.appendChild(newName); 
  }
}
//adds top games to Leaderboard
function addToLeaderBoard() {
  highScoreDiv = document.createElement("div"); 
  highScoreDiv.setAttribute("id", "gamerInitials"); 
  document.getElementById("highScore")
}

function removeFromLeaderScores() {
  var removeLowerScores = document.getElementById("gamerInitials");
  if (removeLowerScores != null) {
    removeLowerScores.remove();
  } else {

  }
}
// adding begin Quiz event handlers

startQuiz.addEventListener("click", function (event) {
  timer();
  showQuestions();
  begin.classList.add("hide");
  gameCard.classList.remove("hide");
  highScore.style.display = "none";
  scoreCard.classList.add("hide");
});
gameCard.addEventListener("click", function (event) {
  var event = event.target;
  validateAnswer(event.textContent.trim());
});
