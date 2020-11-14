// Code taken from W3Schools

var music = document.getElementById("myAudio");
function playAudio() {
music.play();

}
var music = document.getElementById("myAudio");
function pauseAudio() {
music.pause();
}

var music = document.getElementById("myAudio");
function restartAudio() {
music.restart();
}


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
 
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementsById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "GAME OVER";
  }
}, 1000);

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
