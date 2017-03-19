
var rightNumber = correctNumber();
var guessButton = document.querySelector(".guess-btn");

function correctNumber() {
  var randomNum = Math.floor(Math.random() * 100 +1);
  var newNumber=parseInt(randomNum);
  return newNumber;
}
correctNumber();

guessButton.addEventListener("click", function(){
  event.preventDefault();
  if ()
  compareNumbers();
}
)

function compareNumbers() {
  var guessedNumber = document.querySelector(".user-guess").value;
  document.querySelector(".display-guess").innerText = guessedNumber
  document.querySelector("#top-text").innerText = "Your Last Guess Was";
  if (guessedNumber > rightNumber) {
    document.querySelector("#bottom-text").innerText = "That was Too High.";
  }
  if (guessedNumber < rightNumber) {
    document.querySelector("#bottom-text").innerText = "That was Too Low.";
  } else if (guessedNumber == rightNumber) {
    document.querySelector("#bottom-text").innerText = "Boom! Correct Guess!!";
  }
};



console.log(rightNumber);
// console.log(guessedNumber);
