let displayHomeEl = document.getElementById('display-home');
let displayGuestEl = document.getElementById('display-guest');
let resetBtnEl = document.getElementById('reset-btn');

let home1Btn = document.getElementById('home-1-btn');
let home2Btn = document.getElementById('home-2-btn');
let home3Btn = document.getElementById('home-3-btn');

let guest1Btn = document.getElementById('guest-1-btn');
let guest2Btn = document.getElementById('guest-2-btn');
let guest3Btn = document.getElementById('guest-3-btn');

let homeTeam = 0;
let guestTeam = 0;

home1Btn.addEventListener('click', add1Home);
home2Btn.addEventListener('click', add2Home);
home3Btn.addEventListener('click', add3Home);

guest1Btn.addEventListener('click', add1Guest);
guest2Btn.addEventListener('click', add2Guest);
guest3Btn.addEventListener('click', add3Guest);

resetBtnEl.addEventListener('click', clearAll);

function add1Home() {
  let homeScore = (homeTeam += 1);
  displayHomeEl.innerText = homeScore;
}

function add2Home() {
  let homeScore = (homeTeam += 2);
  displayHomeEl.innerText = homeScore;
}

function add3Home() {
  let homeScore = (homeTeam += 3);
  displayHomeEl.innerText = homeScore;
}

function add1Guest() {
  let guestScore = (guestTeam += 1);
  displayGuestEl.innerText = guestScore;
}

function add2Guest() {
  let guestScore = (guestTeam += 2);
  displayGuestEl.innerText = guestScore;
}

function add3Guest() {
  let guestScore = (guestTeam += 3);
  displayGuestEl.innerText = guestScore;
}

function clearAll() {
  homeTeam = 0;
  guestTeam = 0;
  displayHomeEl.innerText = '';
  displayGuestEl.innerText = '';
}
