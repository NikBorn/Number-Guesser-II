
var rightNumber;
var guessedNumber;
var min = 0;
var max = 100;
var guessButton = document.querySelector(".guess-btn");
var clearButton = document.querySelector(".clear-btn");
var resetButton = document.querySelector(".reset-btn");

function correctNumber() {
  var randomNum = Math.floor(Math.random() * (max - min)) + min;
  rightNumber = newNumber=parseInt(randomNum);
  return rightNumber;
}

correctNumber();
console.log('rightNumber', rightNumber);

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
    console.log(rightNumber, "right number");
    document.querySelector("#bottom-text").innerText = "Boom! Bitches!!";

    document.querySelector(".min-value").value = min;
    document.querySelector(".max-value").value = max;
  }
}

function increaseRange(){
  max = max + 10;
  min = min -10;
}

guessButton.addEventListener("click", function(event){
  guessedNumber = document.querySelector(".user-guess").value;
  event.preventDefault();
  compareNumbers();
});

clearButton.addEventListener("click", function(){
  document.querySelector(".user-guess").value = "";
  disableButtons();
});

resetButton.addEventListener("click", function (){
  correctNumber();
  document.querySelector(".user-guess").value = "";
  document.querySelector("#bottom-text").innerText = "";
  document.querySelector("#top-text").innerText = "";
  document.querySelector(".display-guess").innerText = "";
  disableButtons();
  console.log(correctNumber());
  min = 0;
  max = 100;
  document.querySelector(".min-value").value = min;
  document.querySelector(".max-value").value = max;
});

window.addEventListener("keyup", function(){
  var guessedNumber = document.querySelector(".user-guess").value;
  if (guessedNumber == "") {
    clearButton.disabled=true;
    resetButton.disabled=true;
  } else {
    clearButton.disabled=false;
    resetButton.disabled=false;
  }
});

document.querySelector(".min-value").addEventListener("blur", function(){
  var userMin = parseInt(document.querySelector(".min-value").value);
  min = userMin;
  correctNumber();
  console.log(rightNumber, "right number");
  console.log(max, "max", min, "min");
});

document.querySelector(".max-value").addEventListener("blur", function(){
  var userMax = parseInt(document.querySelector(".max-value").value);
  max = userMax;
  correctNumber();
  console.log(rightNumber, "right number");
  console.log(max, "max", min, "min");
});

function disableButtons() {
  clearButton.disabled=true;
  resetButton.disabled=true;
}
