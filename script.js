const displayHomeEl = document.getElementById('display-home');
const displayGuestEl = document.getElementById('display-guest');
const resetBtnEl = document.getElementById('reset-btn');

const home1Btn = document.getElementById('home-1-btn');
const home2Btn = document.getElementById('home-2-btn');
const home3Btn = document.getElementById('home-3-btn');

const guest1Btn = document.getElementById('guest-1-btn');
const guest2Btn = document.getElementById('guest-2-btn');
const guest3Btn = document.getElementById('guest-3-btn');

let homeTeam = 0;
let guestTeam = 0;

// Comments on the README
home1Btn.addEventListener('click', () => addPointsToHomeTeam(1));
home2Btn.addEventListener('click', () => addPointsToHomeTeam(2));
home3Btn.addEventListener('click', () => addPointsToHomeTeam(3));

guest1Btn.addEventListener('click', () => addPointsToGuestTeam(1));
guest2Btn.addEventListener('click', () => addPointsToGuestTeam(2));
guest3Btn.addEventListener('click', () => addPointsToGuestTeam(3));

resetBtnEl.addEventListener('click', clearAll);

function addPointsToHomeTeam(points) {
  displayHomeEl.innerText = homeTeam += points;
}

function addPointsToGuestTeam(points) {
  displayGuestEl.innerText = guestTeam += points;
}

function clearAll() {
  homeTeam = 0;
  guestTeam = 0;
  displayHomeEl.innerText = 0;
  displayGuestEl.innerText = 0;
}
