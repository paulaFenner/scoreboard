// CODE FOR THE HOME TEAM
let scoreHome = document.getElementById('score-h');
let counthome = 0;

function home1() {
  scoreHome.textContent = counthome += 1;
}

function home2() {
  scoreHome.textContent = counthome += 2;
}

function home3() {
  scoreHome.textContent = counthome += 3;
}

// CODE FOR THE GUEST TEAM
let scoreGuest = document.getElementById('score-g');
let countguest = 0;

function guest1() {
  scoreGuest.textContent = countguest += 1;
}

function guest2() {
  scoreGuest.textContent = countguest += 2;
}

function guest3() {
  scoreGuest.textContent = countguest += 3;
}

// CODE FOR RESET SCORE
function newGame() {
  scoreHome.textContent = 0;
  scoreGuest.textContent = 0;
}
