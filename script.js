let secretnumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log("hello");
const checkBtn = document.querySelector(".check");
const againbtn = document.querySelector(".again");

const messageElem = document.querySelector(".message");
const guessElem = document.querySelector(".guess");
const numberElem = document.querySelector(".number");
const highscoreElem = document.querySelector(".highscore");
const scoreElem = document.querySelector(".score");
const bodyElem = document.querySelector("body");

checkBtn.addEventListener("click", checkState);
againbtn.addEventListener("click", againState);

function checkState() {
  const guess = Number(guessElem.value);
  if (!guess) {
    messageElem.textContent = "🤣🤣No number!!!!!!";
  } else if (guess === secretnumber) {
    console.log("check");
    messageElem.textContent = "👍👍Correct number!!!!!!!!";

    numberElem.textContent = secretnumber;
    bodyElem.style.backgroundColor = "#00ffff";
    numberElem.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      highscoreElem.textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 0) {
      if (guess > secretnumber) {
        messageElem.textContent = "↗↗↗↗Too high!!!!";
      } else {
        messageElem.textContent = "↙↙↙↙Too low!!!!!";
      }
      score = score - 1;
      scoreElem.textContent = score;
    } else {
      messageElem.textContent = " YOU LOST THE GAME.";
      scoreElem.textContent = 0;
    }
  }
}

function againState() {
  console.log("againstate clicked!");
  secretnumber = Math.floor(Math.random() * 20 + 1);
  messageElem.textContent = "start guessing!!!";
  scoreElem.textContent = score;
  numberElem.textContent = "?";
  guessElem.value = "";
  bodyElem.style.backgroundColor = "#222";
}
