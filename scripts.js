var rightNumber;
var guessedNumber;
var min = 0;
var max = 100;
var guessButton = document.querySelector(".guess-btn");
var clearButton = document.querySelector(".clear-btn");
var resetButton = document.querySelector(".reset-btn");
var playerOne = 0;
var playerTwo = 0;
var guessCount = 0;
var scoreOne = document.querySelector(".score-one");
var scoreTwo = document.querySelector(".score-two");
var player1 = document.querySelector(".board-1");
var player2 = document.querySelector(".board-2");
var minVal = document.querySelector(".min-value");
var maxVal = document.querySelector(".max-value");

correctNumber();
console.log('rightNumber', rightNumber);

function addHowMuch1() {
  if (guessCount <= 2) {
  scoreOne.innerText = parseInt(scoreOne.innerText) + 10;
  checkWinner();
  } if (guessCount < 5 && guessCount > 2) {
  scoreOne.innerText = parseInt(scoreOne.innerText) + 5;
  checkWinner();
  } else if (guessCount >= 5) {
  scoreOne.innerText = parseInt(scoreOne.innerText) + 2;
  checkWinner();
}}
function addHowMuch2() {
  if (guessCount <= 2) {
  scoreTwo.innerText = parseInt(scoreTwo.innerText) + 10;
  checkWinner();
  } if (guessCount < 5 && guessCount > 2) {
  scoreTwo.innerText = parseInt(scoreTwo.innerText) + 5;
  checkWinner();
  } else if (guessCount >= 5) {
  scoreTwo.innerText = parseInt(scoreTwo.innerText) + 2;
  checkWinner();
}}
function addScore() {
  var player2 = document.querySelector(".board-2");
  if (player2.classList.contains("active")) {
    addHowMuch2();
    toggleActive();
  } else {
    addHowMuch1();
    toggleActive();
  }
}
function checkWinner() {
  if (scoreOne.innerText >= 25) {
    alert("Player One Wins!!");
    resetGame();
  } if (scoreTwo.innerText >= 25) {
    alert("Player Two Wins!!");
    resetGame();
  }
}
function compareNumbers() {
  document.querySelector(".display-guess").innerText = guessedNumber;
  var topText = document.querySelector("#top-text");
  topText.innerText = "Your Last Guess Was";
  if (guessedNumber > max || guessedNumber < min) {
    alert("Your Guess was Outside of Range");
  }
  if (guessedNumber > rightNumber) {
    document.querySelector("#bottom-text").innerText = "That was Too High";
    guessCount = guessCount + 1;
  }
  if (guessedNumber < rightNumber) {
    document.querySelector("#bottom-text").innerText = "That was Too Low";
    guessCount = guessCount + 1;
  } else if (guessedNumber == rightNumber) {
    addScore();
    increaseRange();
    correctNumber();
    rightNumber = correctNumber();
    console.log(rightNumber, "right number");
    console.log("player-1", playerOne);
    guessCount = 0;
    document.querySelector(".user-guess").value = "";
    document.querySelector("#bottom-text").innerText = "Boom! Bitches!!";
    minVal.value = min;
    maxVal.value = max;
  }
}
function correctNumber() {
  var randomNum = Math.floor(Math.random() * (max - min)) + min;
  rightNumber = parseInt(randomNum);
  return rightNumber;
}
function disableButtons() {
  clearButton.disabled=true;
  resetButton.disabled=true;
}
function increaseRange(){
  max = max + 10;
  min = min -10;
}
function resetGame() {
  correctNumber();
  document.querySelector(".user-guess").value = "";
  document.querySelector("#bottom-text").innerText = "";
  document.querySelector("#top-text").innerText = "";
  document.querySelector(".display-guess").innerText = "";
  disableButtons();
  console.log(correctNumber());
  playerOne = 0;
  playerTwo = 0;
  guessCount = 0;
  min = 0;
  max = 100;
  minVal.value = min;
  maxVal.value = max;
  scoreOne.innerText = 0;
  scoreTwo.innerText = 0;
}
function toggleActive() {
  // player1.classList.toggle('active');
  if (player1.classList.contains("active")) {
    player1.classList.remove("active");
    player2.classList.add("active");
  } else if (player2.classList.contains("active")) {
    player2.classList.remove("active");
    player1.classList.add("active");
  }
}

window.addEventListener("keyup", function(){
  var guessedNumber = document.querySelector(".user-guess").value;
  if (guessedNumber === "") {
    clearButton.disabled=true;
    resetButton.disabled=true;
  } else {
    clearButton.disabled=false;
    resetButton.disabled=false;
  }
});
guessButton.addEventListener("click", function(event){
  guessedNumber = document.querySelector(".user-guess").value;
  event.preventDefault();
  console.log("Guess Count", guessCount);
  compareNumbers();
});
resetButton.addEventListener("click", function (){
  resetGame();
});
clearButton.addEventListener("click", function(){
  document.querySelector(".user-guess").value = "";
  disableButtons();
});
minVal.addEventListener("blur", function(){
  var userMin = parseInt(minVal.value);
  min = userMin;
  correctNumber();
  console.log("rightNumber", rightNumber);
  console.log("min", min, "max", max);
});
maxVal.addEventListener("blur", function(){
  var userMax = parseInt(maxVal.value);
  max = userMax;
  correctNumber();
  console.log("rightNumber", rightNumber);
  console.log("min", min, "max", max);
});
