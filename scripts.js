
var clearButton = document.querySelector(".clear-btn");
var guessButton = document.querySelector(".guess-btn");
var guessedNumber;
var max = 100;
var min = 0;
var maxVal = document.querySelector(".max-value");
var minVal = document.querySelector(".min-value");
var resetButton = document.querySelector(".reset-btn");
var rightNumber;


correctNumber();
console.log("min", min, "max", max, "rightNumber", rightNumber);

function correctNumber() {
  var randomNum = Math.floor(Math.random() * (max - min)) + min;
  rightNumber = newNumber=parseInt(randomNum);
  return rightNumber;
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
  }
  if (guessedNumber < rightNumber) {
    document.querySelector("#bottom-text").innerText = "That was Too Low";
  } else if (guessedNumber == rightNumber) {
    increaseRange();
    correctNumber();
    rightNumber = correctNumber();
    console.log("right number", rightNumber);
    document.querySelector("#bottom-text").innerText = "Boom-Shocka-Locka!";
    minVal.value = min;
    maxVal.value = max;
  }
}
function increaseRange(){
  max = max + 10;
  min = min -10;
}
function disableButtons() {
  clearButton.disabled=true;
  resetButton.disabled=true;
}
function resetGame() {
  correctNumber();
  document.querySelector(".user-guess").value = "";
  document.querySelector("#bottom-text").innerText = "";
  document.querySelector("#top-text").innerText = "";
  document.querySelector(".display-guess").innerText = "";
  disableButtons();
  min = 0;
  max = 100;
  minVal.value = min;
  maxVal.value = max;
  console.log("min", min, "max", max, "rightNumber", rightNumber);
}

clearButton.addEventListener("click", function(){
  document.querySelector(".user-guess").value = "";
  disableButtons();
});
guessButton.addEventListener("click", function(event){
  guessedNumber = document.querySelector(".user-guess").value;
  event.preventDefault();
  compareNumbers();
});
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
maxVal.addEventListener("blur", function(){
  var userMax = parseInt(maxVal.value);
  max = userMax;
  correctNumber();
  console.log("min", min, "max", max, "rightNumber", rightNumber);
});
minVal.addEventListener("blur", function(){
  var userMin = parseInt(minVal.value);
  min = userMin;
  correctNumber();
  console.log("min", min, "max", max, "rightNumber", rightNumber);
});
resetButton.addEventListener("click", function (){
  resetGame();
});
