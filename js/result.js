const USER = getFromLocalSrorage("user");
const SCORE = getFromLocalSrorage("score");
console.log(SCORE, "score");

route("Explanation");
const scoreField = document.querySelector(".score");
const nameField = document.querySelector(".userName");
const adviceField = document.querySelector(".advice");

//give content to html elemnt to show it in the result screen
scoreField.textContent = SCORE + "/10";
nameField.textContent = USER;
giveAdvice(SCORE);

//add actions to buttons
const againButton = document.getElementById("again");
const leaderButton = document.getElementById("leader");
const homeButton = document.querySelector(".btn-join");

againButton.addEventListener("click", () => {
  document.location.href = "./index.html";
});
homeButton.addEventListener("click", () => {
  document.location.href = "./index.html";
});
leaderButton.addEventListener("click", () => {
  route("leader-board-container");
});

//function wehen i give it (key) it will take it from loal storage and return it
function getFromLocalSrorage(key) {
  return window.localStorage.getItem(key);
}

//take (section) and make it appere and make the rest none visuble
function route(sec) {
  sections = document.querySelectorAll("section");
  sections.forEach((ele) => {
    if (ele.id == sec) {
      ele.style.display = "";
    } else {
      ele.style.display = "none";
    }
  });
}
//(s) the score of player
function giveAdvice(s) {
  console.log(s);
  mark = parseInt(s);
  if (mark >= 5) {
    adviceField.textContent =
      "Exelant work u are in the leaderBoard We are broud of your knoledge, thx for Your try";
  } else {
    adviceField.textContent =
      "you have to earn more and more knoledege, nice try";
  }
}
