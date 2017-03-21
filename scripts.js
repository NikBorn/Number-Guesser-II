
var rightNumber = correctNumber();
var guessButton = document.querySelector(".guess-btn");
var clearButton = document.querySelector(".clear-btn");
var resetButton = document.querySelector(".reset-btn")

function correctNumber() {
  var randomNum = Math.floor(Math.random() * 100 +1);
  var newNumber=parseInt(randomNum);
  return newNumber;
}
correctNumber();
console.log(rightNumber);

function compareNumbers() {
  var guessedNumber = document.querySelector(".user-guess").value;
  document.querySelector(".display-guess").innerText = guessedNumber
  document.querySelector("#top-text").innerText = "Your Last Guess Was";
  if (guessedNumber > 100 || guessedNumber < 1) {
    alert("Your Guess was Outside of Range");
  }
  if (guessedNumber > rightNumber) {
    document.querySelector("#bottom-text").innerText = "That was Too High.";
  }
  if (guessedNumber < rightNumber) {
    document.querySelector("#bottom-text").innerText = "That was Too Low.";
  } else if (guessedNumber == rightNumber) {
    correctNumber();
    rightNumber = correctNumber();
    console.log(rightNumber);
    document.querySelector("#bottom-text").innerText = "Boom! Correct Guess!!";
  }
};

guessButton.addEventListener("click", function(event){
  event.preventDefault();
  compareNumbers();
}
)

clearButton.addEventListener("click", function(){
  document.querySelector(".user-guess").value = "";
  disableButtons();
})

resetButton.addEventListener("click", function (){
  correctNumber();
  document.querySelector(".user-guess").value = "";
  document.querySelector("#bottom-text").innerText = "";
  document.querySelector("#top-text").innerText = "";
  document.querySelector(".display-guess").innerText = "";
  disableButtons();
  console.log(correctNumber());
})

window.addEventListener("keyup", function(){
  var guessedNumber = document.querySelector(".user-guess").value;
  if (guessedNumber != "") {
  clearButton.disabled=false;
  resetButton.disabled=false;
  }
})

function disableButtons() {
  clearButton.disabled=true;
  resetButton.disabled=true;
}
