const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
let countHome = 0;
let countGuest = 0;

function addOneH() {
  countHome += 1;
  homeScoreEl.innerHTML = countHome;
}

function addTwoH() {
  countHome += 2;
  homeScoreEl.innerHTML = countHome;
}

function addThreeH() {
  countHome += 3;
  homeScoreEl.innerHTML = countHome;
}

function addOneG() {
  countGuest += 1;
  guestScoreEl.innerHTML = countGuest;
}

function addTwoG() {
  countGuest += 2;
  guestScoreEl.innerHTML = countGuest;
}

function addThreeG() {
  countGuest += 3;
  guestScoreEl.innerHTML = countGuest;
}

function reset() {
  countHome = 0;
  countGuest = 0;
  homeScoreEl.innerHTML = countHome;
  guestScoreEl.innerHTML = countGuest;
}
