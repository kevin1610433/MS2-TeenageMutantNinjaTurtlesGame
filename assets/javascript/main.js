// Code taken from W3Schools


var music = document.getElementById("myAudio");
function playAudio() {
  music.play(true);
}
var music = document.getElementById("myAudio");
function pauseAudio() {
  music.pause();
}

var music = document.getElementById("restart");
function restartAudio() {
  music.restart();
}

document.getElementById("myAudio", restart).addEventListener("onclick", myFunction);

function myFunction() {}

//Code taken from and accredited to https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(
    () => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      resetBoard();
    },

    1500
  );
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

function victoryPopUp(moves) {
  let popUp = document.querySelector(".popUp");
  popUp.style.visibility = "visible";
  popUp.querySelector(".popUpTime").innerHTML =
    "You won the game in " + minutes + " mins and " + seconds + " secs!";
  popUp.querySelector(".popUpMoves").innerHTML =
    "You made " + moves + " moves!";
}

cards.forEach((card) => card.addEventListener("click", flipCard));
