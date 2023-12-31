let plusOneHome = document.querySelector('.plus-1-h');
let plusTwoHome = document.querySelector('.plus-2-h');
let plusThreeHome = document.querySelector('.plus-3-h');
let homeScore = document.querySelector('.home-score');
let plusOneGuest = document.querySelector('.plus-1-g');
let plusTwoGuest = document.querySelector('.plus-2-g');
let plusThreeGuest = document.querySelector('.plus-3-g');
let guestScore = document.querySelector('.guest-score');
let resetBtn = document.querySelector('.reset');
let restartBtn = document.querySelector('.restart');

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

function dimmer() {
  if (hScore > gScore) {
    guestScore.classList.add('dim');
    homeScore.classList.remove('dim');
  } else if (gScore > hScore) {
    guestScore.classList.remove('dim');
    homeScore.classList.add('dim');
  } else {
    guestScore.classList.remove('dim');
    homeScore.classList.remove('dim');
  }
}

plusOneHome.addEventListener('click', () => {
  addHomeScore(1);
  dimmer();
});

plusTwoHome.addEventListener('click', () => {
  addHomeScore(2);
  dimmer();
});

plusThreeHome.addEventListener('click', () => {
  addHomeScore(3);
  dimmer();
});

plusOneGuest.addEventListener('click', () => {
  addGuestScore(1);
  dimmer();
});

plusTwoGuest.addEventListener('click', () => {
  addGuestScore(2);
  dimmer();
});

plusThreeGuest.addEventListener('click', () => {
  addGuestScore(3);
  dimmer();
});

function reset() {
  hScore = 0;
  homeScore.textContent = 0;
  gScore = 0;
  guestScore.textContent = 0;
  dimmer();
}

resetBtn.addEventListener('click', () => {
  let ask = prompt(
    'Are you sure to reset the score? [Yes/No]',
    'Yes'
  ).toLowerCase();
  if (ask === 'yes' || ask === 'y') {
    reset();
  } else if (ask === 'no' || ask === 'n') {
    return;
  } else {
    alert('Please reply Yes or No!');
    return;
  }
});

restartBtn.addEventListener('click', () => {
  location.reload();
});
