// Global variables, questions are stored in questions.js
var startQuiz = document.querySelector("#startButton");
var highScore = document.querySelector("#highScoreBtn");
var timerClock = document.querySelector(".timer");
var gameCard = document.querySelector("#gameCard");
var questions = document.querySelector("#questions");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD= document.querySelector("#answerD");
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
var time;

getTotalScore();
//__________________
//Running Timer
function startTimer() {
    setInt = setInterval(function() {
        timeLengthLeft--;
        timerClock.textContent = " Time Left: " + timeLengthLeft;
        
        if (timeLengthLeft === 0 || qb >= quizQuestions.length) {
          clearInterval(setInt);
          startTimer();
        }
    }, 1000);

    
}
