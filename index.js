const homeBtns = document.getElementById("add-points-btns-home");
const homeScoreEl = document.getElementById("home-score");
const addOneBtn = document.getElementById("home-add-one");
let countHome = 0;

function addOne() {
  countHome += 1;
  homeScoreEl.innerHTML = countHome;
}
