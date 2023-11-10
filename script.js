'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// initializer
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
// calling "init" function at the beginning of the game
init();

// RESET btn
btnNew.addEventListener('click', init);

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3.check for rolled 1:
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// HOLD btn
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if player's score is >== 100
    // finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

const amirMahdi = {
  firstName: 'Amir Mahdi',
  lastName: 'Fallahi',
  year: 2003,
  calcAge: function () {
    const self = this;
    const nameConcatinator = function () {
      const fullName = `${self.firstName} ${self.lastName}`;
      return fullName;
    };
    
    console.log(`birth year of ${nameConcatinator()} is ${2023 - this.year}`);
  },
};

amirMahdi.calcAge();
