//Code taken from fellow Student https://github.com/karzuin/MS2/blob/master/assets/js/main.js

let firstguess = "";
let secondguess = "";
let count = 0; //stores the count
let previousTarget = null;
let delay = 1500;
let timerOn = true;
let matchCount = 0;
let moves = true;


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

cards.forEach((card) => card.addEventListener("click", flipCard));

var music = document.getElementById("myAudio");

//Music function
function myFunction() {}

function playAudio() {
  music.play();
}

function pauseAudio() {
  music.pause();
}

// code accredited to a fellow Student which has been modified https://github.com/karzuin/MS2/blob/master/index.html
let moves = 0;
const counter = document.querySelector(".moves");
function moveCounter() {
  moves++;
  counter.innerHTML = moves + " moves";
}

let time = 0;
let timer;
function startTimer() {
  timer = setInterval(function () {
    time++;
    minutes = ("0" + Math.floor(time / 60)).slice(-2);
    seconds = ("0" + (time % 60)).slice(-2);
    document.querySelector(".timer").innerHTML = minutes + ":" + seconds;
  }, 1000);
}

let clicked = flipCard;
if (timerOn === true) {
  startTimer();
  timerOn = true;
}

function reloadGame() {
  window.location.reload();
}

let startGame = function myFunction() {
  reloadGame();
};

if (count < 2) {
  count++;
  moveCounter();
  if (count === 1) {
    firstGuess = clicked.parentNode.dataset.name;
    clicked.parentNode.classList.add("selected");
  } else {
    secondGuess = clicked.parentNode.dataset.name;
    clicked.parentNode.classList.add("selected");
  }
}
