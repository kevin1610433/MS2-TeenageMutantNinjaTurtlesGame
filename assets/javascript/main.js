



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

function myFunction () {}

function playAudio() {
  music.play();
}

function pauseAudio() {
  music.pause();
}

 // Create a div element to add to the page that will hold the congrats message later
// Hide the div element initially
function buildCongrats() {
    const page = document.getElementsByClassName(`container`);
    const popup = document.createElement(`div`);
    popup.className = `congratsPopup dimmed`;
    popup.innerHTML = ``;
    page[0].appendChild(popup);
}

// Display the congrats message with the move count, total time, star rating and play again 'button'
function displayCongrats() {
    const popup = document.getElementsByClassName(`congratsPopup`);
    popup[0].className = `congratsPopup`;
    popup[0].innerHTML =
        `<h2 class="congratsHeading" > Congratulations! </h2>
        <h3 class="congratsTagline" > You've won the game! </h3>
        <p class="congratsMove" > ${moveCounter} moves </p>
        <p class="congratsTime" > ${timer.innerHTML} total time </p>
        <p class="congratsStar" > ${starRating} stars </p>
        <p class="congratsPlay" > Play Again </p>`;
    const play = document.getElementsByClassName(`congratsPlay`);
    play[0].addEventListener(`click`,reset);
}

// Hide the congrats popup by adding the class 'dimmed'
// Erase the congrats text messages
function hideCongrats() {
    const popup = document.getElementsByClassName(`congratsPopup`);
    popup[0].className = `congratsPopup dimmed`;
    popup[0].innerHTML = ``;
}
 



