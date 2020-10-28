$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

//code found on https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ and credit goes to them//
const cardsArray = [
  {
    name: 'ninja',
    img: 'assets/images/ninja1.jpg',
  },

   {
    name: 'ninja1',
    img: 'assets/images/ninja1.jpg',
  },

   {
    name: 'ninja1',
    img: 'assets/images/ninja1.jpg',
  },

   {
    name: 'ninja1',
    img: 'assets/images/ninja1.jpg',
  },

   {
    name: 'ninja1',
    img: 'assets/images/ninja1.jpg',
  },

   {
    name: 'ninja1',
    img: 'assets/images/ninja1.jpg',
  },

];

//Code taken from Karen Yuen fellow Student

let firstGuess = '';
let secondGuess = '';
let count = 0; 
let previousTarget = null;
let delay = 1200;
let timerOn = false;
let matchCount = 0;

