let plusOneHome = document.querySelector('.plus-1-h');
let plusTwoHome = document.querySelector('.plus-2-h');
let plusThreeHome = document.querySelector('.plus-3-h');
let homeScore = document.querySelector('.home-score');
let plusOneGuest = document.querySelector('.plus-1-g');
let plusTwoGuest = document.querySelector('.plus-2-g');
let plusThreeGuest = document.querySelector('.plus-3-g');
let guestScore = document.querySelector('.guest-score');

let gScore = 0;
let hScore = 0;

function addHomeScore(num) {
  hScore += num;
  homeScore.textContent = hScore;
}

function addGuestScore(num) {
  gScore += num;
  guestScore.textContent = gScore;
}

plusOneHome.addEventListener('click', () => {
  addHomeScore(1);
});

plusTwoHome.addEventListener('click', () => {
  addHomeScore(2);
});

plusThreeHome.addEventListener('click', () => {
  addHomeScore(3);
});

plusOneGuest.addEventListener('click', () => {
  addGuestScore(1);
});

plusTwoGuest.addEventListener('click', () => {
  addGuestScore(2);
});

plusThreeGuest.addEventListener('click', () => {
  addGuestScore(3);
});
